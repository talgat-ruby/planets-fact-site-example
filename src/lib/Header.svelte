<script lang="ts">
	type PlanetItem = {
		id: string;
		name: string;
	};

	export let planets: PlanetItem[] = [];
</script>

<header>
	<nav>
		<menu>
			{#each planets as planet (planet.id)}
				<li>
					<a href={`/${planet.id}`}>{planet.name}</a>
				</li>
			{/each}
		</menu>
	</nav>
</header>
