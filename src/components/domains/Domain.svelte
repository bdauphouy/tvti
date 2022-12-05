<script lang="ts">
	export let id: string
	export let title: string
	export let description: string
</script>

<li on:mouseenter on:mouseleave>
	<a href="#{id}" class="flex flex-col items-start gap-4">
		<h3 class="text-2xl font-semibold text-white">{title}</h3>
		<span class="text-lg leading-relaxed text-gray">{description}</span>
	</a>
</li>
