import { Event } from '@/types/Event'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import * as React from 'react'

//source: https://demo.react.email/preview/magic-links/raycast-magic-link?view=source
interface RsvpSignUpProps {
  event: Event
}

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ''

export const RsvpSignUpEmail = ({ event }: RsvpSignUpProps) => (
  <Html>
    <Head />
    <Preview>Log in with this magic link.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>
          RSVP Confirmation: {event.title} by {event.club.name}
        </Heading>
        <Section style={body}>
          <Text style={paragraph}>
            Thank you for RSVPing to {event.title} hosted by {event.club.name}! Here are the details
            of the event:
          </Text>
        </Section>
        <Section style={body}>
          <Text style={paragraph}>
            <b>Event Details:</b>
            <li>Event: {event.title}</li>
            <li>
              Start Time: {event.start_time ? event.start_time.toLocaleString() : 'Unspecified'}
            </li>
            <li>End Time: {event.end_time ? event.end_time.toLocaleString() : 'Unspecified'}</li>
            <li>Location: {event.location}</li>
            <li>Event Description: {event.description}</li>
          </Text>
        </Section>
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

RsvpSignUpEmail.PreviewProps = {
  event: {
    title: 'Intro to Coding Workshop',
    description: 'Learn the basics of coding with Python',
    start_time: new Date(),
    end_time: new Date(),
    location: 'Tech Lab',
    club: {
      name: 'Tech Club',
    },
  },
} as RsvpSignUpProps

export default RsvpSignUpEmail

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
