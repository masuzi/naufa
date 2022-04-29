<style>
  .gradient {
    @apply bg-gradient-to-r from-pink-500 to-yellow-500;
  }
</style>

<script>
  import MobFooter from '$lib/components/mobile/MobFooter.svelte'
  import '../../app.css'
  import { showCart } from '$lib/components/cart/stores'
  import Cart from '$lib/components/cart/Cart.svelte'
  import NavNotHome from '$lib/components/landing/NavNotHome.svelte'
  import FooterNotHome from '$lib/components/landing/FooterNotHome.svelte'
</script>

{#if $showCart}
  <Cart />
{/if}
<main>
  <div class="mb-40">
    <NavNotHome />
  </div>
  <div class="mx-4 mb-20">
    <slot />
  </div>
  <FooterNotHome />
  <div class=" fixed bottom-0 z-40 w-full  md:hidden">
    <MobFooter />
  </div>
</main>
