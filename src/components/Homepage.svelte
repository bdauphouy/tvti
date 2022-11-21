<script>
	import Button from 'components/Button.svelte'
</script>

<main
	class="mx-auto flex h-screen max-w-screen-3xl items-center justify-between gap-16 px-6 pt-20 md:pr-0 md:pl-20"
>
	<div class="flex max-w-2xl flex-col items-start gap-8">
		<h1 class="text-4xl font-semibold text-white sm:text-5xl sm:leading-tight">
			Spécialisé dans la rénovation pour particuliers et entreprises
		</h1>
		<p class="text-lg leading-relaxed text-gray">
			TVTI est spécialisé dans le domaine de la rénovation, Il est destinée à répondre au départ à
			des demandes pour des professionnels, mais réalise également des travaux pour le compte de
			particuliers.
		</p>
		<Button href="#realisations">Voir les réalisations</Button>
	</div>
	<div class="hidden max-w-3xl flex-1 self-end xl:block">
		<img src="/homepage-image.png" alt="Siège de TVTI" class="w-full" />
	</div>
</main>
