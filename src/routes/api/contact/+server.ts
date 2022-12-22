import { PUBLIC_AUTH_PASS, PUBLIC_AUTH_USER, PUBLIC_EMAIL_TO } from '$env/static/public'
import { error, json, type RequestHandler } from '@sveltejs/kit'
import { createTransport } from 'nodemailer'

const transporter = createTransport({
	service: 'gmail',
	auth: {
		user: PUBLIC_AUTH_USER,
		pass: PUBLIC_AUTH_PASS
	}
})

export const POST: RequestHandler = async ({ request }) => {
	const { firstname, lastname, email, message } = await request.json()

	const mailOptions = {
		from: email,
		to: PUBLIC_EMAIL_TO,
		subject: `[Message de tvti.fr] ${firstname} ${lastname} - ${email}`,
		text: message
	}

	const sentMail = await transporter.sendMail(mailOptions)

	if (!sentMail) {
		return error(500, 'Error while sending email')
	} else {
		return json({ message: 'Email sent', success: true })
	}
}
