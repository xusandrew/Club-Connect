'use server'

import prisma from './prisma'
import { RSVP } from '../types/RSVP'
import mailer from './nodemailer'

export const rsvp = async (formData: FormData) => {
  const rsvpData: RSVP = {
    eid: Number(formData.get('eid') as string),
    email: formData.get('email') as string,
  }

  if (!(rsvpData.eid && rsvpData.email)) {
    throw new Error('Missing required fields')
  }

  const existingRSVP = await prisma.rSVP.findFirst({
    where:{
      email: rsvpData.email,
      eid: rsvpData.eid
    }
  })

  if(!existingRSVP){
     //create record
    await prisma.rSVP.create({ data: rsvpData })
  }
 
  const mailOptions = {
    from: 'mxc.maggiechen@gmail.com',
    to: rsvpData.email,
    subject: `RSVP to an event!`,
    text: existingRSVP? "You have already registered to this event": "You've successfully RSVP'ed to an event!",
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
