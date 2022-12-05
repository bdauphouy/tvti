<script lang="ts">
	type Picture = {
		title: string
		src: string
	}

	export let layout: 1 | 2 = 1
	export let id: string
	export let title: string
	export let details: string[] = []
	export let pictures: Picture[] = []
</script>

<a
	{id}
	class={`${
		layout === 1 ? 'grid-cols-8' : 'grid-cols-[repeat(16,minmax(0,1fr))]'
	} scroll-mt-40 grid-rows-[repeat(1,250px)] gap-4 sm:grid xl:grid-rows-[repeat(2,250px),auto]`}
>
	<div
		class={`${
			layout === 1
				? 'col-start-1 col-end-8 xl:col-end-4 2xl:col-end-3 sm:col-end-6'
				: 'col-start-1 col-end-8 xl:col-end-6 2xl:col-end-5'
		} row-start-1 row-end-4 flex flex-col items-start gap-8 sm:pr-16 max-w-md`}
	>
		<div class="flex flex-col gap-4">
			<h3 class="text-2xl font-medium text-white">{title}</h3>
			<ul class="flex flex-col gap-4 text-lg text-gray">
				{#each details as detail}
					<li>- {detail}</li>
				{/each}
			</ul>
		</div>
		<!-- <Button>Voir la galerie photo</Button> -->
	</div>
	<img
		src={pictures[0]?.src}
		alt={pictures[0]?.title}
		title={pictures[0]?.title}
		class={`${
			layout === 1
				? 'col-start-6 col-end-9 xl:col-start-4 xl:col-end-7 2xl:col-start-3'
				: 'col-start-11 col-end-[17] xl:col-start-7 xl:col-end-11 2xl:col-end-9 2xl:col-start-5'
		} row-start-1 hidden h-full w-full rounded-xl object-cover sm:block xl:row-end-3`}
	/>
	<img
		src={pictures[1]?.src}
		alt={pictures[1]?.title}
		title={pictures[1]?.title}
		class={`${
			layout === 1
				? 'col-end-9'
				: 'xl:col-end-[17] xl:col-start-11 2xl:col-start-9 2xl:col-end-[14]'
		} col-start-7 row-start-1 hidden h-full w-full rounded-xl object-cover xl:block`}
	/>
	<img
		src={pictures[2]?.src}
		alt={pictures[2]?.title}
		title={pictures[2]?.title}
		class={`${
			layout === 1
				? 'col-end-9'
				: 'col-end-10 xl:col-start-11 xl:col-end-[14] 2xl:col-start-9 2xl:col-end-13'
		} col-start-7 row-start-2 hidden h-full w-full rounded-xl object-cover xl:block`}
	/>
	{#if layout === 2}
		<img
			src={pictures[3]?.src}
			alt={pictures[3]?.title}
			title={pictures[3]?.title}
			class="col-start-[14] col-end-[17] row-start-1 hidden h-full w-full rounded-xl object-cover 2xl:block"
		/>
		<img
			src={pictures[4]?.src}
			alt={pictures[4]?.title}
			title={pictures[4]?.title}
			class="col-start-[14] col-end-[17] row-start-2 hidden h-full w-full rounded-xl object-cover xl:block 2xl:col-start-13"
		/>
	{/if}
</a>
