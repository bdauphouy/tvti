<script lang="ts">
	export let classes = ''
	export let as: 'a' | 'button' = 'a'
	export let href = ''
</script>

<svelte:element
	this={as}
	on:click
	href={as === 'a' ? href : undefined}
	class="{classes} inline-block cursor-pointer rounded-md bg-secondary px-6 py-3 text-lg font-semibold text-primary transition-colors duration-300 hover:bg-secondary/80"
>
	<slot />
</svelte:element>
