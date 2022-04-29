<script>
  import InfoTab from './InfoTab.svelte'
  import InfoVa from './InfoVa.svelte'
  import Icon from '@iconify/svelte'
  const mbank_l = [
      'Buka Aplikasi Mobile Neobank (Versi Android/IPhone).',
      'Pilih menu Pembayaran VA.',
      'Pilih BANK NEO COMMERCE sebagai nama bank penerima.',
      'Masukan nomor Virtual Account.',
      'Konfirmasi informasi pembayaran.',
      'Masukkan PIN.',
      'Transaksi selesai.'
    ],
    atmb_l = [
      'Masukkan kartu ke mesin ATM Bersama.',
      'Pilih Transaksi lainnya.',
      'Pilih menu Transfer.',
      'Pilih Transfer ke Bank Lain.',
      "Masukkan kode Bank Neo Commerce/BNC '490' dan 18 Digit nomor Virtual Account.",
      'Masukkan Nominal Transfer seusai tagihan atau kewajiban Anda. pastikan nominal sesuai.',
      "Konfirmasi rincian Anda akan tampil di layar, cek dan tekan 'Ya' untuk melanjutkan.",
      'Transaksi Berhasil.'
    ],
    atmp_l = [
      'Pilih Transaksi lainnya.',
      'Pilih menu Transfer.',
      'Pilih Transfer ke Bank Lain.',
      "Masukkan kode Bank Neo Commerce/BNC '490' dan 18 Digit nomor Virtual Account.",
      'Masukkan Nominal Transfer seusai tagihan atau kewajiban Anda. pastikan nominal sesuai.',
      "Konfirmasi rincian Anda akan tampil di layar, cek dan tekan 'Ya' untuk melanjutkan.",
      'Transaksi Berhasil.'
    ]
</script>

<div class="container mx-auto">
  <div class="rounded overflow-hidden">
    <InfoVa />
    <InfoTab tabindex="33" title="Mobile Banking NeoBank" lists={mbank_l} />
    <InfoTab tabindex="34" title="ATM Bersama" lists={atmb_l} />
    <InfoTab tabindex="35" title="ATM Prima" lists={atmp_l} />
  </div>
</div>
