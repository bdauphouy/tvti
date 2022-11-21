<script lang="ts">
	import Button from 'components/Button.svelte'
	import { onMount } from 'svelte'

	let hasScrolled = false
	let menuIsOpen = false

	const closeMenu = () => {
		if (window.innerWidth > 1280) return
		menuIsOpen = false
	}

	onMount(() => {
		window.addEventListener('scroll', () => {
			hasScrolled = window.scrollY > 0
		})
	})
</script>

<header
	class="{hasScrolled
		? 'bg-white/70 text-primary'
		: 'bg-primary/70 text-white'} fixed top-0 w-full touch-manipulation backdrop-blur-md transition-colors duration-300"
>
	<header
		class="{hasScrolled
			? 'bg-primary/20 text-primary'
			: 'bg-white/20 text-white'} hidden justify-center gap-16 py-1 transition-colors duration-300 md:flex"
	>
		<a href="tel:0614881054">Téléphone : 0614881054</a>
		<a href="mailto:sebastien.tvti@sfr.fr">Email : sebastien.tvti@sfr.fr</a>
	</header>
	<nav
		class="{hasScrolled
			? 'py-2 md:py-4'
			: 'py-4 md:py-8'} flex items-center justify-between px-6 transition-[padding] duration-300 md:px-20"
	>
		<a href="/" class="w-28">
			<img src="/logo.png" alt="Logo de TVTI" />
		</a>
		<ul
			class="{hasScrolled ? 'bg-white/70' : 'bg-primary/70'} {!menuIsOpen
				? 'hidden xl:flex'
				: ''} absolute left-0 top-full z-10 flex h-96 w-screen flex-col items-center justify-center gap-16 text-2xl backdrop-blur-md transition-colors duration-300 xl:relative xl:h-auto xl:w-auto xl:flex-row xl:items-stretch xl:justify-start xl:bg-transparent xl:text-lg xl:backdrop-blur-0"
		>
			<li>
				<a
					class="transition-[opacity] duration-300 hover:opacity-50"
					href="/#nos-valeurs"
					on:click={closeMenu}>Nos valeurs</a
				>
			</li>
			<li>
				<a
					class="transition-[opacity] duration-300 hover:opacity-50"
					href="/#realisations"
					on:click={closeMenu}>Réalisations</a
				>
			</li>
			<li>
				<a
					class="transition-[opacity] duration-300 hover:opacity-50"
					href="/#partenaires"
					on:click={closeMenu}>Partenaires</a
				>
			</li>
		</ul>
		<div class="flex items-center gap-10">
			<Button as="a" href="/contact">
				<span class="hidden xl:block">Contactez-moi</span>
				<img class="h-6 w-6 xl:hidden" src="/contact.svg" alt="Icône contact" /></Button
			>
			<button
				class="relative z-20 block h-6 w-7 xl:hidden"
				on:click={() => (menuIsOpen = !menuIsOpen)}
			>
				<span
					class="{menuIsOpen
						? '-rotate-45 bottom-1/2 translate-y-1/2'
						: 'bottom-0'} absolute h-1 w-full -translate-x-1/2 rounded-xl bg-secondary transition-[transform,bottom] duration-300"
				/>
				<span
					class:opacity-0={menuIsOpen}
					class="absolute h-1 w-full -translate-y-1/2 -translate-x-1/2 rounded-xl bg-secondary"
				/>
				<span
					class="{menuIsOpen
						? 'rotate-45 top-1/2 -translate-y-1/2'
						: 'top-0'} absolute h-1 w-full -translate-x-1/2 rounded-xl bg-secondary transition-[transform,top] duration-300"
				/>
			</button>
		</div>
	</nav>
</header>
