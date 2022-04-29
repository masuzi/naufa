<script>
  import Button from '$lib/components/ui/Button.svelte'
  import Input from '$lib/components/ui/Input.svelte'
  import classNames from 'vest/classnames'
  import send_contact from './vest'
  import { createMessageContact } from './graphql'

  export let values = {}
  let errors = {}
  let warnings = {}
  let formState = { ...values }
  let result = send_contact.get()

  const check = ({ target: { name } }) => runValidate(name)
  const runValidate = name => {
    result = send_contact(formState, name)

    // extract errors and warnings
    errors = result.getErrors()
    warnings = result.getWarnings()
  }
  const onSubmitContact = () => {
    submitContact()
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
  let error
  let handphone_max = 13
  let fullname = ''
  let handphone = ''
  let address = ''
  let subject = ''
  let content = ''
  const url = import.meta.env.VITE_GRAPHQL_URL

  async function submitContact() {
    const opt_options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        createMessageContact(fullname, handphone, address, subject, content)
      )
    }
    const response = await fetch(url, opt_options),
      respon = await response.json()
  }
</script>

<section class="text-gray-600 body-font text-xs md:text-sm relative">
  <div class="container px-5 mx-auto">
    <!-- <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Contact Us
      </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.
      </p>
    </div> -->
    <form on:submit|preventDefault={onSubmitContact} id="contact">
      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="full_name" class="leading-7 text-sm text-gray-600">Nama</label>
              <!-- <Input
                name="full_name"
                label="Nama"
                class={cn('full_name')}
                placeholder="Nama"
                onInput={check}
                {errors}
                bind:value={formState.full_name}
              /> -->
            </div>
          </div>
          <div class="p-2 w-1/2">
            <div class="relative">
              <!-- <label for="email" class="leading-7 text-sm text-gray-600">Email</label> -->
              <!-- <Input
                name="email"
                label="Email"
                class={cn('email')}
                placeholder="Email"
                onInput={check}
                {errors}
                bind:value={formState.email}
              /> -->
            </div>
          </div>
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="full_name" class="leading-7 text-sm text-gray-600"
                >Handphone</label
              >
              <!-- <Input
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
              /> -->
            </div>
          </div>
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="address" class="leading-7 text-sm text-gray-600">Alamat</label>
              <input
                type="address"
                id="address"
                name="address"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <label for="message" class="leading-7 text-sm text-gray-600">Pesan</label>
              <textarea
                id="message"
                name="message"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div class="p-2 w-full">
            <!-- <button
            class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >Button</button
          > -->
            <Button>Kontak</Button>
          </div>
        </div>
      </div>
    </form>
  </div>
</section>
