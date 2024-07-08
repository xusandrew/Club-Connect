import { format } from "date-fns";

interface EventProps {
    name: String;
    location: String;
    startTime: Date;
    endTime: Date;
}

export default function CalendarEvent(props:EventProps) {
    return (
        <div className="bg-primary rounded-md px-2 py-1 text-xs text-primary-foreground">
            <div> {props.name} </div>
            <div> {props.location} </div>
            {format(props.startTime, "xxx")}
            {format(props.endTime, "xxx")}
        </div>
    )
}