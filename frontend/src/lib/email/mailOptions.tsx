import { SENDER_EMAIL } from '@/lib/nodemailer'
import { Event } from '@/types/Event'
import { render } from '@react-email/render'
import RsvpSignUpEmail from './templates/RsvpSignUpEmail'
import RsvpReminderEmail from './templates/RsvpReminderEmail'
import NewsletterEmail from './templates/NewsletterEmail'

export const rsvpSignUp = (email: string, event: Event) => {
  const template = render(<RsvpSignUpEmail event={event} />)

  return {
    from: SENDER_EMAIL,
    to: email,
    subject: `Your RSVP Confirmation for ${event.title}`,
    html: template,
  }
}

export const rsvpReminder = (email: string, event: Event) => {
  const template = render(<RsvpReminderEmail event={event} />)
  return {
    from: SENDER_EMAIL,
    to: email,
    subject: `Your Reminder for ${event.title}`,
    html: template,
  }
}

export const newsletter = (email: string, events: Event[]) => {
  const template = render(<NewsletterEmail events={events} />)
  return {
    from: SENDER_EMAIL,
    to: email,
    subject: `Club Connect Newsletter!`,
    html: template,
  }
}
