'use server'

import prisma from './prisma'
import { RSVP } from '../types/RSVP'
import mailer from './nodemailer'
import { getRsvpSignUpHTML } from '@/app/email/getTemplate';

export const rsvp = async (formData: FormData) => {
  const rsvpData: RSVP = {
    eid: Number(formData.get('eid') as string),
    email: formData.get('email') as string,
  }

  if (!(rsvpData.eid && rsvpData.email)) {
    throw new Error('Missing required fields')
  }

  const event = await prisma.event.findUnique({
    where:{
      eid: rsvpData.eid
    },
    include:{
      club:true,
      rsvp_emails:true
    }
  })

  if(!event){
    throw new Error('cannot find event')
  }

  //create record
  await prisma.rSVP.create({ data: rsvpData })
  const emailTemplate = getRsvpSignUpHTML(event);

  const mailOptions = {
    from: 'mxc.maggiechen@gmail.com',
    to: rsvpData.email,
    subject: `RSVP to an event!`,
    html: emailTemplate,
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
