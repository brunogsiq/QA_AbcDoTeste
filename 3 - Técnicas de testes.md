/*
    3 - Técnicas de Testes:

        Técnicas, são ações com procedimetnos para chegar há um determinado resultado. Ferramentas, são aplicações que suportam técnicas e agilizam os testes durante todo o desenvolvimento.

        3.1 - Análise de Pareto:

            Conceito sobre uma pequena porção equivale a uma grande porção, podendo ser equiparado a 20 :> 80
            20% de algo, representará 80% de algo. 
            Ao invés de tratar as causas de forma aleatória, a técnica irá lhe permitir ter informações para saber o que resolver como prioridade.
                Exemplo, 20% do defeito são 80% das reclamações.

        3.2 - Classe de Equivalência:

            Separar os dados do teste em classes, estes serão obtidos de acordo com o tipo de entrada de dados. Após, realizar o testes após tivermos separados(divididos) os dados em classes e entender qual nosso range para que o teste possar estar correto.
                Exemplo, campo que pode receber uma idade 18>= e 65<= 
        
        3.3 - Valores Limites:

            Evolução da da técnica de Classe de equivalência, consiste na verificação de valores na borda do teste.
                Exemplo, campo que pode receber uma idade 18>= e 65<= 

        3.4 - Tabela da Verdade ou Decisão:

            Recordar-se sobre a construção de portas lógicas,ou seja, baseadas em duas respostas, sim ou não, verdadeiro ou falso, válido ou inválido.
            O número de saídas são dois, vezes a quantidade de campos.
            Tabela que contém condições lógicas que determinam um resultado.
            Para cada resultado, será criado um caso de teste.
            Quanto mais condições lógicas possuir a tabela, maior poderá ser a quantidade de casos de teste.
                Exemplo 01: Formulário com 10 campos, onde todos poderão receber sim ou não como resposta 10²
                Exemplo 02: Sim ou não, para 4 campos. Ficará 2^(4) = 16, assim, vvvvvvvvffffffff vvvvffffvvvvffff vvffvvffvvffvvff vfvfvfvfvfvfvfvf

        3.5 - Pairwise:

            Teste de combinação dupla, é um dos critérios baseados na especificação, para cada par de parâmetro de entrada de um sistema, e que cada combinação de valores válidos destes dois parâmetros sejam cobertos por ao menos um caso de testes.
            Não iremos testar todas as combinações possíveis, mas sim, testar pares de variáveis com a intenção de reduzir significativamente a quantidade de cenários de testes a serem elaborados.
                Exemplo: Através desta, 360 testes poderão ser reduzidos e cobertos para 20, 25, um pouco mais, ou até menos, dependerá dos dados, e geralmente utiliza-se ferramentas para a realização destas combinações.

        3.6 - Diagrama de Causa e Efeito:

            Também conhecido como diagrama de Ishikawa, técnica utilizada em brainstorms, que representa a relação entre o "efeito" e todas as possíveis "causas" que poderão estar contribuindo para este efeito.
            Visualização "Espinha de Peixe".
            Um cenário de teste, poderá ter outros sub teste, consequentemente, as técnicas anteriores mencionadas poderão ser agregada nesta técnica.
*/