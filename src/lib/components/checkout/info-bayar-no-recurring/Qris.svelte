<script>
  import InfoTab from './InfoTab.svelte'
  import InfoQris from './InfoQris.svelte'
  export let qrString = '123424'
  export let total = 1
  const spi = '1',
    spt = 'ShopeePay',
    spl = [
      'Buka Aplikasi Shopee.',
      'Pilih menu “Saya” dan pilih ShopeePay.',
      'Pilih Scan dan lakukan scan pada barcode pembayaran.',
      'Pilih Bayar Sekarang.',
      'Tunggu hingga proses pembayaran berhasil.',
      'Transaksi Anda akan otomatis terkonfirmasi di sistem.',
      'Jika pembayaran berhasil, Voucher akan dikirim secara otomatis melalui Whatsapps, email atau SMS.',
      'Voucher juga bisa dilihat di halaman Profil anda.'
    ],
    bcam_i = '2',
    bcam_t = 'BCA Mobile',
    bcam_l = [
      'Buka Aplikasi BCA mobile Anda.',
      'Pilih menu QR.',
      'Lakukan Scan pada barcode pembayaran.',
      'Pilih konfirmasi pembayaran dengan tekan tombol “OK”.',
      'Masukkan pin BCA mobile Anda.',
      'Tunggu hingga proses pembayaran berhasil.',
      'Transaksi Anda akan otomatis terkonfirmasi di sistem.',
      'Jika pembayaran berhasil, Voucher akan dikirim secara otomatis melalui Whatsapps, email atau SMS.',
      'Voucher juga bisa dilihat di halaman Profil anda.'
    ],
    link_i = '3',
    link_t = 'LinkAja',
    link_l = [
      'Buka Aplikasi LinkAja.',
      'Pilih Bayar pada menu LinkAja.',
      'Lakukan Scan pada Barcode pembayaran.',
      'Pilih Konfirmasi dan masukkan pin LinkAja Anda.',
      'Tunggu hingga proses pembayaran berhasil.',
      'Transaksi Anda akan otomatis terkonfirmasi di sistem.',
      'Jika pembayaran berhasil, Voucher akan dikirim secara otomatis melalui Whatsapps, email atau SMS.',
      'Voucher juga bisa dilihat di halaman Profil anda.'
    ],
    gojek_i = '4',
    gojek_t = 'Gojek',
    gojek_l = [
      'Buka Aplikasi Gojek.',
      'Pilih Bayar pada menu Gojek.',
      'Lakukan Scan pada Barcode pembayaran.',
      'Pilih Metode pembayaran Gopay.',
      'Pilih Bayar dan masukkan pin Gopay Anda.',
      'Tunggu hingga proses pembayaran berhasil.',
      'Transaksi Anda akan otomatis terkonfirmasi di sistem.',
      'Jika pembayaran berhasil, Voucher akan dikirim secara otomatis melalui Whatsapps, email atau SMS.',
      'Voucher juga bisa dilihat di halaman Profil anda.'
    ],
    dana_i = '4',
    dana_t = 'Dana',
    dana_l = [
      'Buka Aplikasi DANA.',
      'Pilih Pindai pada menu DANA.',
      'Lakukan Scan pada Barcode pembayaran.',
      'Pilih Bayar menggunakan saldo DANA dan masukkan pin DANA Anda.',
      'Tunggu hingga proses pembayaran berhasil.',
      'Transaksi Anda akan otomatisterkonfirmasi di sistem.',
      'Jika pembayaran berhasil, Voucher akan dikirim secara otomatis melalui Whatsapps, email atau SMS.',
      'Voucher juga bisa dilihat di halaman Profil anda.'
    ],
    ovo_i = '5',
    ovo_t = 'Ovo',
    ovo_l = [
      'Buka Aplikasi OVO.',
      'Pilih Scan pada menu OVO.',
      'Lakukan Scan pada Barcode pembayaran.',
      'Pilih Bayar dan masukkan pin OVO Anda.',
      'Tunggu hingga proses pembayaran berhasil.',
      'Transaksi Anda akan otomatis terkonfirmasi di sistem.',
      'Jika pembayaran berhasil, Voucher akan dikirim secara otomatis melalui Whatsapps, email atau SMS.',
      'Voucher juga bisa dilihat di halaman Profil anda.'
    ]
</script>

<div class="container mx-auto">
  <InfoQris {qrString} {total} />
  <div class="rounded overflow-hidden">
    <InfoTab tabindex={spi} title={spt} lists={spl} />
    <InfoTab tabindex={bcam_i} title={bcam_t} lists={bcam_l} />
    <InfoTab tabindex={link_i} title={link_t} lists={link_l} />
    <InfoTab tabindex={gojek_i} title={gojek_t} lists={gojek_l} />
    <InfoTab tabindex={dana_i} title={dana_t} lists={dana_l} />
    <InfoTab tabindex={ovo_i} title={ovo_t} lists={ovo_l} />
  </div>
</div>
