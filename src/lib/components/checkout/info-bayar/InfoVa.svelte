<script>
  import { copy } from 'svelte-copy'
  import { m_banking, check_out_response } from '../../cart/stores'
  import Icon from '@iconify/svelte'
  export let vaNumber
  export let total
</script>

<div>
  <div class="bg-green-100 rounded-md mt-3 p-3 text-center leading-6">
    <p>Kode pembayaran Anda</p>
    <p class="font-bold ">
      {vaNumber}
      <button use:copy={vaNumber} class="text-blue-700"> Salin Kode </button>
    </p>
    <p>
      Jumlah Rp.{total},-
      <button use:copy={total} class="text-blue-700"> Salin Jumlah </button>
    </p>
    <p>Metode Pembayaran: {$m_banking}</p>
  </div>
  <div class="flex text-green-800 m-3">
    <Icon icon="entypo:info" />
    <span class="pl-1 font-medium">Informasi Cara Pembayaran virtual {$m_banking}</span>
  </div>
</div>
