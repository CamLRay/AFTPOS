<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<nav class="bg-amber-200 flex justify-between px-4">
	<a href="/" class="bg-amber-400 rounded p-1 hover:bg-amber-100">home</a>
	<div>
		<a href="/menuedit" class="bg-amber-400 rounded p-1 hover:bg-amber-100">Admin Console</a>
		<a href="/demo/lucia" class="bg-amber-400 rounded p-1 hover:bg-amber-100">Login</a>
	</div>
</nav>

<div class="p-1.5">
{@render children()}
</div>