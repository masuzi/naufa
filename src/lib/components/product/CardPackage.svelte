<style>
  .pinned {
    @apply z-10 mx-auto mt-4 flex w-5/6 flex-col rounded-lg bg-white shadow-lg sm:-mt-6 lg:mx-0
lg:w-1/3;
  }
  .unpinned {
    @apply mx-auto mt-4 flex w-5/6 flex-col rounded-none bg-white lg:mx-0 lg:w-1/4 lg:rounded-l-lg;
  }
  /* .card {
    @apply mx-auto mt-4 flex w-5/6 flex-col;
  } */
</style>

<script>
  import { formatRupiah } from './BriApi'
  import Button from '../ui/Button.svelte'
  import Gauge from './Gauge.svelte'
  export let profile
</script>

<div class={profile.pinned ? 'pinned' : 'unpinned'}>
  <div class="flex-1 overflow-hidden rounded-t rounded-b-none bg-white">
    <!-- <div class="w-full p-8 text-center text-4xl font-bold">{profile.bandwith}</div> -->
    <div class="gradient my-0 h-1 w-full rounded-t py-0" />
    <div class="flex items-center justify-center pt-3">
      <div class="text-6xl {profile.pinned ? 'text-blue-500' : 'text-yellow-500'}">
        <Gauge value={profile.bandwith} />
      </div>
    </div>
    <!-- <div class="w-full pt-6 text-center text-4xl font-bold">{profile.bandwith}</div> -->

    <ul class="w-full text-center {profile.pinned ? 'text-base font-bold' : 'text-sm'}">
      <li class="border-b py-4">{profile.benefit1}</li>
      <li class="border-b py-4">{profile.benefit2}</li>
      <li class="border-b py-4">{profile.benefit3}</li>
    </ul>
  </div>
  <div
    class="mt-auto flex-none overflow-hidden rounded-b rounded-t-none bg-white p-6 shadow"
  >
    <div class="w-full pt-6 text-center text-4xl font-bold">
      <span class="text-sm">Rp.</span>
      {formatRupiah(profile.price)}
      <span class="text-sm">/per bulan </span>
    </div>
    <Button secondary>Langganan</Button>
  </div>
</div>
