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

const NewsletterSignUpEmail = () => {
  return (
    <Html>
      <Head />
      <Preview> Thank you for signing up for the Club Connect weekly newsletter </Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>Weekly Newsletter Sign Up Confirmation</Heading>
          <Section style={body}>
            <Text style={paragraph}>
              Thank you for signing up for the Club Connect weekly newsletter! Expect the first
              weekly digest to arrive at the upcoming Monday at 6 AM EST!
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
}

export default NewsletterSignUpEmail

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
