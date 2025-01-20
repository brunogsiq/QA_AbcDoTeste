Aqui estão mais detalhes sobre cada ponto mencionado:

---

### **Host, Path e Query**
Esses elementos compõem a URL de uma API e indicam como o cliente interage com o servidor:

- **Host**: Representa o domínio ou endereço base do servidor.  
  Exemplo: `http://api.exemplo.com`.

- **Path**: Define o recurso específico que está sendo solicitado no servidor.  
  Exemplo: `/user/25` (neste caso, estamos acessando informações do usuário com ID 25).

- **Query**: Adiciona parâmetros para refinar a solicitação.  
  Exemplo: `?age>18&limit=10` (filtra usuários com idade maior que 18 e limita a resposta a 10 itens).

---

### **Status Codes**
Os códigos de status fornecem informações sobre o resultado de uma requisição. Vamos detalhar os mais comuns:

#### **Códigos de Sucesso**
- **200 (OK)**: Resposta bem-sucedida com o conteúdo solicitado.  
  Exemplo: Uma requisição GET que retorna os detalhes de um usuário.

- **201 (Created)**: Indica que o recurso foi criado com sucesso.  
  Exemplo: POST para criar um novo usuário.

- **204 (No Content)**: Solicitação bem-sucedida, mas sem corpo na resposta.  
  Exemplo: DELETE que não retorna dados.

#### **Códigos de Erro do Cliente**
- **400 (Bad Request)**: Erro na requisição, como parâmetros inválidos.  
  Exemplo: Falta de dados obrigatórios no corpo de um POST.

- **401 (Unauthorized)**: Acesso negado por falta de autenticação válida.  
  Exemplo: Requisição sem token ou com token inválido.

- **403 (Forbidden)**: Requisição rejeitada, mesmo com autenticação válida.  
  Exemplo: Usuário tenta acessar recurso para o qual não tem permissão.

- **404 (Not Found)**: Recurso não encontrado.  
  Exemplo: Tentativa de acessar um ID inexistente.

#### **Códigos de Erro do Servidor**
- **500 (Internal Server Error)**: Falha inesperada no servidor.  
  Exemplo: Erro ao processar dados no backend.

- **502 (Bad Gateway)**: O servidor intermediário recebeu uma resposta inválida de outro servidor.  

- **503 (Service Unavailable)**: O serviço está temporariamente indisponível.  
  Exemplo: Manutenção ou sobrecarga.

- **504 (Gateway Timeout)**: Falha na comunicação entre servidores, resultando em tempo limite.  

---

### **Estratégias de Testes de API**

#### **1. Health Check**
- **Objetivo**: Verificar se a API está funcional e responde ao endpoint corretamente.  
- **Exemplo**: Realizar um GET simples no endpoint raiz (`/health`) para validar que retorna status **200 OK**.

#### **2. Teste de Contrato**
- **Objetivo**: Garante que o contrato da API está sendo seguido (estrutura de resposta).  
- **Itens Verificados**: 
  - Tipos de dados (número, string, boolean, etc.).  
  - Presença de atributos obrigatórios.  
  - Formato da resposta JSON.  

- **Ferramentas**: Postman ou frameworks como Swagger para documentar e validar contratos.  
- **Exemplo**: Validar que a resposta de um GET para `/user/25` retorna:
  ```json
  {
      "id": 25,
      "name": "João",
      "age": 30
  }
  ```

#### **3. Teste Funcional**
- **Objetivo**: Validar o comportamento esperado da API.  
- **Testes Incluídos**:
  - **Requisições válidas**: O recurso é retornado corretamente.  
  - **Requisições inválidas**: A API retorna o código de erro apropriado (ex.: 400, 404).  

- **Exemplo**:
  - Fazer um POST com os dados do usuário e verificar se retorna **201 Created**.  
  - Testar uma solicitação GET para um ID inexistente e validar o retorno **404 Not Found**.

#### **4. Teste de Segurança**
- **Objetivo**: Garantir que a API está protegida contra acessos não autorizados e vulnerabilidades.  
- **Testes Incluídos**:
  - Verificar se o token de autenticação é obrigatório.  
  - Testar com tokens inválidos ou expirados para garantir que o acesso é negado (**401 Unauthorized**).  
  - Validar se dados sensíveis (como senhas) estão protegidos ou não são retornados.  

- **Exemplo**:
  - Tentar acessar `/user/25` sem um token e verificar se retorna **401 Unauthorized**.  
  - Fazer um teste com um token válido, mas sem permissão, e garantir retorno **403 Forbidden**.  

---