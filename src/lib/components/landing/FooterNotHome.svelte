<!--Footer-->
<script>
  // import * as animateScroll from 'svelte-scrollto'
  import { goto } from '$app/navigation'
  import PaymentMethode from './payment-methode.svelte'
</script>

<footer class="bg-white text-xs md:text-sm">
  <div class="container mx-auto px-8 pb-10">
    <div class="flex w-full flex-col py-6 md:flex-row">
      <div class="mb-6 flex-1 text-black">
        <a
          class="text-2xl font-bold text-pink-600 no-underline hover:no-underline text-sm md:text-2xl"
          href="/#"
        >
          <!--Icon from: http://www.potlabicons.com/ -->
          <!-- <svg
            class="inline h-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512.005 512.005"
          >
            <rect
              fill="#2a2a31"
              x="16.539"
              y="425.626"
              width="479.767"
              height="50.502"
              transform="matrix(1,0,0,1,0,0)"
            />
            <path
              class="plane-take-off"
              d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
            />
          </svg> -->
          Simantep Trans Wisesa
        </a>

        <div>
          <p>Jln. Raya Kunci No 12</p>
          <p>Sidareja Cilacap Jawa Tengah</p>
          <p>Hp 081575781924</p>
        </div>

        <!-- <img
            class="w-24"
            alt="logo"
            src="https://res.cloudinary.com/masuzi/image/upload/v1648196092/wifi/reewojybjed8u8butghc.png "
          /> -->

        <!-- </div> -->

        <!-- svelte-ignore a11y-invalid-attribute -->
      </div>

      <div class="flex-1">
        <p class="uppercase text-gray-500 md:mb-6">Petunjuk</p>
        <ul class="list-reset mb-6">
          <li class="mt-2 mr-2 inline-block md:mr-0 md:block">
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a
              href="/blog/cara-membeli-voucher"
              class="text-gray-800 no-underline hover:text-pink-500 hover:underline"
              >Cara membeli Voucher</a
            >
          </li>
          <li class="mt-2 mr-2 inline-block md:mr-0 md:block">
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a
              href="/blog/cara-menggunakan-voucher"
              class="text-gray-800 no-underline hover:text-pink-500 hover:underline"
              >Cara Menggunakan Voucher</a
            >
          </li>
          <li class="mt-2 mr-2 inline-block md:mr-0 md:block">
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a
              href="/blog/cara-berlangganan-bulanan"
              class="text-gray-800 no-underline hover:text-pink-500 hover:underline"
              >Cara Berlangganan Bulanan</a
            >
          </li>
          <li class="mt-2 mr-2 inline-block md:mr-0 md:block">
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a
              href="/#contact"
              class="text-gray-800 no-underline hover:text-pink-500 hover:underline"
              >Kontak</a
            >
          </li>
        </ul>
      </div>
      <!--  -->
      <div class="lg:w-1/2 w-full flex-1">
        <p class="uppercase text-gray-500 md:mb-2">Metode Pembayaran</p>
        <PaymentMethode />
        <!--  -->
      </div>
    </div>
  </div>
</footer>
