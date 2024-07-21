import { fetchEventsInWeek, fetchEventsTomorrow } from '@/lib/data'
import mailer from '@/lib/nodemailer'
import { newsletter, rsvpReminder } from '@/app/email/mailOptions'
import { startOfWeek } from 'date-fns'

export async function GET() {
  //cron jobs happen every monday at 2 AM UTC, 6 AM EST
  const startOfWeekDate = startOfWeek(new Date())
  const eventsNextDay = await fetchEventsInWeek(startOfWeekDate)

  //TODO: make newsletter table
    // Right now it sends to m29chen@uwaterloo.ca every monday

  const mailOptions = newsletter('m29chen@uwaterloo.ca', eventsNextDay)
  mailer.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email: ', error)
    } else {
      console.log('Email sent: ', info.response)
    }
  })
}