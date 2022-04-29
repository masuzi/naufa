<style>
  .zoom {
    transition: transform 0.7s;
  }
  .zoom:hover {
    transform: scale(0.98);
  }
  .gradient {
    @apply from-pink-500 to-yellow-500 bg-gradient-to-r;
    /* from-pink to-yellow; */
  }
</style>

<script>
  import { gotoCheckout, showCart } from './../cart/stores.js'
  import { warningToast } from './../../toast.js'
  import { SvelteToast, toast } from '@zerodevx/svelte-toast'
  import { requestOtp, login, loginPass } from '../auth/graphql'
  import { authenticate } from '$lib/auth'
  import Input from '$lib/components/ui/Input.svelte'
  import classNames from 'vest/classnames'
  import check_out from './vest'
  import Otp from './Otp.svelte'

  export let values = {}
  let errors = {}
  let warnings = {}
  let formState = { ...values }
  let result = check_out.get()
  let email
  // otp
  let otp
  let handphone
  let value = []
  let isComplete
  // @ts-ignore
  let val = value.join('')
  const check = ({ target: { name } }) => runValidate(name)
  const runValidate = name => {
    result = check_out(formState, name)

    // extract errors and warnings
    errors = result.getErrors()
    warnings = result.getWarnings()
  }
  const onSubmit = () => {
    runValidate()
    loginPassForm()
    if (result.hasErrors()) return
  }
  // Vest css class helper utility
  $: cn = classNames(result, {
    warning: 'warning',
    invalid: 'invalid',
    valid: 'valid'
  })

  // reactive variable for the submit button
  $: disabled = result.hasErrors()
  const url = import.meta.env.VITE_GRAPHQL_URL
  let respon
  async function requestOtpSend() {
    let handphone = formState.handphone
    const opt_options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestOtp(handphone))
    }
    const response = await fetch(url, opt_options)
    respon = await response.json()
    // console.log(response)
    otp = true
  }
  $: handphone = formState.handphone
  $: val = value.join('')
  $: sub = isComplete
  // let error
  const onSubmitOtp = async () => {
    try {
      const opt_submit = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(login(handphone, val))
      }
      const response = await fetch(url, opt_submit),
        resp = await response.json()
      if (resp.data !== undefined) {
        const datane = await {
          token: resp.data.login.token,
          user: resp.data.login.user.id,
          handphone: resp.data.login.user.handphone,
          full_name: resp.data.login.user.full_name
        }
        await authenticate(datane)
        return (location.href = `/user/${resp.data.login.user.id}`)
      } else {
        warningToast(resp.errors[0].message)
      }
    } catch (err) {
      console.log(err.message)
      // notifications.warning(err.message)
    }
  }

  async function loginPassForm() {
    let handphone = formState.handphone
    let password = formState.password
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
      // if (resp.errors[0].message) {
      //   warningToast(resp.errors[0].message)
      // }

      // error = resp.errors[0].message
      // console.log(resp)
      // if (resp.status >= 400) {
      //   throw Error(resp.message)
      // }
      if (resp.data !== undefined) {
        const datane = await {
          token: resp.data.loginPass.token,
          user: resp.data.loginPass.user.id,
          handphone: resp.data.loginPass.user.handphone
        }
        await authenticate(datane)
        if ($gotoCheckout) {
          return (location.href = `/`), ($gotoCheckout = false)
        } else {
          return (location.href = `/user/${resp.data.loginPass.user.id}`)
        }
      } else {
        warningToast(resp.errors[0].message)
      }
    } catch (err) {
      console.log(err.message)
      // notifications.warning(err.message)
    }
  }
</script>

<div class="h-screen py-20 gradient ">
  <div class="text-xs">
    <SvelteToast options={{ duration: 8000, intro: { y: -64 } }} />
  </div>
  <div class="flex justify-center mx-4">
    <div
      class="hidden w-full px-8 bg-pink-500 opacity-80 rounded-lg rounded-r-none md:w-96 md:block"
    >
      <div class="py-6 mt-2 text-2xl font-bold text-white">SIMANTEP</div>
      <div class="text-gray-100 ">
        <div class="my-4">
          <div class="text-lg font-semibold ">
            <span class="mr-1 ">✓</span>
            Murah
          </div>
          <div class="text-xs ">Banyak pilihan paket</div>
        </div>
        <div class="my-4">
          <div class="text-lg font-semibold ">
            <span class="mr-1 ">✓</span>
            Mudah
          </div>
          <div class="text-xs ">Bayar langsung koneksi</div>
        </div>
        <div class="my-4">
          <div class="text-lg font-semibold ">
            <span class="mr-1 ">✓</span>
            Cepat
          </div>
          <div class="text-xs ">Iternet tanpa batas</div>
        </div>
      </div>
    </div>

    <div class="w-full bg-white rounded-lg shadow md:rounded-l-none md:w-96">
      <div class="">
        <div class=" h-7 w-7 ml-auto mr-2">
          <a
            href="/"
            class="block mt-2 p-1 hover:bg-gray-500 bg-gray-900 rounded-full focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-white "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </a>
        </div>

        {#if otp !== true}
          <h1 class="text-2xl text-center font-bold tracking-tight text-gray-900 ">
            Masuk
          </h1>

          <!-- {#if respon.} -->
          <form
            on:submit|preventDefault={onSubmit}
            id="register"
            class="mt-10 mx-4 flex flex-col text-sm text-gray-500"
          >
            <Input
              name="handphone"
              label="Handphone"
              class={cn('handphone')}
              placeholder="Handphone"
              onInput={check}
              {errors}
              bind:value={formState.handphone}
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
            <!-- svelte-ignore a11y-missing-attribute -->
            <a
              class="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer"
              on:click={requestOtpSend}
              ><span class="font-bold">Masuk dengan OTP</span><i
                class="bx bx-caret-right ml-1"
              /></a
            >
            <button
              type="submit"
              class="mt-8 py-2 gradient text-lg text-white font-semibold rounded-full shadow-md zoom tracking-wider focus:outline-none"
            >
              Masuk</button
            >
          </form>
          <div class="m-4">
            <a
              rel="external"
              href={`/auth/daftar`}
              class="flex items-center justify-center py-2 font-semibold text-gray-900 border rounded-full shadow-md zoom hover:no-underline"
            >
              <div class="ml-4 text-lg font-semibold tracking-tight">Daftar</div>
            </a>
          </div>
        {:else}
          <h1 class="text-2xl text-center font-bold tracking-tight text-gray-900 ">
            Verifikasi OTP
          </h1>
          <Otp {handphone} bind:isComplete bind:value />
          <div class="hidden">
            {#if sub === true}{onSubmitOtp()}
            {/if}
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
