import { getSession } from '@/auth'
import EditEventForm from '@/components/edit-events/EditEventsForm'

export default async function EditEventPage() {
  const session = await getSession()
  if (!session) {
    return <div>Please login to your club to edit events.</div>
  }
  return <EditEventForm clubID={session.club.cid} />
}
