'use server'

import prisma from './prisma'
import { RVSP } from '../types/RVSP'
import mailer from './nodemailer'

export const rvsp = async (formData: FormData) => {
  const rvspData: RVSP = {
    eid: Number(formData.get('eid') as string),
    email: formData.get('email') as string,
  }

  if (!(rvspData.eid && rvspData.email)) {
    throw new Error('Missing required fields')
  }

  //create record
  await prisma.rVSP.create({ data: rvspData })

  const mailOptions = {
    from: 'mxc.maggiechen@gmail.com',
    to: rvspData.email,
    subject: `RSVP to an event!`,
    text: "You've successfully RSVP'ed to an event!",
  }

  //send email
  mailer.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email: ', error)
    } else {
      console.log('Email sent: ', info.response)
    }
  })
}
