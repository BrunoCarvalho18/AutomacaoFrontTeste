package br.com.steps;

import static br.com.core.DriverFactory.getDriver;
import br.com.core.Diretor;
import br.com.core.Filme;
import br.com.pages.GoogleHomePage;
import br.com.pages.GooglePesquisaPage;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

//Classe definindo os passos do Cucumber
public class PesquisaFilmesGoogleSteps {
	String url = "https://www.google.com/";
	GoogleHomePage googleHome = new GoogleHomePage();
	GooglePesquisaPage googlePesquisa = new GooglePesquisaPage();
	Diretor diretor = new Diretor();
	Filme filme = new Filme();

	@Dado("^que informo o diretor \"([^\"]*)\" e o ano de nascimento \"([^\"]*)\"$")
	public void que_informo_o_diretor_e_o_ano_de_nascimento(String nome, String nascimento) throws Throwable {
		getDriver().get(url);
		googleHome.setCampoPesquisa(nome + " ");
	}

	@E("^informo o filme \"([^\"]*)\" e ano de lançamento \"([^\"]*)\"$")
	public void informo_o_filme_e_ano_de_lançamento(String nome, String anoDeLancamento) throws Throwable {
		googleHome.setCampoPesquisa(nome);
	}

	@Quando("^clico em pesquisar$")
	public void clico_em_pesquisar() throws Throwable {
		googleHome.enviar();
	}

	@Então("^recebo o total de resultados para a pesquisa$")
	public void recebo_o_total_de_resultados_para_a_pesquisa() throws Throwable {
		System.out.println(googlePesquisa.getResultadoAproximadamente().toString());
	}
	

}
