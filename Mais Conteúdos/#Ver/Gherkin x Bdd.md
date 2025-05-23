Aqui está a reformulação do documento em **Markdown**:  

```markdown
# 📝 Como Utilizar BDD e Gherkin  

## 📌 Levantamento e Objetivos  
- Conversa com integrantes do time para identificar problemas.  
- A situação das **User Stories (US)** foi mencionada em **100% das conversas**.  
- Objetivo: Melhorar **detalhamento, fluxo, testes** e reduzir sobrecarga da Product Owner (PO).  

---

## 🎯 Conceitos Importantes  

### 🔹 BDD (Behavior Driven Development)  
- Desenvolvimento guiado por comportamento.  
- Análise pré-refinamento de **como o sistema deve se comportar**.  

### 🔹 Gherkin  
- Linguagem de especificação de cenários baseada em regras de negócio.  
- Segue a estrutura:  
  ```
  Dado que <contexto>
  Quando <ação>
  Então <resultado esperado>
  ```

---

## 🔍 **Exemplo 1: Envio de E-mail para Reset de Senha**  
**User Story 25460**  

### **Cenário 1: Reset de senha com e-mail válido**  
📌 Como usuário, quero receber um e-mail para reset de senha.  

✅ **Passos:**  
1. **Dado** que estou na tela de login com um e-mail válido e sem senha.  
2. **Quando** eu clicar em "Esqueci minha senha".  
3. **Então** o sistema envia um e-mail para resetar a senha.  

📌 **Requisitos:**  
- E-mail válido.  
- Senha inválida/não informada.  

### ❓ Perguntas sobre o fluxo:  
- Como validar a identidade do usuário?  
- É necessário um mecanismo de segurança adicional?  
- Deve existir uma tela de confirmação de dados?  

### **Cenário 2: Reset de senha com e-mail inválido**  
📌 Como usuário, ao inserir um e-mail inválido, quero que o sistema exija confirmação.  

✅ **Passos:**  
1. **Dado** que estou na tela de login com um e-mail inválido.  
2. **Quando** eu clicar em "Esqueci minha senha".  
3. **Então** o sistema abre uma tela de confirmação antes de enviar o e-mail.  

---

## 🔍 **Exemplo 2: Validação de Duplicidade de Cliente**  
**User Story 27433**  

📌 Como usuário, quero validar que dois clientes não tenham o mesmo CPF ou CNPJ ao cadastrar ou editar um cliente.  

✅ **Sugestão:** Separar em **4 histórias** para melhor organização:  
1. Nacionalidade Brasileira - Inclusão.  
2. Nacionalidade Brasileira - Alteração.  
3. Nacionalidade Estrangeira - Inclusão.  
4. Nacionalidade Estrangeira - Alteração.  

### **User Story 1: Validação na Inclusão**  

#### **Cenário 1: CNPJ já cadastrado**  
📌 Como usuário, quero impedir a inclusão de um CNPJ duplicado.  

✅ **Passos:**  
1. **Dado** que estou na tela de cadastro de clientes com nacionalidade brasileira e tipo pessoa jurídica.  
2. **Quando** eu digitar um CNPJ já cadastrado no sistema.  
3. **Então** o sistema não permite finalizar o cadastro.  

📌 **Requisito:** CNPJ já cadastrado no sistema.  

#### **Cenário 2: CPF já cadastrado**  
📌 Como usuário, quero impedir a inclusão de um CPF duplicado.  

✅ **Passos:**  
1. **Dado** que estou na tela de cadastro de clientes com nacionalidade brasileira e tipo pessoa física.  
2. **Quando** eu digitar um CPF já cadastrado no sistema.  
3. **Então** o sistema não permite finalizar o cadastro.  

📌 **Requisito:** CPF já cadastrado no sistema.  

---

### **User Story 2: Validação na Alteração**  

#### **Cenário 1: CNPJ já cadastrado**  
📌 Como usuário, quero impedir a alteração para um CNPJ já existente.  

✅ **Passos:**  
1. **Dado** que estou na tela de edição de clientes com nacionalidade brasileira e tipo pessoa jurídica.  
2. **Quando** eu digitar um CNPJ já cadastrado no sistema.  
3. **Então** o sistema não permite finalizar a alteração.  

📌 **Requisito:** CNPJ já cadastrado no sistema.  

#### **Cenário 2: CPF já cadastrado**  
📌 Como usuário, quero impedir a alteração para um CPF já existente.  

✅ **Passos:**  
1. **Dado** que estou na tela de edição de clientes com nacionalidade brasileira e tipo pessoa física.  
2. **Quando** eu digitar um CPF já cadastrado no sistema.  
3. **Então** o sistema não permite finalizar a alteração.  

📌 **Requisito:** CPF já cadastrado no sistema.  

---

## 🔗 Links Úteis  
- [BDD na prática e do jeito certo - QAninja](https://www.youtube.com/watch?v=wad38bC7JjI)  
- [Gherkin: Introdução e Benefícios](https://blog.onedaytesting.com.br/gherkin/)  