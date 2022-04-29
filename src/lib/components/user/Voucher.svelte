<script>
  import { fade, fly } from 'svelte/transition'
</script>

<div in:fade out:fly={{ x: 400 }} class="pt-4 px-4 w-full flex flex-col">
  <p class="font-semibold text-gray-600">Voucher</p>
  <div class="rounded-md bg-white px-3 my-4">
    <ul class="my-4 space-y-3">
      <li class="flex flex-col rounded-md bg-gray-300 p-1">
        <div class="flex justify-between">
          <span class="font-bold text-xl">3 Hari</span><span
            class="rounded-md my-auto p-1 bg-amber-500">Dalam pemakaian</span
          >
        </div>
        <div class="flex justify-between">
          <span class="italic">berakhir 2 hari lagi</span>
          <!-- </a> -->
        </div>
        <div class="flex justify-between mt-4">
          <span class="font-bold text-gray-500">Detail:</span>
          <!-- <p class="text-gray-500">Melalui: Agen</p> -->
          <!-- </a> -->
        </div>
        <div class="flex w-1/2 justify-between">
          <div>Kode</div>
          <div class="text-sm font-bold">4FTGR</div>
        </div>
        <div class="flex w-1/2 justify-between">
          <div>Password</div>
          <div class="text-sm font-bold">utxft</div>
        </div>
        <div class="flex text-gray-600 justify-between py-2">
          <span class="">No: 11001</span>
          <span class="">Tgl beli: 12-01-2022 22:04:01</span>
        </div>
      </li>
      <li>
        <a
          href="#"
          class="flex items-center p-3  text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow "
        >
          <span class="flex-1 ml-3 whitespace-nowrap w-1/4">3 Jam</span>
          <span
            class="w-1/4 inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs  text-gray-600 "
            >12-01-2022 22:04:01</span
          >
          <span
            class="w-1/4 inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs  text-gray-600 "
            >2500</span
          >
          <span
            class="w-1/4 inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs  text-white bg-gray-200 rounded bg-green-700 text-white"
            >Aktif</span
          >
        </a>
      </li>
      <li>
        <a
          href="#"
          class="flex items-center p-3  text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow "
        >
          <span class="w-1/4 flex-1 ml-3 whitespace-nowrap">3 Jam</span>
          <span
            class="w-1/4 inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs  text-gray-600 "
            >12-01-2022 22:04:01</span
          >
          <span
            class="w-1/4 inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs  text-gray-600 "
            >2500</span
          >
          <span
            class="w-1/4 inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs rounded bg-red-700 text-white"
            >Kadaluarsa</span
          >
        </a>
      </li>
    </ul>
    <div>
      <a
        href="#"
        class="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
      >
        <svg
          class="mr-2 w-3 h-3"
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="question-circle"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          ><path
            fill="currentColor"
            d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"
          /></svg
        >
        Mau beli Voucher?</a
      >
    </div>
  </div>
</div>
