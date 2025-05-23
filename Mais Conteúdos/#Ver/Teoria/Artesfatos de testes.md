### **Artefatos de Teste**

**1. Definição**  
Artefatos de teste são produtos de trabalho criados e utilizados durante o processo de teste de software. Eles são fundamentais para o planejamento, execução, documentação e rastreamento das atividades de teste.

---

### **Características dos Artefatos**
- **Descrição e Definição**: São registros tangíveis que descrevem o progresso e os resultados dos testes.
- **Podem ser compostos por outros artefatos**: Por exemplo, um plano de teste pode referenciar cenários de teste, casos de teste e uma matriz de rastreabilidade.
- **Flexibilidade no formato**: Embora muitos métodos tradicionais enfoquem documentos, artefatos podem ser armazenados diretamente em ferramentas de gerenciamento de testes, como Jira, TestRail ou Zephyr.
- **Subprodutos dos testes**: São criados durante a execução dos testes e podem ser compartilhados com interessados (equipe, clientes, líderes, etc.).

---

### **Exemplos de Artefatos**
1. **Especificação de Caso de Uso**:  
   Descreve como um sistema deve se comportar em resposta a ações do usuário. É utilizado para identificar cenários de teste.
   
2. **Modelo de Design**:  
   Representa a estrutura técnica e funcional do sistema, usado para identificar áreas críticas que precisam ser testadas.
   
3. **Plano de Projeto**:  
   Fornece uma visão geral do planejamento de desenvolvimento e testes, incluindo cronogramas, recursos e escopo.
   
4. **Defeito Registrado**:  
   Documentação de falhas encontradas durante os testes, incluindo detalhes como passos para reprodução, gravidade e prioridade.

---

### **Finalidades dos Artefatos**
- **Cobertura Abrangente**: Enumerar e rastrear os testes necessários para validar todas as funcionalidades do sistema.
- **Automação e Scripts de Teste**: Identificar e criar scripts de teste automatizados ou manuais para validação consistente.
- **Implementação e Controle**: Fornecer detalhes para implementação e execução de testes, incluindo pontos de observação e controle, bem como pré-condições e pós-condições.
- **Rastreabilidade**: Acompanhar o progresso dos testes em relação aos requisitos de software.
- **Compartilhamento e Transparência**: Facilitar a comunicação e o alinhamento entre equipes, stakeholders e clientes.

---

### **Artefatos no STLC (Ciclo de Vida de Testes de Software)**
- Durante o ciclo de vida de testes, os analistas de teste criam e gerenciam artefatos como parte do processo de garantia de qualidade.
- Esses artefatos podem incluir documentos como o plano de teste, casos de teste, relatórios de status e métricas de desempenho.

---

### **1. Estratégia de Testes**
- **Definição**: Documento que descreve a abordagem geral para realizar os testes de software. Ele é um guia de alto nível, focado nos objetivos e na visão geral dos testes.
- **Conteúdo típico**:
  - Escopo do teste.
  - Tipos de testes que serão realizados (funcionais, não funcionais, de integração, etc.).
  - Ferramentas de teste a serem usadas.
  - Critérios de entrada e saída.
  - Riscos e como eles serão mitigados.
- **Objetivo**: Garantir que todos os membros da equipe estejam alinhados sobre como os testes serão conduzidos.

---

### **2. Plano de Teste**
- **Definição**: Documento detalhado que descreve o escopo, abordagem, recursos, cronograma e atividades específicas do teste.
- **Conteúdo típico**:
  - Objetivos dos testes.
  - Escopo do teste (o que será e o que não será testado).
  - Cronograma detalhado.
  - Recursos (humanos, ferramentas e infraestrutura).
  - Riscos identificados e planos de contingência.
  - Responsabilidades da equipe de teste.
  - Critérios de aceitação.
- **Objetivo**: Fornecer um roteiro detalhado para a execução do processo de teste, garantindo organização e eficiência.

---

### **3. Cenário de Teste**
- **Definição**: Uma descrição de alto nível das situações a serem testadas, baseadas em requisitos ou funcionalidades específicas.
- **Conteúdo típico**:
  - Funcionalidade ou requisito que será testado.
  - Pré-condições necessárias.
  - Fluxo básico do que será validado.
- **Exemplo**: 
  - Cenário: Validar o processo de login com credenciais válidas.
  - Pré-condição: O sistema deve estar funcional e acessível.
- **Objetivo**: Garantir que todas as áreas do sistema sejam cobertas e que os requisitos sejam testados de maneira abrangente.

---

### **4. Caso de Teste**
- **Definição**: Conjunto detalhado de ações, condições e entradas para verificar uma funcionalidade ou comportamento específico do sistema.
- **Conteúdo típico**:
  - Identificador único do caso de teste.
  - Descrição detalhada do caso de teste.
  - Pré-condições.
  - Passos a serem seguidos.
  - Entradas esperadas.
  - Resultados esperados.
  - Resultados reais (após a execução do teste).
- **Exemplo**:
  - Caso: Verificar login com senha incorreta.
  - Passos: Inserir usuário válido e senha inválida e clicar em "Login".
  - Resultado esperado: Exibição de mensagem "Credenciais inválidas".
- **Objetivo**: Realizar uma validação detalhada e documentada de cada funcionalidade do sistema.

---

### **5. Matriz de Rastreabilidade**
- **Definição**: Documento ou ferramenta que relaciona os requisitos do sistema com os casos de teste para garantir que cada requisito seja testado.
- **Conteúdo típico**:
  - Lista de requisitos (com identificadores únicos).
  - Mapeamento dos casos de teste associados a cada requisito.
  - Status de teste (passou, falhou, pendente, etc.).
- **Objetivo**: 
  - Garantir que nenhum requisito foi negligenciado durante os testes.
  - Facilitar o rastreamento de problemas e a análise de impacto.
  - Prover uma visão clara do progresso do teste.

---