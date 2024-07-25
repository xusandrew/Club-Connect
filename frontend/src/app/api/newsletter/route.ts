import { fetchEventsInWeek, fetchEventsTomorrow } from '@/lib/data'
import mailer from '@/lib/nodemailer'
import { newsletter, rsvpReminder } from '@/lib/email/mailOptions'
import { startOfWeek } from 'date-fns'
import { NextResponse } from 'next/server'

export async function GET() {
  //cron jobs happen every monday at 2 AM UTC, 6 AM EST
  const startOfWeekDate = startOfWeek(new Date())
  const eventsNextDay = await fetchEventsInWeek(startOfWeekDate)

  //TODO: make newsletter table
  // Right now it sends to m29chen@uwaterloo.ca every monday

  const mailOptions = newsletter('m29chen@uwaterloo.ca', eventsNextDay)
  await new Promise((resolve, reject) => {
    mailer.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(`Error sending email: ${error}`, { status: 500 })
        reject(error)
      }

      resolve(info)
    })
  })

  return NextResponse.json(`Newsletter cron job finished`, { status: 200 })
}
