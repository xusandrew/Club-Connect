import nodemailer from 'nodemailer'
export const SENDER_EMAIL = 'cs348clubconnect@gmail.com'
const mailer = nodemailer.createTransport(
  {
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: SENDER_EMAIL,
      pass: process.env.MAILER_AUTH,
    },
  }
)

export default mailer
