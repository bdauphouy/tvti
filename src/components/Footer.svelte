<script lang="ts">
	const currentYear = new Date().getFullYear()
</script>

<footer class="mx-auto max-w-screen-3xl">
	<div class="flex flex-col gap-10 rounded-t-xl bg-white/5 py-10 px-6 md:px-20">
		<div class="flex flex-col gap-10 md:flex-row md:items-end md:gap-40">
			<div class="flex flex-col gap-4">
				<img src="logo.png" alt="Logo de TVTI" class="w-40" />
				<ul class="flex flex-col gap-1 text-lg text-gray">
					<li class="font-bold text-white">TVTI</li>
					<li>Sébastien DAUPHOUY</li>
					<li>2, Le Pont des Claies</li>
					<li>44290 Guémené-Penfao</li>
					<li>
						<a href="tel:0614881054" class="transition-[opacity] duration-300 xl:hover:opacity-50"
							>0614881054</a
						>
					</li>
					<li>
						<a
							href="mailto:sebastien.tvti@sfr.fr"
							class="transition-[opacity] duration-300 xl:hover:opacity-50">sebastien.tvti@sfr.fr</a
						>
					</li>
				</ul>
			</div>
			<ul class="flex flex-col gap-1 text-lg text-gray">
				<h3 class="font-bold text-white">Liens</h3>
				<li>
					<a href="#realisations" class="transition-[opacity] duration-300 xl:hover:opacity-50"
						>Nos réalisations</a
					>
				</li>
				<li>
					<a href="#valeurs" class="transition-[opacity] duration-300 xl:hover:opacity-50"
						>Nos valeurs</a
					>
				</li>
				<li>
					<a href="#partenaires" class="transition-[opacity] duration-300 xl:hover:opacity-50"
						>Nos partenaires</a
					>
				</li>
				<li>
					<a
						href="/mentions-legales.pdf"
						class="transition-[opacity] duration-300 xl:hover:opacity-50">Mentions légales</a
					>
				</li>
			</ul>
		</div>
		<div class="flex flex-col justify-between gap-4 text-lg text-white sm:flex-row">
			<span
				>Réalisé avec ❤️ par <a
					href="https://bdph.me"
					target="_blank"
					class="transition-[opacity] duration-300 xl:hover:opacity-50">son fils</a
				>.</span
			>
			<span>&copy; 2015-{currentYear}</span>
		</div>
	</div>
</footer>
