<script context="module">
  export async function load({ session }) {
    if (!session.authenticated) {
      return {
        status: 302,
        redirect: '/auth/masuk'
      }
    }
    return {}
  }
</script>

<script>
  import '../../app.css'
  import { showCart } from '$lib/components/cart/stores'
  import Cart from '$lib/components/cart/Cart.svelte'
</script>

{#if $showCart}
  <Cart />
{/if}
<main>
  <slot />
</main>
