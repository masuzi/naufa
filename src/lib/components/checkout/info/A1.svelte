<script>
  import InfoTab from './InfoTab.svelte'
  import InfoVa from './InfoVa.svelte'
  const atmb_l = [
      'Masukkan PIN.',
      'Pilih menu Transaksi Lainnya.',
      'Pilih menu Ke Rekening Bank Lain.',
      'Masukkan kode ATM Bersama (013 - Permatabank) kemudian tekan Benar.',
      'Masukkan 16 digit nomor Virtual Account yang tertera pada halaman konfirmasi (Contoh: 90060XXXXXXXXXXX), dan tekan Benar.',
      'Masukkan jumlah pembayaran sesuai dengan yang ditagihkan dalam halaman konfirmasi.',
      'Pilih Benar untuk menyetujui transaksi tersebut.'
    ],
    atmp_l = [
      'Pada Menu utama, Pilih Transaksi Lainnya.',
      'Pilih Transfer.',
      'Pilih Ke Rekening Bank Lain.',
      'Masukkan kode sandi ATM Bersama (013 - Permatabank) kemudian tekan Benar.',
      'Masukkan 16 digit nomor Virtual Account yang tertera pada halaman konfirmasi (Contoh: 500525XXXXXXXXXX), dan tekan Benar.',
      'Masukkan jumlah pembayaran sesuai dengan yang ditagihkan dalam halaman konfirmasi.',
      'Pilih Benar untuk menyetujui transaksi tersebut.'
    ]
</script>

<div class="container mx-auto">
  <div class="rounded overflow-hidden">
    <InfoVa />
    <InfoTab tabindex="36" title="ATM Bersama" lists={atmb_l} />
    <InfoTab tabindex="37" title="ATM Prima" lists={atmp_l} />
  </div>
</div>
