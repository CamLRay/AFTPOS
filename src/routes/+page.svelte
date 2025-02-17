<script lang="ts">
  import type { Item } from '$lib/server/db/schema';
  import ItemOrderView from '$lib/ItemOrderView.svelte';

  let { data }: { data: {items: Array<Item>} } = $props();

  
</script>

<div class="flex">
  <div>
    <h1>Welcome to Amtgard Food Theory</h1>
    <h2>This is a self serve kiosk, please place your order using the menu on screen.</h2>
    <p>Your Order</p>
  </div>

  <div class="outline-1">
    This is where menu items go
    <ItemOrderView {data} />
  
  </div>
</div>