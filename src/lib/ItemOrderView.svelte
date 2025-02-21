<script lang="ts">
  let { data } = $props();
  let count = $state(0);

  function handleClick(event: MouseEvent) {
    count += 1;
  }
</script>

<div class="grid grid-cols-4 gap-1 bg-neutral-700">
  {#if data.items.length === 0}
  <p>No menu items avaiable</p>
  {:else}
    {#each data.items as item}
      <button class="bg-indigo-400 m-1 p-2 rounded text-center" onclick={handleClick}>
        <div class="capitalize">{item.name}</div>
        <div>{item.size}</div>
        <div>${item.price}</div>
      </button>
    {/each}
  {/if}
</div>
