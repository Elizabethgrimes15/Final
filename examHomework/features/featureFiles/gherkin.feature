@smoke

Feature: Final Homework

Scenario: Checkbox Selenium Easy Demo
Given I am on Checkbox Demo Page
When I click to "Click on this check box"
Then the checkbox is selected

Scenario: Radio Button Selenium Easy Demo
Given I am on Radio Button Demo Page
When I click 'Female' RadioButton 
And I click '15 to 50' RadioButton
And I click to 'Get values' button
Then The Radiobuttons are selected


Scenario: DDL Selenium Easy Demo
Given I am on DDL Demo Page
When I click to "Select a day" DDL
And I click "Sunday" in expanded DDL
Then the Sunday is selected in a DDL

//Scenario: Input Selenium Easy Demo
//Given I am on Input Demo Page
//When I input a request "Зубочистка" 
//And I click to a "Show message" button
//Then the "Зубочистка" result is displayed