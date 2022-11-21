<script lang="ts">
	type Picture = {
		title: string
		src: string
	}

	export let title: string
	export let details: string[] = []
	export let pictures: Picture[] = []
</script>

<div class="grid-cols-8 grid-rows-[repeat(1,250px)] gap-4 sm:grid xl:grid-rows-[repeat(2,250px)]">
	<div
		class="col-start-1 col-end-9 row-start-1 row-end-3 flex flex-col items-start gap-8 sm:col-end-6 sm:pr-16 xl:col-end-3"
	>
		<div class="flex flex-col gap-4">
			<h3 class="text-2xl font-medium text-white">{title}</h3>
			<ul class="flex flex-col gap-1 text-lg text-gray">
				{#each details as detail}
					<li>{detail}</li>
				{/each}
			</ul>
		</div>
		<!-- <Button>Voir la galerie photo</Button> -->
	</div>
	<img
		src={pictures[0]?.src}
		alt={pictures[0]?.title}
		class="col-start-6 col-end-9 row-start-1 hidden h-full w-full rounded-xl object-cover sm:block xl:col-start-3 xl:col-end-7 xl:row-end-3"
	/>
	<img
		src={pictures[1]?.src}
		alt={pictures[1]?.title}
		class="col-start-7 col-end-9 row-start-1 hidden h-full w-full rounded-xl object-cover xl:block"
	/>
	<img
		src={pictures[2]?.src}
		alt={pictures[2]?.title}
		class="col-start-7 col-end-9 row-start-2 hidden h-full w-full rounded-xl object-cover xl:block"
	/>
</div>
