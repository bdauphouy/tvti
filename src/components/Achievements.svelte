<script>
	import Category from './achievements/Category.svelte'

	const defaultSrc = 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png'
</script>

<section
	id="realisations"
	class="mx-auto flex max-w-screen-3xl scroll-mt-10 flex-col gap-10 px-6 pt-20 md:scroll-mt-24 md:gap-16 md:px-20"
>
	<h2 class="text-3xl font-semibold text-white md:text-4xl">
		Réalisations (note: manque les images)
	</h2>
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
		title="Menuiseries intérieures et extérieures"
		details={[
			'Planchers/mezzanines',
			'Blocs portes intérieurs',
			'Portes à galandage et coulissant',
			'Portes et fenêtres extérieurs y compris pose Réno (PVC, bois alu, acier)',
			'Portails de garage',
			'Portails et portillons extérieurs',
			'Volets rolants',
			'Escaliers',
			'Solivages et faux solivages'
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
		title="Revêtements de sol"
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
		title="Carrelages/faïences"
		details={['Tous types de carrelage sol et muraux', "Nattes d'étanchéité"]}
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
	<Category
		title="Agencement"
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
		title="Equipements sanitaires"
		details={[
			'Salle de bain clé en main',
			'WC',
			'Baignoires',
			'Douches',
			'Eviers',
			'Lavabos/vasques'
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
		title="Métallerie serruerie"
		details={[
			'Serrures et béquillage portes',
			'Garde-corps',
			'Ferme-portes',
			"Contrôle d'accès",
			'Remplacement de paumelles',
			'Barre anti-panique'
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
		title="Dépannage multiservices"
		details={[
			'Débouchage sanitaire et réparation',
			'Mise en jeu et réglage de port',
			'Réparation petite maçonnerie',
			"Pose panneaux d'affichage",
			'Pose téléviseurs et supports',
			'Remplacement sources lumineuses',
			'Réparation de bardage',
			'Déménagement locaux suite restructuration',
			'Fourniture et pose de mobilier de bureau',
			'Remise en état après sinistres',
			'Fourniture et pose de mobilier urbain'
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
