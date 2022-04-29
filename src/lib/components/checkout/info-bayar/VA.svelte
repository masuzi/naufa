<script lang="ts">
  import { check_out_response } from '../../cart/stores'
  import InfoVa from './InfoVa.svelte'
  import Icon from '@iconify/svelte'
  import InfoTab from './InfoTab.svelte'
  const mbank_l = [
      'Login ke website Maybank Personal Internet Banking (M2U).',
      'Di halaman Transfer.',
      'Pilih Maybank Virtual Account.',
      'Pilih rekening sumber dana, masukkan 16 digit nomor Virtual Account yaitu: <span class="font-bold text-red-700">' +
        $check_out_response.vaNumber +
        '</span> dan jumlah yang harus dibayar sebesar: <span class="font-bold text-red-700">' +
        $check_out_response.total +
        '</span>.',
      'Akan muncul layar konfirmasi, masukkan SMS token (TAC).'
    ],
    atm_l = [
      'Masukkan kartu ATM Maybank & PIN.',
      'Pilih Menu Pembayaran/Top Up Pulsa.',
      'Pilih Menu Virtual Account.',
      'Masukkan 16 digit nomor Virtual Account yaitu: <span class="font-bold text-red-700">' +
        $check_out_response.vaNumber +
        '</span>.',
      'Konfirmasi Validasi Pembayaran (Pastikan Nominal dan informasi sesuai).',
      'Simpan struk transaksi sebagai bukti pembayaran.'
    ],
    atmb_l = [
      'Pada Menu utama, pilih Transaksi .',
      'Pilih Transfer.',
      'Pilih Antar Bank Online.',
      'Masukkan kode bank Maybank (016) diikuti dengan 16 digit nomor Virtual Account yaitu: <span class="font-bold text-red-700">' +
        $check_out_response.vaNumber +
        '</span>.',
      'Masukkan jumlah pembayaran sebesar: <span class="font-bold text-red-700">' +
        $check_out_response.total +
        '.',
      "Akan muncul rincian pembayaran Anda. Jika sudah benar, klik 'Ya' untuk melanjutkan."
    ],
    atmp_l = [
      'Pada Menu utama, Pilih Transaksi Lainnya.',
      'Pilih Transfer.',
      'Pilih Ke Rek Bank Lain.',
      'Masukkan kode bank Maybank (016) lalu tekan Benar.',
      'Masukkan 16 digit nomor Virtual Account yaitu: <span class="font-bold text-red-700">' +
        $check_out_response.vaNumber +
        '</span>.',
      'Masukkan jumlah tagihan sebesar: <span class="font-bold text-red-700">' +
        $check_out_response.total +
        '</span>.',
      'Akan muncul rincian pembayaran Anda. Jika sudah benar, klik Ya untuk melanjutkan.'
    ]
</script>

<div class="container mx-auto">
  <div class="rounded overflow-hidden">
    <InfoVa />
    <InfoTab tabindex="25" title="Maybank2u Internet Banking" lists={mbank_l} />
    <InfoTab tabindex="27" title="ATM MayBank" lists={atm_l} />
    <InfoTab tabindex="28" title="ATM Bersama" lists={atmb_l} />
    <InfoTab tabindex="29" title="ATM Prima" lists={atmp_l} />
  </div>
</div>
