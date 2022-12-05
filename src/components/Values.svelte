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
			description="Une seule et même entreprise pour tous les travaux qui permet de supprimer la coordination et d'alléger la facture de votre projet. Votre artisan vous propose une vision globale de votre rénovation."
		/>
		<Value
			icon="hand.svg"
			title="Conseils et accompagnement"
			description="Conseils et solutions techniques et esthétiques adaptés au projet tout au long de la réalisation. Vision globale du projet. Recherche permanente du meilleur rapport qualité / prix. Finition des travaux de qualité et respect des normes et DTU. Devis très détaillés"
		/>
		<Value
			icon="map-pin.svg"
			title="Disponibilité & ponctualité"
			description="Déplacement dans un rayon de 100 km autour de Guémené-Penfao mais également à l'échelle nationale si besoin. Respect strict des heures de rendez vous et des plannings de réalisation."
		/>
		<Value
			icon="money.svg"
			title="Respect du budget et de l'environnement"
			description="Etude approfondie du projet afin d'éviter les surcouts et la facturation intempestive de travaux supplémentaires. Utilisation de matériaux respectant l'environnement dans la mesure du possible. Evacuation tri et recyclage de nos déchets."
		/>
	</ul>
</section>
