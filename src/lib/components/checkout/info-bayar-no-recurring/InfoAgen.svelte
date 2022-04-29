<script lang="ts">
  import { formatRupiah } from '$lib/components/product/BriApi'
  import QRCode from 'qrcode'
  import { check_out_response } from '$lib/components/cart/stores'
  import Icon from '@iconify/svelte'
  // export let merchantOrderId =
  let merchantOrder = JSON.stringify($check_out_response.merchantOrderId)

  export let total = 0
  let encodedData = ''

  let items = (async () => {
    const txt = JSON.stringify(merchantOrder)
    encodedData = await QRCode.toDataURL(txt)
    // return encodedData
  })()
  const agen_l = [
    'Datang ke Agen terdekat.',
    'Tunjukkan Kode QR atau sebutkan Kode Pembayaran <span class="font-bold text-red-700">' +
      $check_out_response.merchantOrderId +
      '</span> ke Agen.',
    'Lakukan pembayaran sebesar <span class="font-bold text-red-700"> Rp.' +
      formatRupiah($check_out_response.total) +
      ',- </span> dan tunggu proses selesai.',
    'Voucher akan dikirim secara otomatis melalui Whatsapps, email atau SMS.',
    'Voucher juga bisa dilihat di halaman Profil anda.'
  ]
</script>

<div>
  <div class="bg-green-100 rounded-md mt-3 p-3 text-center leading-5">
    {#await $check_out_response}
      loading...{:then r}
      <p class="mb-3">Tunjukkan Kode QR ke Agen untuk di scan.</p>
      <img class="h-64 w-64 mb-3 mx-auto" alt="QR Code" src={encodedData} />
      <p>Kode pembayaran : {r.merchantOrderId}</p>
      <p>Total Rp.{formatRupiah(r.total)},-</p>
      <p>Metode Pembayaran: Agen</p>
    {/await}
  </div>
  <div class="flex text-blue-700 mt-4">
    <Icon icon="entypo:info" />
    <span class="pl-1 font-medium">Informasi Cara Pembayaran di Agen</span>
  </div>
  <ol class="list-decimal px-4 p-2 leading-5 text-gray-800 text-justify">
    {#each agen_l as l}
      <li>{@html l}</li>
    {/each}
  </ol>
</div>
