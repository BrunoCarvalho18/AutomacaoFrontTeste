package br.com.pages;

import org.openqa.selenium.By;
import br.com.core.BasePage;

//Page para reutilização da Home Page
public class GoogleHomePage extends BasePage {

	public void setCampoPesquisa(String pesquisar) {
		super.write(By.name("q"), pesquisar);
	}

	public void enviar() {
		super.submitField(By.name("q"));
	}

}
