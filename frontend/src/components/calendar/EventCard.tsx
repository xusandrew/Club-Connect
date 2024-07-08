import { format } from "date-fns";
import type{ Event } from "@/types/Event";

export default function CalendarEvent(props:Event) {
    if (!props.start_time || !props.end_time) {
        throw "Event doesn't have a start time! (It's NULL).";
    }
    return (
        <div className="bg-black/10 p-2 text-s">
            <div className="font-bold"> {props.title} </div>
            <div> @ {props.location} </div>
            <div>
                {format(props.start_time, "p")} - {format(props.end_time, "p")}
            </div>
        </div>
    )
}