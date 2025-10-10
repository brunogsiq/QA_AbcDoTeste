1️⃣ Criando a Calculadora
Vamos começar com uma classe simples:

// Arquivo: Calculadora.cs
public class Calculadora
{
    public int Somar(int a, int b) => a + b;
    public int Subtrair(int a, int b) => a - b;
    public int Multiplicar(int a, int b) => a * b;
    public double Dividir(int a, int b)
    {
        if (b == 0)
            throw new DivideByZeroException("Não é possível dividir por zero.");
        return (double)a / b;
    }
}

✅ Explicação:

    Criamos um método para cada operação matemática básica.

    No método Dividir, tratamos a divisão por zero, lançando uma exceção.

2️⃣ Criando os Testes Unitários
Agora, vamos criar um projeto de testes para validar se a Calculadora funciona corretamente.

Criando um Projeto de Testes
    Se ainda não tiver um projeto de testes, crie um usando o xUnit:

    dotnet new xunit -n Calculadora.Tests
    cd Calculadora.Tests
    dotnet add package xunit
    dotnet add reference ../Calculadora/Calculadora.csproj
    Agora, crie um novo arquivo CalculadoraTests.cs dentro do projeto de testes:

    // Arquivo: CalculadoraTests.cs
    using Xunit;
    using FluentAssertions;
    using System;

    public class CalculadoraTests
    {
        private readonly Calculadora _calculadora;

        public CalculadoraTests()
        {
            _calculadora = new Calculadora();
        }

        [Fact]
        public void Somar_DeveRetornarSomaCorreta()
        {
            var resultado = _calculadora.Somar(2, 3);
            resultado.Should().Be(5);
        }

        [Fact]
        public void Subtrair_DeveRetornarSubtracaoCorreta()
        {
            var resultado = _calculadora.Subtrair(10, 4);
            resultado.Should().Be(6);
        }

        [Fact]
        public void Multiplicar_DeveRetornarMultiplicacaoCorreta()
        {
            var resultado = _calculadora.Multiplicar(3, 5);
            resultado.Should().Be(15);
        }

        [Fact]
        public void Dividir_DeveRetornarDivisaoCorreta()
        {
            var resultado = _calculadora.Dividir(10, 2);
            resultado.Should().Be(5);
        }

        [Fact]
        public void Dividir_DeveLancarExcecao_QuandoDividirPorZero()
        {
            Action acao = () => _calculadora.Dividir(10, 0);
            acao.Should().Throw<DivideByZeroException>()
                .WithMessage("Não é possível dividir por zero.");
        }
    }

✅ Explicação:

    Criamos uma instância da Calculadora para testar.

    Cada método de teste usa o atributo [Fact], que indica que é um teste unitário.

    Utilizamos a biblioteca FluentAssertions para tornar os testes mais legíveis (resultado.Should().Be(5);).

    Testamos casos normais e casos de erro, como divisão por zero.

3️⃣ Rodando os Testes

Agora, execute os testes no terminal dentro do diretório do projeto de testes:

    dotnet test
    Se tudo estiver correto, você verá um resultado como:

    Test Run Successful.
    Total tests: 5
    Passed: 5
    Failed: 0
    Conclusão
    Agora você sabe: ✔ Como criar uma classe Calculadora com métodos básicos.
    ✔ Como escrever testes unitários com xUnit e FluentAssertions.
    ✔ Como testar exceções e validar erros esperados.
    ✔ Como rodar os testes e garantir que o código funciona corretamente.