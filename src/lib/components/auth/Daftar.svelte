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
  import Input from '$lib/components/ui/Input.svelte'
  import { createUser } from './graphql'
  import classNames from 'vest/classnames'
  import register from './register'

  export let values = {}
  let errors = {}
  let warnings = {}
  let formState = { ...values }
  let result = register.get()
  let email

  const check = ({ target: { name } }) => runValidate(name)
  const runValidate = name => {
    result = register(formState, name)

    // extract errors and warnings
    errors = result.getErrors()
    warnings = result.getWarnings()
  }
  const onSubmit = () => {
    runValidate()
    createUserForm()
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

  async function createUserForm() {
    // const email = formState.email
    const handphone = formState.handphone
    const password = formState.password
    const full_name = formState.full_name
    const address = formState.address
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(createUser(handphone, password, full_name, address))
      },
      response = await fetch(url, options),
      res = await response.json()
    return (location.href = `/auth/masuk`)
  }
</script>

<div class="h-screen py-20 gradient ">
  <div class="flex justify-center mx-4">
    <div class="hidden w-full px-8 gradient rounded-lg rounded-r-none md:w-96 md:block">
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
        <h1 class="text-3xl text-center font-bold tracking-tight text-gray-900 ">
          Daftar
        </h1>
        <!-- on:submit|preventDefault={submit} -->
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
          <Input
            name="full_name"
            label="Nama"
            class={cn('full_name')}
            placeholder="Nama Lengkap"
            onInput={check}
            {errors}
            bind:value={formState.full_name}
          />
          <Input
            name="address"
            label="Alamat"
            class={cn('address')}
            placeholder="Tulis alamat lengkap"
            onInput={check}
            {errors}
            bind:value={formState.address}
          />
          <!-- <input
            type="text"
            placeholder="No. Handphone"
            class="border border-gray-500 rounded-full py-2 px-5 focus:outline-none "
            bind:value={email}
          />
          <input
            type="password"
            placeholder="Password"
            class="mt-3 border border-gray-500 rounded-full py-2 px-5 focus:outline-none "
            bind:value={password}
          /> -->
          <button
            type="submit"
            class="mt-8 py-2 gradient text-lg text-white font-semibold rounded-full shadow-md zoom tracking-wider focus:outline-none"
          >
            Daftar</button
          >
        </form>
      </div>
      <div class="m-4">
        <a
          rel="external"
          href={`/auth/masuk`}
          class="flex items-center justify-center py-2 font-semibold text-gray-900 border rounded-full shadow-md zoom hover:no-underline"
        >
          <div class="ml-4 text-lg font-semibold tracking-tight">Masuk</div>
        </a>
        <!-- <div class=" mt-5 ">
          <h5
            class="text-sm max-w-max mx-auto  font-semibold cursor-pointer hover:underline"
          >
            Reset Password
          </h5>
        </div> -->
        <!-- <div class="mx-4 mt-10 mb-10 text-xs tracking-widest text-center text-gray-500">
          <h5 class="mb-1">By continuing, you agree to Svelte Commerce</h5>
          <a class="hover:underline text-gray-800" href="/">Terms of Service</a>
          ,
          <a class="hover:underline text-gray-800" href="/">Privacy Policy</a>
        </div> -->
      </div>
    </div>
  </div>
</div>
