<script>
	import Button from 'components/Button.svelte'
</script>

<main
	class="mx-auto flex max-w-screen-3xl items-center justify-between gap-16 px-6 pt-32 md:px-20 md:pt-40"
>
	<div class="flex max-w-2xl flex-col items-start gap-8">
		<img src="/logo.png" alt="Logo de TVTI" class="w-60" />
		<h1 class="text-4xl font-semibold text-white sm:text-5xl sm:leading-tight">
			Spécialisé dans la rénovation pour particuliers et entreprises
		</h1>
		<p class="text-lg leading-relaxed text-gray">
			Tous Vos Travaux Intérieurs entreprise de bâtiment tous corps d'états seconds œuvres
			spécialisée dans le domaine de la rénovation. Nous pouvons réaliser des projets sur plusieurs
			départements : 44, 56, 35 et même nous déplacer sur l'ensemble de la métropole si besoin.
			Véritables généralistes du bâtiment, nos travaux sont destinés aussi bien aux professionnels
			qu'aux particuliers.
		</p>
		<Button href="#realisations">Voir les réalisations</Button>
	</div>
	<div class="hidden max-w-3xl flex-1 xl:block">
		<img src="/realisations/agencements/1.jpg" alt="Siège de TVTI" class="w-full rounded-xl" />
	</div>
</main>
