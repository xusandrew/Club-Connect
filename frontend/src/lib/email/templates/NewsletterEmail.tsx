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
interface RsvpSignUpProps {
  events: Event[]
}

const NewsletterEmail = ({ events }: RsvpSignUpProps) => {
  const eventsThisWeek = events.map((event) => (
    <ul key={event.eid}>
      <Section style={body}>
        <Text style={paragraph}>
          <b>{event.title}</b>
          <br />
          <b>Start Time:</b>{' '}
          {event.start_time ? new Date(event.start_time).toLocaleString() : 'Unspecified'}
          <br />
          <b>End Time:</b>{' '}
          {event.end_time ? new Date(event.end_time).toLocaleString() : 'Unspecified'}
          <br />
          <b>Location:</b> {event.location}
          <br />
          <b>Event Description:</b> {event.description}
        </Text>
      </Section>
    </ul>
  ))

  return (
    <Html>
      <Head />
      <Preview>Club Connect Weekly Digest!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>This Week&apos;s Events</Heading>
          <ul>{eventsThisWeek}</ul>
          <Text style={paragraph}>
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

export default NewsletterEmail

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
