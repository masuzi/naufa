<script lang="ts">
  import { check_out_response } from '../../cart/stores'
  import InfoVa from './InfoVa.svelte'
  import InfoTab from './InfoTab.svelte'
  let bank_l = [
      'Login ke akun ibank Mandiri anda.',
      'Klik menu Multi Payment.',
      'Pilih Penyedia Jasa.',
      'Pilih Duitku.',
      'Masukkan 16 digit nomor Virtual Account <span class="font-bold text-red-700">' +
        $check_out_response.merchantOrderId +
        `</span>` +
        ' dan nominal sebesar:<span class="font-bold text-red-700">' +
        $check_out_response.total +
        '</span>.',
      'Pilih lanjutkan jika nama dan perusahaan.'
    ],
    ibank_l = [
      'Pilih Menu Bayar.',
      'Pilih menu e-Commerce.',
      'Cari penyedia jasa Duitku (89410).',
      'Masukan nomor Virtual Account (MVA) yaitu: <span class="font-bold text-red-700">' +
        $check_out_response.merchantOrderId +
        '</span>.',
      'Masukan nominal sebesar: <span class="font-bold text-red-700">' +
        $check_out_response.total +
        '</span>.',
      'Klik Lanjutkan.'
    ],
    atm_l = [
      'Masukkan PIN.',
      'Pilih menu Bayar/Beli.',
      'Pilih menu Multi Payment.',
      'Masukkan kode Pelanggan atau kode Bayar dengan dengan 16 digit nomor Virtual yaitu: <span class="font-bold text-red-700">' +
        $check_out_response.merchantOrderId +
        '</span>.',
      'Masukkan jumlah pembayaran sebesar: <span class="font-bold text-red-700">' +
        $check_out_response.total +
        '</span>.',
      'Pilih Nomor Item Pembayaran lalu tekan Ya.',
      'Kemudian pilih Ya untuk menyetujui transaksi tersebut.'
    ],
    atmb_l = [
      'Masukkan PIN.',
      'Pilih menu Transaksi Lainnya.',
      'Pilih menu Ke Rekening Bank Lain.',
      'Masukkan kode Mandiri VA (008) kemudian tekan Benar.',
      'Masukkan 16 digit nomor Virtual Account yaitu: <span class="font-bold text-red-700">' +
        $check_out_response.merchantOrderId +
        '</span>.',
      'Masukkan jumlah pembayaran sebesar: <span class="font-bold text-red-700">' +
        $check_out_response.total +
        '</span>.',
      'Pilih Benar untuk menyetujui transaksi tersebut.'
    ],
    atmp_l = [
      'Masukkan PIN.',
      'Pilih menu Transaksi.',
      'Pilih menu Ke Rekening Bank Lain.',
      'Masukkan kode Mandiri VA (008) diikuti dengan 16 digit nomor Virtual Account yaitu: <span class="font-bold text-red-700">' +
        $check_out_response.merchantOrderId +
        '</span>.',
      'Masukkan jumlah pembayaran sebesar: <span class="font-bold text-red-700">' +
        $check_out_response.total +
        '</span>.',
      'Pilih Benar untuk menyetujui transaksi tersebut.'
    ]
</script>

<div class="container mx-auto">
  <div class="rounded overflow-hidden">
    <InfoVa />
    <!-- accordion-tab  -->
    <InfoTab tabindex="6" title="Bank Mandiri" lists={bank_l} />
    <!-- accordion-tab -->
    <!-- accordion-tab  -->
    <InfoTab tabindex="7" title="Livin' by Mandiri" lists={ibank_l} />
    <!-- accordion-tab -->
    <InfoTab tabindex="8" title="ATM Mandiri" lists={atm_l} />
    <!-- accordion-tab  -->
    <InfoTab tabindex="9" title="ATM Bersama" lists={atmb_l} />
    <!-- accordion-tab -->
    <InfoTab tabindex="10" title="ATM Prima" lists={atmp_l} />
  </div>
</div>
