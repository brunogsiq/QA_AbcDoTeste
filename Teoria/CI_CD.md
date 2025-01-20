## **Continuous Integration vs. Continuous Delivery vs. Continuous Deployment**

### **1. Continuous Integration (CI)**
O objetivo do **Continuous Integration** é integrar frequentemente as alterações de código de diferentes desenvolvedores no repositório principal, com validação automatizada para detectar problemas cedo.  

#### **Principais Etapas:**
1. **Developer:** Escreve e faz o commit do código no repositório.  
2. **Source Control:** Integração com sistemas como Git.  
3. **Build:** O código é compilado e montado.  
4. **Test:** São executados testes automatizados, como testes unitários e de integração.  
5. **Report:** Resultados são reportados à equipe.  
6. **Release:** Prepara o código aprovado para o próximo estágio.

#### **Benefícios:**
- Identificação rápida de falhas.  
- Integração frequente reduz conflitos de código.  

---

### **2. Continuous Delivery (CD - Entrega Contínua)**  
O foco está em garantir que o software esteja **sempre pronto para ser liberado** em produção, após passar por um pipeline de automação.

#### **Principais Etapas:**
1. **Develop:** Desenvolvimento de novas funcionalidades.  
2. **Build:** Construção do software em artefatos prontos para deploy.  
3. **Test:** Testes automatizados validados em vários ambientes.  
4. **Deploy:** Implantação manual ou automatizada em ambientes de staging ou homologação.  
5. **Release:** Preparação para uma liberação manual em produção.  

#### **Benefícios:**
- Confiança na entrega de versões sempre testadas e estáveis.  
- Possibilidade de liberação controlada.  

---

### **3. Continuous Deployment (Implantação Contínua)**  
Vai além do **Continuous Delivery**, implantando automaticamente cada alteração aprovada diretamente em produção.  

#### **Diferença Principal:**  
- **Entrega contínua:** Liberação manual em produção.  
- **Implantação contínua:** Implantação automatizada em produção.

#### **Benefícios:**
- Redução de tempo entre desenvolvimento e entrega.  
- Feedback rápido sobre alterações em produção.  

---

## **Entrega por Time Box**
- Realiza-se a entrega em ciclos predefinidos, como sprints, independentemente do estado do backlog.  
- **Objetivo:** Priorizar entregas incrementais com frequência regular.  
- **Benefício:** Aumenta a previsibilidade e reduz a procrastinação no desenvolvimento.  

---

## **Ambientes Típicos de Teste**

1. **Teste de Componentes:**  
   - Valida módulos individuais do sistema.  

2. **Teste de Integração:**  
   - Realizado em **servidores dedicados**, verificando a interação entre sistemas e componentes.  

3. **Testes de API:**  
   - Valida endpoints e integrações usando ferramentas como **Postman** e **RestAssured**.  

4. **Testes de UI (Web e Mobile):**  
   - Executados em dispositivos específicos e navegadores variados para garantir consistência visual e funcional.  

5. **Testes Não Funcionais:**  
   - Realizados em **servidores especializados** para validar desempenho, carga e segurança.  

---

## **Build Pipeline**
- Um **pipeline de build** organiza as tarefas de automação em etapas sequenciais.  
- **Objetivo:** Dividir o processo em estágios (build, teste, deploy) para aumentar a confiança e reduzir erros em produção.  

---

## **Gerenciamento de Dados de Teste**

1. **Seleção Correta dos Dados:**  
   - Escolher dados representativos e relevantes para o cenário de teste.  

2. **Distribuição dos Dados:**  
   - Organizar os dados de acordo com os testes planejados, evitando conflitos.  

3. **Reset de Dados:**  
   - Garantir que o ambiente de teste seja restaurado ao estado inicial após cada execução.  

---

## **Environments (Ambientes)**

- **Ambientes típicos:** Desenvolvimento, homologação (staging), produção.  
- **Uso:** Cada ambiente serve para isolar e validar diferentes fases do desenvolvimento, reduzindo riscos.  

---

## **Gitflow**
- Um modelo de ramificação do Git que organiza o ciclo de vida do código.  
- **Fluxos principais:**
  - **Branch master:** Código pronto para produção.  
  - **Branch develop:** Desenvolvimento ativo.  
  - **Feature branches:** Funcionalidades específicas.  
  - **Release branches:** Preparação para lançamento.  
  - **Hotfix branches:** Correções rápidas em produção.  

**Benefício:**  
Facilita a colaboração e controle de versões em equipes ágeis e distribuídas. 🚀  