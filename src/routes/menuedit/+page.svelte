<script lang="ts">
	import { enhance } from '$app/forms';
  import type { ActionData } from './$types';
  import type { Item } from '$lib/server/db/schema';

  let { form, data }: { form: ActionData, data: {items: Array<Item>} } = $props();
    console.log('client side', data.items);
  const items = data.items;
</script>

<h1 class="text-center">Add menu items</h1>
<form method="post" action="?/addItem" class="grid grid-cols-1" use:enhance>
  <label>
    Item Name
    <input name="itemName" class="outline rounded">
  </label>
  <label>
    Item Size
    <input name="size" class="outline rounded">
  </label>
  <label>
    Item Price
    <input name="price" class="outline rounded">
  </label>
  <button formaction="?/addItem" class="bg-amber-200 focus:bg-amber-800">Add Item</button>
</form>
<p style="color: red">{form?.message ?? ''}</p>

<ul>
  {#if items.length === 0}
  <li>No menu items avaiable</li>
  {:else}
    {#each items as item}
      <li>{item.name} - {item.size} - ${item.price}</li>
    {/each}
  {/if}
</ul>