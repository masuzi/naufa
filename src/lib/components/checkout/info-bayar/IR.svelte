<script>
  import InfoRetail from './InfoRetail.svelte'
  import InfoTab from './InfoTab.svelte'
  const indomart_l = [
    'Catat dan simpan kode pembayaran.',
    'Datang ke gerai Indomaret / Ceriamart / Lion Super Indo.',
    'Informasikan kepada kasir/ petugas bahwa anda akan melakukan pembayaran Simantep.',
    'Apabila kasir mengatakan tidak melayani pembayaran untuk Simantep, Anda dapat menginformasikan bahwa pembayaran ini merupakan Payment Point pada kategori e-Commerce.',
    'Kasir/ Petugas akan meminta kode pembayaran. Berikan kode pembayaran yang anda dapatkan.',
    'Selanjutnya kasir akan memasukkan kode pembayaran yang anda berikan kedalam sistem dan akan memberitahukan nominal yang harus anda bayar.',
    'Lakukan pembayaran sesuai jumlah yang diinformasikan dan tunggu hingga proses selesai.',
    'Setelah anda melakukan pembayaran, kasir akan memberikan struk apabila tidak diberikan mintalah struk tersebut. Simpan struk tersebut.',
    'Pembayaran anda akan langsung terdeteksi secara otomatis.'
  ]
</script>

<div class="container mx-auto">
  <div class="rounded overflow-hidden">
    <InfoRetail>
      Dapatkan nomor kode pembayaran, setelah menekan tombol Bayar dibawah. Pembayaran
      bisa melalui Indomaret / Ceriamart / Lion Super Indo.
    </InfoRetail>
    <InfoTab
      tabindex="39"
      title="Indomaret / Ceriamart / Lion Super Indo"
      lists={indomart_l}
    />
  </div>
</div>
