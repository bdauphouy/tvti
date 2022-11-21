<script lang="ts">
	export let number: number | string
	export let label: string
</script>

<li class="flex flex-col items-center gap-4">
	<h3 class="text-5xl font-semibold text-white">{number}</h3>
	<span class="text-center text-lg leading-relaxed text-gray">{label}</span>
</li>
