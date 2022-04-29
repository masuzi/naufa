<script>
  import Toast from '$lib/components/toast/Toast.svelte'
  export let error
</script>

{#if error !== undefined}
  <Toast>{error}</Toast>
{/if}
