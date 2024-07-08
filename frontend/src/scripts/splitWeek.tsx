import { format } from 'date-fns';

interface Event {
  name: string;
  location: string;
  startTime: Date;
  endTime: Date;
}

export const processEvents = (events: Event[]) => {

  // Group events by their start date
  const groupedEvents = events.reduce((acc, event) => {
    const eventDay = format(event.startTime, 'eee');
    if (!acc[eventDay]) {
      acc[eventDay] = [];
    }
    acc[eventDay].push(event);
    return acc;
  }, {} as Record<string, Event[]>);

  // Sort events within each date group by their start time
  Object.keys(groupedEvents).forEach(date => {
    groupedEvents[date].sort((a, b) => a.startTime.getTime() - b.startTime.getTime());
  });

  return groupedEvents;
};