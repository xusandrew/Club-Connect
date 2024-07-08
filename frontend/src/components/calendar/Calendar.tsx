/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PVQ97cZdLW4
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/data/components/ui/button"
import { startOfWeek, endOfWeek, eachDayOfInterval, getWeekOfMonth, format } from "date-fns";
import CalendarEvent from "@/components/calendar/EventCard"

const targetDate = new Date();
const start = startOfWeek(targetDate);
const end = endOfWeek(targetDate);
const daysOfWeek = eachDayOfInterval({start, end})
const weekOfMonth = getWeekOfMonth(targetDate);

const event = {
  name: "Bill Wang",
  location: "MC 1023",
  startTime: new Date(),
  endTime: new Date(),
}

export default function Component() {
  return (
    <div className="bg-background rounded-lg border p-6 w-full max-w-4xl">
      <div className="flex items-center justify-between mb-4">
        <div className="text-lg font-semibold">Week {weekOfMonth}, {format(targetDate, "yyyy")}</div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <ChevronLeftIcon className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ChevronRightIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-4">
        {daysOfWeek.map(day => (
            <div className="flex flex-col items-center gap-1 text-sm text-muted-foreground">
                <div>
                    {format(day, "ccc")}
                </div>
                <div>
                    {format(day, "e")}
                </div>
                <div className="flex flex-col gap-1">
                  <CalendarEvent {...event}></CalendarEvent>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

function ChevronLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}