import { getSession } from '@/auth'
import CreateEventForm from '@/components/create-event/CreateEventForm'

export default async function CreateEventPage() {
  const session = await getSession()
  if (!session) {
    return <div>Please login to your club to create events.</div>
  }

  return <CreateEventForm club={session.club} />
}
