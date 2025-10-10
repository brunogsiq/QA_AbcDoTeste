# 📋 **Roteiro de Perguntas e Respostas – QA Júnior a Pleno (Atualizado)**

---

## 🔹 Fundamentos de QA

**1. O que você entende por qualidade de software?**

> 👉 Qualidade de software é entregar um sistema que funcione conforme esperado, com poucos erros, fácil de usar e que atenda as necessidades do usuário final.

**2. Você sabe o que é um bug? Pode dar um exemplo simples que já encontrou?**

> 👉 Sim, bug é um erro no sistema. Por exemplo, já vi um botão de “Salvar” que não gravava os dados no banco.

**3. Qual a diferença entre um bug e uma melhoria?**

> 👉 Bug é quando algo está errado em relação ao que foi especificado. Já melhoria é quando o sistema funciona, mas pode ser otimizado ou receber algo novo.

**4. Você sabe a diferença entre testes manuais e testes automatizados?**

> 👉 Testes manuais são feitos pelo tester executando os cenários. Testes automatizados usam scripts e ferramentas para rodar os testes de forma repetitiva e rápida.

**5. Você sabe o que é um caso de teste? Já escreveu algum?**

> 👉 Caso de teste é um passo a passo documentado para validar uma funcionalidade. Sim, já escrevi, por exemplo: “Validar login com credenciais corretas”.

**6. O que são critérios de aceite? Pode dar um exemplo?**

> 👉 São condições que precisam ser atendidas para que uma funcionalidade seja considerada concluída. Exemplo: no login, “o usuário deve receber mensagem de erro ao digitar senha incorreta”.

**7. O que você entende por regra de negócio?**

> 👉 São regras que definem como o sistema deve funcionar de acordo com o processo da empresa. Exemplo: “um cliente não pode fazer saque acima do saldo disponível”.

**8. O que é um plano de teste e o que deve conter?**

> 👉 É um documento que organiza a estratégia de testes. Normalmente contém escopo, recursos, riscos, cronograma e tipos de testes que serão aplicados.

**9. Você já ouviu falar de regressão? Como explicaria esse tipo de teste?**

> 👉 Sim, regressão é garantir que algo que já funcionava continua funcionando depois de uma alteração no sistema.

**10. O que é um ambiente de testes e por que ele é importante?**

> 👉 É um ambiente separado da produção usado para validar funcionalidades. É importante porque evita riscos no ambiente real.

---

## 🧪 Experiência com Testes

**11. Você já usou algum tipo de ferramenta de testes? Pode citar?**

> 👉 Sim, já usei Postman para APIs, Cypress para automação de frontend e Excel para organizar casos de teste.

**12. Como você testaria uma funcionalidade de login com e-mail e senha?**

> 👉 Eu testaria com credenciais corretas, incorretas, campos vazios, formato inválido de e-mail, senha errada várias vezes, e também verificaria mensagens de erro.

**13. Se você tiver pouco tempo para testar, como decidiria o que testar primeiro?**

> 👉 Eu priorizaria os fluxos críticos para o negócio, como login, pagamentos ou cadastro, que impactam diretamente os usuários.

**14. Se não houver documentação da funcionalidade, como você faria para testar?**

> 👉 Eu exploraria a funcionalidade, perguntaria ao desenvolvedor ou PO, e criaria cenários baseados no comportamento esperado.

**15. Quais foram os principais tipos de testes backend que você utilizou em sua trajetória profissional?**

> 👉 Testes de API, validação de banco de dados e testes de integração entre serviços.

**16. Você possui experiência com testes de API? Já utilizou o Postman ou outras ferramentas?**

> 👉 Sim, já usei bastante o Postman para validar endpoints, status codes e contratos de resposta.

**17. Já trabalhou com testes de caixa preta e caixa branca? Pode dar exemplos práticos?**

> 👉 Caixa preta é quando só valido entradas e saídas, como no login. Caixa branca é olhar a lógica interna, por exemplo, analisar queries ou fluxo de código.

**18. Já trabalhou com testes de requisitos não funcionais? Pode citar exemplos?**

> 👉 Sim, como testes de performance e usabilidade, verificando tempo de resposta e acessibilidade.

**19. Como você costuma garantir que o ambiente não vai quebrar após alterações? Quais tipos de testes realiza para isso?**

> 👉 Faço testes de regressão, smoke tests e acompanho monitoramento do ambiente.

**20. Já utilizou testes automatizados em esteiras de CI/CD? Como era esse processo?**

> 👉 Sim, os testes rodavam automaticamente em cada commit, e se falhassem, o pipeline barrava a entrega.

**21. Usava ferramentas para rodar testes já existentes ou criava seus próprios scripts? Como era o seu fluxo?**

> 👉 Fiz os dois. Já rodei testes prontos e também criei scripts de automação quando havia necessidade.

---

## 👨‍💻 Tecnologias e Ferramentas

**22. Você tem experiência tanto com frontend quanto com backend? Pode detalhar sua atuação em cada um?**

> 👉 Sim, no frontend validei telas, botões e fluxos visuais. No backend, trabalhei com APIs, banco de dados e integrações.

**23. Em relação ao frontend, qual foi seu nível de atuação? Em quais projetos trabalhou?**

> 👉 Validei usabilidade, responsividade e automação de fluxos críticos com Cypress.

**24. Você utilizava o Azure DevOps como ferramenta de controle de testes? Como era o gerenciamento dentro das sprints?**

> 👉 Sim, usava para planejar casos de teste, vincular a user stories e acompanhar execução.

**25. Já trabalhou com ferramentas de análise estatística de código? Quais?**

> 👉 Sim, SonarQube para verificar qualidade e vulnerabilidades no código.

**26. Utilizava ferramentas de análise de arquitetura, testes unitários e cobertura de código? Quais especificamente?**

> 👉 Já acompanhei relatórios de Jest para cobertura e análise via Sonar.

---

## 📱 Experiência com Mobile

**27. Você possui experiência com testes mobile? Quais ferramentas utilizou e que tipos de testes manuais realizou?**

> 👉 Sim, já testei emuladores e dispositivos reais, validando navegação, inputs e notificações.

**28. Por quanto tempo você trabalhou com projetos mobile?**

> 👉 Aproximadamente X meses/anos, dependendo do contexto do projeto.

**29. Quais foram os principais desafios em testes mobile que você enfrentou?**

> 👉 A variedade de dispositivos, sistemas operacionais e tamanhos de tela.

---

## 🔄 Metodologias Ágeis e Cascata

**30. Com quais metodologias de desenvolvimento você tem mais experiência? (Scrum, Kanban, Cascata, etc.)**

> 👉 Principalmente Scrum, mas já atuei em Kanban e em projetos mais tradicionais em cascata.

**31. Você já trabalhou em ambientes que utilizavam cascata com elementos ágeis? Como funcionava esse modelo?**

> 👉 Sim, eram projetos em fases longas, mas com algumas reuniões ágeis e checkpoints.

**32. Como você lidava com demandas com prazos muito bem definidos, como ocorre na metodologia cascata?**

> 👉 Priorizava testes críticos, comunicava riscos e organizava entregas parciais.

**33. Como era a organização das sprints nos times ágeis em que atuou? Pode descrever uma situação típica?**

> 👉 Tínhamos planning, daily, reviews e retrospectivas. As histórias eram quebradas em tarefas e vinculadas a testes.

**34. Já enfrentou situações em que a demanda “veio guerra abaixo”, ou seja, com alta pressão e prazos curtos? Como lidou com isso?**

> 👉 Sim, mantive a calma, priorizei os testes críticos e comuniquei claramente o que seria entregue dentro do prazo.

---

## 📈 Relacionamento com o Negócio e Melhorias

**35. Você já teve envolvimento direto com a área de negócios? Como se dava essa interação?**

> 👉 Sim, em refinamentos de requisitos e validação de critérios de aceite.

**36. Em algum momento você precisou propor ou implementar melhorias para a área de negócios, especialmente com foco em automação?**

> 👉 Sim, sugeri automação de regressões para ganhar tempo nas entregas.

**37. Pode contar um exemplo em que você precisou “se virar” para entregar automações sob pressão?**

> 👉 Já precisei automatizar casos rapidamente para liberar uma versão crítica em produção.

---

## 👤 Perfil Pessoal e Motivação

**38. Se você encontrar um bug crítico em produção, como você agiria?**

> 👉 Reportaria imediatamente, documentaria o problema e ajudaria o time a reproduzir para corrigir rápido.

**39. Imagine que o desenvolvedor corrige um bug, mas você encontra outro diferente no mesmo fluxo. O que faria?**

> 👉 Abriria um novo bug, documentaria e comunicaria para alinhar prioridades.

**40. Como você garantiria que duas pessoas testando a mesma funcionalidade não deixem passar coisas importantes?**

> 👉 Usaria casos de teste documentados ou checklist para manter consistência.

**41. Se você tivesse que explicar testes para alguém leigo, como explicaria?**

> 👉 Diria que é como revisar algo antes de entregar, para garantir que funciona e atende o que foi pedido.

**42. Você prefere trabalhar sozinho ou em equipe? Por quê?**

> 👉 Prefiro em equipe, porque a troca de conhecimento e colaboração melhoram o resultado.

**43. Por que você quer trabalhar com testes/QA?**

> 👉 Porque gosto de garantir qualidade, encontrar problemas e contribuir para que o usuário final tenha a melhor experiência possível.

**44. O que você faria se encontrasse um erro, mas o desenvolvedor dissesse que é assim mesmo?**

> 👉 Com respeito, mostraria evidências do erro e discutiria com o time ou PO para validar se realmente é esperado.

---