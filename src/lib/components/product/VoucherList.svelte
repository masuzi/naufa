<script>
  import { products_store } from '$lib/stores/product_store'
  import VoucherPackage from './VoucherPackage.svelte'
  $: hourly = $products_store.packages.filter(item => item.type.indexOf('Jam') !== -1)
  $: daily = $products_store.packages.filter(item => item.type.indexOf('Harian') !== -1)
  $: weekly = $products_store.packages.filter(
    item => item.type.indexOf('Mingguan') !== -1
  )
</script>

<div class="grid lg:grid-cols-3 mx-auto px-4 sm:px-6 lg:px-8py-4">
  <VoucherPackage title="Durasi Jam" duration={hourly} />
  <VoucherPackage title="Harian" duration={daily} />
  <VoucherPackage title="Mingguan" duration={weekly} />
</div>
