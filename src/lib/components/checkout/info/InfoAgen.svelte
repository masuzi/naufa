<script>
  import Icon from '@iconify/svelte'
  import { check_out_store, check_out_response } from '../../cart/stores'
  const agen_l = [
    'Datang ke Agen terdekat.',
    'Tunjukkan QR code atau sebutkan Kode Pembayaran ke Agen.',
    'Lakukan pembayaran sesuai nominal dan tunggu proses selesai.',
    'Pembayaran anda akan langsung terdeteksi secara otomatis.'
  ]
</script>

<div class="container mx-auto">
  <div class="rounded overflow-hidden">
    <div class="bg-green-100 rounded-md mt-3 p-3 text-center">
      {#if $check_out_store}
        <p>
          Dapatkan nomor kode pembayaran, setelah menekan tombol Bayar dibawah. Pembayaran
          melalui Agen terdekat..
        </p>
      {/if}
    </div>
    <div class="flex text-blue-700 mt-4">
      <Icon icon="entypo:info" />
      <span class="pl-1 font-medium">Informasi Cara Pembayaran melalui Agen</span>
    </div>
    <!-- <div class="px-4> -->
    <ol class="list-decimal px-4  leading-5 text-gray-800 text-justify">
      {#each agen_l as l}
        <li>{@html l}</li>
      {/each}
    </ol>
    <!-- </div> -->
  </div>
</div>
