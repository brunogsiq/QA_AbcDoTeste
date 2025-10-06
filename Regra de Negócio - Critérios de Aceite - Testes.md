
# 📐 Fluxo Visual: Regra de Negócio → Critérios de Aceite → Testes

Use este esquema para alinhar entendimento com time de produto, desenvolvimento e QA.

---

## 🔻 Pirâmide de Relacionamento

### 🧱 Regras de Negócio (Base)
> Políticas, leis ou práticas que governam o sistema.

- Definem **como deve funcionar**.
- Estão ligadas ao domínio (ex.: crédito, cadastro, tributação).
- Relativamente estáveis; mudam quando a política muda.

### 🧩 Critérios de Aceite (Meio)
> Transformam regras e requisitos em condições testáveis.

- Respondem: _o que precisa estar presente/testado para aceitar?_
- Claros, objetivos e mensuráveis (preferencialmente em BDD).
- Validam a regra de negócio em cenários positivos e negativos.

### 🧪 Testes (Topo)
> Executam os critérios e produzem evidências.

- UI, API, integração, contrato, performance, segurança etc.
- Geram logs, prints, relatórios e métricas de confiabilidade.
- Vivem no pipeline (CI/CD) e na suíte regressiva.

---

## 🔄 Fluxo Linear: Do Requisito ao Teste

| Regra de Negócio                      | Critérios de Aceite                                                                 | Testes                                                                 |
|--------------------------------------|-------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| Unicidade de e-mail                  | - Bloquear cadastro se e-mail já existir<br>- Exibir mensagem: “E-mail já registrado.”<br>- Permitir novo cadastro | - POST `/clientes` com e-mail repetido → `409`<br>- UI: validar mensagem<br>- Contrato: campo `email` é `unique` |

---

## 🧠 Explicação Didática

### ✅ 1. O que são Regras de Negócio e Critérios de Aceite?

#### 🔹 Regras de Negócio

São **leis, políticas, normas ou lógicas específicas da empresa** ou do domínio do sistema. Elas existem **independente da interface ou da implementação**.

- Costumam ser **mais amplas** e **nem sempre diretamente testáveis**.
- Documentadas em histórias, requisitos ou modelos de negócio.

#### 🔸 Critérios de Aceite

São **condições específicas e testáveis** para garantir que uma funcionalidade foi entregue corretamente.

- Devem ser **claros, objetivos e mensuráveis**.
- Usualmente escritos em formato **BDD**.
- Ajudam na definição de "Pronto".

---

### 🔁 2. Se uma regra é testável, ela vira critério de aceite?

- ❌ Nem toda **regra de negócio** é um critério de aceite.
- ✅ Mas todo **critério de aceite é testável**.
- Quando a regra é implementada e pode ser validada, ela **se transforma em critério de aceite**.

---

## 👨‍💻 Exemplo Prático: Tela de Login

### 📋 Regras de Negócio

- O nome de usuário **não pode conter números nem caracteres especiais**.
- A senha deve conter **entre 6 e 10 caracteres**, com:
  - uma letra maiúscula
  - um número
  - um caractere especial
- Ambos os campos devem estar **preenchidos corretamente**.

### ✅ Critérios de Aceite

1. **Placeholders**:
   - Campo usuário → `"Digite seu nome de usuário"`
   - Campo senha → `"Digite sua senha"`

2. **Validações ao clicar "Login"**:
   - Se usuário vazio → alerta `"Usuário é obrigatório"`
   - Se senha vazia → alerta `"Senha é obrigatória"`

3. **Validações de conteúdo**:
   - Usuário com `"joao123"` → `"Nome de usuário inválido"`
   - Senha `"abcde"` → `"Senha inválida. Siga os critérios de segurança"`

---

## ✍️ Cenários BDD (Gherkin)

```gherkin
Funcionalidade: Login no sistema

Cenário: Validação de campos obrigatórios
  Dado que o usuário está na tela de login
  Quando clica no botão "Login" sem preencher os campos
  Então o sistema deve exibir o alerta "Usuário é obrigatório"
  E o sistema deve exibir o alerta "Senha é obrigatória"

Cenário: Validação de formato inválido do nome de usuário
  Dado que o usuário está na tela de login
  Quando preenche o campo usuário com "joao123"
  E preenche a senha corretamente
  E clica no botão "Login"
  Então o sistema deve exibir o alerta "Nome de usuário inválido"

Cenário: Validação de senha com critérios inválidos
  Dado que o usuário está na tela de login
  Quando preenche o campo usuário com "joaosilva"
  E preenche o campo senha com "abcde"
  E clica no botão "Login"
  Então o sistema deve exibir o alerta "Senha inválida. Siga os critérios de segurança"
```

---

## 📊 Resumo Comparativo

| Termo                | É testável? | Nível        | Exemplo                                                  |
|----------------------|-------------|--------------|----------------------------------------------------------|
| **Regra de negócio** | Nem sempre  | Estratégico  | Senha com número, maiúscula e caractere especial         |
| **Critério de aceite** | Sim         | Funcional/UI | Digitar senha "abc" → alerta "Senha inválida"            |

---

✅ Pronto para ser documentado no Confluence, Notion ou Wiki técnica.

