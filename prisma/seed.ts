import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const categories = [
  { code: 'STRAT', label: 'strategic project' },
  { code: 'PROJ',  label: 'standard project' },
  { code: 'ITSUP', label: 'IT support' },
  { code: 'TECH',  label: 'technical issue' },
  { code: 'USER',  label: 'user problem' },
  { code: 'COMM',  label: 'communication' },
  { code: 'VEND',  label: 'vendor' },
  { code: 'UNEXP', label: 'unexpected throw-in' },
];

async function main() {
  for (const c of categories) {
    await prisma.category.upsert({
      where: { code: c.code },
      update: {},
      create: c,
    });
  }
  console.log('Seeded categories');
}

main().finally(async () => prisma.$disconnect());
