import 'dotenv/config'

import { randomUUID } from 'node:crypto'
import { execSync } from 'node:child_process'
import { Environment } from 'vitest'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Subir um banco para realizar os testes
function generateDatabaseURL(schema: string) {
  // Se não tiver uma URL para instância de banco de dados
  if (!process.env.DATABASE_URL) {
    throw new Error('Please provide a DATABASE_URL environment variable.')
  }

  const url = new URL(process.env.DATABASE_URL)

  // Define o schema passado como parâmetro
  url.searchParams.set('schema', schema)

  return url.toString()
}

export default <Environment>{
  name: 'prisma',
  async setup() {
    console.log('Setup')
    const schema = randomUUID()
    const databaseURL = generateDatabaseURL(schema)

    process.env.DATABASE_URL = databaseURL

    // Executar as migrations - execSync
    // Deploy para executar as migrations, sem verificar novidades
    execSync('npx prisma migrate deploy')

    return {
      async teardown() {
        console.log('Teardown')
        // Finaliza o bd criado para os testes
        await prisma.$executeRawUnsafe(
          `DROP SCHEMA IF EXISTS "${schema}" CASCADE`,
        )
        // Encerrar conexão
        await prisma.$disconnect()
      },
    }
  },
}
