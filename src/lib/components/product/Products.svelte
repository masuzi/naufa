<script>
  import { browser } from '$app/env'
  import { products_store } from '$lib/stores/product_store'
  import { getProduct } from './graphql'
  import VoucherPackage from './VoucherPackage.svelte'
  import ProductList from './ProductList.svelte'
  if (browser) {
    products_store.subscribe(value => (localStorage.user = JSON.stringify(value)))
  }

  const url = import.meta.env.VITE_GRAPHQL_URL,
    name = '',
    type = '',
    limit = 100,
    page = 1,
    options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(getProduct(name, type, limit, page))
    }
  async function getProducts() {
    const response = await fetch(url, options)
    return await response.json()
  }
  // select
  let produtcs = undefined
  getProducts().then(({ data }) => {
    const get_produtcs = data.getProduct
    produtcs = get_produtcs || []
    products_store.set(get_produtcs)
  })
  // const produtcs = get_produtcs || [];
  // console.log($products_store)

  $: hourly = $products_store.products
    ? $products_store.products.filter(item => item.type.indexOf('Jam') !== -1)
    : []
  $: daily = $products_store.products
    ? $products_store.products.filter(item => item.type.indexOf('Harian') !== -1)
    : []
  $: weekly = $products_store.products
    ? $products_store.products.filter(item => item.type.indexOf('Mingguan') !== -1)
    : []
  $: monthly = $products_store.products
    ? $products_store.products.filter(item => item.type.indexOf('Bulanan') !== -1)
    : []
</script>

<!-- {#await $products_store} loading {:then s} {/await} -->
<!-- <div id="voucher" class="bg-white w-full">
  <h1
    class="w-full mb-2 text-center text-1xl md:text-3xl font-bold leading-tight text-gray-800"
  >
    Voucher
  </h1>

  <div class="grid lg:grid-cols-3 bg-white px-4 sm:px-6 lg:px-8">
    <VoucherPackage title="Durasi Jam" duration={hourly} />
    <VoucherPackage title="Harian" duration={daily} />
    <VoucherPackage title="Mingguan" duration={weekly} />
  </div>
</div> -->
<section id="monthly" class="bg-white px-4 sm:px-6 lg:px-8">
  <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
    <h1
      class=" my-2 w-full text-center text-1xl md:text-3xl font-bold leading-tight text-gray-800"
    >
      Pilihan Paket
    </h1>
    <div class="my-12 flex flex-col justify-center md:pt-12 sm:my-4 sm:flex-row">
      {#each monthly as product}<ProductList {product} />
      {/each}
    </div>
  </div>
</section>
