<script>
  import Icon from '@iconify/svelte'
  export let tabindex = '1'
  export let title = 'ShopeePay'
  export let lists = [
    'Buka Aplikasi Shopee',
    'Pilih menu “Saya” dan pilih ShopeePay',
    'Pilih Scan dan lakukan scan pada barcode pembayaran',
    'Pilih Bayar Sekarang',
    'Tunggu hingga proses pembayaran berhasil',
    'Transaksi Anda akan otomatis terkonfirmasi di sistem'
  ]
</script>

<div class="group border border-gray-400 accordion-section" {tabindex}>
  <div
    class="group  bg-white flex justify-between px-4 py-3 items-center text-gray-500 transition ease duration-500 cursor-pointer pr-10 relative"
  >
    <div
      class="group-focus:text-gray-800 font-medium transition ease duration-500 hover:text-blue-600"
    >
      {title}
    </div>
    <div
      class="h-4 w-4  items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-3 mr-3"
    >
      <Icon icon="fa:chevron-down" />
    </div>
  </div>
  <div
    class="group-focus:max-h-screen max-h-0 bg-white px-4 overflow-hidden ease duration-500"
  >
    <ol class="list-decimal p-2 text-gray-800 text-justify">
      {#each lists as l}
        <li>{l}</li>
      {/each}
    </ol>
  </div>
</div>
