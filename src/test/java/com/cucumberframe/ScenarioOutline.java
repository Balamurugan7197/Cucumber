package com.cucumberframe;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ScenarioOutline {
	
	
	WebDriver driver;
	

@Given("User should be in the Telecom home pages.")
public void user_should_be_in_the_Telecom_home_pages() {
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\Bala\\eclipse-workspace\\CucumberDay2\\driver\\chromedriver.exe");
	driver = new ChromeDriver();  	
	driver.get("http://demo.guru99.com/telecom/");
}

@Given("User clicks on Addtariff plan button")
public void user_clicks_on_Addtariff_plan_button() {
	driver.findElement(By.xpath("//a[text()='Add Tariff Plan']")).click();
}

@When("user enters the details in the particular fields.{string},{string},{string},{string},{string},{string},{string}")
public void user_enters_the_details_in_the_particular_fields(String MonRen, String LM, String IM, String SMS, String MC, String IC, String LC) {
	

	driver.findElement(By.id("rental1")).sendKeys(MonRen);
	driver.findElement(By.id("local_minutes")).sendKeys(LM);
	driver.findElement(By.id("inter_minutes")).sendKeys(IM);
	driver.findElement(By.id("sms_pack")).sendKeys(SMS);
	driver.findElement(By.id("minutes_charges")).sendKeys(MC);
	driver.findElement(By.id("inter_charges")).sendKeys(IC);
	driver.findElement(By.id("sms_charges")).sendKeys(LC);
    
}

@When("user clicks on the submit button")
public void user_clicks_on_the_submit_button() {
	driver.findElement(By.xpath("//input[@type='submit']")).click();

}

@Then("User should be displayed successfully added tariff plan")
public void user_should_be_displayed_successfully_added_tariff_plan() {
   
WebElement text = driver.findElement(By.xpath("//h2[@style='text-align: center;font-weight: 700;font-size:28px;']"));
	
	Assert.assertTrue(text.isDisplayed());
}

}
