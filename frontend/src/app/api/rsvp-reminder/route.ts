import { fetchEventsTomorrow } from '@/lib/data'
import mailer from '@/lib/nodemailer'
import { rsvpReminder } from '@/lib/email/mailOptions'
import { NextResponse } from 'next/server'

export async function GET() {
  //cron job happens every day at 2 AM UTC, 6 AM EST

  const eventsNextDay = await fetchEventsTomorrow()

  await Promise.all(
    eventsNextDay.map(async (event) => {
      await Promise.all(
        event.rsvp_emails.map(async (rsvp) => {
          // Send email
          if(rsvp.email.endsWith("example.com")){
            console.log(`Did not send to spoof email ${rsvp.email}`)
            return;
          }
          const mailOptions = rsvpReminder(rsvp.email, event)
          await new Promise((resolve, reject) => {
            mailer.sendMail(mailOptions, (error, info) => {
              if (error) {
                console.error(`Error sending email: ${error}`)
                reject(error)
              } else {
                resolve(info)
              }
            })
          })
        }),
      )
    }),
  )
  return NextResponse.json(`RSVP reminders cron job finished`, { status: 200 })
}
