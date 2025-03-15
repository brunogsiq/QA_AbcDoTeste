/*
    1 - Fundamentos do teste

        1.1 - Técnicas de Teste

            1.1.1 - Regra 10 de Glenford Myers
                
                -Considerado o Papa do Testes de software, após 1979 ter escrito um livro sobre o assunto.
                -20 de fevereiro é o dia do Teste de Software, pois foi o dia de lançamento.
                -Conceito da regra 10 é, quanto antes um defeito é descoberto, mais barato ficará, ou seja, será multiplicado por 10 de acordo com a fase.
                -Fases: Análise > Unidade > Integração > Sistema > Produção

            1.1.2 - Modelo V

                -Dividido em duas fases.

                -Verificação: 
                    -Quando a aplicação ainda não é executada.
                        
                        -Requisitos: 
                            -O que é desejado.
                        
                        -Análise: 
                            -Transformação a ideia em sistema.
                        
                        -Arquitetura: 
                            -Poderá ser verificado no swagger o desempenho da API antes mesmo de ser desenvolvida.
                            -Exemplo, na documentação após um post ser enviado, deverá ter o status 201, porém, não é o status apresentado.
                        
                        -Codificação:
                            -Técnica de codeReview, ou seja, validar nomes de variáveis, verificar se o padrão cleanCode está sendo seguido, 
                                tudo na etapa de desenvolvimento

                -Validação:
                    -
                        -Unidade:
                            -Unidade, componente ou unitários, são nomes que poderão ser dadas a nomenclatura.
                            -Testar uma classe, que é considerada a menor parte do sistema, e não podemos considerar o metódo, pois este dependerá
                                da classe para realizar sua função no código.
                        -Integração:
                            -Teste de interface, de duas unidades, comunicação entre dois componentes.
                        -Sistema:
                            -O sistema já está pronto, e poderão ser feitos testes funcionais e não funcionais.
                            -Simulação do usuário final.
                        -Aceite:
                            -Cliente que realizará o teste, explorar, verificar se tudo está funcionando como deveria.

    2 - Estratégias de Testes
        -É o caminho que será percorrido ou deverá ser realizado, não é o "Como fazer", mas sim "O que fazer"
        
        2.1 - Quadrante de testes

            Q1: Automatizado
                Testes Unitários e de componentes

            Q2: Automatizado e manual
                Testes funcionais

            Q3:Manual
                Testes Exploratórios, Usabilidade, Aceitação, Alpha e Beta

            Q4: Ferramentas
                Testes de performance, Carga, Segurança e Ilidade

            Q1+Q2: Suporta o time
            Q1+Q4: Foco em tecnologia
            Q2+Q3: Foco em negócio
            Q3+Q4: Critica o produto

        2.2 - Pirâmidade de testes

              /\ Topo:

             /  \ Meio:

            /____\ Base:
*/ 