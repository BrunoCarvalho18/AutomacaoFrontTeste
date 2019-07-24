# language:pt
# encoding: utf-8

@geral
Funcionalidade: Pesquisa de diretores e filmes

  Esquema do Cenario: Pesquisar diretor e filme no google
    Dado que informo o diretor "<diretor>" e o ano de nascimento "<nascimento>"
    E informo o filme "<filme>" e ano de lançamento "<ano>"
    Quando clico em pesquisar
    Então recebo o total de resultados para a pesquisa
    
	Exemplos: 
      | diretor       | nascimento             | filme                | ano  |
      | James Cameron | 16 de agosto de 1954   | Avatar               | 2009 |
      | James Cameron | 16 de agosto de 1954   | Titanic              | 1997 |
      | Stan Lee      | 28 de dezembro de 1922 | Vingadores: Ultimato | 2019 |
      | Stan Lee      | 28 de dezembro de 1922 | Homem de Ferro 1     | 2002 |