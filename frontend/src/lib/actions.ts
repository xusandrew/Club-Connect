'use server'

import prisma from "./prisma"
import {RVSP} from "../types/RVSP"


export const rvsp = async (formData: FormData) => {
    const rvspData : RVSP = {
      eid: Number(formData.get('eid') as string),
      email: formData.get('email') as string,
    }
  
    if (!(rvspData.eid && rvspData.email)) {
      throw new Error('Missing required fields')
    }
  
    await prisma.rVSP.create({data: rvspData})

}
  