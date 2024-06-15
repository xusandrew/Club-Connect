//used to seed the database
import prisma from '../lib/prisma'

async function main() {
  await prisma.user.create({
    data: {
      email: `testemail@gmail.com`,
      role: 'ADMIN',
    },
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
