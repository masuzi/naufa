<script lang="ts">
  import { check_out_response } from '../../cart/stores'
  import InfoTab from './InfoTab.svelte'
  import InfoVa from './InfoVa.svelte'
  import Icon from '@iconify/svelte'
  import AtmBersama from './A1.svelte'
  let bank = 'Permata'
  const mbank_l = [
      'Buka aplikasi PermataMobile Internet (Android/iPhone).',
      'Masukkan User ID & Password.',
      'Pilih Pembayaran Tagihan.',
      'Pilih Virtual Account.',
      'Masukkan 16 digit nomor Virtual Account yaitu: <span class="font-bold text-red-700">' +
        $check_out_response.vaNumber +
        '.',
      'Masukkan nominal pembayaran sebesar: <span class="font-bold text-red-700">' +
        $check_out_response.total +
        '.',
      'Muncul Konfirmasi pembayaran.',
      'Masukkan otentikasi transaksi/token.',
      'Transaksi selesai.'
    ],
    ibank_l = [
      'Buka website PermataNet: https://new.permatanet.com',
      'Masukkan User ID & Password.',
      'Pilih Pembayaran Tagihan.',
      'Pilih Virtual Account.',
      'Masukkan 16 digit nomor Virtual Account yaitu: <span class="font-bold text-red-700">' +
        $check_out_response.vaNumber +
        '</span>. ',
      'Masukkan nominal pembayaran sebesar: <span class="font-bold text-red-700">' +
        $check_out_response.total +
        '</span>.',
      'Muncul Konfirmasi pembayaran.',
      'Masukkan otentikasi transaksi/token.',
      'Transaksi selesai.'
    ],
    atm_l = [
      'Pilih menu Transaksi Lainnya.',
      'Pilih menu Pembayaran.',
      'Pilih menu Pembayaran Lainnya.',
      'Pilih menu Virtual Account.',
      'Masukkan 16 digit nomor Virtual Account yaitu: <span class="font-bold text-red-700">' +
        $check_out_response.vaNumber +
        '</span>, dan tekan Benar.',
      "Pilih rekening yang menjadi sumber dana yang akan didebet,lalu tekan 'Ya' untuk konfirmasi transaksi."
    ],
    atmb_l = [
      'Pada Menu utama, Pilih Transaksi Lainnya.',
      'Pilih Transfer.',
      'Pilih Ke Rek Bank Lain.',
      'Masukkan kode bank Permata (013) lalu tekan Benar.',
      'Masukkan jumlah tagihan yang akan Anda bayar secara lengkap.',
      'Masukkan 16 digit nomor Virtual Account yaitu: <span class="font-bold text-red-700">' +
        $check_out_response.vaNumber +
        '</span> lalu tekan Benar.',
      "Akan muncul rincian pembayaran Anda. Jika sudah benar, klik 'Ya' untuk melanjutkan."
    ],
    atmp_l = [
      'Pada Menu utama, pilih Transaksi Lainnya.',
      'Pilih Transfer.',
      'Pilih Antar Bank Online.',
      'Masukkan kode bank Permata (013) diikuti dengan 16 digit nomor Virtual Account yaitu: <span class="font-bold text-red-700">' +
        $check_out_response.vaNumber +
        '</span>.',
      'Masukkan jumlah pembayaran sebesar: <span class="font-bold text-red-700">' +
        $check_out_response.total +
        '</span>.',
      'Akan muncul rincian pembayaran Anda.'
    ]
</script>

<div class="container mx-auto">
  <div class="rounded overflow-hidden">
    <InfoVa />
    <InfoTab tabindex="16" title="Permata Mobile" lists={mbank_l} />
    <InfoTab tabindex="17" title="Permata Net" lists={ibank_l} />
    <InfoTab tabindex="18" title="ATM Permata" lists={atm_l} />
    <InfoTab tabindex="19" title="ATM Bersama" lists={atmb_l} />
    <InfoTab tabindex="20" title="ATM Prima" lists={atmp_l} />
  </div>
</div>
