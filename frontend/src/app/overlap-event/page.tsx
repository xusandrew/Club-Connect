'use client'
import { useRouter, useSearchParams } from "next/navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/data/components/ui/card'
import { Button } from '@/data/components/ui/button'
import { useEffect, useState } from "react";
import { isOverlap } from "@/lib/overlapEvents";
import { getEvent } from "@/lib/getEvent";
import type { Event } from "@/types/Event";


export default function OverlapPopup() {
    const searchParams = useSearchParams();
    const eventID = Number(searchParams.get('eid'))
    const router = useRouter();
    const [overlap, setOverlap] = useState(false)
    const [event, setEvent] = useState<Event | undefined>(undefined);
    const [loading, setLoading] = useState(true)

    function handleEditEvent() {
        const queryString = new URLSearchParams({eid: eventID.toString()}).toString();
        router.push(`/edit-event?${queryString}`);
    }

    function handleGoBack() {
        router.push('/')
    }

    useEffect(() => {
        if (eventID) {
        const fetchAndSetEvent = async () => {
            const fetchedEvent = await getEvent(eventID);
            setEvent(fetchedEvent);
        };
        fetchAndSetEvent();
        }
    }, []);

    useEffect(() => {
        if (event) {
            const fetchOverlapFcn = async () => {
                if (event.start_time != null) {
                    const fetchOverlap = await isOverlap(event.start_time)
                    setOverlap(fetchOverlap)
                    setLoading(false)
                }
            }
            fetchOverlapFcn()
        }
    },)

    useEffect(() => {
        if (!loading) {
            if (!overlap) {
                router.push('/')
            }
        }
    }, [loading])


    return (
        <div>
            { overlap &&
            <div className="flex">
                <Card className='w-full max-w-md'>
                    <CardHeader className='space-y-1 text-center'>
                        <CardTitle className='text-3xl font-bold'>Warning</CardTitle>
                        <CardDescription> This timeslot {event?.start_time?.toString()}, {event?.end_time?.toString()} overlaps with other events. Would you like to change it? </CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                        <Button onClick={handleEditEvent} className='w-full' variant='outline'>
                            Change
                        </Button>
                        <Button onClick={handleGoBack} className='w-full' variant='outline'>
                            No
                        </Button>
                    </CardContent>
                </Card>
            </div>
            }
        </div>
    )
}