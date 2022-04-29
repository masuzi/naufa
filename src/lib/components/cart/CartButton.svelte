<script>
  import { total_item, showCart } from './stores'
  // $: total = $cart.reduce((acc, obj) => {
  //   return (acc += obj.quantity)
  // }, 0)
  $: offset = modulo($total_item, 1)
  function modulo(n, m) {
    // handle negative numbers
    return ((n % m) + m) % m
  }
  function openCart() {
    $showCart = true
  }
</script>

<!-- <button aria-label="show cart"
  ><svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 lg:h-7 hover:text-yellow-500 transition-colors duration-500 stroke-[1.5] lg:stroke-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
  {$total_item}
</button> -->

<!-- <a href="/cart" class:selected="{section === 'cart'}"> -->
<button
  class="flex text-xs items-center mr-5 font-semibold transform focus:outline-none whitespace-nowrap active:scale-95 hover:text-primary-500 group"
  on:click={openCart}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 lg:h-7 hover:text-blue-500 text-pink-800 transition-colors duration-500 stroke-[1.5] lg:stroke-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>

  <span
    class=" counter-digits absolute flex items-center justify-center p-0.5 text-extrasmall text-white bg-blue-800 group-hover:bg-primary-500 rounded-full w-4 h-4 top-0 right-0 -mr-2 -mt-2"
    style="transform: translate(0, {100 * offset}%)">{$total_item}</span
  >
</button>
<!-- </a> -->
