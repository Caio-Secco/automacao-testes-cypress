# 🧪 Projeto de Automação de Testes - QAzando

Projeto de automação de testes End-to-End (E2E) desenvolvido utilizando **Cypress** com padrão de projeto **Page Object Model (POM)**.

O objetivo deste projeto é validar fluxos de cadastro, login e validações de campos obrigatórios, aplicando boas práticas de organização e estruturação de testes automatizados.

---

# 🚀 Tecnologias Utilizadas

* Cypress
* JavaScript
* Chance (geração de dados dinâmicos)
* Page Object Model (POM)
* Node.js

---

# 📁 Estrutura do Projeto

```
cypress/
 ├── e2e/
 │   └── testes.spec.cy.js
 ├── fixtures/
 │   └── userData.json
 ├── pages/
 │   ├── loginPage.js
 │   └── registerUserPage.js
```

### 📌 Descrição das Pastas

* **pages/** → Contém as classes com os métodos e seletores (POM)
* **fixtures/** → Massa de dados estática utilizada nos testes
* **e2e/** → Arquivos de testes automatizados

---

# ✅ Cenários Automatizados

### 🔹 Cadastro com sucesso

* Acessa a página de cadastro
* Preenche os dados dinamicamente
* Submete o formulário
* Valida mensagem de sucesso

### 🔹 Login e Logout

* Realiza login com usuário válido
* Valida acesso à área logada
* Executa logout

### 🔹 Validações de Campos Obrigatórios

* Nome obrigatório
* E-mail obrigatório
* Senha obrigatória

---

# 🎲 Uso de Dados Dinâmicos

Para evitar conflitos de massa de dados, foi utilizada a biblioteca **Chance**, permitindo gerar:

* Nome aleatório
* E-mail aleatório
* Senha aleatória

Exemplo:

```javascript
chance.first()
chance.email()
chance.string({ length: 7 })
```

---

# ▶️ Como Executar o Projeto

## 1️⃣ Clonar o repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

## 2️⃣ Instalar dependências

```bash
npm install
```

## 3️⃣ Executar em modo interativo

```bash
npx cypress open
```

## 4️⃣ Executar em modo headless

```bash
npx cypress run
```

---

# 🧠 Boas Práticas Aplicadas

* Separação de responsabilidades
* Reutilização de métodos
* Estrutura Page Object Model
* Uso de beforeEach para padronização de setup
* Geração de massa dinâmica
* Testes independentes

---

# 📌 Objetivo Profissional

Este projeto faz parte do meu portfólio como QA, demonstrando:

* Organização de testes automatizados
* Boas práticas com Cypress
* Estrutura escalável
* Escrita clara de cenários de teste

---

# 👨‍💻 Autor

Caio Secco
QA | Automação de Testes | Cypress | JavaScript

GitHub: [https://github.com/Caio-Secco](https://github.com/Caio-Secco)

---

Se este projeto for útil para você, fique à vontade para contribuir ou entrar em contato 🚀
