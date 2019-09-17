package com.cucumberframe;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class Sampleframe {
	
	WebDriver driver;
	
	

@Given("User should be in the Telecom home page.")
public void user_should_be_in_the_Telecom_home_page() {
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\Bala\\eclipse-workspace\\CucumberDay2\\driver\\chromedriver.exe");
	driver = new ChromeDriver();  	
	driver.get("http://demo.guru99.com/telecom/");
}

@Given("User click on Addtariff plan button")
public void user_click_on_Addtariff_plan_button() {
driver.findElement(By.xpath("//a[text()='Add Tariff Plan']")).click();

}

@When("user enters the details in the particular fields")
public void user_enters_the_details_in_the_particular_fields(DataTable twoList) {
	  List<List<String>> datas = twoList.asLists(String.class);
	
	driver.findElement(By.id("rental1")).sendKeys(datas.get(0).get(0));
	driver.findElement(By.id("local_minutes")).sendKeys(datas.get(1).get(1));
	driver.findElement(By.id("inter_minutes")).sendKeys(datas.get(2).get(2));
	driver.findElement(By.id("sms_pack")).sendKeys(datas.get(3).get(3));
	driver.findElement(By.id("minutes_charges")).sendKeys(datas.get(4).get(4));
	driver.findElement(By.id("inter_charges")).sendKeys(datas.get(3).get(3));
	driver.findElement(By.id("sms_charges")).sendKeys(datas.get(4).get(4));
	

    
}


@When("user enters the detail in the particular field")
public void user_enters_the_detail_in_the_particular_field(DataTable twoMap) {
	   
	List<Map<String, String>> datas = twoMap.asMaps(String.class,String.class);
	
	driver.findElement(By.id("rental1")).sendKeys(datas.get(0).get("MonRen"));
	driver.findElement(By.id("local_minutes")).sendKeys(datas.get(0).get("LM"));
	driver.findElement(By.id("inter_minutes")).sendKeys(datas.get(0).get("IM"));
	driver.findElement(By.id("sms_pack")).sendKeys(datas.get(0).get("SMS"));
	driver.findElement(By.id("minutes_charges")).sendKeys(datas.get(0).get("MC"));
	driver.findElement(By.id("inter_charges")).sendKeys(datas.get(0).get("IC"));
	driver.findElement(By.id("sms_charges")).sendKeys(datas.get(0).get("SC"));
	
}

@When("user clicks on submit button")
public void user_clicks_on_submit_button() {
	driver.findElement(By.xpath("//input[@type='submit']")).click();
    
}

@Then("User should be displayed successfully added tariff plans")
public void user_should_be_displayed_successfully_added_tariff_plans() {
	WebElement text = driver.findElement(By.xpath("//h2[@style='text-align: center;font-weight: 700;font-size:28px;']"));
	
	Assert.assertTrue(text.isDisplayed());
 
}



}