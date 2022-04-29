<script>
  import Icon from '@iconify/svelte'
  import { session } from '$app/stores'
  import { goto } from '$app/navigation'
  import { showCart } from '../cart/stores'
  const changeUrl = () => {
    $showCart = false
    goto('/user/' + $session.user)
  }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a class=" rounded-full  group py-1  focus:outline-none w-20" on:click={changeUrl}>
  <div
    class="p-1 rounded-full mx-auto text-gray-700 group-hover:bg-gray-200 group-active:bg-gray-200 max-w-max  md:hover:text-blue-500"
  >
    <Icon icon="iconoir:profile-circled" width="24" height="24" />
  </div>
  <!-- svelte-ignore missing-declaration -->
  <h3
    class="-mt-1 text-black tracking-wide text-xs text-center group-active:font-semibold"
  >
    Profil
  </h3>
</a>
