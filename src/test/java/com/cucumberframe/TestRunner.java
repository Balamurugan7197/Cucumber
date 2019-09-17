package com.cucumberframe;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


	
	@RunWith(Cucumber.class)
	@CucumberOptions(features="src\\test\\resources\\Features",glue="com.cucumberframe",plugin="html:target",tags= {"@Smoke"})
	
	
	
	
	
	public class TestRunner {

	
	}
