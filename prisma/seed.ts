import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()



async function run() {

  /**
   * Create habits
   */
    prisma.habit.create({
      data: {
        title: 'Beber 2L água',
        created_at: new Date('2022-12-31T03:00:00.000'),
        weekDays: {
          create: [
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
          ]
        }
      }
    }),

    prisma.habit.create({
      data: {
        title: 'Exercitar',
        created_at: new Date('2022-12-31T03:00:00.000'),
        weekDays: {
          create: [
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
          ]
        }
      }
    }),

    prisma.habit.create({
      data: {
        title: 'Dormir 8h',
        created_at: new Date('2022-12-31T03:00:00.000'),
        weekDays: {
          create: [
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
          ]
        }
      }
    })
}

run()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })