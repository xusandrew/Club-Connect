import { Category } from '@prisma/client'

export type Club = {
  cid: number
  email: string
  password: string
  name: string
  description: string | null
  instagram: string | null
  discord: string | null
  category?: Category
}
