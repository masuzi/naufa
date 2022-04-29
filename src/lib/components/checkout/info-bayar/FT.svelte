<script>
  import InfoRetail from './InfoRetail.svelte'
  import InfoTab from './InfoTab.svelte'
  const retail_l = [
    'Catat dan simpan kode pembayaran anda.',
    'Datang ke Gerai retail (Alfamart, Kantor Pos, Pegadaian, & Dan-Dan).',
    'Informasikan kepada kasir akan melakukan “Pembayaran Finpay”.',
    'Tunjukkan dan berikan Kode Pembayaran ke Kasir.',
    'Lakukan pembayaran sesuai nominal yang diinformasikan oleh Kasir dan tunggu proses selesai.',
    'Minta dan simpan struk sebagai bukti pembayaran.',
    'Pembayaran anda akan langsung terdeteksi secara otomatis.'
  ]
</script>

<div class="container mx-auto">
  <div class="rounded overflow-hidden">
    <InfoRetail>
      Dapatkan nomor kode pembayaran, setelah menekan tombol Bayar dibawah. Pembayaran
      bisa melalui Alfamart, Kantor Pos atau Pegadaian.
    </InfoRetail>
    <InfoTab tabindex="38" title="Alfamart / Kantor Pos /Pegadaian" lists={retail_l} />
  </div>
</div>
