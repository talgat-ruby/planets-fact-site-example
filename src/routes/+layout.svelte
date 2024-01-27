<script lang="ts">
	import type { PageData } from './$types';
	import Header from '$lib/Header.svelte';

	export let data: PageData;

	$: planets = data.data;
</script>

<div class="app">
	<Header planets={planets} />

	<slot />
</div>
