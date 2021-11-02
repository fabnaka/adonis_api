# Projeto API Imobiliária

Este projeto foi desenvolvido na disciplina de Computação Distribuída, na Faculdade de Computação da UFMS. Tem como objetivo demonstrar uma aplicação dos serviços oferecidos por uma imobiliária, na qual o sistema e o banco de dados operam em containers Docker. O sistema apresenta a validação de três regras de negócios:
1) Validação de usuário para permissão em update de usuários
2) Todas formas de pagamentos para se efetuar uma venda devem ser previamente cadastradas
3) Se um mesmo imóvel é colocado mais de uma vez para venda ou aluguel, somente a informação mais recente deve ser armazenada. As informações mais antigas a respeito do imóvel vão para uma tabela de histórico.

O projeto foi efetuado utilizando o framework web AdonisJS utilizando o ORM para a criação das tabelas. O banco de dados foi cosntruído utilizando o PostgresSQL. Há um diagrama entidade-relacionamento referente ao banco de dados no diretório "diagrama_bd". 


### 🔧 Instalação

Execute o comando abaixo para levantar os containers:
- docker-compose up -d

Execute o comando abaixo para inserir as migrations no banco de dados:
- adonis migration:run

Execute o comando abaixo para levantar um servidor adonis:
- adonis serve --dev

Pronto! Agora a API está pronta para ser testado com uma ferramenta de testes como Insomi ou Postman


## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

* [AdonisJS](https://adonisjs.com/) - O framework web utilizado
* [PostgresSQL](https://www.postgresql.org/) - O banco de dados utilizado
* [Docker](https://www.docker.com/) - Usada para rodar os containers da aplicação
 

