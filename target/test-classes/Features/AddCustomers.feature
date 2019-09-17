@Smoke
Feature: AddCustomers flow

Scenario:

Given User should be in the Telecom home page.
And User click on Addtariff plan button
When user enters the details in the particular fields
|5000|500|3000|300|1|1|1|
|2000|400|4000|200|2|2|2|
|6000|300|5000|250|3|3|3|
|3000|600|1000|350|4|4|4|
|4000|200|2000|400|5|5|5|

And user clicks on submit button
Then User should be displayed successfully added tariff plans



Scenario:

Given User should be in the Telecom home page.
And User click on Addtariff plan button
When user enters the detail in the particular field
|MonRen|LM|IM|SMS|MC|IC|SC|
|2000|400|4000|200|2|2|2|
|6000|300|5000|250|3|3|3|
|3000|600|1000|350|4|4|4|
|4000|200|2000|400|5|5|5|

And user clicks on submit button
Then User should be displayed successfully added tariff plans

Scenario Outline:

Given User should be in the Telecom home pages.
And User clicks on Addtariff plan button
When user enters the details in the particular fields."<MonRen>","<LM>","<IM>","<SMS>","<MC>","<IC>","<SC>"
And user clicks on the submit button
Then User should be displayed successfully added tariff plan

Examples:

	|MonRen|LM|IM|SMS|MC|IC|SC|
	|2000|400|4000|200|2|2|2|
	|6000|300|5000|250|3|3|3|
	|3000|600|1000|350|4|4|4|
	|4000|200|2000|400|5|5|5|

