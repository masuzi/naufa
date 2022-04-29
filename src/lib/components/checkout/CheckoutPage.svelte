<script>
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
  import {
    check_out_store,
    showCart,
    cart,
    total,
    session,
    check_out_response,
    payment_methode,
    agen,
    e_banking,
    m_banking,
    retail_select,
    dompet_select,
    qris_select
  } from '$lib/components/cart/stores'
</script>

{#if $check_out_store}
  <div class="text-xs md:text-sm mx-auto px-4">
    <div class="text-center">
      <p>Terima kasih, Pemesanan berhasil</p>
      <p>Silahkan melakukan pembayaran untuk menyelesaikan Transaksi.</p>
    </div>
    {$agen}
    {#if $agen}<InfoAgen />{/if}
    {#if $m_banking === 'Virtual Akun MAYBANK'}<VA />{/if}
    {#if $m_banking === 'Virtual Akun Bank Permata'}<BT />{/if}
    {#if $m_banking === 'Virtual Akun CIMB Niaga'} <B1 />{/if}
    {#if $m_banking === 'Virtual Akun ATM Bersama'} <A1 />{/if}
    {#if $m_banking === 'Virtual Akun BNI'}<I1 />{/if}
    {#if $m_banking === 'Virtual Akun Mandiri'} <Mandiri />{/if}
    {#if $m_banking === 'Virtual Akun Bank Sampoerna'} <S1 />{/if}
    {#if $m_banking === 'Virtual Akun Bank Neo Commerce'}<NC />{/if}
    {#if $m_banking === 'Virtual Akun BRI'}<BR />{/if}
    {#if $qris_select}<Qris />{/if}
  </div>{/if}
