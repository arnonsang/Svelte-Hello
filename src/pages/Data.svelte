<script>
  import Card from '../components/Card.svelte';

  import Loader from "../components/Loader.svelte";
  import load from "../lib/getdata.js";
  import { onMount } from "svelte";

  let pageData = [];
  let isLoaded = false;

  onMount(async () => {
    let loadData = await load();
    pageData = loadData.data;
    isLoaded = true;
    console.log(pageData);
  });
</script>

{#if isLoaded}
  <div class="hero min-h-screen yena-hero flex flex-wrap p-20 gap-6">
    {#each pageData as item}
      <Card props={item}/>
    {/each}
  </div>
{:else}
  <Loader />
{/if}

<style>
  div.yena-hero {
    background-image: url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);
  }
</style>
