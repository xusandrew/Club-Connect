import { fetchEventsTomorrow } from '@/lib/data'
import mailer from '@/lib/nodemailer'
import { rsvpReminder } from '@/lib/email/mailOptions'
import { NextResponse } from 'next/server'

export async function GET() {
  //cron job happens every day at 2 AM UTC, 6 AM EST

  const eventsNextDay = await fetchEventsTomorrow()

  eventsNextDay.map((event) => {
    event.rsvp_emails.map((rsvp) => {
      //send email
      const mailOptions = rsvpReminder(rsvp.email, event)

      mailer.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(`Error sending email: ${error}`, { status: 500 })
        }
      })
    })
  })

  return NextResponse.json(`RSVP reminders cron job finished`, { status: 200 })
}
