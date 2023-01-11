<script lang="ts">
	export let id: string
	export let label = ''
	export let value = ''
	export let error = ''
</script>

<fieldset class="flex flex-col gap-2">
	<label for={id} class="text-lg text-white">{label}</label>
	<textarea
		{id}
		bind:value
		class="h-40 w-full rounded-md bg-white/20 p-4 text-lg text-white outline-none"
	/>
	<span class="text-lg text-red-600">{error}</span>
</fieldset>
