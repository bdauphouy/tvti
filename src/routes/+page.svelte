<main>
	<img src="/key.svg" alt="Clé à molette" />
	<h1>Le site <span>tvti.fr</span> est en cours de reconstruction.</h1>
	<p>Revenez dans quelques jours...</p>
	<footer>
		<p>Vous pouvez toujours me contacter par téléphone ou par mail.</p>
		<div>
			<a href="tel:0614881054">06.14.88.10.54</a>
			<a href="mailto:sebastien.tvti@sfr.fr">sebastien.tvti@sfr.fr</a>
		</div>
	</footer>
</main>

<style lang="scss">
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 100vh;
		background-color: var(--blue);
		font-family: var(--main-font);
		text-align: center;
		padding: 1rem;

		img {
			width: 10rem;
			height: 10rem;
			margin-bottom: 3rem;
			animation: spin 5s ease-in-out infinite;
		}

		@keyframes spin {
			from {
				transform: rotate(0deg);
			}
			33% {
				transform: rotate(-20deg);
			}
			66% {
				transform: rotate(20deg);
			}
			to {
				transform: rotate(0deg);
			}
		}

		h1 {
			font-size: 2rem;
			color: var(--white);

			span {
				background-color: var(--white);
				color: var(--blue);
				padding-inline: 0.3rem;
			}
		}

		p {
			font-size: 1.2rem;
			color: var(--white);
			opacity: 0.7;
			font-weight: 300;
			margin-top: 1.5rem;
		}

		footer {
			margin-top: 5rem;

			div {
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				gap: 3rem;
				color: var(--white);
				font-size: 1.2rem;
				margin-top: 1.5rem;

				a {
					cursor: pointer;
					transition: translate 200ms;

					@media (hover: hover) {
						&:hover {
							translate: 0 -0.2rem;
						}
					}
				}
			}
		}
	}
</style>
