'use server'

import prisma from './prisma'
import { Newsletter } from '../types/Newsletter'
import mailer from './nodemailer'
import { newsletterSignUp } from '@/lib/email/mailOptions'

export const newsletterSignup = async (formData: FormData) => {
  const newsletterData: Newsletter = {
    email: formData.get('email') as string,
  }

  if (!newsletterData.email) {
    return 'Missing fields. Please try again.'
  }

  const existingRSVP = await prisma.newsletterSubscription.findFirst({
    where: {
      email: newsletterData.email,
    },
  })

  if (existingRSVP) {
    return 'This email address has already signed up for the weekly newsletter. Please use another email or check your inbox for more information.'
  }

  //create record
  await prisma.newsletterSubscription.create({ data: newsletterData })
  const mailOptions = newsletterSignUp(newsletterData.email)
  //send email
  await new Promise((resolve, reject) => {
    mailer.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error)
        return 'Error with sending email, please try again.'
      }

      resolve(info)
    })

    return null
  })
}
