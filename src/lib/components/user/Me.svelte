<script>
  import { fade, fly } from 'svelte/transition'
  import { onMount } from 'svelte'
  import { session } from '$app/stores'
  import { viewById } from './graphql'
  const url = import.meta.env.VITE_GRAPHQL_URL
  export let id
  let handphone = '',
    full_name = '',
    address = '',
    profile_img
  const options = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + $session.token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(viewById(id))
  }

  onMount(async function () {
    const response = await fetch(url, options),
      res = await response.json()
    const dt = await res.data.viewById
    id = dt.id
    handphone = dt.handphone
    full_name = dt.full_name
    profile_img = dt.profile_img
    if (dt.sub_district === null) {
      address = dt.address
    } else {
      address = 'RT ' + dt.rt + ' RW ' + dt.rw + ' ' + dt.sub_district + ' ' + dt.district
    }
  })
</script>

<div in:fade out:fly={{ x: 400 }} class="flex items-center px-4 pt-12 justify-between">
  <div class="w-24 bg-blue-600 flex items-center rounded-full">
    <img class="object-cover rounded-full" src={profile_img} alt="" />
  </div>
  <div class="w-11/12 flex items-center">
    <div
      class="w-10/12 flex flex-col leading-4 pl-4 text-xs pt-1 font-light text-gray-700"
    >
      <p class="text-1xl font-bold">{full_name}</p>
      <p>{address}</p>
      <p>{handphone}</p>
    </div>
    <!-- <div class="ml-3 w-1/12">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="text-gray-700"
          fill="currentColor"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          ><path fill="none" d="M0 0h24v24H0z" /><path
            d="M9.243 19H21v2H3v-4.243l9.9-9.9 4.242 4.244L9.242 19zm5.07-13.556l2.122-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z"
          /></svg
        >
      </div>
    </div> -->
  </div>
</div>
