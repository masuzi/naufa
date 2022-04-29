<style lang="postcss">
  article {
    /* color: #0f172a; */
    padding: 0.75rem 1.5rem;
    border-radius: 0.2rem;
    display: flex;
    align-items: center;
    margin: 0 auto 0.5rem auto;
    width: 20rem;
  }
  .error {
    background: #fecaca;
    color: #dc2626;
  }
  .success {
    background: #86efac;
  }
  .info {
    background: #7dd3fc;
  }
  .text {
    margin-left: 1rem;
  }
  button {
    color: white;
    /* background: transparent; */
    border: 0 none;
    padding: 0;
    margin: 0 0 0 auto;
    line-height: 1;
    font-size: 1rem;
  }
</style>

<script>
  import { createEventDispatcher } from 'svelte'
  import { fade } from 'svelte/transition'
  import SuccessIcon from './SuccessIcon.svelte'
  import ErrorIcon from './ErrorIcon.svelte'
  import InfoIcon from './InfoIcon.svelte'
  import CloseIcon from './CloseIcon.svelte'

  const dispatch = createEventDispatcher()

  export let type = 'error'
  export let dismissible = true
</script>

<article class={type} role="alert" transition:fade>
  {#if type === 'success'}
    <SuccessIcon width="1.1em" />
  {:else if type === 'error'}
    <ErrorIcon width="1.1em" />
  {:else}
    <InfoIcon width="1.1em" />
  {/if}

  <div class="text text-xs">
    <slot />
  </div>

  {#if dismissible}
    <button type="button" class="close" on:click={() => dispatch('dismiss')}>
      <CloseIcon width="0.8em" />
    </button>
  {/if}
</article>
