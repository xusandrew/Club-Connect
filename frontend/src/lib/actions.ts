'use server'

import prisma from './prisma'
import { RSVP } from '../types/RSVP'
import mailer from './nodemailer'
import { rsvpSignUp, newsletter } from '@/app/email/mailOptions'
import { startOfWeek } from 'date-fns'
import { fetchEventsInWeek } from './data'

export const rsvp = async (formData: FormData) => {
  const rsvpData: RSVP = {
    eid: Number(formData.get('eid') as string),
    email: formData.get('email') as string,
  }

  if (!(rsvpData.eid && rsvpData.email)) {
    return  "Missing fields. Please try again.";
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
    return  "Missing event. Please try again.";
  }

  //create record
  await prisma.rSVP.create({ data: rsvpData })

  const mailOptions = rsvpSignUp(rsvpData.email, event);
  // const startOfWeekDate = startOfWeek(new Date())
  // const eventsNextDay = await fetchEventsInWeek(startOfWeekDate)
  // const mailOptions = newsletter(rsvpData.email, eventsNextDay);

  //send email
  mailer.sendMail(mailOptions, (error, info) => {
    if (error) {
      return "Error with sending email, please try again.";
    } 
  })

  return null;
}
