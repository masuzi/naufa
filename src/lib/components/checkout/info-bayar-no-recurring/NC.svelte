<script lang="ts">
  import { check_out_response } from '../../cart/stores'
  import InfoTab from './InfoTab.svelte'
  import InfoVa from './InfoVa.svelte'
  const mbank_l = [
      'Buka Aplikasi Mobile Neobank (Versi Android/IPhone).',
      'Pilih menu Pembayaran VA.',
      'Pilih BANK NEO COMMERCE sebagai nama bank penerima.',
      'Masukan nomor Virtual Account yaitu: <span class="font-bold text-red-700">' +
        $check_out_response.vaNumber +
        '</span>.',
      'Konfirmasi informasi pembayaran.',
      'Masukkan PIN.',
      'Transaksi selesai.',
      'Jika pembayaran berhasil, Voucher akan dikirim secara otomatis melalui Whatsapps, email atau SMS.',
      'Voucher juga bisa dilihat di halaman Profil anda.'
    ],
    atmb_l = [
      'Masukkan kartu ke mesin ATM Bersama.',
      'Pilih Transaksi lainnya.',
      'Pilih menu Transfer.',
      'Pilih Transfer ke Bank Lain.',
      "Masukkan kode Bank Neo Commerce/BNC '490' dan 18 Digit nomor Virtual Account yaitu: <span class='font-bold text-red-700'>" +
        $check_out_response.vaNumber +
        '</span>.',
      'Masukkan Nominal Transfer sebesar: <span class="font-bold text-red-700">' +
        $check_out_response.total +
        '</span>.',
      "Konfirmasi rincian Anda akan tampil di layar, cek dan tekan 'Ya' untuk melanjutkan.",
      'Transaksi Berhasil.',
      'Jika pembayaran berhasil, Voucher akan dikirim secara otomatis melalui Whatsapps, email atau SMS.',
      'Voucher juga bisa dilihat di halaman Profil anda.'
    ],
    atmp_l = [
      'Pilih Transaksi lainnya.',
      'Pilih menu Transfer.',
      'Pilih Transfer ke Bank Lain.',
      "Masukkan kode Bank Neo Commerce/BNC '490' dan 18 Digit nomor Virtual Account yaitu: <span class='font-bold text-red-700'>" +
        $check_out_response.vaNumber +
        '</span>.',
      'Masukkan Nominal Transfer sebesar: <span class="font-bold text-red-700">' +
        $check_out_response.total +
        '</span>.',
      "Konfirmasi rincian Anda akan tampil di layar, cek dan tekan 'Ya' untuk melanjutkan.",
      'Transaksi Berhasil.',
      'Jika pembayaran berhasil, Voucher akan dikirim secara otomatis melalui Whatsapps, email atau SMS.',
      'Voucher juga bisa dilihat di halaman Profil anda.'
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
