<script lang="ts">
	import Button from 'components/Button.svelte'
	import Input from './Input.svelte'
	import TextArea from './TextArea.svelte'

	type ContactFormData = {
		lastname: string
		firstname: string
		email: string
		message: string
	}

	const data: ContactFormData = {
		lastname: '',
		firstname: '',
		email: '',
		message: ''
	}

	const errors: ContactFormData = {
		lastname: '',
		firstname: '',
		email: '',
		message: ''
	}

	let success = false

	const submitForm = async () => {
		const response = await fetch('http://localhost:3000/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})

		return response.json()
	}

	const handleSubmit = async () => {
		Object.keys(data).forEach((value) => {
			const key = value as keyof ContactFormData

			if (!data[key]) {
				errors[key] = 'Ce champ est obligatoire.'
			} else {
				if (key === 'email') {
					if (!data[key].match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
						errors[key] = 'Veuillez entrer une adresse email valide.'

						return
					}
				}

				errors[key] = ''
			}
		})

		if (Object.values(errors).every((value) => !value)) {
			const data = await submitForm()

			if (data.info) {
				success = true
			} else {
				alert('Une erreur est survenue.')
			}
		}
	}
</script>

<main class="flex min-h-screen items-center justify-center px-6 md:px-20">
	<div class="flex w-full max-w-2xl flex-col gap-10">
		<h2 class="text-3xl font-semibold text-white md:text-4xl">Contactez-moi</h2>
		<form id="contact-form" class="flex flex-col gap-6" on:submit|preventDefault={handleSubmit}>
			<fieldset class="flex gap-6">
				<Input id="lastname" label="Nom" bind:value={data.lastname} bind:error={errors.lastname} />
				<Input
					id="firstname"
					label="Prénom"
					bind:value={data.firstname}
					bind:error={errors.firstname}
				/>
			</fieldset>
			<Input id="email" label="Email" bind:value={data.email} bind:error={errors.email} />
			<TextArea
				id="message"
				label="Message"
				bind:value={data.message}
				bind:error={errors.message}
			/>
			<Button as="button" classes="self-end">Envoyer</Button>
			{#if success}<span class="text-lg text-green-600">Le message a bien été envoyé !</span>{/if}
		</form>
	</div>
</main>
