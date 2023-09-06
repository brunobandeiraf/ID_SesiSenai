import { UsersRepository } from '@/repositories/users-repository'
import { InvalidCredentialsError } from './errors/invalid-credentials-error'
import { User } from '@prisma/client'
import { compare } from 'bcryptjs'

// Tipagem de entrada
interface AuthenticateUseCaseRequest {
  email: string
  password: string
}
// Resposta
interface AuthenticateUseCaseResponse {
  user: User
}

export class AuthenticateUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    email,
    password,
  }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
    const user = await this.usersRepository.findByEmail(email)
    // Buscar o usuário no banco

    if (!user) {
      throw new InvalidCredentialsError()
    }

    // Compara uma senha com a senha gerada, para validar o hash
    const doestPasswordMatches = await compare(password, user.password_hash)
    // Boolean sempre começa com is, has, does...boa prática

    if (!doestPasswordMatches) {
      throw new InvalidCredentialsError()
    }

    return {
      user,
    }
  }
}
