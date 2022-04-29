<script lang="ts">
  import { warningToast } from './../../toast.js'
  import { SvelteToast, toast } from '@zerodevx/svelte-toast'
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
  import login_check_out from './login'
  import {
    cart,
    total,
    isRecurring,
    total_item,
    check_out_response,
    check_out_store,
    payment_methode
    // agen,
    // e_banking,
    // m_banking,
    // retail_select,
    // dompet_select
  } from '$lib/components/cart/stores'
  import { tweened } from 'svelte/motion'
  import { cubicInOut } from 'svelte/easing'

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
    cart: $cart,
    total: $display_total
  }

  let error
  let errors = {}
  let warnings = {}
  let formState = { ...values }
  if (registered) {
  }
  let result = login_check_out.get()
  $isRecurring = $cart.filter(item => item.type.indexOf('Bulanan') !== -1).length
  // let rr
  // $requrring = $isRecurring.length

  const check = ({ target: { name } }) => runValidate(name)

  const runValidate = name => {
    result = login_check_out(formState, name)

    // extract errors and warnings
    errors = result.getErrors()
    warnings = result.getWarnings()
  }
  const onSubmit = () => {
    createInq()

    if (result.hasErrors()) return
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
    let handphone = formState.handphone
    let full_name = formState.full_name
    let paymentMethod = $payment_methode

    if (!$isRecurring) {
      // not Recurring
      try {
        // create Transaction

        const options_trans = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(
            createTransaction(handphone, full_name, products, paymentMethod)
          )
        }

        const response_transaction = await fetch(url, options_trans)
        const res = await response_transaction.json()
        if (res.errors[0].message) {
          warningToast(res.errors[0].message)
        }
        const dt = res.data.createTransaction
        // console.log(res)

        // if (res.errors[0].message) {
        //   warningToast(res.errors[0].message)
        // }

        $check_out_store = false
        $cart = []
        $check_out_response = dt
      } catch (err) {
        // console.log(err)
      }
      // end not Recurring
    } else {
      // is Recurring
      if ($session.authenticated) {
        // start logged
        const handphone = $session.handphone
        const full_name = $session.full_name
        const paymentMethod = $payment_methode

        const options_trans = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
              createTransaction(handphone, full_name, products, paymentMethod)
            )
          },
          response = await fetch(url, options_trans),
          res = await response.json(),
          dt = res.data.createTransaction

        $cart = []
        $check_out_response = dt
        $check_out_store = true
        return (location.href = `/user/${session.user}`)
        // end logged
      } else {
        // start not logged
        const handphone = formState.handphone
        const full_name = formState.full_name
        const password = formState.password
        const paymentMethod = $payment_methode
        // try to login
        try {
          const password_submit = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginPass(handphone, password))
          }
          const response = await fetch(url, password_submit),
            resp = await response.json()
          if (resp.errors[0].message) {
            warningToast(resp.errors[0].message)
          }
          const datane = await {
            token: resp.data.loginPass.token,
            user: resp.data.loginPass.user.id,
            handphone: resp.data.loginPass.user.handphone
          }
          // console.log(datane)
          await authenticate(datane)
          try {
            // create Transaction
            const options_trans = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(
                  createTransaction(handphone, full_name, products, paymentMethod)
                )
              },
              response_transaction_login_cart = await fetch(url, options_trans),
              res = await response_transaction_login_cart.json(),
              dt = res.data.createTransaction
            console.log(res.errors[0].message)
            // if (res.errors[0].message) {
            //   warningToast(res.errors[0].message)
            // }
            $cart = []
            $check_out_response = dt
            $check_out_store = true
            console.log($check_out_response)
          } catch (err) {
            console.log(err)
          }

          return (location.href = `/user/${datane.user}`)
          // error = resp.errors[0].message
        } catch (err) {
          // console.log(err.message)
          // notifications.warning(err.message)
          // get error logged
        }

        // end not logged
      }

      // end is Recurring
    }
    // end createInq
  }
  // let products = []
  // for (const item of $cart) {
  //   const product = {
  //     _id: item._id,
  //     quantity: item.quantity
  //   }
  //   products.push(product)
  // }
  // if (!$isRecurring) {

  //   const paymentMethod = $payment_methode
  //   // not logged
  //   let handphone = formState.handphone
  //   let full_name = formState.full_name

  //   // if logged
  //   if ($session) {
  //     handphone = $session.handphone
  //     full_name = $session.full_name

  //     const options_trans = {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify(
  //           createTransaction(handphone, full_name, products, paymentMethod)
  //         )
  //       },
  //       response = await fetch(url, options_trans),
  //       res = await response.json(),
  //       dt = res.data.createTransaction

  //     $cart = []
  //     $check_out_response = dt
  //     $check_out_store = false
  //   } else {
  //     if (registered) {
  //       const paymentMethod = $payment_methode
  //       let handphone = formState.handphone
  //       let password = formState.password
  //       try {
  //         const password_submit = {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json'
  //           },
  //           body: JSON.stringify(loginPass(handphone, password))
  //         }
  //         const response = await fetch(url, password_submit),
  //           resp = await response.json()
  //         // error = resp.errors[0].message
  //         // console.log(resp)
  //         if (resp.status >= 400) {
  //           throw Error(resp.message)
  //         }
  //         const datane = await {
  //           token: resp.data.loginPass.token,
  //           user: resp.data.loginPass.user.id,
  //           handphone: resp.data.loginPass.user.handphone
  //         }
  //         await authenticate(datane)
  //         // return (location.href = `/user/${resp.data.loginPass.user.id}`)
  //       } catch (err) {
  //         console.log(err.message)
  //         // notifications.warning(err.message)
  //       }
  //       const options_trans = {
  //           method: 'POST',
  //           headers: { 'Content-Type': 'application/json' },
  //           body: JSON.stringify(
  //             createTransaction(handphone, full_name, products, paymentMethod)
  //           )
  //         },
  //         response = await fetch(url, options_trans),
  //         res = await response.json(),
  //         dt = res.data.createTransaction

  //       $cart = []
  //       $check_out_response = dt
  //       $check_out_store = false
  //       return (location.href = `/user/${$session.user}`)
  //     }
  //   }
  // }
  // // is requrring
  // else {
  //   if ($session) {
  //     const paymentMethod = $payment_methode
  //     let handphone = $session.handphone
  //     let full_name = $session.full_name
  //     const options_trans = {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(
  //         createTransaction(handphone, full_name, products, paymentMethod)
  //       )
  //     },
  //     response = await fetch(url, options_trans),
  //     res = await response.json(),
  //     dt = res.data.createTransaction

  //   $cart = []
  //   $check_out_response = dt
  //   $check_out_store = false
  //   } else {

  //   }
  // }

  // const password = formState.password
  // const nik = formState.nik
  // const address = formState.address
  // let full_name = formState.full_name
  // const paymentMethod = $payment_methode

  // // district = formState.district,
  // // sub_district = formState.sub_district

  // // check if not registered, then create user
  // if (!$session.authenticated && !registered) {
  //   const options_create = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(createUser(handphone, password, nik, full_name, address))
  //   }
  //   // console.log(options_create)
  //   const response_create = await fetch(url, options_create)
  //   const res_create = await response_create.json()
  //   const data_res = await {
  //     token: res_create.data.createUser.token,
  //     user: res_create.data.createUser.user.id,
  //     handphone: res_create.data.createUser.user.handphone,
  //     full_name: res_create.data.createUser.user.full_name
  //   }
  //   await authenticate(data_res)
  // }

  // if (!$session.authenticated && registered) {
  //   let handphone = formState.handphone
  //   let password = formState.password
  //   try {
  //     const password_submit = {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(loginPass(handphone, password))
  //     }
  //     const response = await fetch(url, password_submit),
  //       resp = await response.json()
  //     // error = resp.errors[0].message
  //     // console.log(resp)
  //     if (resp.status >= 400) {
  //       throw Error(resp.message)
  //     }
  //     const datane = await {
  //       token: resp.data.loginPass.token,
  //       user: resp.data.loginPass.user.id,
  //       handphone: resp.data.loginPass.user.handphone
  //     }
  //     await authenticate(datane)
  //     // return (location.href = `/user/${resp.data.loginPass.user.id}`)
  //   } catch (err) {
  //     console.log(err.message)
  //     // notifications.warning(err.message)
  //   }
  // }

  // if ($session) {
  //   handphone = $session.handphone
  //   full_name = $session.full_name
  // }
  // const options_trans = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(
  //       createTransaction(handphone, full_name, products, paymentMethod)
  //     )
  //   },
  //   response = await fetch(url, options_trans),
  //   res = await response.json(),
  //   dt = res.data.createTransaction
  // dtt = JSON.parse(res)

  //
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
            {#if $isRecurring >= 1}
              <div class="bg-red-100">
                <p>Untuk Paket Bulanan harus mempunyai akun.</p>
                <p>Silahkan login atau.</p>
                </div>
              <div class="flex justify-between items-center my-3">
                {#if registered}
                  <h3 class="font-bold leading-none text-gray-900">Login Akun</h3>
                  <p class="text-sm text-blue-500">
                    <span class="text-xs text-red-500 italic pr-3">Belum punya akun?</span
                    >
                    <button on:click|once={log} type="button">Daftar</button>
                  </p>
                {:else}
                  <h3 class="font-bold leading-none text-gray-900">Daftar</h3>
                  <p class="text-sm text-blue-500">
                    <span class="text-xs text-red-500 italic pr-3">Sudah punya akun?</span
                    >
                    <button on:click|once={reg} type="button">Login</button>
                  </p>
                {/if}
              </div>
              <!-- {JSON.stringify($session.authenticate)} -->
              {#if registered && !$session.authenticate}
                <!-- if registered try to login  -->

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
                  name="password"
                  label="Password"
                  class={cn('password')}
                  placeholder="Password"
                  onInput={check}
                  {errors}
                  bind:value={formState.password}
                />
              {:else}
                <!-- if not registered, create user then login  -->
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
                  name="password"
                  label="Password"
                  class={cn('password')}
                  placeholder="Password"
                  onInput={check}
                  {errors}
                  bind:value={formState.password}
                />
                <!-- requrring  -->
                <!-- {#if $isRecurring >= 1} -->
                <!-- if not registered and have one item is Recurring, must have create user with nik  -->
                <Input
                  pattern="[0-9]*"
                  inputmode="numeric"
                  name="nik"
                  label="No. KTP"
                  class={cn('nik')}
                  onInput={check}
                  placeholder="No KTP"
                  {errors}
                  bind:value={formState.nik}
                  maxlength={nik_max}
                />
                <Input
                  name="full_name"
                  label="Nama"
                  class={cn('full_name')}
                  placeholder="Nama"
                  {errors}
                  bind:value={formState.full_name}
                />
                <label for="" class="text-sm text-gray-700 font-medium"
                  >Lokasi pemasangan WIFI</label
                >

                <!-- district -->
                <Input
                  name="address"
                  class={cn('address')}
                  placeholder="Tulis RT, RW, Dusun, Jalan atau Komplek"
                  {errors}
                  onInput={check}
                  bind:value={formState.address}
                />{/if}
            {:else}
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
          {/if}
          <!-- {JSON.stringify($isRecurring)} -->
          <!-- payment methode  -->
          <Payment />
          <!-- <div class="float-right mt-4"><BlueButton title="Bayar" type="submit" /></div> -->
        </div>
        <!--  -->
        <!--  -->
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
              <button type="submit" class="btn-blue">Bayar</button>
              <!-- <button type="submit" class="btn-blue" on:click|self={goCheckout}>Bayar</button> -->
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
      </form>
    {/if}
  </div>
</div>
