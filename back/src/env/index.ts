import 'dotenv/config'
import { z } from 'zod'

// Validar as variáveis de ambiente
const envSchema = z.object({
  // As opçöes válidas e se não aparecer, será dev
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  JWT_SECRET: z.string(),
  // Converter o valor para um número ou o padrão 3333
  PORT: z.coerce.number().default(3333),
})

// Tentar validar o process.env
const _env = envSchema.safeParse(process.env)

// Se for sucesso
if (_env.success === false) {
  console.error('❌ Invalid environment variables', _env.error.format())

  throw new Error('Invalid environment variables.')
}

// Exporta as variáveis de ambiente
export const env = _env.data
