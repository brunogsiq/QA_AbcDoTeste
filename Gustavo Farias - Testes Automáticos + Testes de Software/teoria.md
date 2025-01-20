O que é teste de software
    Verificar o comportamento de um determinado objeto está de acordo com o esperado
    Uma determinada entrada deverá refletir a saída esperado, o objetivo.

Perfil do testador
    Detalhista, Criterioso, POaciente, Perspicaz, Focado, Motivado, e deverá possuir uma visão pessimista do sistema, não é uma pessoa pessimista, mas sim para o sistema.
    Visão critíca, entendendo a necessidade do cliente, ou seja, deverá ser pensado testes relevantes.

Fundamentos do testes de software
    Quando, Como, O que testar:

    Quanto Testar?
        Níveis de Testes: São 7 os níveis durante o desenvolvimento do ciclo de vida de software.
            Testes de Unidade:
                São realizados em cima rotinas, metódos, classes.
                O objetivo é testar a menor parte do sistema.
                Geralmente são realizadas pelo programador e de forma automatizada.
            Testes de Integração:
                Valida comunicação entre componentes do sistema.
                Também poderá ser realizado de forma automatizada.
            Testes de Sistema:
                Executar o sistema sob o ponto de vista do seu usuário final, varrendo funcionalidades em busca de falhas em relação ao resultado esperado.
                Realizados quando o sistema estiver concluído.
            Testes de Aceitação:
                Executando também no nível de sistemas.
                Realizados por um grupo restrito de usuários finais do sistemas, que irão simular rotinas, entre outras tarefas para verificar se o comportamento está de acordo com o solicitado.
            Testes Alfa:
                Testes realizado por um grupo maior que um grupo restrito, porém, sem coordenação, deverão ser feitos sem planejamentos, para realização de feedback da forma mais ágil possível.
            Testes Beta:
                Realizado por um grupo além da organização, bem maior que o anterior, obedecendo há alguns critérios, porém, que abrange um público alvo enorme, e não sobre coordenação e planejamento, em busca também de feedback, não háverá suporte da equipe, como nos testes de aceitação e alfa.
            Testes de Regressão:
                Realizado há qualquer momento, com intuito de realizar um reteste em funcionalidades já entregues, criadas, para verificar se as mesmas ainda continuam com o funcionamento correto.

    Como Testar:
        Técnicas de Testes:
            Caixa Branca
                Caixa aberta, visualizando o código, como por exemplo o teste de unidade.
            Caixa Preta
                Testes baseados em entradas e saídas, diretamente pelo sistema, sem a necessidade de verificar o código.
                    Os níveis dos quais poderão ser realizados estes testes são Integração, Sistema, Aceitação, Alfa, Beta e Regrassão.

    O que Testar:
        Tipos de Testes:
            Teste Estático
                Não há execução do código, o intuito é analisar e apontar falhas de forma visual, procurando obter boas práticas de código, como tratamento de excessões, falha de documentação.
            Teste Dinâmico
                Há execução do sistema para realização do sistema através de entradas e saídas.
            Testes de Funcionalidade
                Verificação das funcionalidades do sistema estão em acordo com o resultado esperado.
            Teste de Desempenho
                Tempo de respostas de um sistema referente ao seu tempo de respsota para determinação sobre suas operações
            Testes de Stress
                Validar o comportamento do sistema em condições extremas de carga de trabalho executando as principais funções e medindo seu tempo de resposta, consumo de memória, hardware
            Testes de Usabilidades
                Testes referentes a experiência do usuário, ou seja, é simples, fácil, compreensível, eficiente, agradável de utilizar.
            Testes de Segurança
                Validar a proteção do sistema contra invasões ou acessos não autorizados a informações, como banco de dados, logins e etc.
            Testes de Portabilidade
                Validação do sistema para diferentes dispositivos, plataformas, sistemas, navegadores entre outras diferenças baseado no público alvo.
            Teste de Recuperabilidade
                Valida o quanto o sistema demora para recuperar-se após alguma interocrrência
            Teste de Concorrência
                Valida se o sistema se comporta corretamente executando diversas funções em paralelo
            Teste de Manutenabilidade
                Verifica se o sistema é complexo ou não para mantê-lo.
            Testes de Interface

Etapas do desenvolvimento de software
    Análise de requisitos

    Especificação

    Arquitetura

    Codificação

    Testes de Unidade
        Testes de Integração
    
    Criação dos cenários de testes de aceitação e sistema

    Testes de sistema
        Testes de aceitação
            Testes alfa e beta