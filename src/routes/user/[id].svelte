<!-- <script context="module">
  export const load = async ({ url: { params } }) => {
    const { id } = params
    return { props: { id } }
  }
</script> -->
<script>
  import { page } from '$app/stores'
  import Profile from '$lib/components/user/Profile.svelte'
  import NotHome from '$lib/components/mobile/NotHome.svelte'
  export let id = $page.params.id
</script>

<Profile {id} />
<div class=" fixed bottom-0 z-40 w-full  md:hidden">
  <NotHome />
</div>
<!-- <script>
 
  import { session } from '$app/stores'
  import Me from '$lib/components/user/Me.svelte'
  // export let id = $session.id
  // console.log($page.params.id)
</script> -->

<!-- <Me id={$page.params.id} /> -->
