$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PesquisarFilmesGoogle.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language:pt"
    },
    {
      "line": 2,
      "value": "# encoding: utf-8"
    }
  ],
  "line": 5,
  "name": "Pesquisa de diretores e filmes",
  "description": "",
  "id": "pesquisa-de-diretores-e-filmes",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 4,
      "name": "@geral"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Pesquisar diretor e filme no google",
  "description": "",
  "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretor-e-filme-no-google",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 8,
  "name": "que informo o diretor \"\u003cdiretor\u003e\" e o ano de nascimento \"\u003cnascimento\u003e\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "informo o filme \"\u003cfilme\u003e\" e ano de lançamento \"\u003cano\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "clico em pesquisar",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "recebo o total de resultados para a pesquisa",
  "keyword": "Então "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretor-e-filme-no-google;",
  "rows": [
    {
      "cells": [
        "diretor",
        "nascimento",
        "filme",
        "ano"
      ],
      "line": 14,
      "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretor-e-filme-no-google;;1"
    },
    {
      "cells": [
        "James Cameron",
        "16 de agosto de 1954",
        "Avatar",
        "2009"
      ],
      "line": 15,
      "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretor-e-filme-no-google;;2"
    },
    {
      "cells": [
        "James Cameron",
        "16 de agosto de 1954",
        "Titanic",
        "1997"
      ],
      "line": 16,
      "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretor-e-filme-no-google;;3"
    },
    {
      "cells": [
        "Stan Lee",
        "28 de dezembro de 1922",
        "Vingadores: Ultimato",
        "2019"
      ],
      "line": 17,
      "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretor-e-filme-no-google;;4"
    },
    {
      "cells": [
        "Stan Lee",
        "28 de dezembro de 1922",
        "Homem de Ferro 1",
        "2002"
      ],
      "line": 18,
      "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretor-e-filme-no-google;;5"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 15,
  "name": "Pesquisar diretor e filme no google",
  "description": "",
  "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretor-e-filme-no-google;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@geral"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "que informo o diretor \"James Cameron\" e o ano de nascimento \"16 de agosto de 1954\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "informo o filme \"Avatar\" e ano de lançamento \"2009\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "clico em pesquisar",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "recebo o total de resultados para a pesquisa",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "James Cameron",
      "offset": 23
    },
    {
      "val": "16 de agosto de 1954",
      "offset": 61
    }
  ],
  "location": "PesquisaFilmesGoogleSteps.que_informo_o_diretor_e_o_ano_de_nascimento(String,String)"
});
formatter.result({
  "duration": 6515123746,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Avatar",
      "offset": 17
    },
    {
      "val": "2009",
      "offset": 46
    }
  ],
  "location": "PesquisaFilmesGoogleSteps.informo_o_filme_e_ano_de_lançamento(String,String)"
});
formatter.result({
  "duration": 32774143,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaFilmesGoogleSteps.clico_em_pesquisar()"
});
formatter.result({
  "duration": 1245021453,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaFilmesGoogleSteps.recebo_o_total_de_resultados_para_a_pesquisa()"
});
formatter.result({
  "duration": 43528854,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Pesquisar diretor e filme no google",
  "description": "",
  "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretor-e-filme-no-google;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@geral"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "que informo o diretor \"James Cameron\" e o ano de nascimento \"16 de agosto de 1954\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "informo o filme \"Titanic\" e ano de lançamento \"1997\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "clico em pesquisar",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "recebo o total de resultados para a pesquisa",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "James Cameron",
      "offset": 23
    },
    {
      "val": "16 de agosto de 1954",
      "offset": 61
    }
  ],
  "location": "PesquisaFilmesGoogleSteps.que_informo_o_diretor_e_o_ano_de_nascimento(String,String)"
});
formatter.result({
  "duration": 440344788,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Titanic",
      "offset": 17
    },
    {
      "val": "1997",
      "offset": 47
    }
  ],
  "location": "PesquisaFilmesGoogleSteps.informo_o_filme_e_ano_de_lançamento(String,String)"
});
formatter.result({
  "duration": 38923709,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaFilmesGoogleSteps.clico_em_pesquisar()"
});
formatter.result({
  "duration": 1630908802,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaFilmesGoogleSteps.recebo_o_total_de_resultados_para_a_pesquisa()"
});
formatter.result({
  "duration": 39904426,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Pesquisar diretor e filme no google",
  "description": "",
  "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretor-e-filme-no-google;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@geral"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "que informo o diretor \"Stan Lee\" e o ano de nascimento \"28 de dezembro de 1922\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "informo o filme \"Vingadores: Ultimato\" e ano de lançamento \"2019\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "clico em pesquisar",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "recebo o total de resultados para a pesquisa",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Stan Lee",
      "offset": 23
    },
    {
      "val": "28 de dezembro de 1922",
      "offset": 56
    }
  ],
  "location": "PesquisaFilmesGoogleSteps.que_informo_o_diretor_e_o_ano_de_nascimento(String,String)"
});
formatter.result({
  "duration": 348921202,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vingadores: Ultimato",
      "offset": 17
    },
    {
      "val": "2019",
      "offset": 60
    }
  ],
  "location": "PesquisaFilmesGoogleSteps.informo_o_filme_e_ano_de_lançamento(String,String)"
});
formatter.result({
  "duration": 71356984,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaFilmesGoogleSteps.clico_em_pesquisar()"
});
formatter.result({
  "duration": 902112500,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaFilmesGoogleSteps.recebo_o_total_de_resultados_para_a_pesquisa()"
});
formatter.result({
  "duration": 82967887,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Pesquisar diretor e filme no google",
  "description": "",
  "id": "pesquisa-de-diretores-e-filmes;pesquisar-diretor-e-filme-no-google;;5",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@geral"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "que informo o diretor \"Stan Lee\" e o ano de nascimento \"28 de dezembro de 1922\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "informo o filme \"Homem de Ferro 1\" e ano de lançamento \"2002\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "clico em pesquisar",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "recebo o total de resultados para a pesquisa",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Stan Lee",
      "offset": 23
    },
    {
      "val": "28 de dezembro de 1922",
      "offset": 56
    }
  ],
  "location": "PesquisaFilmesGoogleSteps.que_informo_o_diretor_e_o_ano_de_nascimento(String,String)"
});
formatter.result({
  "duration": 289098695,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Homem de Ferro 1",
      "offset": 17
    },
    {
      "val": "2002",
      "offset": 56
    }
  ],
  "location": "PesquisaFilmesGoogleSteps.informo_o_filme_e_ano_de_lançamento(String,String)"
});
formatter.result({
  "duration": 59606867,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaFilmesGoogleSteps.clico_em_pesquisar()"
});
formatter.result({
  "duration": 1766515360,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaFilmesGoogleSteps.recebo_o_total_de_resultados_para_a_pesquisa()"
});
formatter.result({
  "duration": 41773078,
  "status": "passed"
});
});