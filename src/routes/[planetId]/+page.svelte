<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main>
	<h1>{data.name}</h1>
	<p>{data.radius}</p>
	<p>{data.revolution}</p>
	<p>{data.rotation}</p>
</main>
