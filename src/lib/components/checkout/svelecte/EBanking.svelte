<style>
  /** some style override */
  :global(.sv-dd-item-active) .sv-item-content {
    color: #3b82f6 !important;
    text-align: center;
  }
  :global(.sv-item-btn) {
    background-color: white !important;
  }
</style>

<script>
  // @ts-nocheck
  import { e_banking } from '../../cart/stores'
  import Icon from '@iconify/svelte'
  import { itemActions, highlightSearch, CloseButton } from 'svelecte/item'

  // these properties can be used
  //   export let inputValue
  export let index = -1
  export let item = {}
  export let isSelected = false
  export let isDisabled = false
  export let isMultiple = false
  export let formatter
  export let inputValue
  function handleClick() {
    alert('no more alerts')
  }
</script>

<!-- {$e_banking} -->
<!-- you need to use itemActions and pass given events -->
<div
  class="sv-item"
  use:itemActions={{ item, index }}
  class:is-selected={isSelected}
  on:select
  on:deselect
  on:hover
>
  <!-- {$e_banking} -->
  <div class="sv-item-content flex items-center py-2 text-xs">
    {#if !isSelected}
      <span> <img class="h-6 mr-4" src={item.paymentImage} alt="" /></span>
      <span>{item.name}</span>
    {:else}
      <!--  -->
      <!-- <div class="text-gray-400">Pilih / Ketik Nama Bank</div> -->
      <div class="flex justify-center items-center">
        {#if $e_banking === false}
          <span class="text-gray-400">Pilih / Ketik Nama Bank</span>
        {:else}
          <span>{item.name}</span>
          <CloseButton class="bg-white" />
          <!-- <button
            class=" mx-4 text-xs bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            on:click={handleClick}
          >
            <Icon icon="entypo:info" class="h-4 w-4" />
            <span class="right">Cara Pembayaran</span>
          </button>-->
        {/if}
      </div>
    {/if}
  </div>
  {#if isSelected}
    <!-- {item.name} -->
    <!-- <CloseButton /> -->
  {/if}
</div>
