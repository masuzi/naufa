<script>
  import { m_banking, check_out_store, check_out_response } from '../../cart/stores'
  import Icon from '@iconify/svelte'
</script>

<div>
  <div class="bg-green-100 rounded-md mt-3 p-3 text-center">
    {#if $check_out_store}
      <p>
        Dapatkan nomor akun virtual {$m_banking} Anda setelah menekan tombol Bayar dibawah.
      </p>
      <p>
        Periksa kembali data pembelian Anda pada menu detail transaksi sebelum melanjutkan
        transaksi.
      </p>{:else}
      {#await $check_out_response}
        loading...{:then r}
        <p>
          Kode pembayaran Anda adalah <span class="font-bold">{r.merchantOrderId}</span>
        </p>
        <p>Total Rp.{r.total},-</p>
        <p>Metode Pembayaran: {$m_banking}</p>{/await}
    {/if}
  </div>
  <div class="flex text-blue-700 m-3">
    <Icon icon="entypo:info" />
    <span class="pl-1 font-medium">Informasi Cara Pembayaran virtual {$m_banking}</span>
  </div>
</div>
