<script>
  import Icon from '@iconify/svelte'
</script>

<div>
  <div class="bg-green-100 rounded-md mt-3 p-3">
    <p><slot /></p>
    <p>
      Periksa kembali data pembelian Anda pada menu detail transaksi sebelum melanjutkan
      transaksi.
    </p>
  </div>
  <div class="flex text-blue-700 m-3">
    <Icon icon="entypo:info" />
    <span class="pl-1 font-medium">Informasi Cara Pembayaran</span>
  </div>
</div>
