<script lang="ts">
	export let id: string
	export let label = ''
	export let value = ''
	export let error = ''
</script>

<fieldset class="flex w-full flex-1 flex-col gap-2">
	<label for={id} class="text-lg text-white">{label}</label>
	<input
		{id}
		bind:value
		class="w-full rounded-md bg-white/20 p-4 text-lg text-white outline-none"
	/>
	{#if error}<span class="text-lg text-red-600">{error}</span>{/if}
</fieldset>
