Excelente pergunta, Bruno! Esses termos — **níveis, técnicas, estratégias e tipos de testes** — são fundamentais para a organização da atividade de testes, mas geram bastante confusão. Abaixo está uma explicação clara, com comparações diretas e exemplos para fixar bem cada um:

---

## ✅ **1. Níveis de Teste**

### 👉 O que são?

Refletem **em que parte do sistema** os testes são aplicados no ciclo de desenvolvimento.

### 📊 Exemplo de Níveis:

| Nível                   | O que testa                    | Quem geralmente executa       |
| ----------------------- | ------------------------------ | ----------------------------- |
| **Teste de Unidade**    | Funções/métodos isolados       | Desenvolvedores               |
| **Teste de Integração** | Comunicação entre módulos      | Devs ou QAs (automação)       |
| **Teste de Sistema**    | Sistema como um todo           | Equipe de QA                  |
| **Teste de Aceitação**  | Validação de requisitos finais | QA + Cliente/PO/Usuário Final |

---

## ✅ **2. Técnicas de Teste**

### 👉 O que são?

Métodos utilizados para **criar casos de teste**, baseados em critérios específicos.

### 📊 Exemplos de Técnicas:

| Técnica                      | Tipo         | Descrição                                    |
| ---------------------------- | ------------ | -------------------------------------------- |
| **Partição de Equivalência** | Caixa Preta  | Divide entradas em grupos válidos/invalidos  |
| **Análise do Valor Limite**  | Caixa Preta  | Testa os limites das entradas                |
| **Tabela de Decisão**        | Caixa Preta  | Testa combinações de regras e ações          |
| **Transição de Estados**     | Caixa Preta  | Testa mudanças de estado do sistema          |
| **Teste de Caminho**         | Caixa Branca | Testa todos os caminhos possíveis no código  |
| **Cobertura de Condições**   | Caixa Branca | Garante que todas as decisões sejam testadas |

> Técnicas ajudam a definir **o que testar**, com base em lógica e cobertura.

---

## ✅ **3. Estratégias de Teste**

### 👉 O que são?

São **abordagens gerais** de como o teste será conduzido, planejado e priorizado.

### 📊 Exemplos de Estratégias:

| Estratégia                   | Foco Principal                                  |
| ---------------------------- | ----------------------------------------------- |
| **Baseada em Risco**         | Prioriza testes que cobrem áreas mais críticas  |
| **Baseada em Requisitos**    | Casos derivados diretamente das funcionalidades |
| **Baseada em Comportamento** | Uso de BDD e critérios de aceitação             |
| **Exploratória**             | Descoberta de falhas sem roteiro fixo           |
| **Automatizada**             | Execução rápida e repetitiva via scripts        |
| **Manual**                   | Acompanhamento humano, análise comportamental   |

> Estratégias definem **o porquê e o como testar** determinado sistema ou funcionalidade.

---

## ✅ **4. Tipos de Teste**

### 👉 O que são?

Descrevem **o propósito ou objetivo específico** de um teste.

### 📊 Exemplos de Tipos:

| Tipo de Teste       | Finalidade                                          |
| ------------------- | --------------------------------------------------- |
| **Funcional**       | Verifica se a funcionalidade cumpre o esperado      |
| **Regressão**       | Garante que algo que funcionava ainda funciona      |
| **Exploratório**    | Descoberta de bugs sem roteiro fixo                 |
| **Usabilidade**     | Avalia a experiência do usuário                     |
| **Performance**     | Mede resposta, carga, estresse, escalabilidade      |
| **Segurança**       | Verifica vulnerabilidades e falhas de acesso        |
| **Compatibilidade** | Testa em diferentes dispositivos/ambientes          |
| **Instalação**      | Avalia se o sistema pode ser corretamente instalado |
| **Aceitação (UAT)** | Validação final pelo cliente ou usuário final       |

> Tipos indicam **o que você está tentando garantir ou prevenir** com aquele teste.

---

## 🎯 Resumo Visual

| Termo          | Foco da Classificação   | Pergunta que responde                        | Exemplo                            |
| -------------- | ----------------------- | -------------------------------------------- | ---------------------------------- |
| **Nível**      | Onde o teste é aplicado | Em que parte do sistema estamos testando?    | Teste de Sistema, Teste de Unidade |
| **Técnica**    | Como criamos o teste    | Com base em que critérios criamos os testes? | Partição de Equivalência, Caminho  |
| **Estratégia** | Como vamos testar       | Qual abordagem geral vamos adotar?           | Baseada em Risco, Exploratório     |
| **Tipo**       | Para que serve o teste  | Qual o objetivo ou intenção do teste?        | Regressão, Usabilidade, Aceitação  |

---

Se quiser, posso gerar esse conteúdo como um PDF visual, um guia em Markdown ou um infográfico. Deseja algum desses formatos?


Excelente pergunta, Bruno! A **hierarquia entre níveis, tipos, técnicas e estratégias de teste** não é formalmente definida como uma cadeia rígida, mas podemos organizar esses conceitos de forma **estruturada e lógica**, refletindo **como se encaixam dentro do processo de testes**.

---

## 🧭 **Hierarquia Prática entre Estratégia → Nível → Tipo → Técnica**

### 🪜 Estrutura hierárquica sugerida:

1. **Estratégia de Teste**
   🔽 Define o plano geral e a abordagem (por que e como vamos testar)

2. **Níveis de Teste**
   🔽 Define onde o teste será aplicado no ciclo de desenvolvimento

3. **Tipos de Teste**
   🔽 Define o objetivo de cada teste (o que queremos garantir)

4. **Técnicas de Teste**
   🔽 Define como os testes serão projetados (quais métodos usaremos)

---

### ✅ Exemplo completo na prática:

> **Projeto: Portabilidade de Crédito**
> Queremos garantir que o sistema funcione corretamente, com foco nas regras críticas e experiências dos usuários.

#### 1. **Estratégia**

* Baseada em Risco + Automatização de fluxos críticos
  *(Foco em prevenir falhas nas partes mais sensíveis do sistema, como aprovação e retenção.)*

#### 2. **Nível de Teste**

* Teste de Sistema + Teste de Integração
  *(Validar o comportamento geral e as comunicações entre componentes e APIs.)*

#### 3. **Tipo de Teste**

* Funcional, Regressão, Usabilidade
  *(Verificar regras de negócio, garantir que nada quebrou, validar a experiência do usuário.)*

#### 4. **Técnica de Teste**

* Partição de Equivalência, Análise de Valor Limite, Tabela de Decisão
  *(Usar critérios técnicos para criar casos de testes eficazes.)*

---

## 🎯 Visão Gráfica da Hierarquia

```plaintext
1. Estratégia de Teste
   └── 2. Nível de Teste
         └── 3. Tipo de Teste
               └── 4. Técnica de Teste
```

---

## 📝 Resumo rápido

| Camada         | Responde à pergunta            | Exemplos                                  |
| -------------- | ------------------------------ | ----------------------------------------- |
| **Estratégia** | Como vamos conduzir os testes? | Baseada em Risco, Manual, Automatizada    |
| **Nível**      | Onde vamos testar?             | Unidade, Integração, Sistema, Aceitação   |
| **Tipo**       | O que vamos testar?            | Funcional, Regressão, Usabilidade         |
| **Técnica**    | Como vamos projetar os testes? | Valor Limite, Tabela de Decisão, Caminhos |

---

Se quiser, posso transformar isso em um **guia visual (HTML, Markdown ou infográfico)** para seu portfólio de QA. Deseja?
