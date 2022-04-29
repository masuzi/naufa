<script>
  import Icon from '@iconify/svelte'
</script>

<div class="bg-white py-12">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <!-- <h2 class="text-base font-semibold uppercase tracking-wide text-indigo-600">
        Feature
      </h2> -->
      <p
        class="mt-2 text-1xl md:text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl"
      >
        Keunggulan Kami
      </p>
      <p class="mt-4 max-w-2xl text-sm md:text-xl text-gray-500 lg:mx-auto">
        Sudah berpengalaman dalam melayani koneksi internet dengan kecepatan tinggi.
      </p>
    </div>

    <div class="mt-10">
      <dl class="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
        <div class="relative">
          <dt>
            <div
              class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white"
            >
              <!-- Heroicon name: outline/globe-alt -->
              <Icon icon="arcticons:fast" style="font-size: 72px" />
            </div>
            <p class="ml-16 md:text-lg font-medium leading-6 text-gray-900">Cepat</p>
          </dt>
          <dd class="mt-2 ml-16 text-xs md:text-base text-gray-500">
            Menawarkan berbagai paket super cepat dan stabil.
          </dd>
        </div>

        <div class="relative">
          <dt>
            <div
              class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white"
            >
              <!-- Heroicon name: outline/scale -->
              <Icon icon="arcticons:bestprice" style="font-size: 72px" />
            </div>
            <p class="ml-16 md:text-lg font-medium leading-6 text-gray-900">Murah</p>
          </dt>
          <dd class="mt-2 ml-16 text-xs md:text-base text-gray-500">
            Banyak pilihan paket murah meriah.
          </dd>
        </div>

        <div class="relative">
          <dt>
            <div
              class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white"
            >
              <!-- Heroicon name: text-xsoutline/lightning-bolt -->
              <Icon icon="arcticons:carsmile" style="font-size: 72px" />
            </div>
            <p class="ml-16 md:text-lg font-medium leading-6 text-gray-900">Mudah</p>
          </dt>
          <dd class="mt-2 ml-16 text-xs md:text-base text-gray-500">
            Pemasangan mudah tanpa banyak syarat.
          </dd>
        </div>

        <div class="relative">
          <dt>
            <div
              class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white"
            >
              <!-- Heroicon name: outline/annotation -->
              <Icon icon="arcticons:gameturbo" style="font-size: 72px" />
            </div>
            <p class="ml-16 md:text-lg font-medium leading-6 text-gray-900">Gaming</p>
          </dt>
          <dd class="mt-2 ml-16 text-xs md:text-base text-gray-500">
            Streaming dan Gaming dengan Kecepatan Tinggi.
          </dd>
        </div>
      </dl>
    </div>
  </div>
</div>
