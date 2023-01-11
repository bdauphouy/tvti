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
		const response = await fetch(`${window.location.origin}/api/contact`, {
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

			if (data.success) {
				success = true
			}
		}
	}
</script>

<main
	class="flex min-h-screen justify-center bg-primary bg-[url(/savoir-faire/agencement/1.webp)] bg-cover bg-no-repeat px-6 pt-40 shadow-contact-background md:px-20 md:pt-60"
>
	<div class="flex w-full max-w-2xl flex-col gap-10">
		<h2 class="text-3xl font-semibold text-white md:text-4xl">Contactez-nous</h2>
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
