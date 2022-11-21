<script>
	import Stat from './stats/Stat.svelte'
</script>

<section class="mx-auto max-w-screen-3xl px-6 md:px-20">
	<div class="rounded-xl bg-white/5 p-8 md:p-10">
		<ul class="mx-auto flex w-full max-w-4xl flex-wrap justify-center gap-10 md:justify-between">
			<Stat number="+20" label="Ans d'exérience" />
			<Stat number="+120" label="Chantiers réalisés" />
			<Stat number={25} label="Partenaires" />
		</ul>
	</div>
</section>
