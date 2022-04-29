<script lang="ts">
  import { session } from '$app/stores'
  import LogoutButton from '../auth/LogoutButton.svelte'
  import LoginButton from './../auth/LoginButton.svelte'
  import { goto } from '$app/navigation'
  import CartButton from '../cart/CartButton.svelte'
  import { showCart, total_item } from '../cart/stores'
  import { clickOutside, clickOutsideAction } from '../../actions/clickOutside'
  import Button from '../ui/Button.svelte'
  import AccountButton from '../auth/AccountButton.svelte'

  const changeUrl = (url: string) => {
    $showCart = false
    goto(url)
  }

  let y: number
  let navFloat = false
  if (!showCart) {
    navFloat = true
  }
  $: navFloat = y > 10

  let showMenu = false
  const toggleMenu = () => (showMenu = !showMenu)
  let hambugerEl

  const onClickOutsideAction = ({ target }) => {
    if (!hambugerEl.contains(target)) showMenu = false
  }
  const onClickOutside = ({
    detail: {
      event: { target }
    }
  }) => {
    if (!hambugerEl.contains(target)) showMenu = false
  }
</script>

<svelte:window bind:scrollY={y} />
<nav
  id="header"
  class={`
  fixed top-0 z-30 w-full text-white
  ${navFloat && !$showCart && 'bg-white'}
  `}
>
  <div
    class="container mx-auto mt-0 flex w-full flex-wrap items-center justify-between py-2"
  >
    <div class="flex items-center pl-4">
      <img
        class="w-24"
        alt="logo"
        src="https://res.cloudinary.com/masuzi/image/upload/v1648196092/wifi/reewojybjed8u8butghc.png "
      />

      <!-- svelte-ignore a11y-invalid-attribute -->
      <a
        class:text-gray-800={navFloat}
        class:text-white={!navFloat}
        class="text-1xl font-bold no-underline hover:no-underline lg:text-2xl"
        href="#"
      >
        NAUFAL WIFI
      </a>
    </div>
    <div bind:this={hambugerEl} class="block pr-4 lg:hidden">
      <div class="flex flex-col mt-1 cursor-pointer">
        {#if $total_item >= 1}
          <CartButton />{/if}
        <!-- <h3
        class="text-black mx-auto tracking-wide text-xs text-center group-active:font-semibold"
      >
        Beli
      </h3> -->
      </div>
      <button
        on:click={toggleMenu}
        id="nav-toggle"
        class="focus:shadow-outline flex transform items-center p-1 text-pink-800 transition duration-300 ease-in-out hover:scale-105 hover:text-gray-900 focus:outline-none"
      >
        <svg
          class="h-6 w-6 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <!-- use:clickOutsideAction={onClickOutsideAction} -->
    <!-- use:clickOutside on:clickOutside={onClickOutside} -->
    <div
      use:clickOutside
      on:clickOutside={onClickOutside}
      class:hidden={!showMenu}
      class="z-20 mt-2 hidden w-full flex-grow bg-white p-4 text-black lg:mt-0 lg:flex lg:w-auto lg:items-center lg:bg-transparent lg:p-0"
      id="nav-content"
    >
      <ul class="list-reset flex-1 items-center justify-end lg:flex">
        <li class="mr-3">
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a class="inline-block py-2 px-4 font-bold text-black no-underline" href="#"
            >Depan</a
          >
        </li>
        <li class="mr-3">
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a
            class="hover:text-underline inline-block py-2 px-4 text-black no-underline hover:text-gray-800"
            href="#voucher">Voucher</a
          >
        </li>
        <li class="mr-3">
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a
            class="hover:text-underline inline-block py-2 px-4 text-black no-underline hover:text-gray-800"
            href="#monthly">Paket</a
          >
        </li>
      </ul>

      <!-- <button
        id="navAction"
        class="focus:shadow-outline mx-auto mt-4 transform rounded-full bg-white py-4 px-8 font-bold text-gray-800 opacity-75 shadow transition duration-300 ease-in-out hover:scale-105 hover:underline focus:outline-none lg:mx-0 lg:mt-0"
      >
        Action
      </button> -->
      <div class="hidden md:block">
        {#if $total_item >= 1}
          <CartButton />{/if}
      </div>

      {#if $session.authenticated}<AccountButton /><LogoutButton />
      {:else}<LoginButton />
      {/if}
      <!-- <Button
        on:click={e => {
          e.preventDefault()
          changeUrl('/auth/masuk')
        }}
        secondary={navFloat}
        center={false}>Masuk</Button
      > -->
    </div>
  </div>
  <hr class="my-0 border-b border-gray-100 py-0 opacity-25" />
</nav>
