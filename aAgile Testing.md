Agile Testing

    Waterfall / Tradicional / Cascata:
        Ou seja, tudo é feito em períodos separados.
        Baseado no modelo V.

        Requisitos durante um tempo.
            Design durante um tempo.
                Codifica durante mais um longo tempo.
                    Teste no final.
                        UAT - Homologação do Cliente.

        Testamos para encontrar defeitos, melhorar a satisfação do cliente, reduzir riscos, deterctar erros de especificação, e desvios das especificações de teste.

    Agile:

        Interações curtas que entregam valor.
        Ceriôminas de planejamento, para mitigar riscos em curtos espaços de tempo.
        Critérios são levantados em conjuntos pelo time e durantes as alterações.
        Execução de teste é contínua.
        Todas as pessoas do time "Testam".

    Cultura Ágil:
        Indivíduos e interações mais do que processos e ferramentas.
        Responder a mudanças mais do que seguir o plano.
        Software funcionando mais do que documentação abundante.

    Manifesto Ágil:
        Testar durante é mais importante que testar ao fim.
        Prevenir é mais importante que encontrar defeitos, erros e falhas.
        Testar o entendimento mais do que checar apenas a funcionalidade.
        Construir um bom sistema é mais importante que quebrar (code review, clean code, processos bem elaborados).
        O time é responsável pela qualidade.

    Time Ágil:
        Product owner
        Desenvolvedor
        QA
        Scrum master

    Definição de DOD (Definition of done):
        Geralmente realizado no início do projeto, ou por sprint.
            Ex: todos os critérios deverão estar testados, a automação deverá estar em 80% das funcionalidades.
        Mecanismo criado pelo time para garantir a entrega de qualquer item com qualidade.
        Checklist com as atividades que trazem valor ao negócio e ao produto de software.
        É um mecanimos de reporte aos membros do time.
        É vivo
        Informa a realidade do desenvolvimetno em vários níveis

    Quality Gate:
        Em modelos tradicionais o testador concentrava uma série de questões referente ao teste, sendo somente ele responsável por reportar defeitos, testar, retestar e dizer se está ok.
        Papel de facilitador e link entre equipe e ideias.
        Facilitador, sendo braço direito do Product Owner.
        Melhoria continua e feedback.
            Pair programming.
            Pareamento.
            Revisão de código.
            Teste de unidade.
            Teste de integração automatizados.
            Testes de aceitação automatizados.
            Testes de regressão.
            Testes exploratórios.
            Retrospectivas.

    Quadrante de testes:

        Q1: Automatizado:
            Testes Unitários e de componentes.
                Teste de acesso a dados, updates, crud, etc
                Lógica de negócio e apresentação separados.
                Isolar testes.
                Qualidade interna.
                Confiança no design
                Utilizaremos:
                    gerencimento de código fonte
                    ferramentas de controle de versão
                    controle de mudanças
                    Ferramentas para desenvolvimento, Build, Integração contínua
                    Ferramentas de testes de unidade (JUnit, XUnit, NUnit, TestNG)

        Q2: Automatizado e manual:
            Testes funcionais.
                Desenvolvimento com testes voltados ao negócio.
                Fazer as perguntas corretas.
                Ajudar o cliente a ter a visão clara dos requisitos
                Capturar exemplos que serão colocados com testes executáveis.
                Ter consciência da qualidade externa.
                Saber quando estará pronto (foco apenas no que precisa ser feito).
                Testadores com expertise maior.
                Colaboração e responsabilidade de todos.
                Nada está pronto antes de ser testados.
                    Utilizaremos:
                        BDD - Behavior driven development.
                        Los 3 amigos.
                        Exemplos de uso.
                        Exemplos mapeados.
                        Protótipos.
                        Diagramas de fluxo;


        Q3:Manual:
            Testes Exploratórios, Usabilidade, Aceitação, Alpha e Beta.
                Recriar a experiência do usuário.
                Uso realístico do software.
                Aprende-se enquanto testa.
                Revisão interativa.
                Construção de confiança.
                Loop de feedback.
                Apresentação de testes e caminhos.
                    Utilizaremos:
                        Testes exploratórios, testes de cenários, testes de usabilidade (personas, navegação, observação dos usuários)
                        Revisão de qualquer documentação agregada.
                        Transformação do aprendizado em novos testes ou até novas funcionalidades.
                        Mudar processos sempre que necessário
                        Testadores com boas skills e pensamentos critícos.
                        Interação com o cliente o quanto antes.

        Q4: Ferramentas:
            Testes de performance, Estabilidade, Carga (Escalabilidade), Compatibilidade, Segurança e Ilidade.

        Q1+Q2: Suporta o time
        Q1+Q4: Foco em tecnologia
        Q2+Q3: Foco em negócio
        Q3+Q4: Critica o produto


    Técnicas de Design:
        Planejamento:
            Diagrama de contexto:
                Define o limite entre o sistema ou parte deste, exibindo as entidades que interagem com eles.
                    