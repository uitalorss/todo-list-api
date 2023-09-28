# todo-list-api

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Desenvolvimento do projeto
- [ ] Construção da documentação em Swagger

## 🚀 Instalando o DindinAPI

Para instalar o projeto, instale as dependências usando o comando abaxo:

npm:

```
npm install
```

yarn:

```
yarn add
```

## ☕ Usando DindinAPI

Para usar o DindinAPI, siga estas etapas:

npm:

```
npm run dev
```

yarn:

```
yarn dev
```

Deploy

```
https://dindin-api-azvd.onrender.com
```

## Endpoints

### Cadastro de usuário

`POST/usuario`

- Esse serviço cadastra um novo usuário no sistema.

**Exemplo de Requisição**

```javascript
{
    "nome": "José",
    "email": "jose@email.com",
    "senha": "123456"
}
```

**Exemplo de Respostas**

```javascript
// HTTP Status Code - 201
{
    "mensagem": "Usuário cadastrado com sucesso."
}
```

```javascript
// HTTP Status Code - 400
{
    "mensagem": "Já existe usuário cadastrado com o e-mail informado."
}
```
