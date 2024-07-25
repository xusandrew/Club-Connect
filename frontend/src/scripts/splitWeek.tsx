import { format } from 'date-fns'
import { Event } from '@/types/Event'

export const processEvents = (events: Event[]): Record<string, Event[]> => {
  let groupedEvents: Record<string, Event[]> = {}
  for (const event of events) {
    if (!event.start_time) {
      continue
    }
    const day = format(event.start_time, 'eee')
    if (!groupedEvents[day]) {
      groupedEvents[day] = []
    }
    groupedEvents[day].push(event)
  }
  return groupedEvents
}
