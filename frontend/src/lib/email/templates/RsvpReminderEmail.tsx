import { Event } from '@/types/Event'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import * as React from 'react'
interface RsvpReminderProps {
  event: Event
}

const RsvpReminder = ({ event }: RsvpReminderProps) => {
  return (
    <Html>
      <Head />
      <Preview>
        Reminder: {event.title} hosted by {event.club.name}!
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>
            Reminder: {event.title} by {event.club.name}
          </Heading>
          <Section style={body}>
            <Text style={paragraph}>
              This is a reminder for the upcoming event {event.title} hosted by {event.club.name}.
              Here are the details of the event:
            </Text>
          </Section>
          <Section style={body}>
            <Text style={paragraph}>
              <b>Event Details:</b>
              <ul>
                <li>
                  <b>Event:</b> {event.title}
                </li>
                <li>
                  <b>Start Time:</b>{' '}
                  {event.start_time ? event.start_time.toLocaleString() : 'Unspecified'}
                </li>
                <li>
                  <b>End Time:</b>{' '}
                  {event.end_time ? event.end_time.toLocaleString() : 'Unspecified'}
                </li>
                <li>
                  <b>Location:</b> {event.location}
                </li>
                <li>
                  <b>Event Description:</b> {event.description}
                </li>
              </ul>
            </Text>
          </Section>
          <Text style={paragraph}>
            We look forward to seeing you there!
            <br />
            Best regards,
            <br />- Club Connect
          </Text>
          <Hr style={hr} />
          <Text style={footer}>Club Connect</Text>
        </Container>
      </Body>
    </Html>
  )
}

export default RsvpReminder

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: '0 auto',
  padding: '20px 25px 48px',
  backgroundImage: 'url("/assets/raycast-bg.png")',
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat, no-repeat',
}

const heading = {
  fontSize: '28px',
  fontWeight: 'bold',
  marginTop: '48px',
}

const body = {
  margin: '24px 0',
}

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
}

const link = {
  color: '#FF6363',
}

const hr = {
  borderColor: '#dddddd',
  marginTop: '48px',
}

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  marginLeft: '4px',
}
