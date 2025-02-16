<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<nav class="bg-amber-200">
	<a href="/">home</a>
	<a href="/menuedit">Edit menu</a>
	<a href="/demo/lucia">Login</a>
</nav>
{@render children()}
