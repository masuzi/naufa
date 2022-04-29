<style>
  label {
    position: relative;
  }
  input {
    box-sizing: border-box;
    outline: none;
    background: #eee;
    border: 1px solid #eee;
    padding: 5px 15px;
    transition: all 0.1s;
    color: #747474;
    margin-top: 7px;
  }
  input:not([type='checkbox']):not([type='radio']),
  textarea:not([type='checkbox']):not([type='radio']) {
    width: 100%;
    border-radius: 0px;
    height: 40px;
    display: block;
  }
  input:focus {
    border: 1px solid #60a5fa;
    background: #f8f8f8;
  }
  ::-webkit-input-placeholder {
    @apply text-xs italic;
  }
  :-moz-placeholder {
    @apply text-xs italic;
  }
  ::-moz-placeholder {
    @apply text-xs italic;
  }
  :-ms-input-placeholder {
    @apply text-xs italic;
  }
  label {
    position: relative;
  }
  label.pending:after {
    content: '';
    display: block;
    width: 15px;
    height: 15px;
    transform-origin: center center;
    background-size: 15px;
    animation: spin 1.5s infinite linear;
    position: absolute;
    right: 20px;
    bottom: 25px;
    border: 2px dotted #22d3ee;
    border-radius: 50%;
  }
  label.valid input {
    border: 1px solid #4ade80;
    background: #f8faf7;
  }
  label.warning {
    color: #dfac4d;
  }
  label.warning input {
    border: 1px solid #ceaf6d;
    background: #f3f0e9;
    color: #dfac4d;
  }
  label.invalid {
    color: #df4d4d;
  }
  label.invalid input.invalid {
    border: 1px solid #f87171;
    background: #f3e9e9;
    color: #df4d4d;
  }
  .error-container {
    text-align: left;
    font-size: 12px;
  }
  label {
    display: block;
    padding-bottom: 15px;
  }
  .inline-labels label {
    display: inline-block;
  }
  input[type='radio'],
  input[type='checkbox'] {
    margin-right: 10px;
    vertical-align: middle;
  }
</style>

<script>
  export let value = ''
  export let label = ''
  export let name = ''
  export let pending = false
  export let pattern = ''
  export let inputmode = ''
  export let errors = {}
  export let maxlength = 100
  export let onInput = () => {}
  // export let max=10;

  $: messages = errors[name] || []
</script>

<!-- {pattern} {inputmode} -->
<label class:pending {pattern} {inputmode} class={$$props.class}>
  <div class="text-sm text-gray-500">{label}</div>
  <input type="text" {maxlength} {name} bind:value {...$$props} on:input={onInput} />
  {#if messages.length}
    <div class="text-xs error-container">{messages[0]}</div>
  {/if}
</label>
