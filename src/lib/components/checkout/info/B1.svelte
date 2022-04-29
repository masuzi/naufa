<script>
  import InfoTab from './InfoTab.svelte'
  import InfoVa from './InfoVa.svelte'
  const mbank_l = [
      'Login ke Go-Mobile.',
      'Pilih menu Transfer > Rekening Ponsel/CIMB Niaga.',
      'Pilih rekening sumber anda: CASA atau Rekening Ponsel.',
      'Pilih rekening tujuan : CASA.',
      'Masukkan 16 digit nomor Virtual Account yang tertera pada halaman konfirmasi (Contoh: 11990XXXXXXXXXXX) pada kolom nomor rekening penerima.',
      'Masukkan jumlah pembayaran sesuai dengan tagihan.',
      'Ikuti instruksi untuk menyelesaikan transaksi.'
    ],
    ibank_l = [
      'Login ke CIMB clicks.',
      'Pilih menu Bayar Tagihan/Pay Bills.',
      'Pilih Rekening Sumber/Source Account dan Jenis Pembayaran/Payment Type > Virtual Account.',
      'Masukkan 16 digit nomor Virtual Account yang tertera pada halaman konfirmasi (Contoh: 11990XXXXXXXXXXX). ',
      'Nomor, nama virtual account dan jumlah billing ditampilkan pada layar.',
      'Masukkan 6 digit mPIN dan tekan tombol Submit.',
      'Konfirmasi pembayaran ditampilkan pada layar.'
    ],
    ibank_lain = [
      'Login ke internet banking.',
      'Pilih menu transfer ke Bank Lain Online.',
      'Pilih bank tujuan Bank CIMB Niaga (kode bank: 022).',
      ' Masukkan 16 digit nomor Virtual Account yang tertera pada halaman konfirmasi (Contoh: 11990XXXXXXXXXXX).',
      'Masukkan jumlah pembayaran sesuai tagihan.',
      'Nomor, nama virtual account dan jumlah billing ditampilkan pada layar.',
      'Ikuti instruksi untuk menyelesaikan transaksi.',
      'Konfirmasi pembayaran ditampilkan pada layar.'
    ],
    atm_l = [
      'Masukkan kartu ATM dan PIN kartu CIMB Anda.',
      'Pilih Menu Transfer > Rekening CIMB Niaga/Rekening Ponsel Lain > Rekening CIMB Niaga Lain.',
      'Masukkan jumlah pembayaran sesuai dengan tagihan.',
      'Masukkan 16 digit nomor Virtual Account yang tertera pada halaman konfirmasi (Contoh: 11990XXXXXXXXXXX) pada kolom rekening penerima. ',
      'Ikuti instruksi untuk menyelesaikan transaksi.'
    ],
    atmbp_l = [
      'Pada Menu utama, pilih Transaksi Lainnya.',
      'Pilih Transfer.',
      'Pilih Antar Bank Online.',
      'Masukkan kode bank CIMB Niaga (022) diikuti dengan 16 digit nomor Virtual Account yang tertera pada halaman konfirmasi (Contoh: 11990XXXXXXXXXXX).',
      'Masukkan jumlah tagihan yang akan Anda bayar secara lengkap. Pembayaran dengan jumlah yang tidak sesuai akan otomatis ditolak.',
      'Pada halaman konfirmasi transfer akan muncul jumlah yang dibayarkan & nomor rekening tujuan. Jika informasinya telah sesuai tekan tombol Benar.'
    ]
</script>

<div class="container mx-auto">
  <div class="overflow-hidden text-xs">
    <InfoVa />
    <InfoTab tabindex="21" title="Go Mobile" lists={mbank_l} />
    <InfoTab tabindex="22" title="CIMB Clicks" lists={ibank_l} />
    <InfoTab tabindex="23" title="Internet Banking Bank Lain" lists={ibank_lain} />
    <InfoTab tabindex="24" title="ATM Cimb" lists={atm_l} />
    <InfoTab tabindex="24" title="ATM Bersama / Prima" lists={atmbp_l} />
  </div>
</div>
