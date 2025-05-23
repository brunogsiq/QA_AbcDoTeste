
## **1️⃣ Nome do Workflow**  
```yaml
name: Teste - Github Actions com Cypress
```
🔹 Define o nome do workflow para facilitar a identificação dentro do GitHub Actions.  

---

## **2️⃣ Quando o Workflow é Executado (`on:`)**  
```yaml
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  workflow_dispatch:
```
### 🔹 Explicação:
- O workflow será acionado quando houver:  
  - **Push** na branch `main`  
  - **Pull Request** na branch `main`  
  - **Execução manual** via a interface do GitHub Actions (`workflow_dispatch`)  

---

## **3️⃣ Definição do Job (`jobs:`)**  
```yaml
jobs:
  e2e-tests:
```
🔹 Define um **job** chamado `e2e-tests`, responsável por rodar os testes automatizados de frontend com o Cypress.

---

## **4️⃣ Tempo limite do Job (`timeout-minutes`)**  
```yaml
timeout-minutes: 1260
```
🔹 Define um tempo limite de **21 horas (1260 minutos)** para evitar que a execução fique travada indefinidamente.  

---

## **5️⃣ Ambiente onde o Job roda (`runs-on`)**  
```yaml
runs-on: ubuntu-latest
```
🔹 O job será executado em um ambiente **Ubuntu mais recente**, fornecido pelo GitHub.  

---

## **6️⃣ Uso de Container (`container`)**  
```yaml
container:
  image: cypress/base:latest
```
🔹 Executa o workflow dentro de um **container Docker** com a imagem oficial do Cypress (`cypress/base:latest`).  
Isso garante que o ambiente já tenha as dependências do Cypress instaladas.

---

## **7️⃣ Passos do Workflow (`steps`)**  

### **1️⃣ Checkout do código**
```yaml
- name: Checkout do código
  uses: actions/checkout@v4
```
🔹 **Baixa o código do repositório** para o ambiente de execução.  
📌 **Motivo**: Para que o Cypress tenha acesso ao código-fonte e possa rodar os testes.

---

### **2️⃣ Configuração do Node.js**
```yaml
- name: Configurar Node.js (versão LTS)
  uses: actions/setup-node@v4
  with:
    node-version: lts/*
```
🔹 Instala a **versão mais recente LTS** do Node.js para garantir compatibilidade com o Cypress.  
📌 **Motivo**: O Cypress e outras dependências do projeto exigem o Node.js para serem executadas.

---

### **3️⃣ Instalação das dependências**
```yaml
- name: Instalar dependências
  run: |
    npm ci
    npm install cypress@latest --save-dev
    npm install mochawesome mochawesome-merge mochawesome-report-generator --save-dev
```
🔹 **Explicação das linhas:**  
1. `npm ci` → Instala todas as dependências do projeto definidas no `package-lock.json`.  
2. `npm install cypress@latest --save-dev` → Instala a versão mais recente do Cypress.  
3. `npm install mochawesome mochawesome-merge mochawesome-report-generator --save-dev` → Instala pacotes para geração de relatórios de testes em formato **HTML/PDF**.  

📌 **Motivo**: O Cypress precisa estar instalado para rodar os testes e o `mochawesome` gera relatórios mais detalhados.

---

### **4️⃣ Rodando os testes do Cypress**
```yaml
- name: Rodar testes Cypress
  uses: cypress-io/github-action@v6
  with:
    spec: "cypress/e2e/**/*.cy.js"
```
🔹 **Executa todos os testes localizados dentro de `cypress/e2e/**/*.cy.js`**.  

📌 **Motivo**: Esta ação roda os testes end-to-end (E2E) automaticamente.

---

### **5️⃣ Publicação do Relatório de Testes**
```yaml
- name: Publicar Relatório de Testes
  uses: actions/upload-artifact@v4
  if: always()
  with:
    name: cypress-report
    path: cypress/reports/
    retention-days: 30
```
🔹 **Armazena os relatórios de teste gerados pelo `mochawesome`** como um artefato no GitHub Actions.  

📌 **Motivo**: Permite baixar os relatórios e analisar falhas nos testes.  
📌 **`retention-days: 30`** → Mantém os relatórios por **30 dias** antes de serem apagados.

---

### **6️⃣ Publicação dos Vídeos dos Testes**
```yaml
- name: Publicar Vídeos dos Testes
  uses: actions/upload-artifact@v4
  if: always()
  with:
    name: cypress-videos
    path: cypress/videos/
    retention-days: 30
```
🔹 **Armazena os vídeos das execuções dos testes Cypress**, caso estejam habilitados.  

📌 **Motivo**: Útil para depurar erros vendo exatamente o que aconteceu durante o teste.  
📌 **`retention-days: 30`** → Mantém os vídeos por **30 dias** antes de serem apagados.

---

## **📌 Resumo Geral**
✅ **Objetivo do Workflow**:  
Este workflow automatiza a execução de **testes end-to-end (E2E) com Cypress** no GitHub Actions.

✅ **O que ele faz?**  
1. **Baixa o código-fonte**  
2. **Configura o ambiente** (Node.js + Cypress)  
3. **Instala as dependências**  
4. **Executa os testes Cypress**  
5. **Armazena relatórios e vídeos para análise**  

✅ **Vantagens**:  
- **Execução automatizada de testes** em toda alteração na `main`  
- **Maior confiabilidade** nos testes antes de mesclar código novo  
- **Relatórios e vídeos** disponíveis para análise  

🚀 **Esse workflow ajuda a garantir a qualidade do software com testes contínuos no CI/CD!**

//Código abaixo:

/*
    name: Teste - Github Actions com Cypress

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  workflow_dispatch:

jobs:
  e2e-tests:
    timeout-minutes: 1260
    runs-on: ubuntu-latest
    container:
      image: cypress/base:latest  # Sempre pega a versão mais recente do container Cypress
    
    steps:
      - name: Checkout do código
        uses: actions/checkout@v4

      - name: Configurar Node.js (versão LTS)
        uses: actions/setup-node@v4
        with:
          node-version: lts/*  # Sempre usa a última versão LTS do Node.j

      - name: Instalar dependências
        run: |
          npm ci
          npm install cypress@latest --save-dev
          npm install mochawesome mochawesome-merge mochawesome-report-generator --save-dev

      - name: Rodar testes Cypress
        uses: cypress-io/github-action@v6
        with:
          spec: "cypress/e2e/**/*.cy.js"  # Executa todos os testes dentro da pasta e2e

          # ✅ Separando os uploads de relatórios e vídeos corretamente:
          - name: Publicar Relatório de Testes
            uses: actions/upload-artifact@v4
            if: always()
            with:
              name: cypress-report
              path: cypress/reports/
              retention-days: 30  # Mantém os relatórios por 30 dias
    
          - name: Publicar Vídeos dos Testes
            uses: actions/upload-artifact@v4
            if: always()
            with:
              name: cypress-videos
              path: cypress/videos/
              retention-days: 30  # Mantém os vídeos por 30 dias
*/