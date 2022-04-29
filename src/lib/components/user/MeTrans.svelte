<script lang="ts">
  import CodePaymentTab from './CodePaymentTab.svelte'
  import { formatRupiah, formatDate } from '$lib/components/product/BriApi'
  import { fade, fly } from 'svelte/transition'
  import { session } from '$app/stores'
  import { viewAllTransaction } from './graphql'
  import Transaction from './Transaction.svelte'
  import { each } from 'svelte/internal'
  import MeCheckout from './MeCheckout.svelte'
  import PaymentCode from './PaymentCode.svelte'
  const url = import.meta.env.VITE_GRAPHQL_URL
  export let handphone
  // let transactions
  const date_now = Date.now() - 60 * 1000 * 180
  const options = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + $session.token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(viewAllTransaction(handphone))
  }
  let transactions = (async () => {
    const response = await fetch(url, options)
    return await response.json()
  })()
  let showCodePayment = false
  const showCodePaymentButton = () => {
    showCodePayment = true
  }

  function formatDates(date, format) {
    format
      .replace('mm', date.getMonth() + 1)
      .replace('yy', date.getFullYear())
      .replace('dd', date.getDate())
  }
</script>

<div in:fade out:fly={{ x: 400 }} class="pt-4 px-4 w-full flex flex-col">
  <p class="font-semibold text-gray-600">Transaksi</p>
  <div class="rounded-md bg-white px-3 my-4">
    <ul class="my-4 space-y-3">
      {#await transactions then t}
        {#each t.data.viewAllTransaction.transactions as trans}
          {#if trans.statusCode === '10' && date_now > trans.createdAt}
            <li>
              <!-- {#if showCodePayment} -->
              <!-- <PaymentCode
                  merchantOrderId={trans.merchantOrderId}
                  total={trans.total}
                />{/if} -->
              <!-- svelte-ignore a11y-invalid-attribute -->
              <!-- test  -->
              <!-- 103.156.248.12:9966 -->

              <a
                href="#"
                class="flex items-center p-1  text-gray-900 bg-red-100 rounded-lg hover:bg-gray-100 group hover:shadow "
              >
                <span class="flex-1 ml-1 whitespace-nowrap w-1/4"
                  >No: {trans.merchantOrderId}</span
                >
                <span
                  class="w-1/4 inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs  text-gray-600 "
                  >Tgl: {new Date(trans.createdAt / 1).getDate()}-{new Date(
                    trans.createdAt / 1
                  ).getMonth() + 1}-{new Date(trans.createdAt / 1).getFullYear()}</span
                >
                <span
                  class="w-1/4 inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs  text-gray-600 "
                  >Rp.{formatRupiah(trans.total)},-</span
                >
                <!-- <button type="button" on:click={showCodePaymentButton}>Kode Bayar</button> -->
                <span
                  class="w-1/4 inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs rounded bg-red-700 text-white"
                  >Kadaluarsa</span
                >
              </a>
            </li>
          {:else if trans.statusCode === '00'}
            <li>
              <!-- svelte-ignore a11y-invalid-attribute -->
              <a
                href="#"
                class="flex items-center p-1  text-gray-900 bg-green-100 rounded-lg hover:bg-gray-100 group hover:shadow "
              >
                <span class="flex-1 ml-1 whitespace-nowrap w-1/4"
                  >No: {trans.merchantOrderId}</span
                >
                <span
                  class="w-1/4 inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs  text-gray-600 "
                  >Tgl: {new Date(trans.createdAt / 1).getDate()}-{new Date(
                    trans.createdAt / 1
                  ).getMonth() + 1}-{new Date(trans.createdAt / 1).getFullYear()}</span
                >
                <span
                  class="w-1/4 inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs  text-gray-600 "
                  >Rp.{formatRupiah(trans.total)},-</span
                >
                <span
                  class="w-1/4 inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs  text-white bg-gray-200 rounded bg-green-700 text-white"
                  >Lunas</span
                >
              </a>
            </li>
          {:else}
            <li class="flex flex-col rounded-md bg-amber-100 p-1">
              <div class="flex justify-between py-2">
                <span class="">No: {trans.merchantOrderId}</span>
                <span class=""
                  >Tgl: {new Date(trans.createdAt / 1).getDate()}-{new Date(
                    trans.createdAt / 1
                  ).getMonth() + 1}-{new Date(trans.createdAt / 1).getFullYear()}</span
                >
              </div>

              <div class="flex justify-between py-2">
                <div>
                  Metode:<span class="ml-2 font-bold">{trans.paymentMethod}</span>
                </div>
                {#if trans.paymentMethod === 'AGEN'}
                  <div>
                    No. Bayar:<span class="ml-2 font-bold">{trans.merchantOrderId}</span>
                  </div>{:else}No. VA:<span class="ml-2 font-bold">{trans.vaNumber}</span
                  >{/if}
                <span class="rounded-md my-auto p-1 bg-amber-500">Menunggu</span>
              </div>

              <div class="flex justify-between">
                <span class="font-bold text-gray-500">Detail:</span>
              </div>
              <div class="flex w-full justify-between text-gray-500">
                <div>Qty, Jenis</div>
                <div class="float-right">Harga satuan</div>
                <div class="float-right">Sub Total</div>
              </div>
              {#each trans.products as p}
                <div class="flex w-full justify-between">
                  <div>{p.quantity}x Voucher {p.name}</div>
                  <div class="float-right">Rp.{formatRupiah(p.price)},-</div>
                  <div class="float-right">Rp.{formatRupiah(p.quantity * p.price)},-</div>
                </div>
              {/each}
              <div class="text-right font-bold">
                Rp.{formatRupiah(trans.total)},-
              </div>
              <!-- <CodePaymentTab
                title="Lihat Kode Bayar"
                merchantOrderId={trans.merchantOrderId}
                total={trans.total}
              /> -->
            </li>
          {/if}
        {/each}
      {/await}
    </ul>
    <div>
      <a
        href="/#voucher"
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
        Pilih Voucher?</a
      >
    </div>
  </div>
</div>
