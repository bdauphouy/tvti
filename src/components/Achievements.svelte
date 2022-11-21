<script>
	import Category from './achievements/Category.svelte'

	const defaultSrc = 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png'
</script>

<section
	id="realisations"
	class="mx-auto flex max-w-screen-3xl scroll-mt-10 flex-col gap-10 px-6 pt-20 md:scroll-mt-24 md:gap-16 md:px-20"
>
	<h2 class="text-3xl font-semibold text-white md:text-4xl">Réalisations</h2>
	<Category
		title="Démolitions légères"
		details={[
			'Démolitions en site occupé ou exploité',
			'Démolitions de cloisons',
			'Démolitions socles béton'
		]}
		pictures={[
			{
				title: '',
				src: defaultSrc
			},
			{
				title: '',
				src: defaultSrc
			},
			{
				title: '',
				src: defaultSrc
			}
		]}
	/>
	<Category
		title="Isolation phonique et thermique"
		details={["Isolation classique par l'intérieur", 'Isolation par soufflage', 'Isolation sol']}
		pictures={[
			{
				title: 'Isolation plafond',
				src: '/realisations/isolations/1.jpg'
			},
			{
				title: '',
				src: defaultSrc
			},
			{
				title: '',
				src: defaultSrc
			}
		]}
	/>
	<Category
		title="Cloisons sèches"
		details={['Tous types de plaques de plâtre', 'Cloisons spécifiques', 'Cloisons modulaires']}
		pictures={[
			{
				title: 'Placo',
				src: '/realisations/cloisons-seches/1.jpg'
			},
			{
				title: '',
				src: defaultSrc
			},
			{
				title: '',
				src: defaultSrc
			}
		]}
	/>
	<Category
		title="Revêtements de sols"
		details={[
			'Sols PVC LVT et lés',
			'Ragréage',
			'Peintures sols',
			'Parquets flottants',
			'Moquettes',
			'Vitrificateurs'
		]}
		pictures={[
			{
				title: '',
				src: defaultSrc
			},
			{
				title: '',
				src: defaultSrc
			},
			{
				title: '',
				src: defaultSrc
			}
		]}
	/>
	<Category
		title="Solivages"
		details={['Faux solivages', 'Planchers', 'Mezzanines', 'Modifications trémies escalier']}
		pictures={[
			{
				title: '',
				src: defaultSrc
			},
			{
				title: '',
				src: defaultSrc
			},
			{
				title: '',
				src: defaultSrc
			}
		]}
	/>
	<Category
		title="Sanitaires"
		details={['WC', 'Baignoires', 'Douches', 'Eviers', 'Lavabos/vasques']}
		pictures={[
			{
				title: '',
				src: defaultSrc
			},
			{
				title: '',
				src: defaultSrc
			},
			{
				title: '',
				src: defaultSrc
			}
		]}
	/>
	<Category
		title="Carrelages/faïences"
		details={[
			'Tous types de carralage sol et mural',
			"Nattes d'étancheité",
			"Douches à l'italienne"
		]}
		pictures={[
			{
				title: 'Faïence',
				src: 'realisations/carrelages-faiences/1.jpg'
			},
			{
				title: 'Carrelage',
				src: 'realisations/carrelages-faiences/2.jpg'
			},
			{
				title: '',
				src: defaultSrc
			}
		]}
	/>
	<Category
		title="Agencements"
		details={[
			'Fourniture et pose de cuisine ou pose seule',
			'Dressing, placards',
			'Banques accueil',
			'Fourniture et pose de mobilier divers',
			'Salle de bain'
		]}
		pictures={[
			{
				title: "Banque d'accueil",
				src: '/realisations/agencements/1.jpg'
			},
			{
				title: 'Cuisine',
				src: '/realisations/agencements/2.png'
			},
			{
				title: '',
				src: defaultSrc
			}
		]}
	/>
	<Category
		title="Modifications légères électricité et plomberie"
		details={[
			'Remplacement appareillages',
			'Déplacement appareillages',
			'Modification alimentation eau et évacuation',
			'Remplacement de robinetterie'
		]}
		pictures={[
			{
				title: '',
				src: defaultSrc
			},
			{
				title: '',
				src: defaultSrc
			},
			{
				title: '',
				src: defaultSrc
			}
		]}
	/>
	<Category
		title="Petite maçonnerie"
		details={[
			'Socle béton et scellement',
			'Murets',
			'Clôtures',
			'Bordures',
			'Réparation enrobée',
			'Canivaux'
		]}
		pictures={[
			{
				title: '',
				src: defaultSrc
			},
			{
				title: '',
				src: defaultSrc
			},
			{
				title: '',
				src: defaultSrc
			}
		]}
	/>
	<Category
		title="Métallerie serrurerie"
		details={[
			'Serrures et béquillage portes',
			'Garde-corps',
			'Ferme-porte',
			"Contrôle d'accès",
			'Remplacement de paumelles',
			'Barres antipanique'
		]}
		pictures={[
			{
				title: '',
				src: defaultSrc
			},
			{
				title: '',
				src: defaultSrc
			},
			{
				title: '',
				src: defaultSrc
			}
		]}
	/>
	<Category
		title="Peintures intérieures et revêtements muraux"
		details={[
			'Préparations',
			'Mise en peinture plafonds, murs, boiseries',
			'Peinture radiateurs',
			'Toile de verre et toile à peindre',
			'Revêtements décoratifs',
			'Revêtements projetés'
		]}
		pictures={[
			{
				title: '',
				src: defaultSrc
			},
			{
				title: '',
				src: defaultSrc
			},
			{
				title: '',
				src: defaultSrc
			}
		]}
	/>
</section>
