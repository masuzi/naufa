<style>
  .gradient {
    @apply from-pink-500 to-yellow-500 bg-gradient-to-r;
    /* from-pink to-yellow; */
  }
</style>

<script lang="ts">
  export let primary = true
  export let secondary = false
  export let center = true
  if (secondary) primary = false
  // class:text-gray-800={primary}
  // class:text-white={secondary}
  // class:bg-white={primary}
  // class:gradient={secondary}
</script>

<div class:flex={center} class="items-center justify-center">
  <button
    class={`
  ${primary && 'bg-white text-gray-800'}
  ${secondary && 'gradient text-gray-50'}
  focus:shadow-outline mx-auto my-6 transform rounded-full py-4 px-8 font-bold shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:underline focus:outline-none lg:mx-0
  `}
  >
    <slot>Click me!</slot>
  </button>
</div>
