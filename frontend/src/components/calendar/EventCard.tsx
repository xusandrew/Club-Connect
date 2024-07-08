import { format } from "date-fns";
import type{ Event } from "@/types/Event";
import { LocateIcon, CalendarIcon } from "../icons";

export default function CalendarEvent(props:Event) {
    if (!props.start_time || !props.end_time) {
        throw "Event doesn't have a start time! (It's NULL).";
    }
    return (
        <div className="bg-black/10 p-2 text-s">
            <div className="font-bold text-base"> {props.title} </div>
            <div className="flex text-secondary"> @ {props.location} </div>
            <div className="flex text-secondary italic">
               {format(props.start_time, "p")} - {format(props.end_time, "p")}
            </div>
        </div>
    )
}