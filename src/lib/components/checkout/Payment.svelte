<style>
  .logo-pay {
    margin: 0px 3px 3px 0px;
    width: 72px;
    height: 36px;
    background-color: #fff;
    background-image: url('https://res.cloudinary.com/masuzi/image/upload/v1649062114/wifi/hwzezhimkuccwkk5emwx.png');
    background-position: 0 9999px;
    background-repeat: no-repeat;
    background-size: 72px;
    display: block;
    float: left;
    text-indent: -9999px;
  }
  .logo-bca-klikpay {
    background-position: 0 0;
  }
  .logo-mandiri-clickpay {
    background-position: 0 -36px;
  }
  .logo-mandiri-e-cash {
    background-position: 0 -72px;
  }
  .logo-cimb-clicks {
    background-position: 0 -108px;
  }
  .logo-visa {
    background-position: 0 -144px;
  }
  .logo-mastercard {
    background-position: 0 -180px;
  }
  .logo-indomaret {
    background-position: 0 -216px;
  }
  .logo-kredivo {
    background-position: 0 -252px;
  }
  .logo-akulaku {
    background-position: 0 -288px;
  }
  .logo-briva {
    background-position: 0 -324px;
  }
  .logo-danamon {
    background-position: 0 -360px;
  }
  .logo-bca {
    background-position: 0 -396px;
  }
  .logo-mandiri {
    background-position: 0 -432px;
  }
  .logo-bni {
    background-position: 0 -468px;
  }
  .logo-bri {
    background-position: 0 -504px;
  }
  .logo-alfamart {
    background-position: 0 -540px;
  }
  .logo-alfamidi {
    background-position: 0 -576px;
  }
  .logo-jcb {
    background-position: 0 -612px;
  }
  .logo-bsi {
    background-position: 0 -648px;
  }
  .logo-permata {
    background-position: 0 -684px;
  }
  .logo-dana {
    background-position: 0 -720px;
  }
  .logo-pospay {
    background-position: 0 -756px;
  }
  .logo-bri-e-pay {
    background-position: 0 -792px;
  }
  .logo-cimb {
    background-position: 0 -828px;
  }
  .logo-transfer {
    background-position: 0 -864px;
  }
  .logo-credit-card {
    background-position: 0 -900px;
  }
  .logo-credits {
    background-position: 0 -936px;
  }
  .logo-bukadompet {
    background-position: 0 -972px;
  }
  .logo-oneklik {
    background-position: 0 -1008px;
  }
  .logo-mitra-bukalapak {
    background-position: 0 -1044px;
  }
  .logo-amex {
    background-position: 0 -1080px;
  }
  .logo-ocbc-nisp {
    background-position: 0 -1116px;
  }
  .logo-btn {
    background-position: 0 -1152px;
  }
  .logo-buka-rekening {
    background-position: 0 -1188px;
  }
  .logo-bri-ceria {
    background-position: 0 -1224px;
  }
  .logo-ovo {
    background-position: 0 -1260px;
  }
  .logo-indodana {
    background-position: 0 -1296px;
  }
  .logo-linkAja-syariah {
    background-position: 0 -1332px;
  }
  .logo-shoope-pay {
    background-position: 0 -1366px;
  }
  .methode {
    @apply text-sm font-medium text-gray-500 pt-3;
  }
  :global(.svelecte-control) {
    @apply pt-2;
  }
</style>

<script>
  import { fade, fly } from 'svelte/transition'
  import { total } from '$lib/components/cart/stores'
  import InfoAgen from './info/InfoAgen.svelte'
  import SP from './info/SP.svelte'
  import OV from './info/OV.svelte'
  import IR from './info/IR.svelte'
  import FT from './info/FT.svelte'
  import BR from './info/BR.svelte'
  import B1 from './info/B1.svelte'
  import A1 from './info/A1.svelte'
  import S1 from './info/S1.svelte'
  import VA from './info/VA.svelte'
  import BT from './info/BT.svelte'
  import NC from './info/NC.svelte'
  import I1 from './info/I1.svelte'
  import M1 from './info/M1.svelte'
  import { onMount } from 'svelte'
  import Svelecte from 'svelecte'
  import Agen from './svelecte/Agen.svelte'
  import Bank from './svelecte/Bank.svelte'
  import EBanking from './svelecte/EBanking.svelte'
  import RetailSelect from './svelecte/RetailSelect.svelte'
  import DompetSelect from './svelecte/DompetSelect.svelte'
  import QrisSelect from './svelecte/QrisSelect.svelte'
  import {
    agen,
    e_banking,
    m_banking,
    retail_select,
    dompet_select,
    qris_select,
    payment_methode
  } from '../cart/stores'

  const url = import.meta.env.VITE_GRAPHQL_URL
  let paymentMethodes = []
  let filteredpaymentMethodes = []
  let payment_show = false
  let selection = []

  onMount(async function () {
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `query getPaymentMethode {
        getPaymentMethode {
          error
          responseCode
          responseMessage
          paymentFee {
            component
            paymentMethod
            paymentName
            name
            categoryPayment
            paymentImage
            totalFee
            isEnable
            css
          }
        }
      }`
        })
      }),
      re = await response.json()
    paymentMethodes = re.data.getPaymentMethode.paymentFee
    filteredpaymentMethodes = paymentMethodes
    payment_show = true
  })
  function getFilteredMethodes(paymentMethodes, stringToMatch) {
    if (stringToMatch) {
      return paymentMethodes.filter(paymentMethode => {
        return paymentMethode.categoryPayment
          .toLowerCase()
          .includes(stringToMatch.toLowerCase())
      })
    } else {
      return paymentMethodes
    }
  }
  const groupBy = item => item.categoryPayment
  let compo = I1
  async function getAgen() {
    $payment_methode = selection.paymentMethod
    $agen = selection.full_name
    $m_banking = false
    $e_banking = false
    $retail_select = false
    $dompet_select = false
    $qris_select = false
  }
  async function getBank() {
    $payment_methode = selection.paymentMethod
    $m_banking = selection.name
    $agen = false
    $e_banking = false
    $retail_select = false
    $dompet_select = false
    $qris_select = false
  }
  async function getEBanking() {
    $payment_methode = selection.paymentMethod
    $e_banking = selection.name
    $agen = false
    $m_banking = false
    $retail_select = false
    $dompet_select = false
    $qris_select = false
  }
  async function getRetailSelect() {
    $payment_methode = selection.paymentMethod
    $retail_select = selection.name
    $agen = false
    $e_banking = false
    $m_banking = false
    $dompet_select = false
    $qris_select = false
  }
  async function getDompetSelect() {
    $payment_methode = selection.paymentMethod
    $dompet_select = selection.name
    $agen = false
    $retail_select = false
    $e_banking = false
    $m_banking = false
    $qris_select = false
  }
  async function getQrisSelect() {
    $payment_methode = selection.paymentMethod
    $qris_select = selection.name
    $agen = false
    $dompet_select = false
    $retail_select = false
    $e_banking = false
    $m_banking = false
  }
  let agen_list = [
    {
      id: '1',
      full_name: 'Dewi',
      address: 'Gandrungmangu',
      paymentMethod: 'AGEN'
    },
    {
      id: '2',
      full_name: 'Desi',
      address: 'Sidareja',
      paymentMethod: 'AGEN'
    },
    {
      id: '1',
      full_name: 'Wati',
      address: 'Kampung Laut',
      paymentMethod: 'AGEN'
    }
  ]
</script>

<!-- <div> -->

<h5 class="methode">Agen</h5>
<Svelecte
  options={agen_list}
  controlItem={Agen}
  dropdownItem={Agen}
  placeholder="Pilih / Ketik Nama, Wilayah"
  on:change={getAgen}
  bind:readSelection={selection}
/>
{#if $agen}<InfoAgen />{/if}
{#if $total >= 10000}
  <div in:fly={{ x: 400 }} out:fly={{ x: 400 }}>
    <h5 class="methode">Transfer Bank / Virtual Akun</h5>
    <Svelecte
      options={getFilteredMethodes(paymentMethodes, '1')}
      controlItem={Bank}
      dropdownItem={Bank}
      placeholder="Pilih / Ketik Nama Bank"
      on:change={getBank}
      bind:readSelection={selection}
    />
    {#if $m_banking === 'Virtual Akun MAYBANK'}<VA />{/if}
    {#if $m_banking === 'Virtual Akun Bank Permata'}<BT />{/if}
    {#if $m_banking === 'Virtual Akun CIMB Niaga'} <B1 />{/if}
    {#if $m_banking === 'Virtual Akun ATM Bersama'} <A1 />{/if}
    {#if $m_banking === 'Virtual Akun BNI'}<I1 />{/if}
    {#if $m_banking === 'Virtual Akun Mandiri'} <M1 />{/if}
    {#if $m_banking === 'Virtual Akun Bank Sampoerna'} <S1 />{/if}
    {#if $m_banking === 'Virtual Akun Bank Neo Commerce'}<NC />{/if}
    {#if $m_banking === 'Virtual Akun BRI'}<BR />{/if}

    <!-- <h5 class="methode">E-Banking</h5>
    <Svelecte
      options={getFilteredMethodes(paymentMethodes, '2')}
      controlItem={EBanking}
      dropdownItem={EBanking}
      placeholder="Pilih / Ketik Nama Bank"
      on:change={getEBanking}
      bind:readSelection={selection}
    /> -->
    <!-- {#if $e_banking}
      <div class="text-xs font-normal text-blue-500">Cara Pembayaran {$e_banking}</div>
    {/if} -->
    {#if $total >= 50000}
      <h5 class="methode">Retail</h5>
      <Svelecte
        options={getFilteredMethodes(paymentMethodes, '3')}
        controlItem={RetailSelect}
        dropdownItem={RetailSelect}
        placeholder="Pilih / Ketik Retail, Toko"
        on:change={getRetailSelect}
        bind:readSelection={selection}
      />{/if}
    {#if $retail_select === 'Alfamart / Kantor Pos / Pegadaian'}<FT />{/if}
    {#if $retail_select === 'Indomaret / Ceriamart / Lion Super Indo'}<IR />{/if}
    <!-- {#if $retail_select}
    <div class="text-xs font-normal text-blue-500">Cara Pembayaran {$retail_select}</div>
  {/if} -->
    <!-- <h5 class="methode">Dompet Elektronik</h5>
    <Svelecte
      options={getFilteredMethodes(paymentMethodes, '4')}
      controlItem={DompetSelect}
      dropdownItem={DompetSelect}
      placeholder="Pilih / Ketik Nama Dompet Elektronik"
      on:change={getDompetSelect}
      bind:readSelection={selection}
    />
    {#if $dompet_select === 'OVO'}<OV />{/if} -->

    <!-- <h5 class="methode">QRIS</h5>
    <Svelecte
      options={getFilteredMethodes(paymentMethodes, '6')}
      controlItem={QrisSelect}
      dropdownItem={QrisSelect}
      placeholder="Pilih / Ketik Nama QRIS"
      on:change={getQrisSelect}
      bind:readSelection={selection}
    />
    {#if $qris_select === 'QRIS'}<SP />{/if} -->
  </div>
{/if}
<!-- </div> -->
