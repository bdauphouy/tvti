<script lang="ts">
	import Domain from './domains/Domain.svelte'
	import { onMount } from 'svelte'
	import { browser } from '$app/environment'

	let seeMoreText: HTMLSpanElement

	let mouseX = 0
	let mouseY = 0

	let seeMoreTextX = 0
	let seeMoreTextY = 0

	const lerp = (a: number, b: number, t: number) => (1 - t) * a + t * b

	const handleMouseMove = (e: MouseEvent) => {
		const { clientX, clientY } = e

		mouseX = clientX
		mouseY = clientY
	}

	const handleMouseEnter = () => {
		seeMoreText.style.opacity = '1'
	}

	const handleMouseLeave = () => {
		seeMoreText.style.opacity = '0'
	}

	onMount(() => {
		if (browser) window.addEventListener('mousemove', handleMouseMove)

		let raf: number

		const render = () => {
			seeMoreTextX = lerp(seeMoreTextX, mouseX, 0.1)
			seeMoreTextY = lerp(seeMoreTextY, mouseY, 0.1)

			seeMoreText.style.transform = `translate(${seeMoreTextX + 20}px, ${seeMoreTextY + 20}px)`
			raf = window.requestAnimationFrame(render)
		}

		render()

		return () => {
			if (browser) {
				removeEventListener('mousemove', handleMouseMove)
				if (raf) cancelAnimationFrame(raf)
			}
		}
	})
</script>

<section
	id="domaines"
	class="mx-auto flex max-w-screen-3xl scroll-mt-10 flex-col gap-10 px-6 pt-20 md:scroll-mt-24 md:gap-16 md:px-20"
>
	<h2 class="text-3xl font-semibold leading-tight text-white md:text-4xl">
		Nos domaines d'activité
	</h2>
	<ul class="grid grid-cols-1 gap-16 md:grid-cols-2 xl:grid-cols-4">
		<span
			class="text-bold pointer-events-none fixed left-0 top-0 hidden rounded-md px-6 py-3 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 xl:block"
			bind:this={seeMoreText}>Cliquez pour voir plus</span
		>
		<Domain
			on:mouseenter={handleMouseEnter}
			on:mouseleave={handleMouseLeave}
			id="demolitions-legeres"
			title="Démolitions légères"
			description="Démolitions soignées avec protection des éléments conservés, sas anti-poussières, démontages divers pour rénovation complète de salles de bain, de cuisine, etc…"
		/>
		<Domain
			on:mouseenter={handleMouseEnter}
			on:mouseleave={handleMouseLeave}
			id="isolation"
			title="Isolation"
			description="Isolation thermique et phonique par laine de verre ou laine de bois pour doublages, rampants, plafonds. Isolation des sols grâce aux complexe FERMACELL."
		/>
		<Domain
			on:mouseenter={handleMouseEnter}
			on:mouseleave={handleMouseLeave}
			id="cloisons-seches"
			title="Cloisons sèches"
			description="Réalisation d'aménagements complets, plafonds, rampants, doublages, cloisons de distribution. Système STYL et OPTIMA."
		/>
		<Domain
			on:mouseenter={handleMouseEnter}
			on:mouseleave={handleMouseLeave}
			id="menuiseries"
			title="Menuiseries intérieures et extérieures"
			description="Fourniture et pose de menuiseries intérieures et extérieures. Pose rénovation avec protection des éléments conservés."
		/>
		<Domain
			on:mouseenter={handleMouseEnter}
			on:mouseleave={handleMouseLeave}
			id="revetements-de-sols"
			title="Revêtements de sols"
			description="Fourniture et pose de revêtements de sols variés en lames, dalles et lés."
		/>
		<Domain
			on:mouseenter={handleMouseEnter}
			on:mouseleave={handleMouseLeave}
			id="carrelages-faiences"
			title="Carrelages et faïences"
			description="Fourniture et pose de revêtements céramiques et composites au sol et muraux dans tous les espaces de la maison intérieurs et extérieurs."
		/>
		<Domain
			on:mouseenter={handleMouseEnter}
			on:mouseleave={handleMouseLeave}
			id="salles-de-bains"
			title="Salle de bain de A à Z"
			description="Réalisation de vos projets de salle de bain du début à la fin permettant de supprimer les problèmes de coordination et de réduire la durée des travaux."
		/>
		<Domain
			on:mouseenter={handleMouseEnter}
			on:mouseleave={handleMouseLeave}
			id="peintures"
			title="Peintures intérieures et revêtements muraux"
			description="Réalisation soignée de vos projets déco intérieurs pour tous types de supports et revêtements."
		/>
		<Domain
			on:mouseenter={handleMouseEnter}
			on:mouseleave={handleMouseLeave}
			id="agencement"
			title="Agencement"
			description="Réalisation et pose d'agencement divers, cuisines, placards, dressings, fabrication sous-traitée auprès d'agenceurs reconnus"
		/>
		<Domain
			on:mouseenter={handleMouseEnter}
			on:mouseleave={handleMouseLeave}
			id="renovation-hebergements-hoteliers"
			title="Rénovation d'hébergements de vacances ou hôteliers"
			description="Rénovation complète d'hébergements à la demande de chaine d'hébergement ou d'hôtellerie."
		/>
		<Domain
			on:mouseenter={handleMouseEnter}
			on:mouseleave={handleMouseLeave}
			id="metallerie-serrurerie"
			title="Métallerie et serrurerie"
			description="Fourniture et pose d'éléments d'accès ou de renfort pour tous types de problématiques et projets."
		/>
		<Domain
			on:mouseenter={handleMouseEnter}
			on:mouseleave={handleMouseLeave}
			id="depannage-multiservices"
			title="Dépannage multiservices"
			description="Dépannages en tout genre pour l'ensemble des domaines du bâtiment."
		/>
	</ul>
</section>
