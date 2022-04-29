<script>
  import { retail_select, check_out_response } from '../../cart/stores'
  import Icon from '@iconify/svelte'
  const retail_l = [
    'Catat dan simpan kode pembayaran anda.',
    'Datang ke Gerai retail (Alfamart, Kantor Pos, Pegadaian, & Dan-Dan).',
    'Informasikan kepada kasir akan melakukan “Pembayaran Finpay”.',
    'Tunjukkan dan berikan Kode Pembayaran ke Kasir.',
    'Lakukan pembayaran sesuai nominal yang diinformasikan oleh Kasir dan tunggu proses selesai.',
    'Minta dan simpan struk sebagai bukti pembayaran.',
    'Pembayaran anda akan langsung terdeteksi secara otomatis.'
  ]
</script>

<div>
  <div class="bg-green-100 rounded-md mt-3 p-3 text-center leading-6">
    <p>Kode pembayaran Anda</p>
    <p class="font-bold ">
      {$check_out_response.vaNumber}
    </p>
    <p>
      Jumlah Rp.{$check_out_response.total},-
    </p>
    <p>Metode Pembayaran: {$retail_select}</p>
  </div>
  <div class="flex text-green-800 m-3">
    <Icon icon="entypo:info" />
    <span class="pl-1 font-medium">Informasi Cara Pembayaran {$retail_select}</span>
  </div>
  <ol class="list-decimal px-4 p-2 leading-5 text-gray-800 text-justify">
    {#each retail_l as l}
      <li>{@html l}</li>
    {/each}
  </ol>
</div>
