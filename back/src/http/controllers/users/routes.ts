import { FastifyInstance } from 'fastify'
import { verifyJwt } from '@/http/middlewares/verify-jwt'
import { authenticate } from './authenticate'
import { profile } from './profile'
import { register } from './register'
import { refresh } from './refresh'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', register)

  app.post('/sessions', authenticate)
  app.patch('/token/refresh', refresh)

  /** Authenticated */
  app.get('/me', { onRequest: [verifyJwt] }, profile)
}

/*
 # JWT: JSON WEB TOKEN #
  - Usuário faz login enviando email/senha. 
  - Back-end cria o token ÚNICO, NÃO MODIFICÁVEL e STATELESS
  Stateless: não armazenado em nenhuma estrutura de persistência
  de dados (banco de dados)
  Back-end: quando for criar o token, vai usar uma palavra-chave (string)

  Palavra-chave: fkasjfkasjfasjfsajdfsadtjqkwjqwnfrqwrqwjqjepqwjk

  Email/senha -> header.payload.sign (cabeçalho.dados.assinatura)

  JWT => Todas as requisições
  Header: authorization: Bearer JWT
 */
