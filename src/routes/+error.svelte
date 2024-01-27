<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1>WE ARE ERROR!!! {$page.status}: {$page.error?.message}</h1>
