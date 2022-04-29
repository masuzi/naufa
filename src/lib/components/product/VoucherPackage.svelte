<script>
  import ProductList from './ProductList.svelte'
  export let title = 'Jam'
  export let duration
</script>

<div
  class="flex w-full lg:w-10/12 flex-col mx-auto bg-gradient-to-br from-purple-100 to-blue-100"
>
  <div
    class=" mb-6 w-full rounded-t-md bg-gradient-to-br from-purple-600 to-blue-500 py-4 px-8"
  >
    <h1 class="font-bold text-gray-100">{title}</h1>
  </div>
  <div class="mx-auto w-full px-2 text-purple-600">
    <ul>
      <li>
        {#each duration as product}<ProductList {product} />
        {/each}
      </li>
    </ul>
  </div>
</div>
