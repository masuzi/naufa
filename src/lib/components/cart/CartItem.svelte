<style>
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
</style>

<script>
  import Icon from '@iconify/svelte'
  import { cart, isRecurring } from './stores'
  import { formatRupiah } from '../product/BriApi'
  import Gauge from '../product/Gauge.svelte'
  export let item

  function removeItem(_id) {
    $cart = $cart.filter(value => value._id !== _id)
    $isRecurring = $cart.filter(item => item.type.indexOf('Bulanan') !== -1).length
    // if ($cart.filter(item => item.type.indexOf('Bulanan') !== -1) === []) {
    //   $isRecurring === false
    // }
  }

  function saveCart() {
    if (item.quantity > 99) item.quantity = 99
    else if (item.quantity < 1) item.quantity = 1
    $cart = [...$cart]
  }

  function addqty(toadd) {
    item.quantity += toadd
    saveCart()
  }
</script>

<div
  class="grid grid-cols-2 gap-x-2 border bg-neutral-100 border-black p-2 rounded-lg mb-4 mx-2.5 shadow-lg"
>
  <h1 class="col-span-2 font-medium">{item.name}</h1>
  {#if item.type === 'Bulanan'}
    <div class=" p-1 text-5xl {item.pinned ? 'text-blue-500' : 'text-yellow-500'}">
      <Gauge value={item.bandwith} />
      <!-- <span class="text-sm text-orange-500">{item.benefit}</span> -->
    </div>
  {:else}
    <section
      style=" background-image:url(https://res.cloudinary.com/masuzi/image/upload/v1648793253/wifi/{item.img}.png);"
      class=" aspect-square p-1 bg-contain bg-center bg-no-repeat bg-origin-content bg-white col-span-1"
    />{/if}

  <section class="col-span-1 flex flex-col justify-between aspect-square p-1">
    <h2 class="text-xl text-neutral-600">Rp.{formatRupiah(item.price)}</h2>
    <div class="pb-2">
      <span class="font-medium text-lg text-center"> Jumlah </span>
      <form on:submit|preventDefault class="flex items-center justify-center space-x-1">
        {#if item.quantity >= 2}
          <button type="button" on:click={() => addqty(-1)} class="aspect-square w-16">
            <Icon icon="ci:minus" width="w-12" />
          </button>{:else}
          <button
            type="button"
            on:click={() => removeItem(item._id)}
            class="aspect-square w-16"
          >
            <Icon icon="ci:minus" width="w-12" />
          </button>{/if}
        <input
          on:blur={() => {
            saveCart()
          }}
          bind:value={item.quantity}
          type="number"
          required
          min="1"
          max="99"
          class="rounded-lg appearance-none w-full h-10 border-2 text-center font-bold text-lg"
        />
        <!-- on:mouseleave={saveCart} -->
        <button type="button" on:click={() => addqty(1)} class="aspect-square w-16">
          <Icon icon="ci:plus" width="w-12" />
        </button>
        <button type="submit" />
      </form>
    </div>
    <button
      on:click={() => removeItem(item._id)}
      class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >Hapus</button
    >
  </section>
</div>
