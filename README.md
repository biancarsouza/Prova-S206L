
# S206 (qualidade de software): prova de laboratório

Este repositório contém os arquivos desenvolvidos para a prova de laboratório da matéria S206 (qualidade de software), vista no curso de engenharia de software no [Inatel](https://inatel.br/home/). Nesta prova realizamos testes utilizando o [Postman](https://www.postman.com) e o [Cypress](https://www.cypress.io), no Postman utilizamos a API [Fake Store API](https://fakestoreapi.com) e no Cypress utilizamos a [Computer Database](https://computer-database.gatling.io/computers).


### O que está incluso
- Coleção de testes do Postman.
- Relatório dos testes do Postman usando Newman.
- Coleção de testes do Cypress.
- Relatório dos testes do Postman usando Mochawesome.


### Como usar este repositório

#### Requisitos do Postman:
- Conta no Postman Web ou a aplicação instalada no seu computador.
- Git para clonar o repositório ou acesso direto ao GitHub.

#### 1. Clone o Repositório
``` git bash
git clone https://github.com/biancarsouza/Prova-S206L
cd S206
```

#### 2. Importe os arquivos no Postman
- Abra o Postman.
- Vá até File > Import (ou clique em Import no canto superior esquerdo).
- Selecione o arquivo da coleção (Prova S206L - Postman.postman_collection.json).
- Confirme a importação.


#### 3. 


### Cenários de Teste

#### Postman:

- GET /products: retorna todos os produtos, esperado 200 OK.
- POST /products: cria um produto com id 21, esperado 200 OK.
- POST /users: cria um usuário com id 1, esperado 200 OK.
- POST /carts: cria um carrinho com id 11 para um usuário, esperado 200 OK.
- PUT /carts/11: atualiza os produtos do carrinho de id 11, esperado 200 OK.
- DELETE /carts/3: apaga o carrinho com id 3, esperado 200 OK.
- POST /auth/login: tenta fazer login com dados os incorretos de um usuário, esperado 401 unauthorized.

#### Cypress:

-
-
-


### Como executar os testes no Postman

- Abra a coleção "Prova S206L - Postman".
- Execute os testes manualmente ou utilize a funcionalidade de Runner para executar todos os testes de uma vez.


### Como executar os testes no Cypress


### Estrutura do repositório

``` git bash
├── README.md                                         # Documentação do repositório  
├── Prova S206L - Postman.postman_collection.json     # Coleção de testes Postman
├── Newman                                            # Pasta do relatório gerado pelo Newman para o arquivo "Prova S206L - Postman.postman_collection.json"
    ├── Prova S206L - Postman.html
├── prova_cypress.cy.js                               # Coleção de testes Cypress
├── Mochawesome                                       # Pasta com o relatório gerado pelo Mochawesome para o arquivo "prova_cypress.cy.js"
    ├── index.html
    ├── mochawesome.json
```