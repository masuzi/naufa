<script>
  import Icon from '@iconify/svelte'
  import { goto } from '$app/navigation'
  import { logout } from '$lib/auth'
  import { session } from '$app/stores'
  import { api } from '$lib/api'
  import { showCart } from '../cart/stores'

  async function logOut() {
    $showCart = false
    const res = await api('POST', '/', '')
    if (res) {
      await logout()
      await goto('/')
    }
  }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a
  class=" cursor-pointer group py-1 hover:bg-gray-200 focus:outline-none w-20"
  on:click={logOut}
>
  <div
    class="p-1 rounded-full mx-auto text-gray-700 group-hover:bg-gray-200 group-active:bg-gray-200 max-w-max"
  >
    <Icon icon="mdi:account-arrow-right-outline" width="24" height="24" />
  </div>
  <!-- svelte-ignore missing-declaration -->
  <h3
    class="-mt-1 text-black tracking-wide text-xs text-center group-active:font-semibold"
  >
    Keluar
  </h3>
</a>
