<script>
  let { data } = $props();
</script>

<h1 class="text-neutral-700">This is the item list component</h1>

<ul>
  {#if data.items.length === 0}
  <li>No menu items avaiable</li>
  {:else}
    {#each data.items as item}
      <li>{item.name} - {item.size} - ${item.price}</li>
    {/each}
  {/if}
</ul>