'use server'

import prisma from './prisma'
import type { Event } from '@/types/Event'

export async function getEvent(eventID : number) {
    try {
        const event = await prisma.event.findUnique({
            where: {eid : eventID},
        })
        return event as Event
    } catch (error) {
        console.error('Database Error:', error)
        return undefined
    }
}