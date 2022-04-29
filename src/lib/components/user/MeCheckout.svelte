<script lang="ts">
  import InfoAgen from '$lib/components/checkout/info-bayar/InfoAgen.svelte'
  import Qris from '$lib/components/checkout/info-bayar/Qris.svelte'
  import OV from '$lib/components/checkout/info-bayar/OV.svelte'
  import IR from '$lib/components/checkout/info-bayar/IR.svelte'
  import FT from '$lib/components/checkout/info-bayar/FT.svelte'
  import BR from '$lib/components/checkout/info-bayar/BR.svelte'
  import B1 from '$lib/components/checkout/info-bayar/B1.svelte'
  import A1 from '$lib/components/checkout/info-bayar/A1.svelte'
  import S1 from '$lib/components/checkout/info-bayar/S1.svelte'
  import VA from '$lib/components/checkout/info-bayar/VA.svelte'
  import BT from '$lib/components/checkout/info-bayar/BT.svelte'
  import NC from '$lib/components/checkout/info-bayar/NC.svelte'
  import I1 from '$lib/components/checkout/info-bayar/I1.svelte'
  import Mandiri from '$lib/components/checkout/info-bayar/Mandiri.svelte'
  import { session } from '$app/stores'
  import { formatRupiah } from '$lib/components/product/BriApi'
  import { fade, fly } from 'svelte/transition'
  import { viewAllTransaction } from './graphql'
  import CheckoutPage from '../checkout/CheckoutPage.svelte'
  const url = import.meta.env.VITE_GRAPHQL_URL
  export let handphone
  export let merchantOrderId
  // let transactions
  const date_now = Date.now() - 60 * 1000 * 180
  const options = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + $session.token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(viewAllTransaction(handphone, merchantOrderId))
  }
  let transaction = (async () => {
    const response = await fetch(url, options)
    return await response.json()
  })()
</script>

<div in:fade out:fly={{ x: 400 }} class="pt-4 px-4 w-full flex flex-col">
  <p class="font-semibold text-gray-600 text-center">Kode Bayar</p>
  <div class="rounded-md bg-white px-3">
    <ul class="my-4 space-y-3">
      {#await transaction then v}
        {v.data.viewAllTransaction.transactions[0].paymentMethod}
        {#if v.data.viewAllTransaction.transactions[0].paymentMethod === 'AGEN'}
          <InfoAgen
            merchantOrderId={v.data.viewAllTransaction.transactions[0].merchantOrderId}
            total={v.data.viewAllTransaction.transactions[0].total}
          />{:else if v.data.viewAllTransaction.transactions[0].paymentMethod === 'SP'}
          <Qris
            qrString={v.data.viewAllTransaction.transactions[0].qrString}
            total={v.data.viewAllTransaction.transactions[0].total}
          />{:else if v.data.viewAllTransaction.transactions[0].paymentMethod === 'BR'}
          <BR
            vaNumber={v.data.viewAllTransaction.transactions[0].vaNumber}
            total={v.data.viewAllTransaction.transactions[0].total}
          />
        {/if}
      {/await}
    </ul>
  </div>
</div>
