<script>
  import Icon from '@iconify/svelte'
  import InfoTab from './InfoTab.svelte'
  const ovo_l = [
    'Masukkan nomor handphone yang sudah terdaftar di OVO dan klik Bayar.',
    'Cek pesanan anda dan nomor handphone anda, pastikan data tersebut benar.',
    'Anda akan segera mendapatkan notifikasi melalui aplikasi di handphone untuk pembayaran di Merchant. Pastikan anda menyelesaikan pembayaran di aplikasi OVO dalam jangka waktu paling lama 30 detik.',
    'Pilih metode pembayaran menggunakan OVO Cash, OVO Points, atau Split.',
    'Apabila pembayaran di atas Rp. 100,000,- anda wajib validasi dengan cara memasukkann pin OVO.',
    'Setelah sukses melakukan pembayaran di Merchant, anda dapat melihat history transaksi di aplikasi OVO dan pembayaran akan sukses.'
  ]
</script>

<div class="container mx-auto">
  <div class="flex text-blue-700 m-3">
    <Icon icon="entypo:info" />
    <span class="pl-1 font-medium">Informasi Cara Pembayaran OVO</span>
  </div>
  <div class="rounded overflow-hidden">
    <InfoTab tabindex="40" title="OVO" lists={ovo_l} />
  </div>
</div>
