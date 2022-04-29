<style>
  .gradient {
    @apply bg-gradient-to-r from-pink-500 to-yellow-500;
  }
</style>

<script lang="ts">
  import Nav from './Nav.svelte'
  import Hero from './Hero.svelte'
  import About from './about.svelte'
  import Products from '../product/Products.svelte'
  // import Features from './Features.svelte'
  // import Cards from './Cards.svelte'
  // import Pricing from './Pricing.svelte'
  import CallToAction from './CallToAction.svelte'
  import Footer from './Footer.svelte'
  import Contact2 from '$lib/components/contact/Contact2.svelte'
</script>

<div
  class="text-sm gradient leading-normal tracking-normal text-white"
  style="font-family: 'Source Sans Pro', sans-serif;"
>
  <Nav />

  <Hero />

  <About />
  <Products />

  <!-- <Features /> -->

  <!-- <Cards /> -->

  <!-- <Pricing /> -->

  <CallToAction />
  <Contact2 />
  <Footer />
</div>
