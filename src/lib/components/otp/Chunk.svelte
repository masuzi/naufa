<script>
  import { createEventDispatcher } from 'svelte'

  export let inputElement = null

  export let value = ''
  export let title = ''
  export let placeholder = ''
  export let pattern = null
  export let type = 'number'
  export let inputMode = 'numeric'
  export let disabled = false
  export let containerClass = null
  export let maxLength = 1

  const dispatch = createEventDispatcher()

  function onInput(ev) {
    dispatch('originalInput', ev)
    const targetValue = ev.target.value

    value = targetValue
    dispatch('input', targetValue)
  }
</script>

<div class="" {title}>
  <input
    bind:this={inputElement}
    class="m-2 outline-none border border-gray-500 h-10 focus:border-green-500 w-10 text-center form-control rounded bg-gray-200"
    {value}
    {type}
    inputmode={inputMode}
    {placeholder}
    {pattern}
    {disabled}
    maxlength={maxLength}
    on:input={onInput}
    on:change
    on:beforeinput
    on:keydown
  />
</div>
