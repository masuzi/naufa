<script lang="ts">
  import { formatRupiah } from '$lib/components/product/BriApi'
  import QRCode from 'qrcode'
  import { check_out_response } from '../../cart/stores'
  import Icon from '@iconify/svelte'
  export let qrString = '123424'
  export let total = 1
  let encodedData = ''

  let items = (async () => {
    const txt = JSON.stringify(qrString)
    encodedData = await QRCode.toDataURL(qrString)
    // return encodedData
  })()
</script>

<div>
  <div class="bg-green-100 rounded-md mt-3 p-3 text-center">
    <!-- {#await $check_out_response} -->
    <!-- loading...{:then r} -->
    <p class="mb-3">Scan dengan aplikasi pembayaran QR pilihan Anda.</p>
    <img class="h-64 w-64 mb-3 mx-auto" alt="QR Code" src={encodedData} />
    <p>Total Rp.{formatRupiah(total)},-</p>
    <p>Metode Pembayaran: QRIS</p>
    <!-- {/await} -->
  </div>
  <div class="flex text-blue-700 m-3">
    <Icon icon="entypo:info" />
    <span class="pl-1 font-medium">Informasi Cara Pembayaran Qris</span>
  </div>
</div>
