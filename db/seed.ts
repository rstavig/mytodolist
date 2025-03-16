import { PrismaClient } from '@prisma/client';
import sampleData from '@/db/sample-data';

async function main() {
    const prisma = new PrismaClient();
    // await prisma.todo.deleteMany();
     await prisma.todo.createMany({ data: sampleData.todos });
     
    
  
    console.log('Database seeded successfully!');
  }
  
  main();