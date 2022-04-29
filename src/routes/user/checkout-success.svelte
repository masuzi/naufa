<style>
  .zoom {
    transition: transform 0.7s;
  }
  .zoom:hover {
    transform: scale(0.98);
  }
  .gradient {
    @apply from-pink-500 to-yellow-500 bg-gradient-to-r;
    /* from-pink to-yellow; */
  }
</style>

<script>
  import CheckoutPage from '$lib/components/checkout/CheckoutPage.svelte'
  import { session } from '$app/stores'
  const link = '/user/' + $session.user
</script>

{$session.user}
<div class="h-screen py-20 gradient ">
  <div class="flex justify-center mx-4">
    <div
      class="hidden w-full px-8 bg-pink-500 opacity-80 rounded-lg rounded-r-none md:w-96 md:block"
    >
      <div class="py-6 mt-2 text-2xl font-bold text-white">SIMANTEP</div>
      <div class="text-gray-100 ">
        <div class="my-4">
          <div class="text-lg font-semibold ">
            <span class="mr-1 ">✓</span>
            Murahe
          </div>
          <div class="text-xs ">Banyak pilihan paket</div>
        </div>
        <div class="my-4">
          <div class="text-lg font-semibold ">
            <span class="mr-1 ">✓</span>
            Mudah
          </div>
          <div class="text-xs ">Bayar langsung koneksi</div>
        </div>
        <div class="my-4">
          <div class="text-lg font-semibold ">
            <span class="mr-1 ">✓</span>
            Cepat
          </div>
          <div class="text-xs ">Iternet tanpa batas</div>
        </div>
      </div>
    </div>

    <div class="w-full bg-white rounded-lg shadow md:rounded-l-none md:w-96">
      <div class="">
        <div class=" h-7 w-7 ml-auto mr-2">
          <a
            href={link}
            class="block mt-2 p-1 hover:bg-gray-500 bg-gray-900 rounded-full focus:outline-none"
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
          </a>
        </div>
        <!-- <h1 class="text-2xl text-center font-bold tracking-tight text-gray-900 ">
          Masuk
        </h1> -->

        <CheckoutPage />
      </div>
    </div>
  </div>
</div>
