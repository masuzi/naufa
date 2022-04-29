<script lang="ts">
  import { check_out_response } from '../../cart/stores'
  import InfoVa from './InfoVa.svelte'
  import InfoTab from './InfoTab.svelte'
  const mbank_l = [
      'Akses BNI Mobile Banking.',
      'Masukkan User ID dan Password.',
      'Pilih menu Transfer.',
      'Pilih menu Virtual Account Billing kemudian pilih rekening debet.',
      'Masukkan 16 digit nomor Virtual Account yaitu: <span class="font-bold text-red-700">' +
        $check_out_response.vaNumber +
        "</span> pada menu 'inputbaru'.",
      'Tagihan yang harus dibayarkan akan muncul pada layar konfirmasi.',
      'Konfirmasi transaksi dan masukkan Password Transaksi.',
      'Pembayaran Anda Telah Berhasil.',
      'Simpan bukti transaksi.'
    ],
    ibank_l = [
      'Akses ibank.bni.co.id',
      'Masukkan User ID dan Password.',
      'Klik menu Transfer, lalu pilih Virtual Account Billing.',
      'Masukkan 16 digit nomor Virtual Account yaitu: <span class="font-bold text-red-700">' +
        $check_out_response.vaNumber +
        '</span>. Lalu pilih rekening debet yang akan digunakan. Kemudian tekan Lanjut.',
      'Kemudin tagihan yang harus dibayarkan akan muncul pada layar konfirmasi.',
      'Masukkan Kode Otentikasi Token.',
      'Pembayaran Anda telah berhasi.',
      'Simpan bukti transaksi.'
    ],
    atm_l = [
      'Masukkan Kartu Anda.',
      'Pilih Bahasa.',
      'Masukkan PIN ATM Anda.',
      'Pilih Menu Lainnya.',
      'Pilih Transfer.',
      'Pilih Jenis rekening yang akan Anda gunakan (Contoh: Dari Rekening Tabungan).',
      'Pilih Virtual Account Billing.',
      'Masukkan 16 digit nomor Virtual Account yaitu: <span class="font-bold text-red-700">' +
        $check_out_response.vaNumber +
        '</span>. ',
      'Tagihan yang harus dibayarkan akan muncul pada layar konfirmasi.',
      'Konfirmasi, apabila telah sesuai, lanjutkan transaksi.',
      'Transaksi Anda telah selesai, silakan simpan bukti transaksi.'
    ],
    atmb_l = [
      'Pilih Transaksi Lainnya',
      'Pilih menu Transfer',
      'Pilih Transfer ke Bank Lain',
      'Masukkan kode bank BNI (009) diikuti dengan 16 digit nomor Virtual Account yaitu: <span class="font-bold text-red-700">' +
        $check_out_response.vaNumber +
        '</span>.',
      'Masukkan nominal transfer sebesar: <span class="font-bold text-red-700">' +
        $check_out_response.total +
        '</span>. Pastikan nominal sesuai',
      "Konfirmasi rincian Anda akan tampil di layar, cek dan tekan 'Ya' untuk melanjutkan",
      'Transaksi Berhasil'
    ],
    atmp_l = [
      'Masukkan kartu ke mesin ATM Bersama.',
      'Pilih Transaksi Lainnya',
      'Pilih menu Transfer..',
      'Pilih Transfer ke Bank Lain.',
      'Masukkan kode bank BNI (009) diikuti dengan 16 digit nomor Virtual Account yaitu: <span class="font-bold text-red-700">' +
        $check_out_response.vaNumber +
        '</span>.',
      'Masukkan nominal transfer sebesar: <span class="font-bold text-red-700">' +
        $check_out_response.total +
        '</span>. Pastikan nominal sesuai.',
      "Konfirmasi rincian Anda akan tampil di layar, cek dan tekan 'Ya' untuk melanjutkan.",
      'Transaksi Berhasil.'
    ]
</script>

<div class="container mx-auto">
  <div class="rounded overflow-hidden">
    <InfoVa />
    <InfoTab tabindex="10" title="Mobile Banking BNI" lists={mbank_l} />
    <InfoTab tabindex="11" title="Ibank Personal (Internet Banking)" lists={ibank_l} />
    <InfoTab tabindex="12" title="ATM BNI" lists={atm_l} />
    <InfoTab tabindex="13" title="ATM Bersama" lists={atmb_l} />
    <InfoTab tabindex="14" title="ATM Prima" lists={atmp_l} />
  </div>
</div>
