# Valoriza

## Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:
 
 - [NodeJs](https://nodejs.org/en/)
 - [Typescript](https://www.typescriptlang.org/)
 - [Expless](https://expressjs.com/pt-br/)
 - [JWT](https://jwt.io/)
 - [Typeorm](https://typeorm.io/#/)

 ## Projeto
 
Valoriza é uma plataforma para promover o reconhecimento entre companheiros de equipe.

## Como executar

- Clone o repositório
- Rode `yarn` para baixar as dependências
- Rode `yarn typeorm migration:run` para criar as tabelas do banco de dados.
- Rode o `yarn run dev`

Por fim, a aplicação estará disponível em `http://localhost:3000`

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes
## Regras de negócio

 - Cadastro de Usuário 
 
    [ x ] Não é permitido cadastrar mais de um usuário com mesmo e-mail
    
    [ x ] Não é permitido cadastrar usuário sem e-mail


- Cadastro de TAG

    [ x ] Não é permitido cadastrar tag sem nome
    
    [ x ] Não é permitido cadastrar mais de uma tag com o mesmo nome
    
    [ x ] Não é permitido o cadastro por usuários que não sejam administradores


- Cadastro de Elogios
    
    [ x ] Não é permitido um usuário cadastrar um elogio para si

    [ x ] Não é permitido cadastrar elogios para usuários inválidos

    [ x ] O usuário precisa estar autenticado na aplicação

- Lista de Usuários
 
    [ x ] O usuário precisa estar autenticado na aplicação

    [ x ] O usuário precisa ser usuário administrador

- Lista de TAGs

    [ x ] O usuário precisa estar autenticado na aplicação

- Lista de Elogios

    [ x ] O usuário precisa estar autenticado na aplicação