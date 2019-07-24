package br.com.runner;


import org.junit.AfterClass;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import static br.com.core.DriverFactory.getDriver;

@RunWith(Cucumber.class)
@CucumberOptions(glue = { "br.com.steps" }, features = {
		"src/main/java/br/com/features/" }, monochrome = true, plugin = { "pretty",
				"html:Reports/cucumber" }, tags = { "~@ignore", "@geral" })

//Runner Para Rodar os Testes
public class Runner {
	
	@AfterClass
	public static void encerraDriver() {
		getDriver().close();
	}

}
