<script lang="ts">
	export let layout: 1 | 2 = 1
	export let pictures: Picture[]
</script>

{#if layout === 1}
	<ul
		class="grid h-full max-h-52 flex-1 grid-cols-3 grid-rows-[repeat(2,50%)] gap-2 sm:max-h-72 md:max-h-[500px] md:gap-4"
	>
		<li class="col-span-2 row-span-2">
			<img
				class="h-full w-full rounded-md object-cover md:rounded-xl"
				src={pictures[0].src}
				on:click={() => window.open(pictures[0].src, '_blank')}
				alt="Siège de TVTI"
			/>
		</li>
		<li class="col-start-3 row-span-1">
			<img
				class="h-full w-full rounded-md object-cover md:rounded-xl"
				src={pictures[1].src}
				on:click={() => window.open(pictures[1].src, '_blank')}
				alt="Siège de TVTI"
			/>
		</li>
		<li class="col-start-3 row-start-2 row-end-2">
			<img
				class="h-full w-full rounded-md object-cover md:rounded-xl"
				src={pictures[2].src}
				on:click={() => window.open(pictures[2].src, '_blank')}
				alt="Siège de TVTI"
			/>
		</li>
	</ul>
{:else}
	<ul
		class="grid h-full max-h-60 flex-1 grid-cols-7 grid-rows-[repeat(2,50%)] gap-2 sm:max-h-72 md:max-h-[500px] md:gap-4"
	>
		<li class="col-start-1 col-end-3 row-start-1 row-end-3">
			<img
				class="h-full w-full rounded-md object-cover md:rounded-xl"
				src={pictures[0].src}
				on:click={() => window.open(pictures[0].src, '_blank')}
				alt="Siège de TVTI"
			/>
		</li>
		<li class="col-start-3 col-end-5 row-start-1 row-end-2">
			<img
				class="h-full w-full rounded-md object-cover md:rounded-xl"
				src={pictures[1].src}
				on:click={() => window.open(pictures[1].src, '_blank')}
				alt="Siège de TVTI"
			/>
		</li>
		<li class="col-start-5 col-end-8 row-start-1 row-end-2">
			<img
				class="h-full w-full rounded-md object-cover md:rounded-xl"
				src={pictures[2].src}
				on:click={() => window.open(pictures[2].src, '_blank')}
				alt="Siège de TVTI"
			/>
		</li>
		<li class="col-start-3 col-end-6 row-start-2 row-end-3">
			<img
				class="h-full w-full rounded-md object-cover md:rounded-xl"
				src={pictures[3].src}
				on:click={() => window.open(pictures[2].src, '_blank')}
				alt="Siège de TVTI"
			/>
		</li>
		<li class="col-start-6 col-end-8 row-start-2 row-end-3">
			<img
				class="h-full w-full rounded-md object-cover md:rounded-xl"
				src={pictures[4].src}
				on:click={() => window.open(pictures[2].src, '_blank')}
				alt="Siège de TVTI"
			/>
		</li>
	</ul>
{/if}
