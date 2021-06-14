package br.com.pages;

import br.com.core.BasePage;
// Classe para pegar os Resultados da Consulta
public class GooglePesquisaPage extends BasePage {
	public String getResultadoAproximadamente() {
		return super.getTextField("result-stats");
	}

}
