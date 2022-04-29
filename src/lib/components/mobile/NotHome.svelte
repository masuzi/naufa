<style>
  .frosted {
    backdrop-filter: blur(15px);
    background-color: hsla(0, 0%, 100%, 0.75);
  }
</style>

<script lang="ts">
  import LogoutButton from '../auth/LogoutButton.svelte'
  import LoginButton from './../auth/LoginButton.svelte'
  import { session } from '$app/stores'
  import { goto } from '$app/navigation'
  import { showCart } from './../cart/stores.js'

  const changeUrl = (url: string) => {
    $showCart = false
    goto(url)
  }

  let footerMenu = [
    {
      name: 'Home',
      link: '/',
      offset: 200,
      svg: `
        <svg
          xmlns='http://www.w3.org/2000/svg'
          class='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='1.5'
            d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
          />
        </svg>
      `
    },
    {
      name: 'Voucher',
      link: '/#voucher',
      offset: 500,
      svg: `
        <svg
          xmlns='http://www.w3.org/2000/svg'
          class='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='1.5'
            d='M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z'
          />
        </svg>
      `
    },
    {
      name: 'Paket',
      link: '/#monthly',
      offset: 600,
      svg: `
        <svg
          xmlns='http://www.w3.org/2000/svg'
          class='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='1.5'
            d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
          />
        </svg>
      `
    }
    // {
    //   name: 'Beli',
    //   link: '/cart',
    //   svg: `
    //     <svg
    //       xmlns='http://www.w3.org/2000/svg'
    //       class='h-6 w-6'
    //       fill='none'
    //       viewBox='0 0 24 24'
    //       stroke='currentColor'
    //     >
    //       <path
    //         stroke-linecap='round'
    //         stroke-linejoin='round'
    //         stroke-width='1.5'
    //         d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
    //       />
    //     </svg>
    //   `
    // },
    // {
    //   name: 'Akun',
    //   link: '/user',
    //   svg: `
    //     <svg
    //       xmlns='http://www.w3.org/2000/svg'
    //       class='h-6 w-6'
    //       fill='none'
    //       viewBox='0 0 24 24'
    //       stroke='currentColor'
    //     >
    //       <path
    //         stroke-linecap='round'
    //         stroke-linejoin='round'
    //         stroke-width='1.5'
    //         d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
    //       />
    //     </svg>
    //   `
    // }
  ]

  function closeCart() {
    $showCart = false
  }
</script>

<section class="frosted shadow-inner">
  <div class="flex items-center justify-between ">
    {#each footerMenu as item, i}
      <!-- svelte-ignore a11y-missing-attribute -->
      <a
        class=" cursor-pointer group py-1 hover:bg-gray-200 focus:outline-none w-20"
        on:click={closeCart}
        on:click={e => {
          e.preventDefault()
          changeUrl(item.link)
        }}
      >
        <div
          class="p-1 rounded-full mx-auto text-gray-700 group-hover:bg-gray-200 group-active:bg-gray-200 max-w-max"
        >
          {@html item.svg}
        </div>
        <h3
          class="-mt-1 text-black tracking-wide text-xs text-center group-active:font-semibold"
        >
          {item.name}
        </h3>
      </a>
    {/each}
    {#if $session.authenticated}<LogoutButton /> {:else}<LoginButton /> {/if}
  </div>
</section>
