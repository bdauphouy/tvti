<script lang="ts">
	export let title: string
	export let description: string
</script>

<li class="flex flex-col items-start gap-4">
	<h3 class="text-2xl font-semibold text-white">{title}</h3>
	<span class="text-lg leading-relaxed text-gray">{description}</span>
</li>
