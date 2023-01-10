<script lang="ts">
	import Grid from './Grid.svelte'

	export let layout: 1 | 2 = 1
	export let id: string
	export let title: string
	export let details: string[] = []
	export let pictures: Picture[] = []
</script>

<div {id} class="flex scroll-mt-40 flex-col gap-12 lg:flex-row lg:gap-20">
	<div class="flex w-full flex-col gap-4 lg:w-1/3">
		<h3 class="text-2xl font-medium text-white">{title}</h3>
		<ul class="flex flex-col gap-4 text-lg text-gray">
			{#each details as detail}
				<li>- {detail}</li>
			{/each}
		</ul>
	</div>
	<Grid {pictures} {layout} />
</div>
