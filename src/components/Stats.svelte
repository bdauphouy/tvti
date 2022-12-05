<script>
	import Stat from './stats/Stat.svelte'
</script>

<section class="mx-auto max-w-screen-3xl px-6 pt-20 md:px-20">
	<div class="rounded-xl bg-white/5 p-8 md:p-10">
		<ul class="mx-auto flex w-full max-w-4xl flex-wrap justify-center gap-10 md:justify-between">
			<Stat number={8} label="Ans d'existence" />
			<Stat number={25} label="Ans d'expérience" />
			<Stat number="+200" label="Chantiers réalisés" />
		</ul>
	</div>
</section>
