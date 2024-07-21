



import { fetchEventsTomorrow } from '@/lib/data'
import mailer from '@/lib/nodemailer'
import { rsvpReminder } from '@/app/email/mailOptions'

export async function GET() {
  const eventsNextDay = await fetchEventsTomorrow()
  eventsNextDay.map((event) => {
    event.rsvp_emails.map((rsvp) => {
      //send email
      const mailOptions = rsvpReminder(rsvp.email, event)

      mailer.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email: ', error)
        } else {
          console.log('Email sent: ', info.response)
        }
      })
    })
  })
}
