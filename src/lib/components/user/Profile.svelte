<style>
  .bg-gelap {
    background-color: #001e26;
  }
  .bg-btn {
    background-color: #ff6446;
  }
  .gradient {
    @apply from-pink-500 to-yellow-500 bg-gradient-to-r;
    /* from-pink to-yellow; */
  }
</style>

<script lang="ts">
  import { fade, fly } from 'svelte/transition'
  import { check_out_store } from '$lib/components/cart/stores.js'
  import { session } from '$app/stores'
  import { total_item } from '../cart/stores'
  import CartButton from './../cart/CartButton.svelte'
  import Icon from '@iconify/svelte'
  import Subscribe from './Subscribe.svelte'
  import Complain from './Complain.svelte'
  import Me from './Me.svelte'
  import MeTrans from './MeTrans.svelte'
  import MeVoucher from './MeVoucher.svelte'
  import Voucher from './Voucher.svelte'
  import MeMessage from './MeMessage.svelte'
  import MeCheckout from './MeCheckout.svelte'
  import { goto } from '$app/navigation'
  import MeEdit from './MeEdit.svelte'
  export let id
  // const link = '/user/' + $session.user
  function goCheckout() {
    // closeCart()
    goto('/user/' + $session.user)
    $check_out_store = false
  }
  function goHome() {
    // closeCart()
    goto('/')
    $check_out_store = false
  }
  let checkout = false,
    transaction = true,
    voucher = false,
    subscribe = false,
    complain = false,
    meEdit = false
  function clickTransaction() {
    transaction = true
    $check_out_store = false
    voucher = false
    subscribe = false
    complain = false
    meEdit = false
  }
  function clickVoucher() {
    voucher = true
    transaction = false
    $check_out_store = false
    subscribe = false
    complain = false
    meEdit = false
  }
  function clickSubscribe() {
    subscribe = true
    voucher = false
    $check_out_store = false
    transaction = false
    complain = false
    meEdit = false
  }
  function clickComplain() {
    complain = true
    subscribe = false
    $check_out_store = false
    voucher = false
    transaction = false
    meEdit = false
  }
  function clickEdit() {
    meEdit = true
    complain = false
    subscribe = false
    $check_out_store = false
    voucher = false
    transaction = false
  }
  function endEdit() {
    meEdit = false
    complain = false
    subscribe = false
    $check_out_store = false
    voucher = false
    transaction = true
  }
</script>

<div
  class=" gradient min-h-screen text-xs flex flex-col max-w-md mx-auto bg-gray-200 opacity-100 font-poppins px-4 bg-no-repeat bg-cover bg-center"
>
  <!-- {#if $check_out_store} -->
  <!-- <div class="w-full bg-white rounded-lg shadow md:rounded-l-none mt-10 md:w-96">
      <div class=" h-7 w-7 ml-auto mr-2">
        <button
          class="block mt-2 p-1 hover:bg-gray-500 bg-gray-900 rounded-full focus:outline-none"
          type="button"
          on:click={goCheckout}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-white "
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
          </svg>
        </button>
      </div> -->

  <!-- <MeCheckout
        handphone={$session.handphone}
        merchantOrderId={$session.merchantOrderId}
      /> -->
  <!-- </div> -->
  <!-- {:else} -->
  <div class="flex justify-between px-1 pt-4 items-center">
    <button type="button" on:click={goHome}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
        ><path fill="none" d="M0 0h24v24H0z" /><path
          d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"
        /></svg
      >
    </button>
    <div>
      <p class="font-semibold">Profil</p>
    </div>
    <div>
      {#if $total_item >= 1}
        <CartButton />{/if}
      <!-- <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="black"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg> -->
    </div>
  </div>

  <!-- <MeEdit {id} /> -->
  {#if !meEdit}
    <Me {id} />
    <button class="text-right text-blue-800" type="button" on:click={clickEdit}>
      Edit Profil
    </button>
    <div in:fade out:fly={{ x: 400 }} class="pt-12 px-4 w-full flex flex-col mb-8">
      <!-- <p class="font-semibold text-gray-600">Status</p> -->
      <div
        class="flex items-center mx-auto justify-between overflow-y-scroll text-gray-500 cursor-pointer space-x-3"
      >
        <div
          class="flex flex-col items-center justify-center w-16 h-16  bg-green-200 rounded-lg text-green-600 shadow hover:shadow-md cursor-pointer mb-2 p-1 bg-white transition ease-in duration-300"
          on:click={clickTransaction}
        >
          <Icon icon="noto-v1:shopping-cart" class="w-16 h-16" />
          <p class=" mt-1">Transaksi</p>
        </div>
        <div
          class="flex flex-col items-center justify-center w-16 h-16  bg-yellow-200 rounded-lg text-yellow-600  shadow hover:shadow-md cursor-pointer mb-2 p-1 bg-white transition ease-in duration-300"
          on:click={clickVoucher}
        >
          <Icon icon="noto-v1:credit-card" class="w-16 h-16" />
          <p class="mt-1">Voucher</p>
        </div>

        <div
          class="flex flex-col items-center justify-center w-16 h-16  bg-indigo-200  rounded-lg  text-indigo-500 shadow hover:shadow-md cursor-pointer mb-2 p-1 bg-white transition ease-in duration-300"
          on:click={clickSubscribe}
        >
          <Icon icon="noto-v1:bar-chart" class="w-16 h-16" />
          <p class="mt-1">Langganan</p>
        </div>
        <div
          class="flex flex-col items-center justify-center w-16 h-16  bg-pink-200   rounded-lg text-pink-500 shadow hover:shadow-md cursor-pointer mb-2 p-1 bg-white transition ease-in duration-300"
          on:click={clickComplain}
        >
          <Icon icon="noto-v1:index-pointing-up" class="w-16 h-16" />
          <p class="mt-1">Pesan</p>
        </div>
      </div>
    </div>
    <div class="mb-16">
      {#if transaction}<MeTrans handphone={$session.handphone} /> {/if}
      {#if voucher}<MeVoucher handphone={$session.handphone} />{/if}
      {#if subscribe}<Subscribe />{/if}
      {#if complain}<MeMessage handphone={$session.handphone} />{/if}
    </div>
  {:else}<MeEdit {id} /><button
      class="text-right text-blue-800"
      type="button"
      on:click={endEdit}
    >
      Selesai Edit
    </button>{/if}
</div>

<!-- desktop version  -->
<!-- <section class=" text-gray-600 body-font hidden md:block">
  <div class="text-xs md:text-sm container px-5 py-24 mx-auto flex flex-wrap">
    <div
      class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10"
    >
      <div class="w-full sm:p-4 px-4 mb-6">
        <h1 class="title-font font-medium text-xl mb-2 text-gray-900">
          Selamat datang di Simantep
        </h1>
        <div class="leading-relaxed">Penyedia layanan Wifi Murah.</div>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <Icon icon="noto-v1:shopping-cart" class="w-16 h-16" />
        <p class="leading-relaxed">Transaksi</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <Icon icon="noto-v1:credit-card" class="w-16 h-16" />
        <p class="leading-relaxed">Voucher</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <Icon icon="noto-v1:bar-chart" class="w-16 h-16" />
        <p class="leading-relaxed">Langganan</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <Icon icon="noto-v1:index-pointing-up" class="w-16 h-16" />
        <p class="leading-relaxed">Keluhan</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <Icon icon="noto-v1:man" class="w-16 h-16" />
        <p class="leading-relaxed">Profile</p>
      </div>
    </div>
    <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <MeTrans handphone={$session.handphone} /> -->
<!-- <img
        class="object-cover object-center w-full h-full"
        src="https://dummyimage.com/600x300"
        alt="stats"
      /> -->
<!-- </div>
  </div>
</section> -->
