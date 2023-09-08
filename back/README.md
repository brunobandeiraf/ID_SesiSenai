
# BACKEND - ID SESI SENAI
A pasta denominada "back" contém o backend da aplicação. Aqui, são definidas as rotas e a lógica necessária para processar as solicitações provenientes da interface web e do aplicativo móvel. O backend é responsável por autenticação, validação e atualização dos dados dos usuários no banco de dados, garantindo a integridade das informações e a segurança do sistema.


# TECNOLOGIAS
- Fastify
- Prisma
- JWT
- bcryptjs
- Vitest
- Docker


## RFs (Requisitos funcionais)
- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;

## RNs (Regras de negócio)
- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;

## RNFs (Requisitos não-funcionais)
- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [x] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [x] O usuário deve ser identificado por um JWT (JSON Web Token);

# Comandos utilizados
### Executar o projeto em ts
npm run start:dev

## ORM (Object Relational Mapper) PRISMA
- Prisma: https://www.prisma.io/

## Criar Docker da aplicação
- docker run --name api-solid-pg -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=apisolid -p 5432:5432 bitnami/postgresql

## Verifica na aplicação, o que não refletiu no banco e cria
- npx prisma migrate dev

# Visualizar o Prisma Studio
- npx prisma studio

## Inicializar o Docker via Compose 
Após configurado no arquivo docker-compose.yml
- docker compose up -d

## Biblioteca para hash de senha 
npm i bcryptjs 
npm i -D @types/bcryptjs

## Trabalhando com Testes - Vitest 
Plugin vite para compreender as importações com @
npm i vitest vite-tsconfig-paths -D

# Visualizar uma Interface para os Testes realizados
npm i -D @vitest/ui

