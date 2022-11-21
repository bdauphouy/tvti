import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import nodemailer from 'nodemailer'

dotenv.config()
console.log(process.env.AUTH_PASS)

const app = express()

app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.AUTH_USER,
		pass: process.env.AUTH_PASS
	}
})

app.post('/contact', (req, res) => {
	const { firstname, lastname, email, message } = req.body

	const mailOptions = {
		from: email,
		to: process.env.EMAIL_TO,
		subject: `[Message de tvti.fr] ${firstname} ${lastname} - ${email}`,
		text: message
	}

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			res.json({ error })
		} else {
			res.json({ info: info.response })
		}
	})
})

app.listen(3000)
