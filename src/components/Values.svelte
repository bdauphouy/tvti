<script>
	import Value from './values/Value.svelte'
</script>

<section
	id="nos-valeurs"
	class="mx-auto flex max-w-screen-3xl scroll-mt-10 flex-col gap-10 py-20 px-6 md:scroll-mt-24 md:gap-16 md:px-20"
>
	<h2 class="text-3xl font-semibold leading-tight text-white md:text-4xl">
		Les valeurs que nous défendons
	</h2>
	<ul class="grid grid-cols-1 gap-16 md:grid-cols-2 xl:grid-cols-4">
		<Value
			title="Polyvalence"
			description="Pas besoin d'avoir recours à de nombreux artisans et d'alourdir la facture de votre projet, votre artisan se charge d'effectuer des travaux multiples."
		/>
		<Value
			title="Conseils et accompagnement"
			description="Conseils et solutions sur les côtés esthétiques et techniques, tout au long du projet."
		/>
		<Value
			title="Disponibilité"
			description="Déplacement dans un rayon de 100 km autour de Guémené-Penfao mais également à l'échelle nationale si besoin."
		/>
		<Value
			title="Respect de l'environnement"
			description="Utilisation de produits et de materiaux respectant l'environnement."
		/>
		<Value
			title="Respect du budget"
			description="Etude approfondie du projet pour optimiser les coûts."
		/>
		<Value
			title="Ponctualité"
			description="Car c'est aujourd'hui quelque chose qui se perd de plus en plus."
		/>
	</ul>
</section>
