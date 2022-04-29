<script>
  import '../app.css'
  import { showCart } from '$lib/components/cart/stores'
  import Cart from '$lib/components/cart/Cart.svelte'
  import MobFooter from '$lib/components/mobile/MobFooter.svelte'
</script>

{#if $showCart}
  <Cart />
{/if}
<main>
  <slot />
</main>
