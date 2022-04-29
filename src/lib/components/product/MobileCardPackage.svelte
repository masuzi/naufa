<script>
  import { formatRupiah } from './BriApi'
  export let packages
  export let title
</script>

<div class="max-w-md rounded-lg border bg-white p-4 shadow-md  sm:p-8">
  <div class="mb-4 flex items-center justify-between">
    <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
      {title}
    </h5>
    <!-- svelte-ignore a11y-invalid-attribute -->
    <!-- <a
      href="#"
      class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
    >
      
    </a> -->
  </div>
  <div class="flow-root">
    <!-- svelte-ignore a11y-no-redundant-roles -->
    <ul role="list" class="divide-y divide-gray-200 ">
      {#each packages as profile}
        <li class="py-3 sm:py-4">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <!-- svelte-ignore a11y-img-redundant-alt -->
              <img
                class="h-8 w-8 rounded-full"
                src="/docs/images/people/profile-picture-1.jpg"
                alt="Neil image"
              />
            </div>
            <div class="min-w-0 flex-1">
              <p class="truncate text-sm font-medium ">
                {profile.name}
              </p>
            </div>
            <div class="inline-flex items-center text-base font-semibold ">
              {formatRupiah(profile.price)}
            </div>
            <div class="inline-flex items-center text-base font-semibold">
              <button
                type="button"
                class="mr-2 mb-2 rounded-lg bg-gradient-to-r from-blue-500
via-blue-600 to-blue-700 px-5 py-2.5
text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300
dark:focus:ring-blue-800"
              >
                Beli</button
              >
            </div>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</div>
