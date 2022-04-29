<script lang="ts">
  import { page } from '$app/stores'
  import { warningToast } from './../../toast.js'
  import { SvelteToast } from '@zerodevx/svelte-toast'
  import { loginPass } from '../auth/graphql'
  import { onMount } from 'svelte'
  import { authenticate } from '$lib/auth'
  import { session } from '$app/stores'
  import { fade, fly } from 'svelte/transition'
  import Payment from '../checkout/Payment.svelte'
  import { formatRupiah } from '../product/BriApi'
  import Input from '$lib/components/ui/Input.svelte'
  import { createUser } from '../auth/graphql'
  import { createTransaction } from './graphql'
  import classNames from 'vest/classnames'
  import check_out_not_register from './checkout-not-register-vest'
  import login_check_out from './login'
  import {
    showCart,
    cart,
    total,
    isRecurring,
    total_item,
    check_out_response,
    check_out_store,
    payment_methode,
    gotoCheckout,
    agen,
    e_banking,
    m_banking,
    retail_select,
    dompet_select,
    qris_select
    // agen,
    // e_banking,
    // m_banking,
    // retail_select,
    // dompet_select
  } from '$lib/components/cart/stores'
  import { tweened } from 'svelte/motion'
  import { cubicInOut } from 'svelte/easing'
  import { goto } from '$app/navigation'

  const changeUrl = () => {
    $showCart = false
    goto('/auth/masuk')
    $gotoCheckout = true
  }
  let registered = false
  function reg() {
    registered = true
  }
  function log() {
    registered = false
  }

  const handphone_max = 13,
    nik_max = 16

  const display_total = tweened($total, {
    easing: cubicInOut
  })
  $: display_total.set($total)
  // vest
  export let values = {
    // cart: $cart,
    // total: $display_total
  }

  let error
  export let errors
  export let warnings
  let formState = { ...values }
  if (registered) {
  }
  let result = check_out_not_register.get()
  $isRecurring = $cart.filter(item => item.type.indexOf('Bulanan') !== -1).length
  $: formState.payment_methode = $payment_methode
  // let rr
  // $requrring = $isRecurring.length

  const check = ({ target: { name } }) => runValidate(name)

  const runValidate = name => {
    result = check_out_not_register(formState, name)

    // extract errors and warnings
    errors = result.getErrors()
    warnings = result.getWarnings()
  }
  const onSubmit = () => {
    // runValidate()
    if (result.hasErrors()) return
    createInq()
  }
  // Vest css class helper utility
  $: cn = classNames(result, {
    warning: 'warning',
    invalid: 'invalid',
    valid: 'valid'
  })

  $: disabled = result.hasErrors()

  const url = import.meta.env.VITE_GRAPHQL_URL

  async function createInq() {
    // start createInq
    let products = []
    for (const item of $cart) {
      const product = {
        _id: item._id,
        quantity: item.quantity
      }
      products.push(product)
    }

    // if (!$isRecurring) {
    if (!$session.authenticated) {
      const handphone = formState.handphone,
        full_name = formState.full_name
      // alert('not logged')
      try {
        // create Transaction

        const options_trans = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(
            createTransaction(handphone, full_name, products, $payment_methode)
          )
        }

        const response_transaction = await fetch(url, options_trans)
        const res = await response_transaction.json()
        // if (res.errors[0].message) {
        //   warningToast(res.errors[0].message)
        // }
        const dt = res.data.createTransaction
        // console.log(res)

        // if (res.errors[0].message) {
        //   warningToast(res.errors[0].message)
        // }

        $check_out_store = false
        $cart = []
        $payment_methode = ''
        $check_out_response = dt
      } catch (err) {}
    } else {
      const handphone = $session.handphone,
        full_name = $session.full_name
      try {
        const options_trans = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(
            createTransaction(handphone, full_name, products, $payment_methode)
          )
        }
        const response = await fetch(url, options_trans),
          res = await response.json(),
          dt = res.data.createTransaction
        $check_out_response = dt
        $check_out_store = false
        $cart = []
        $payment_methode = ''
        // return (location.href = `/user/${session.user}`)
      } catch (err) {}
    }
  }
  // end not Recurring
  // else {
  // start Recurring
  // end Recurring
  // }
  // }
</script>

<div class="flex flex-row mx-2.5">
  <div class="text-xs">
    <SvelteToast options={{ duration: 8000, intro: { y: -64 } }} />
  </div>
  <div
    class="
    w-full mx-auto"
  >
    {#if $check_out_store}
      <form on:submit|preventDefault={onSubmit} id="check_out" class="w-full ">
        <div name="_id" class="hidden" />
        <div class="flow-root">
          {#if !$session.authenticated}
            {#if !$isRecurring}
              <!-- not requrring  -->
              <Input
                pattern="[0-9]*"
                inputmode="numeric"
                name="handphone"
                label="No. Handphone"
                class={cn('handphone')}
                onInput={check}
                placeholder="No handphone"
                {errors}
                bind:value={formState.handphone}
                maxlength={handphone_max}
              />
              <Input
                name="full_name"
                label="Nama"
                class={cn('full_name')}
                placeholder="Nama"
                onInput={check}
                {errors}
                bind:value={formState.full_name}
              />
            {/if}
            <!-- !$session.authenticated  -->
          {/if}
          <!-- {JSON.stringify(formState)} -->
          {#if $isRecurring && !$session.authenticated}
            <div class="text-red-500 italic">
              Untuk paket Langganan harus Daftar/Login.
            </div>
          {:else}<h3 class="font-bold leading-none  text-gray-900 mt-3">
              Metode Pembayaran
            </h3>
            <div name="payment_methode">
              <Payment />
            </div>
          {/if}

          <!-- end div class="flow-root"  -->
        </div>
        <!-- footer -->
        {#if $cart.length > 0}
          <footer
            class=" pb-10 mt-8 border-t-2 border-black z-30  bottom-0 w-[500px] max-w-full bg-white py-3 flex justify-between items-center"
          >
            <div>
              <span class="block text-sm">Total:</span>
              <span class="pl-4 text-xl font-medium tracking-wider"
                >Rp.{formatRupiah($display_total)}</span
              >
            </div>
            <div>
              {#if $isRecurring && !$session.authenticated}
                <button type="button" class="btn-blue" on:click|self={changeUrl}
                  >Login</button
                >
              {:else}<button type="submit" class="btn-blue">Bayar</button>
              {/if}

              <!-- import { goto } from '$app/navigation' -->

              <!-- <button
            on:click={() => {
              if ($page.url.pathname === '/cart') {
                goto($session ? '/checkout' : '/login')
              } else {
                $showCart = false
                goto($session ? '/checkout' : '/login')
              }
            }}
            class="bg-neutral-900 text-white py-2 px-4 rounded-full sm:text-lg"
          >
            {$session ? '' : 'Login to '}Bayar
          </button> -->
            </div>
          </footer>
        {/if}
        <!-- end footer  -->
        <!-- end form  -->
      </form>
      <!-- end #if $check_out_store -->
    {/if}
    <!-- end div 2  -->
  </div>
  <!-- end div1  -->
</div>
