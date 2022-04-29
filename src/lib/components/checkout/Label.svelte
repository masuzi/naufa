<style>
  input[type='radio']:checked + span {
    display: block;
  }
</style>

<script>
  export let group_radio
  export let value
  export let image
  export let name
</script>

<label
  class="relative mb-3 shadow-md cursor-pointer flex
          items-center p-3 text-sm text-gray-900 bg-gray-50 rounded-sm hover:bg-gray-100
          group hover:shadow"
>
  <img src={image} alt="" class="w-16 mr-4" />

  <span class="text-gray-700 leading-tight">{name}</span>
  <input
    type="radio"
    name="plan"
    id="plan-growth"
    class="absolute h-0 w-0 appearance-none"
    bind:group={group_radio}
    {value}
  />
  <span
    aria-hidden="true"
    class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg"
  >
    <span
      class="absolute top-2 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full bg-green-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5 text-green-600"
      >
        <path
          fill-rule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </span>
  </span>
</label>
