<style>
  .btn-blue {
    @apply text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2;
  }
</style>

<script>
  import { session } from '$app/stores'
  import InfoAgen from '../checkout/info-bayar-no-recurring/InfoAgen.svelte'
  import Qris from '../checkout/info-bayar-no-recurring/Qris.svelte'
  import OV from '../checkout/info-bayar-no-recurring/OV.svelte'
  import IR from '../checkout/info-bayar-no-recurring/IR.svelte'
  import FT from '../checkout/info-bayar-no-recurring/FT.svelte'
  import BR from '../checkout/info-bayar-no-recurring/BR.svelte'
  import B1 from '../checkout/info-bayar-no-recurring/B1.svelte'
  import A1 from '../checkout/info-bayar-no-recurring/A1.svelte'
  import S1 from '../checkout/info-bayar-no-recurring/S1.svelte'
  import VA from '../checkout/info-bayar-no-recurring/VA.svelte'
  import BT from '../checkout/info-bayar-no-recurring/BT.svelte'
  import NC from '../checkout/info-bayar-no-recurring/NC.svelte'
  import I1 from '../checkout/info-bayar-no-recurring/I1.svelte'
  import Mandiri from '../checkout/info-bayar-no-recurring/Mandiri.svelte'
  import CheckOut from '../checkout/CheckOut.svelte'
  import Payment from '../checkout/Payment.svelte'
  import { fade, fly } from 'svelte/transition'
  import { flip } from 'svelte/animate'
  import {
    check_out_store,
    showCart,
    cart,
    total,
    check_out_response,
    payment_methode,
    agen,
    e_banking,
    m_banking,
    retail_select,
    dompet_select,
    qris_select
  } from './stores'
  import CartItem from './CartItem.svelte'
  import { page } from '$app/stores'
  import { formatRupiah } from '../product/BriApi'
  import { tweened } from 'svelte/motion'
  import { cubicInOut } from 'svelte/easing'
  import { goto } from '$app/navigation'
  import PaymentMethode from '../landing/payment-methode.svelte'

  const display_total = tweened($total, {
    easing: cubicInOut
  })
  $: display_total.set($total)

  function closeCart() {
    if (
      $page.url.pathname === '/cart' ||
      $page.url.pathname === `/user/${session.user}`
    ) {
      history.back()
    } else {
      // alert('test')
      $payment_methode = ''
      $agen = false
      $e_banking = ''
      $m_banking = false
      $retail_select = false
      $dompet_select = false
      $qris_select = false
      $showCart = false
    }
  }
  function goCheckout() {
    closeCart()
    goto('/check-out')
    $check_out_store = true
  }
  let payment = '1'
  let pp = `<Brimo />'`
</script>

<div
  on:click|self={closeCart}
  transition:fade={{ duration: 200 }}
  class="z-40 fixed inset-0 bg-black/70 "
>
  <aside
    transition:fly={{ opacity: 1, x: 500 }}
    class="text-xs flex flex-col outline-8 bg-white h-full max-w-full w-[500px] ml-auto z-50"
  >
    <header class="flex items-center justify-between border-b-2 border-black p-3">
      <h1 class="text-base md:text-3xl text-neutral-900 tracking-wide pl-3">
        {#if $check_out_store}
          Pembelian{:else}Kode Bayar{/if}
      </h1>
      <button on:click|stopPropagation|once={closeCart}
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 text-neutral-900 hover:text-red-500 transition duration-50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg></button
      >
    </header>

    <main
      class="flex-1 flex flex-col py-4 overflow-y-auto border-4 overflow-x-hidden max-w-full w-[500px]"
    >
      {#if $cart.length != 0}
        {#each $cart as item (item._id)}
          <li animate:flip in:fade out:fly={{ x: 400 }} class=" list-none">
            <CartItem {item} />
          </li>
        {/each}

        <button
          out:fade
          on:click|once|stopPropagation|capture={closeCart}
          class="btn-blue mx-2.5">Cari Produk Lain</button
        >
        <div in:fade out:fly={{ x: 400 }}><CheckOut /></div>

        <!-- goCheckout() -->
        <!-- <Brimo /> -->
        <!-- <Payment /> -->
      {:else if !$check_out_store}
        {#if $agen}<InfoAgen />{/if}
        {#if $m_banking === 'Virtual Akun MAYBANK'}<VA />{/if}
        {#if $m_banking === 'Virtual Akun Bank Permata'}<BT />{/if}
        {#if $m_banking === 'Virtual Akun CIMB Niaga'} <B1 />{/if}
        {#if $m_banking === 'Virtual Akun ATM Bersama'} <A1 />{/if}
        {#if $m_banking === 'Virtual Akun BNI'}<I1 />{/if}
        {#if $m_banking === 'Virtual Akun Mandiri'} <Mandiri />{/if}
        {#if $m_banking === 'Virtual Akun Bank Sampoerna'} <S1 />{/if}
        {#if $m_banking === 'Virtual Akun Bank Neo Commerce'}<NC />{/if}
        {#if $m_banking === 'Virtual Akun BRI'}<BR />{/if}
        {#if $retail_select === 'Alfamart / Kantor Pos / Pegadaian'}<FT />{/if}
        <!-- {#if $qris_select}<Qris />{/if} -->
      {:else}
        <div
          in:fade={{ delay: 400 }}
          class="flex-1 text-center flex flex-col justify-center items-center space-y-4"
        >
          <h1 class="font-semibold text-2xl">Keranjang Kosong</h1>
          <button on:click|once|stopPropagation|capture={closeCart} class="btn-blue"
            >Lanjut Belanja</button
          >
        </div>
      {/if}
    </main>
  </aside>
</div>

<svelte:window
  on:keydown={event => {
    if (event.key == 'Escape') {
      closeCart()
    }
  }}
/>
