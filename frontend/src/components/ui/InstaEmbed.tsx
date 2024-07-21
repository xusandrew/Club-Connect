'use client'
import { InstagramEmbed } from 'react-social-media-embed'

type InstaEmbedProps = {
  link: string
}

export default function InstaEmbed(props: InstaEmbedProps) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <InstagramEmbed url={props.link} width={328} />
    </div>
  )
}
