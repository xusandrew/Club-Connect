import type { Club } from './Club'
import type { RVSP } from './RVSP'

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
  rvsp_emails: RVSP[]
}
