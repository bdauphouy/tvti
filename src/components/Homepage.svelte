<script>
	import Button from 'components/Button.svelte'
</script>

<main
	class="mx-auto flex max-w-screen-3xl justify-between gap-16 px-6 pt-32 md:px-0 md:pl-20 md:pt-48 xl:px-20"
>
	<div class="flex max-w-2xl flex-col items-start gap-8 lg:max-w-xl">
		<img src="/logo.webp" alt="Logo de TVTI" class="w-60" />
		<h1 class="text-4xl font-semibold text-white xl:text-5xl xl:leading-tight">
			Spécialisé dans la rénovation pour particuliers et entreprises
		</h1>
		<p class="text-lg leading-relaxed text-gray">
			Tous Vos Travaux Intérieurs entreprise de bâtiment tous corps d'états seconds œuvres
			spécialisée dans le domaine de la rénovation. Nous pouvons réaliser des projets sur plusieurs
			départements : 44, 56, 35 et même nous déplacer sur l'ensemble de la métropole si besoin.
			<br /><br />
			Véritables généralistes du bâtiment, nos travaux sont destinés aussi bien aux professionnels qu'aux
			particuliers.
		</p>
		<Button href="#savoir-faire">Voir nos savoir-faire</Button>
	</div>
	<div class="hidden max-w-3xl flex-1 lg:flex xl:items-center">
		<img
			src="/home/3.webp"
			alt="Siège de TVTI"
			class="w-full rounded-l-xl object-cover object-[30%] xl:rounded-xl xl:object-center"
		/>
	</div>
</main>
