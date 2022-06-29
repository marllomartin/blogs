
# Project Blogs API

<div align="center">
<img src=https://i.imgur.com/QL8qzGV.png width="200px">
</div>

## Sobre
Projeto de um CRUD (Create, Read, Update, Delete) de produção de conteúdos para um Blog, no formato de uma API feito
enquanto eu estudava na [Trybe](https://www.betrybe.com/).

![DER](https://github.com/marllomartin/blogs/blob/main/public/der.png)

## Aprendizados

  * Configuração de uma API utilizando Node, Express e Sequelize;

  * Criação de Migrations no Sequelize;

  * Configuração de Seeders no Sequelize;

  * Estruturação de Middlewares;

  * Aplicação da boa prática MSC (Model, Service, Controller);

  * Estruturação de uma API utilizando um ORM;


## Tecnologias Utilizadas

<a href="https://www.javascript.com/">
<img 
     src="https://img.shields.io/badge/javascript-F0DB4F?style=for-the-badge&logo=javascript&logoColor=323330&logoWidth=20"
     alt="Javascript"
/>
</a>
</a>
<a href="https://nodejs.org/en/">
<img
     src="https://img.shields.io/badge/node.js-333333?style=for-the-badge&logo=nodedotjs&logoColor=77B65D&logoWidth=20"
     alt="Node.js"
/>   
</a>
<a href="https://expressjs.com/pt-br/">
<img
     src="https://img.shields.io/badge/express-90C53F?style=for-the-badge&logo=express&logoColor=fff&logoWidth=20"
     alt="Express"
/>   
<a href="https://sequelize.org/">
<img 
    src="https://img.shields.io/badge/sequelize-36457B?style=for-the-badge&logo=sequelize&logoColor=52B0E7&logoWidth=20"
    alt="Sequelize"
/>
</a>
</div>

## Rodando o projeto localmente

### Atenção!
Esse projeto utiliza variáveis de ambiente. Renomeie o arquivo `.env.example` para `.env` e altere os valores de acordo com suas próprias configurações.

### Clonando o projeto:
```
git clone git@github.com:marllomartin/blogs.git

cd blogs
```

### Instalando as dependências:
```
npm install
```
### Inicializando o Banco de Dados com Sequelize:
```
npx sequelize db:create
```
### Executando as Migrations do Banco de Dados com Sequelize:
```
npx sequelize db:migrate
```
### Populando o Banco de Dados com Sequelize:
```
npx sequelize db:seed:all
```
### Inicializando o projeto:
```
npm run dev
```

### Exemplos de uso

<details>
<summary><h4>Endpoint para o cadastro de usuários</h4></summary>
<p><b>POST</b> | http://localhost:3000/user</p>

body:
```json
{
  "displayName": "Brett Wiltshire",
  "email": "brett@email.com",
  "password": "123456",
  "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
}
```
response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
}
```
</details>

<details>
<summary><h4>Endpoint para o login de usuários</h4></summary>
<p><b>POST</b> | http://localhost:3000/login</p>

body:
```json
{
  "email": "lewishamilton@gmail.com",
  "password": "123456"
}
```
response:
```json
{	 
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoibGV3aXNoYW1pbHRvbkBnbWFpbC5jb20ifSwiaWF0IjoxNjU2NTI1OTkyLCJleHAiOjE2NTY1Mjk1OTJ9.tTp38nlxbzkIxBBMg-ovUOFMqrEWi9g0fF8P8EnMFyI"
}
```
</details>

<details>
<summary><h4>Endpoint para a listagem dos usuários</h4></summary>
<p><b>GET</b> | http://localhost:3000/users</p>

header:
```json
{
  "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoibGV3aXNoYW1pbHRvbkBnbWFpbC5jb20ifSwiaWF0IjoxNjU2NTI3NTUwLCJleHAiOjE2NTY1MzExNTB9.l60No6H5_WSc9H_HDXqz9nGzR3pwmdVEbfCS5LChvrQ",
}
```
response:
```json
[
  {
   "id": 1,
   "displayName": "Lewis Hamilton",
   "email": "lewishamilton@gmail.com",
   "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
  },
  {
	  "id": 2,
   "displayName": "Michael Schumacher",
   "email": "MichaelSchumacher@gmail.com",
   "image": "https://sportbuzz.uol.com.br/media/_versions/gettyimages-52491565_widelg.jpg"
 }
]
```
</details>
