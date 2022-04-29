<script>
  export let group = undefined;
  export let value = undefined;
</script>

<label>
  <input type="radio" bind:group {value} class="ml-4 form-radio" />
  <slot />
</label>

<style>
  .form-radio {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
    display: inline-block;
    vertical-align: middle;
    background-origin: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    flex-shrink: 0;
    /* background-color: #dc2626; */
    border-color: #4b5563;
    border-width: 1px;
    height: 0.7em;
    width: 0.7em;
    border-radius: 50%;
  }
  .form-radio:checked {
    border-color: transparent;
    background-color: #16a34a;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
