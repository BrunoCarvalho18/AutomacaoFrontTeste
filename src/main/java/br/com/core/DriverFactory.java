package br.com.core;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

//Classe para inicializar o Driver e Encerrar o Driver
public class DriverFactory {

	private static WebDriver driver;

	private DriverFactory() {
	}

	public static WebDriver getDriver() {
		System.setProperty("webdriver.chrome.driver",
	    System.getProperty("user.dir") + "/src/main/resources/webdriver/chromedriver.exe");
		if (driver == null) {
			driver = new ChromeDriver();
			driver.manage().window().maximize();
		}
		return driver;
	}

}
