<script>
  import Profile from '$lib/components/user/Profile.svelte'
  import NotHome from '$lib/components/mobile/NotHome.svelte'
</script>

<Profile />
<div class=" fixed bottom-0 z-40 w-full  md:hidden">
  <NotHome />
</div>
