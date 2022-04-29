<script>
  import InfoTab from './InfoTab.svelte'
  import InfoVa from './InfoVa.svelte'
  const mbank_l = [
      'Buka aplikasi Mobile Banking Sampoerna pada smartphone anda.',
      'Silahkan Login menggunakan akun yang telah terdaftar.',
      'Pada Menu utama, pilih Transfer Dana.',
      'Pilih Transfer Ke Rekening Bank Sahabat Sampoerna.',
      'Masukkan 16 digit nomor Virtual Account yang tertera pada halaman konfirmasi (Contoh: 90306XXXXXXXXXXX).',
      'Masukkan jumlah pembayaran sesuai tagihan.',
      'Muncul Konfirmasi pembayaran.',
      'Masukkan otentikasi transaksi/token M-Banking.',
      'Transaksi selesai.'
    ],
    ibank_l = [
      'Buka website Internet Banking Sahabat Sampoerna: https://ibank.banksampoerna.co.id/.',
      'Silahkan Login menggunakan akun yang telah terdaftar.',
      'Pada Menu utama, pilih Transfer Dana.',
      'Pilih Transfer Ke Rekening Bank Sahabat Sampoerna.',
      'Masukkan 16 digit nomor Virtual Account yang tertera pada halaman konfirmasi (Contoh: 90306XXXXXXXXXXX).',
      'Masukkan jumlah pembayaran sesuai tagihan.',
      'Muncul Konfirmasi pembayaran.',
      'Masukkan otentikasi transaksi/token I-Banking',
      'Transaksi selesai.'
    ],
    atmb_l = [
      'Pada Menu utama, Pilih Transaksi Lainnya.',
      'Pilih Transfer.',
      'Pilih Ke Rekening Bank Lain.',
      'Masukkan kode bank Sahabat Sampoerna (523) lalu tekan Benar.',
      'Masukkan jumlah tagihan yang akan Anda bayar secara lengkap.',
      'Masukkan 16 digit nomor Virtual Account yang tertera pada halaman konfirmasi (Contoh: 90306XXXXXXXXXXX) lalu tekan Benar. ',
      'Masukkan Nominal Pembayaran lalu tekan Benar.',
      " Akan muncul rincian pembayaran Anda. Jika sudah benar,klik 'Ya' untuk melanjutkan."
    ]
</script>

<div class="container mx-auto">
  <div class="rounded overflow-hidden">
    <InfoVa />
    <InfoTab tabindex="30" title="M-Banking Sampoerna" lists={mbank_l} />
    <InfoTab tabindex="31" title="I-Banking Sampoerna" lists={ibank_l} />
    <InfoTab tabindex="32" title="ATM Bersama" lists={atmb_l} />
  </div>
</div>
