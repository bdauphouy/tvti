<script>
	import Value from './values/Value.svelte'
</script>

<section
	id="valeurs"
	class="mx-auto flex max-w-screen-3xl scroll-mt-10 flex-col gap-10 px-6 pt-20 md:scroll-mt-24 md:gap-16 md:px-20"
>
	<h2 class="text-3xl font-semibold leading-tight text-white md:text-4xl">
		Les valeurs que nous défendons
	</h2>
	<ul class="grid grid-cols-1 gap-16 md:grid-cols-2 xl:grid-cols-4">
		<Value
			icon="service.svg"
			title="Polyvalence"
			description="Pas besoin d'avoir recours à de nombreux artisans et d'alourdir la facture de votre projet, votre artisan se charge d'effectuer des travaux multiples."
		/>
		<Value
			icon="hand.svg"
			title="Conseils et accompagnement"
			description="Conseils et solutions sur les côtés esthétiques et techniques, tout au long du projet."
		/>
		<Value
			icon="map-pin.svg"
			title="Disponibilité & ponctualité"
			description="Déplacement dans un rayon de 100 km autour de Guémené-Penfao mais également à l'échelle nationale si besoin."
		/>
		<Value
			icon="money.svg"
			title="Respect du budget"
			description="Etude approfondie du projet pour optimiser les coûts."
		/>
	</ul>
</section>
