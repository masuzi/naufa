<style>
  .inp {
    @apply w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out;
  }
</style>

<script>
  import { warningToast, successToast } from './../../toast.js'
  import { SvelteToast, toast } from '@zerodevx/svelte-toast'
  import { session } from '$app/stores'
  import Button from '$lib/components/ui/Button.svelte'
  import InputContact from './InputContact.svelte'
  import { createMessageContact } from './graphql'
  import classNames from 'vest/classnames'
  import send_contact from './send-contact'

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
    runValidate()
    if (result.hasErrors()) {
      warningToast('Pesan gagal dikirim.Periksa kesalahan dan kirim kembali.')
    } else {
      submitContact()
      formState = {}
      successToast(
        'Terima kasih. Pesan berhasil dikirim , Kami akan segera memberi respon.'
      )
    }
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

  const url = import.meta.env.VITE_GRAPHQL_URL

  async function submitContact() {
    let full_name = formState.full_name
    let email = formState.email
    let handphone = formState.handphone
    let address = formState.address
    let content = formState.content
    if ($session) {
      handphone = $session.handphone
      full_name = $session.full_name
    }
    const opt_options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        createMessageContact(full_name, handphone, email, address, content)
      )
    }
    const response = await fetch(url, opt_options),
      respon = await response.json()
  }
</script>

<section class="text-gray-600 body-font text-xs md:text-sm relative">
  <SvelteToast options={{ duration: 8000, intro: { y: -64 } }} />
  <div class="container mx-auto">
    <form on:submit|preventDefault={onSubmitContact} id="contact">
      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <div class="flex flex-wrap">
          {#if !$session.authenticated}
            <div class="p-2 w-1/2">
              <div class="relative">
                <InputContact
                  label="Nama"
                  name="full_name"
                  class=""
                  placeholder="Nama"
                  onInput={check}
                  {errors}
                  bind:value={formState.full_name}
                />
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <!-- <label for="email" class="leading-7 text-sm text-gray-600">Email</label> -->
                <InputContact
                  name="email"
                  label="Email"
                  class={cn('email')}
                  placeholder="Email"
                  bind:value={formState.email}
                />
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <InputContact
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
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <InputContact
                  label="Alamat"
                  name="address"
                  class={cn('address')}
                  placeholder="RT, RW, Dusun, Jalan atau Komplek"
                  {errors}
                  onInput={check}
                  bind:value={formState.address}
                />
              </div>
            </div>
          {/if}
          <div class="p-2 w-full">
            <div class="relative">
              <label for="message" class="leading-7 text-sm text-gray-600">Pesan</label>
              <!-- {errors.content} -->
              {#if errors.content == '1'}
                <div class="text-xs text-red-800">Pesan wajib diisi!</div>{/if}
              <textarea
                bind:value={formState.content}
                id="content"
                name="content"
                onInput={check}
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
              <!-- {JSON.stringify(errors.content)} -->
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
