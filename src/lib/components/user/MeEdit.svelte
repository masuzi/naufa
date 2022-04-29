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
    address = 'RT ' + dt.rt + ' RW ' + dt.rw + ' ' + dt.sub_district + ' ' + dt.district
    profile_img = dt.profile_img
  })
</script>

<div
  in:fade={{ delay: 400 }}
  out:fly={{ x: 400 }}
  class="flex items-center px-4 pt-12 justify-between"
>
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
  </div>
</div>
