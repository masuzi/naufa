<style>
  .gradient {
    @apply bg-gradient-to-r from-pink-500 to-yellow-500;
  }
</style>

<script lang="ts">
  import { requestOtp } from './graphql'
  import OneTimePass from './../otp/OneTimePass.svelte'
  export let handphone
  export let isComplete = false
  export let value
  let onlyNumbers = true,
    chunksCount = 6,
    chunkLength = 1,
    valueWithSeparators = false
  const url = import.meta.env.VITE_GRAPHQL_URL,
    options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestOtp(handphone))
    }
  async function requestOtpSend() {
    const response = await fetch(url, options)
    return await response.json()
  }
  // const ll = value
</script>

<div class="py-5 px-3 text-xs">
  <div class="container mx-auto">
    <div class="max-w-sm mx-auto md:max-w-lg">
      <div class="w-full">
        <div class="bg-white h-30 py-3 rounded text-center">
          <!-- <h1 class="text-1xl font-bold">Verifikasi OTP</h1> -->
          <div class="flex flex-col mt-4">
            <span>Masukkan kode OTP dari nomor</span>
            <span class="font-bold">{handphone}</span>
          </div>
          <div id="otp" class="flex flex-row justify-center text-center px-2 mt-5">
            <OneTimePass bind:value {chunkLength} {chunksCount} bind:isComplete />
          </div>
          <!-- svelte-ignore a11y-missing-attribute -->
          <div class="flex justify-center text-center mt-5">
            <a
              class="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer"
              on:click={requestOtpSend}
              ><span class="font-bold">Kirim ulang OTP</span><i
                class="bx bx-caret-right ml-1"
              /></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
