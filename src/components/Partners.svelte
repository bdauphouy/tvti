<script lang="ts">
	import Partner from './partners/Partner.svelte'
</script>

<section
	id="partenaires"
	class="mx-auto flex max-w-screen-3xl scroll-mt-10 flex-col gap-10 px-6 py-20 md:scroll-mt-24 md:gap-16 md:px-20"
>
	<h2 class="text-3xl font-semibold text-white md:text-4xl">Partenaires</h2>
	<ul class="grid grid-cols-2 gap-16 md:grid-cols-4 xl:grid-cols-6">
		<Partner name="DOD" logo="dod.png" />
		<Partner name="Sider" logo="sider.svg" />
		<Partner name="Foussier" logo="foussier.jpeg" />
		<Partner name="BigMat" logo="bigmat.png" />
		<Partner name="Point.P" logo="pointp.png" />
		<Partner name="Denis Matériaux à Pontchâteau" logo="denis-materiaux.jpeg" />
		<Partner name="SARL Bodiguel" logo="bodiguel.jfif" />
		<Partner name="Presqu'ile Menuiseries" logo="legallais.jpeg" />
		<Partner name="Sonac/Tereva" logo="" />
		<Partner name="Sonepar" logo="" />
	</ul>
	<span class="self-end text-lg text-gray">Et plein d'autres...</span>
</section>
