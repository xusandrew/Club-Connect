import { SENDER_EMAIL } from "@/lib/nodemailer"

export const rsvpSignUp = (email: string) => {
  return {
    from: SENDER_EMAIL,
    to: email,
    subject: `RSVP to an event!`,
    text: "You've successfully RSVP'ed to an event!",
  }
}

export const rsvpReminder = (email: string) => {
    return {
      from: SENDER_EMAIL,
      to: email,
      subject: `This is a reminder for your event!`,
      text: "You've successfully RSVP'ed to an event!",
    }
  }


export const newsletter = (email: string) => {
    return {
      from: SENDER_EMAIL,
      to: email,
      subject: `Newsletter!`,
      text: "You've successfully RSVP'ed to an event!",
    }
  }
  
  