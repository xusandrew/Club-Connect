import type { Club } from './Club'
import type { RSVP } from './RSVP'

export type Event = {
  eid: number
  cid: number
  title: string
  description: string | null
  location: string | null
  start_time: Date | null
  end_time: Date | null
  posted_time: Date
  club: Club
  rsvp_emails: RSVP[]
}
