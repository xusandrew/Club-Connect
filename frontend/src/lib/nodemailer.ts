import nodemailer from 'nodemailer'
const mailer = nodemailer.createTransport(
  {
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'mxc.maggiechen@gmail.com',
      pass: process.env.MAILER_AUTH,
    },
  }
)

export default mailer
