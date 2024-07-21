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
    return  "Required fields missing, please try again.";
  }

  const existingRSVP = await prisma.rSVP.findFirst({
    where:{
      email: rsvpData.email,
      eid: rsvpData.eid
    }
  })

  if(existingRSVP){
    return  "This email address has already RSVP'd to this event. Please check you email for more information.";
  }
   //create record
   await prisma.rSVP.create({ data: rsvpData })
  const mailOptions = {
    from: 'mxc.maggiechen@gmail.com',
    to: rsvpData.email,
    subject: `RSVP to an event!`,
    text: "You've successfully RSVP'ed to an event!",
  }
  //send email
  mailer.sendMail(mailOptions, (error, info) => {
    if (error) {
      return "Error with sending email, please try again.";
    } 
  })

  return null;
}
