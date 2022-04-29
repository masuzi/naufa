<style>
  .pinned {
    @apply mx-auto mt-4 flex w-5/6 flex-col rounded-lg bg-white shadow-lg sm:-mt-6 lg:mx-0 lg:w-1/3;
  }
  .unpinned {
    @apply mx-auto mt-4 flex w-5/6 flex-col rounded-none bg-white lg:mx-0 lg:w-1/4 lg:rounded-l-lg;
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
</style>

<script>
  import Icon from '@iconify/svelte'
  import Button from '../ui/Button.svelte'
  // import { check_out_store } from '../checkout/store'
  import { showCart, cart, check_out_store } from '../cart/stores'
  import { goto } from '$app/navigation'
  import { formatRupiah } from './BriApi'
  import Gauge from './Gauge.svelte'
  import CartItem from '../cart/CartItem.svelte'
  export let product

  let innerWidth
  let quantity = 1
  function openCart() {
    // console.log('triggered open cart')
    // if (innerWidth < 640) {
    // goto('/cart')
    // } else {
    $showCart = true
    // }
  }

  function addToCart() {
    const index = $cart.findIndex(cartitem => cartitem.id === product.id)

    if (index === -1) {
      const cartItem = {
        ...product,
        // id: product.id,
        // bandwith: product.bandwith,
        // name: product.name,
        // price: product.price,
        // image: product.image,
        quantity
      }

      $cart = [...$cart, cartItem]
    } else {
      $cart[index].quantity += quantity
      $cart = $cart
    }
    quantity = 1
    $check_out_store = true
    openCart()
  }
</script>

<svelte:window bind:innerWidth />
{#if product.type !== 'Bulanan'}
  <form on:submit|preventDefault={addToCart} class="flex w-full justify-between mb-3">
    <div class="inline-flex">
      <!-- import Icon from '@iconify/svelte'; -->
      <Icon icon={'arcticons:calendar-proton-1'} class="mr-3 h-6 w-6 font-bold" />
      <!-- <img
        class="mr-3 h-12 w-12 "
        src="https://res.cloudinary.com/masuzi/image/upload/v1648793253/wifi/{product.img}.png"
        alt={product.name}
      /> -->
      {product.name}
    </div>
    <div class="text-sm lg:text-2xl font-bold text-blue-500">
      <span class="text-sm">Rp. </span>{formatRupiah(product.price)}
    </div>
    <!-- <Button secondary>Langganan</Button> -->
    <div>
      <button
        type="submit"
        class="inline-block px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium text-xs focus:ring-2 focus:outline-none focus:ring-cyan-300 leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >Beli</button
      >
    </div>

    <slot />
  </form>
{:else}
  <!-- start card  -->
  <div class={product.pinned ? 'pinned' : 'unpinned'}>
    <form on:submit|preventDefault={addToCart}>
      <div
        class="flex-1 overflow-hidden rounded-t rounded-b-none bg-white text-gray-600 shadow"
      >
        <div class="border-b-4 p-8 text-center text-1xl md:text-3xl font-bold">
          {product.name}
        </div>
        <div class="flex items-center justify-center pt-3 text-6xl">
          <Gauge value={product.bandwith} />
        </div>
        <ul
          class="w-full text-center text-sm {product.pinned
            ? 'text-base font-bold'
            : 'text-sm'}"
        >
          {#each product.benefit as product}
            <li class="border-b py-4">{product.benefit}</li>
          {/each}
        </ul>
      </div>
      <div
        class="mt-auto flex-none overflow-hidden rounded-b rounded-t-none bg-white p-6"
      >
        <div class="w-full pt-6 text-center text-3xl font-bold text-gray-600">
          <span class="text-sm">Rp.</span>
          {formatRupiah(product.price)}
          <span class="text-sm">/per bulan </span>
        </div>

        <Button secondary>Langganan</Button>
      </div>
    </form>
  </div>
  <!-- end card  -->
{/if}
