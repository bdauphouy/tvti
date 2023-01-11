<script>
	import Category from './know-how/Category.svelte'

	const defaultSrc = 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png'
</script>

<section
	id="savoir-faire"
	class="mx-auto flex max-w-screen-3xl scroll-mt-10 flex-col gap-10 px-6 pt-20 md:scroll-mt-24 md:gap-16 md:px-20"
>
	<h2 class="text-3xl font-semibold text-white md:text-4xl">Nos savoir-faire</h2>
	<Category
		title="Démolitions légères"
		id="demolitions-legeres"
		details={[
			'Démolition en site occupé ou exploité',
			'Démolition de cloisons / massifs bétons',
			'Réalisation de protections et de sas antipoussières',
			'Modifications complètes pour rénovations de salles de bains et de cuisines'
		]}
		pictures={[
			{
				title: 'Démolition de crédence carrelage',
				src: '/savoir-faire/demolitions-legeres/3.webp'
			},
			{
				title: 'Démolition de cloison',
				src: '/savoir-faire/demolitions-legeres/2.webp'
			},
			{
				title: 'Démolition de cuisine',
				src: '/savoir-faire/demolitions-legeres/4.webp'
			}
		]}
	/>
	<Category
		id="isolation"
		layout={2}
		title="Isolation phonique et thermique"
		details={[
			"Isolation classique par l'intérieur",
			'Isolation par soufflage',
			'Laine de verre et laine de bois',
			'Isolation sol par complexe FERMACELL'
		]}
		pictures={[
			{
				title: 'Isolation plafond entre poutres',
				src: '/savoir-faire/isolation/3.webp'
			},
			{
				title: 'Isolation murale',
				src: '/savoir-faire/isolation/4.webp'
			},
			{
				title: 'Isolation rampant',
				src: '/savoir-faire/isolation/7.webp'
			},
			{
				title: 'Isolation rampant',
				src: '/savoir-faire/isolation/6.webp'
			},
			{
				title: 'Isolation plafond',
				src: '/savoir-faire/isolation/5.webp'
			}
		]}
	/>
	<Category
		id="cloisons-seches"
		title="Cloisons sèches"
		details={[
			'Tous types de plaques de plâtre',
			'Cloisons spécifiques',
			'Cloisons modulaires',
			'Plafonds suspendus dalles'
		]}
		pictures={[
			{
				title: 'Doublage et plafond',
				src: '/savoir-faire/cloisons-seches/3.webp'
			},
			{
				title: 'Cloison de distribution',
				src: '/savoir-faire/cloisons-seches/2.webp'
			},
			{
				title: 'Aménagement de combles',
				src: '/savoir-faire/cloisons-seches/1.webp'
			}
		]}
	/>
	<Category
		id="menuiseries"
		layout={2}
		title="Menuiseries intérieures et extérieures"
		details={[
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
				title: "Porte d'entrée",
				src: '/savoir-faire/menuiserie-int-ext/7.webp'
			},
			{
				title: 'Menuiserie extérieure et volets roulants',
				src: '/savoir-faire/menuiserie-int-ext/1.webp'
			},
			{
				title: 'Menuiserie extérieure',
				src: '/savoir-faire/menuiserie-int-ext/2.webp'
			},
			{
				title: 'Mural bois brut',
				src: '/savoir-faire/menuiserie-int-ext/3.webp'
			},
			{
				title: 'Mural bois brut',
				src: '/savoir-faire/menuiserie-int-ext/4.webp'
			}
		]}
	/>
	<Category
		id="revetements-de-sols"
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
				title: 'Dalles bureau',
				src: '/savoir-faire/revetements-de-sols/1.webp'
			},
			{
				title: 'LVT',
				src: '/savoir-faire/revetements-de-sols/2.webp'
			},
			{
				title: 'Ragréage',
				src: '/savoir-faire/revetements-de-sols/5.webp'
			}
		]}
	/>
	<Category
		id="carrelages-faiences"
		layout={2}
		title="Carrelages/faïences"
		details={[
			'Tous types de carrelage sol et muraux',
			"Nattes d'étanchéité",
			'Intérieurs et extérieurs'
		]}
		pictures={[
			{
				title: 'Carrelage imitation parquet',
				src: '/savoir-faire/carrelage-faience/1.webp'
			},
			{
				title: 'Salle de bain complète',
				src: '/savoir-faire/carrelage-faience/9.webp'
			},
			{
				title: 'Salle de bain complète',
				src: '/savoir-faire/carrelage-faience/8.webp'
			},
			{
				title: "Receveur à l'italienne",
				src: '/savoir-faire/carrelage-faience/10.webp'
			},
			{
				title: 'Terrasse',
				src: '/savoir-faire/carrelage-faience/12.webp'
			}
		]}
	/>
	<Category
		id="salles-de-bains"
		title="Salles de bains de A à Z"
		details={[
			'Démolitions',
			'Modifications réseaux plomberies et électriques',
			'Modifications de plâtrerie et préparation des supports',
			'Revêtements de sols et muraux',
			'Peinture',
			"Fournitures et pose de l'ensemble des équipements sanitaires, WC, baignoire, douches, vasques et meubles",
			'Modifications électriques'
		]}
		pictures={[
			{
				title: 'Salle de bain',
				src: '/savoir-faire/salles-de-bains/10.webp'
			},
			{
				title: 'Salle de bain',
				src: '/savoir-faire/salles-de-bains/17.webp'
			},
			{
				title: 'Salle de bain',
				src: '/savoir-faire/salles-de-bains/11.webp'
			}
		]}
	/>
	<Category
		id="peintures"
		layout={2}
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
				title: 'Papier peint',
				src: '/savoir-faire/peinture-revetements-muraux/10.webp'
			},
			{
				title: 'Rénovation complète',
				src: '/savoir-faire/peinture-revetements-muraux/8.webp'
			},
			{
				title: 'Rénovation complète',
				src: '/savoir-faire/peinture-revetements-muraux/9.webp'
			},
			{
				title: 'Lasure',
				src: '/savoir-faire/peinture-revetements-muraux/1.webp'
			},
			{
				title: 'Peinture murale',
				src: '/savoir-faire/peinture-revetements-muraux/4.webp'
			}
		]}
	/>
	<Category
		id="agencement"
		title="Agencement"
		details={[
			'Fourniture et pose de cuisine ou pose seule',
			'Dressing, placards',
			"Banques d'accueil",
			'Fourniture et pose de mobilier divers',
			'Meubles de salles de bains'
		]}
		pictures={[
			{
				title: "Banque d'accueil",
				src: '/savoir-faire/agencement/1.webp'
			},
			{
				title: 'Cuisine',
				src: '/savoir-faire/agencement/8.webp'
			},
			{
				title: 'Cuisine',
				src: '/savoir-faire/agencement/5.webp'
			}
		]}
	/>
	<Category
		id="renovation-hebergements-hoteliers"
		layout={2}
		title="Rénovation hébergements hôteliers"
		details={[
			'Pilotage de chantier',
			'Evacuations de mobilier',
			'Modifications électriques et plomberie',
			'Peintures, revêtements de sols et muraux',
			'Pose mobilier et agencement divers',
			'Kitchenettes',
			'Luminaires',
			'Salles de bains',
			'Démolitions diverses'
		]}
		pictures={[
			{
				title: 'Chambre',
				src: '/savoir-faire/renovation-hebergements-hoteliers/1.webp'
			},
			{
				title: 'Salon',
				src: '/savoir-faire/renovation-hebergements-hoteliers/6.webp'
			},
			{
				title: 'Kitchenette',
				src: '/savoir-faire/renovation-hebergements-hoteliers/3.webp'
			},
			{
				title: 'Salon',
				src: '/savoir-faire/renovation-hebergements-hoteliers/4.webp'
			},
			{
				title: 'Chambre',
				src: '/savoir-faire/renovation-hebergements-hoteliers/5.webp'
			}
		]}
	/>
	<Category
		id="metallerie-serrurerie"
		title="Métallerie serruerie"
		details={[
			'Serrures et béquillage portes',
			'Garde-corps',
			'Ferme-portes',
			"Contrôle d'accès",
			"Rampes d'accès",
			'Renforts de quais'
		]}
		pictures={[
			{
				title: 'Cornière renfort quai',
				src: '/savoir-faire/metallerie-serrurerie/1.webp'
			},
			{
				title: 'Quai de déchargement',
				src: '/savoir-faire/metallerie-serrurerie/2.webp'
			},
			{
				title: "Rampe d'accès",
				src: '/savoir-faire/metallerie-serrurerie/4.webp'
			}
		]}
	/>
	<Category
		id="depannage-multiservices"
		layout={2}
		title="Dépannage multiservices"
		details={[
			'Remplacement appareillage électrique',
			'Modification alimentation eau et évacuation',
			'Remplacement de robinetterie',
			'Bordures',
			'Réparation enrobée',
			'Caniveaux',
			'Remplacement équipements sanitaires',
			'Mise en jeu et réglage de port',
			'Réparation petite maçonnerie',
			'Pose équiments divers',
			'Remplacement luminaires',
			'Déménagement',
			'Réparation de bardages et clôtures',
			'Fourniture et pose de mobilier de bureau',
			'Remise en état après sinistres',
			'Fourniture et pose de mobilier urbain',
			'Modifications de réseaux et tableaux électriques'
		]}
		pictures={[
			{
				title: 'Chenage et bac acier',
				src: '/savoir-faire/depannages-multiservices/2.webp'
			},
			{
				title: 'Caniveau',
				src: '/savoir-faire/depannages-multiservices/1.webp'
			},
			{
				title: 'Montage table convoyage',
				src: '/savoir-faire/depannages-multiservices/3.webp'
			},
			{
				title: 'Mouzillon après',
				src: '/savoir-faire/depannages-multiservices/4.webp'
			},
			{
				title: 'Poteau de quai',
				src: '/savoir-faire/depannages-multiservices/6.webp'
			}
		]}
	/>
</section>
