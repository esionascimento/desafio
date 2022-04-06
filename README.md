# Sobre o projeto

Criado no mesmo repositorio:

* Front-end para listar e criar usuário e cliente.
* Back-end API para o gerenciamento de informações sobre usuários e Clientes. A API POSSUI ENDPOINT GET e POST.

#### Endpoint

###### GET, POST

* /client
* /user
* /user/:id

#### Frond-end

* Listar todos clientes
* Criar novo Cliente e Usuário

#### Back-end

* Endpoint para visualizar e criar usuários e cliente
* Tratamento de erros

🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

* ReactJS
* Typescript
* Joi
* bcrypt
* http-status-codes
* MySQL
* Redux Toolkit

## Como executar o projeto

Antes de começar, você vai precisar ter o [Git](https://git-scm.com) instalado em sua máquina.
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

* Para rodar localmente

```bash
# Clone este repositório
$ git clone https://github.com/esionascimento/desafio.git

$ cd desafio
 
# Acesse o back-end e front-end para instala as dendências
$ cd back-end
$ npm install
$ cd front-end
$ npm install

# execute o front-end
$ npm start

# execute o back-end
$ npm run dev

```

* Para rodar no Docker

```bash
# Clone este repositório
$ git clone https://github.com/esionascimento/desafio.git
 
$ cd desafio

$ docker-compose up
```

#### Portas

* Front-end roda na porta 3000
* Back-end roda na porta 4000
