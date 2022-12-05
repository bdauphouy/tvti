<script lang="ts">
	import Partner from './partners/Partner.svelte'
</script>

<section
	id="partenaires"
	class="mx-auto flex max-w-screen-3xl scroll-mt-10 flex-col gap-10 px-6 py-20 md:scroll-mt-24 md:gap-16 md:px-20"
>
	<h2 class="text-3xl font-semibold text-white md:text-4xl">Partenaires</h2>
	<ul class="grid grid-cols-2 gap-16 md:grid-cols-4 xl:grid-cols-6">
		<Partner name="SARL BODIGUEL" />
		<Partner name="DOD" />
		<Partner name="SIDER" />
		<Partner name="BIGMAT" />
		<Partner name="PRESQU'ILE MENUISERIES" />
		<Partner name="POINT P" />
		<Partner name="DENIS MATERIAUX - FOUSSIER" />
		<Partner name="SONAC / TEREVA" />
		<Partner name="SONEPAR" />
		<Partner name="PIERRE ET VACANCES" />
		<Partner name="ADAGIO" />
		<Partner name="FOUSSIER" />
	</ul>
	<span class="self-end text-lg text-gray">Et plein d'autres...</span>
</section>
