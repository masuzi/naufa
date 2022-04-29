<script lang="ts">
  import { check_out_response } from '../../cart/stores'
  import InfoTab from './InfoTab.svelte'
  import InfoVa from './InfoVa.svelte'
  export let vaNumber
  export let total
  const brimo_i = '1',
    brimo_t = 'BRIMO',
    brimo_l = [
      'Lakukan log in pada aplikasi BRI Mobile (Android/Iphone).',
      'Pilih Menu BRIVA.',
      'Pilih Pembayaran Baru.',
      'Masukan <span class="font-bold text-red-700">1308-3' +
        $check_out_response.vaNumber +
        '</span>.',
      'Masukan PIN BRIMO Anda.',
      'Validasi pembayaran anda.',
      'Pembayaran Selesai.'
    ],
    ebank = '1',
    ebank_t = 'BRI Internet Banking',
    ebank_l = [
      'Lakukan log in pada website Internet Banking BRI (ib.bri.co.id)',
      'Pilih menu Pembayaran (Scroll ke bawah.)',
      'Pilih BRIVA.',
      'Pilih Rekening.',
      'Masukkan <span class="font-bold text-red-700">1308-3' +
        $check_out_response.vaNumber +
        '</span> dan Pilih Kirim.',
      'Masukan password Internet Banking BRI/BRIMO.',
      'Klik permintaan mToken.',
      'Masukan mToken Internet Banking BRI dan Klik kirim.',
      'Pembayaran Selesai.'
    ],
    atm_i = '3',
    atm_t = 'ATM BRI',
    atm_l = [
      'Masukkan Kartu ATM BRI dan PIN.',
      'Pilih menu LAINNYA.',
      'Pilih menu PEMBAYARAN/PEMBELIAN.',
      'ilih menu PEMBAYARAN/PEMBELIAN LAIN.',
      'Pilih menu BRIVA.',
      'Masukkan <span class="font-bold text-red-700">1308-3' +
        $check_out_response.vaNumber +
        '</span> dan tekan BENAR.',
      'Konfirmasi pembayaran dengan menekan Ya.',
      'Pembayaran Selesai.'
    ],
    atmb_i = '4',
    atmb_t = 'ATM Bersama',
    atmb_l = [
      'Masukkan kartu ke mesin ATM Bersama.',
      'Pilih Transaksi lainnya.',
      'Pilih menu Transfer.',
      'Pilih Transfer ke Bank Lain.',
      'Masukkan kode Bank Rakyat Indonesia/BRI 002 dan 16 Digit nomor Virtual Account yaitu: <span class="font-bold text-red-700">' +
        $check_out_response.vaNumber +
        '</span>.',
      'Masukkan Nominal Transfer sebesar: <span class="font-bold text-red-700">' +
        $check_out_response.total +
        '</span>. Pastikan nominal sesuai.',
      "Konfirmasi rincian Anda akan tampil di layar, cek dan tekan 'Ya' untuk melanjutkan.",
      'Transaksi Berhasil.'
    ],
    atmp_i = '5',
    atmp_t = 'ATM Prima',
    atmp_l = [
      'Pilih Transaksi lainnya.',
      'Pilih menu Transfer.',
      'Pilih Transfer ke Bank Lain.',
      "Masukkan kode Bank Rakyat Indonesia/BRI '002' dan 16 Digit nomor Virtual Account yaitu: <span class='font-bold text-red-700'>" +
        $check_out_response.vaNumber +
        '</span>.',
      'Masukkan Nominal Transfer sebesar <span class="font-bold text-red-700">' +
        $check_out_response.total +
        '</span>. Pastikan nominal sesuai.',
      "Konfirmasi rincian Anda akan tampil di layar, cek dan tekan 'Ya' untuk melanjutkan.",
      'Transaksi Berhasil.'
    ]
</script>

<div class="container mx-auto">
  <div class="rounded overflow-hidden">
    <InfoVa {vaNumber} {total} />
    <InfoTab tabindex={brimo_i} title={brimo_t} lists={brimo_l} />
    <InfoTab tabindex={ebank} title={ebank_t} lists={ebank_l} />
    <InfoTab tabindex={atm_i} title={atm_t} lists={atm_l} />
    <InfoTab tabindex={atmb_i} title={atmb_t} lists={atmb_l} />
    <InfoTab tabindex={atmp_i} title={atmp_t} lists={atmp_l} />
  </div>
</div>
