import { SECRET_AUTH_PASS, SECRET_AUTH_USER, SECRET_EMAIL_TO } from '$env/static/private'
import { error, json, type RequestHandler } from '@sveltejs/kit'
import { createTransport } from 'nodemailer'

const transporter = createTransport({
	service: 'gmail',
	auth: {
		user: SECRET_AUTH_USER,
		pass: SECRET_AUTH_PASS
	}
})

export const POST: RequestHandler = async ({ request }) => {
	const { firstname, lastname, email, message } = await request.json()

	const mailOptions = {
		from: email,
		to: SECRET_EMAIL_TO,
		subject: `[Message de tvti.fr] ${firstname} ${lastname} - ${email}`,
		text: message
	}

	const sentMail = await transporter.sendMail(mailOptions)
	console.log(sentMail)

	if (!sentMail) {
		return error(500, 'Error while sending email')
	} else {
		return json({ message: 'Email sent', success: true })
	}
}
