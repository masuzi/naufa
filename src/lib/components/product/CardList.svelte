<script>
  import { formatRupiah } from './BriApi'
  import Icon from '@iconify/svelte/'
  export let title = 'Durasi Jam'
  export let packages
</script>

<div class="flex  w-full flex-shrink flex-grow flex-col p-6 md:w-1/3">
  <div
    class="w-full rounded-t-md bg-gradient-to-br from-purple-600 to-blue-500 py-4 px-8"
  >
    <h1 class="text-xs md:text-sm font-bold text-gray-100">{title}</h1>
    <!-- <p class="mt-4 text-gray-300">
      Wasy, fast, and flexible compute built for a range of needs.
    </p> -->
  </div>
  <div class="mx-auto w-full px-2">
    <!-- <div class="divide-y divide-gray-300/50"> -->
    <div class="space-y-6 py-8 text-base leading-7 text-blue-600">
      <ul class="space-y-8 pb-4">
        {#each packages as p}
          <li class=" flex items-center justify-between">
            <div class="text-xs md:text-sm inline-flex items-center">
              <Icon icon={'noto-v1:stopwatch'} class="mr-3 h-6 w-6 " />

              {p.name}
            </div>
            <div class="text-3xl font-bold text-blue-500">
              <span class="text-xs md:text-sm ">Rp. </span>{formatRupiah(p.price)}
            </div>
            <button
              type="button"
              class="text-xs md:text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >Beli</button
            >
            <slot />
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>
