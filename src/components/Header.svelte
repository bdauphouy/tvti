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
			: 'bg-white/20 text-white'} flex flex-wrap justify-between gap-2 py-2 px-6 text-xs transition-colors duration-300 sm:text-base md:justify-center md:gap-16 md:py-3 md:text-2xl"
	>
		<a href="tel:0614881054" class="transition-opacity duration-300 hover:opacity-60"
			>Téléphone : 0614881054</a
		>
		<a href="mailto:sebastien.tvti@sfr.fr" class="transition-opacity duration-300 hover:opacity-60"
			>Email : sebastien.tvti@sfr.fr</a
		>
	</header>
	<nav
		class="{hasScrolled
			? 'py-2 md:py-4'
			: 'py-4 md:py-6'} grid grid-cols-2 px-6 transition-[padding] duration-300 md:px-20 xl:grid-cols-[1fr,2fr,1fr]"
	>
		<a href="/">
			<img
				src="/logo.webp"
				title="Retourner à l'accueil"
				alt="Logo de TVTI"
				class="{hasScrolled
					? ''
					: 'brightness-50 grayscale hover:brightness-100 hover:grayscale-0'} w-28 transition-[filter] duration-300"
			/>
		</a>
		<ul
			class="{hasScrolled ? 'bg-white' : 'bg-primary'} {!menuIsOpen
				? 'hidden xl:flex'
				: ''} absolute left-0 top-full z-20 flex h-96 w-screen flex-col place-items-center items-center justify-center gap-16 text-2xl transition-colors duration-300 xl:relative xl:top-0 xl:h-auto xl:w-auto xl:flex-row xl:items-center xl:bg-transparent xl:text-lg"
		>
			<li>
				<a
					class="transition-[opacity] duration-300 xl:hover:opacity-50"
					href="/"
					on:click={closeMenu}>Accueil</a
				>
			</li>
			<li>
				<a
					class="transition-[opacity] duration-300 xl:hover:opacity-50"
					href="/#savoir-faire"
					on:click={closeMenu}>Nos savoir-faire</a
				>
			</li>
			<li>
				<a
					class="transition-[opacity] duration-300 xl:hover:opacity-50"
					href="/#valeurs"
					on:click={closeMenu}>Nos valeurs</a
				>
			</li>
		</ul>
		<div class="flex place-content-end items-center gap-10">
			<Button as="a" href="/contact">
				<span class="hidden xl:block">Contactez-nous</span>
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
