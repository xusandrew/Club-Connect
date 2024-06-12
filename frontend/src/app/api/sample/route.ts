import {NextResponse} from 'next/server'
import characters from '@/data/characters.json';

export async function GET() {
        return NextResponse.json({
            characters: characters.data
        }
    )
}
