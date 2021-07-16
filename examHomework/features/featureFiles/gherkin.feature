@smoke

Feature: Final Homework

Scenario: Checkbox 
Given I am on Checkbox Demo Page
When I click to "Click on this check box"
Then the checkbox is selected

Scenario: Radio Button 
Given I am on Radio Button Demo Page
When I click 'Female' RadioButton 
And I click '15 to 50' RadioButton
And I click to 'Get values' button
Then The Radiobuttons are selected

Scenario: DDL 
Given I am on DDL Demo Page
When I click to "Select a day" DDL
And I click "Sunday" in expanded DDL
Then the Sunday is selected in a DDL

Scenario: Input 
Given I am on Input Demo Page
When I type something into an input field
And click to "Show Message button"
Then there is a message is displayed

Scenario: Form submit 
Given I an on Submit Form Demo Page
When I type my name into the "Name" field
And then I click to "Submit" button
Then I see the loading icon animation

Scenario: List Box 
Given I am on List Box Demo Page
When I press to "Select All" button
Then all list boxes are selected

Scenario: File Download 
Given I am on File Download Demo Page
When I input "Example" into an input
And Click to Generate button
Then the download button is appeared

Scenario: Numeric Calculator 
Given I am on input Demo Page
When I input "3" into an input1
And I input "6" into an input2
And I click to "Get Total" button
Then the total sum is displayed

Scenario: Multiple Checkbox 
Given I am on checkbox Demo Page
When I click to "Select All" button
Then all checkboxes are selected

Scenario: Keyword Filter Check 
Given I am on Filter Check Demo Page
When I typing a "Tree"
Then there is a matching result is shown

Scenario: Loading Bar 
Given I am on Loading Bar Demo Page
When I click to "Start Download" button
Then the progress bar is displayed

Scenario: Modal window 
Given I am on Modal Demo Page
When I click to "Launch Modal" button
And the modal is opened
Then I click to save the changes

Scenario: Alert Message
Given I am on Sample Messages Page
When I click to Alert Message
And the Message is visible 
Then I click to close the Alert Message

Scenario: Search & Select
Given I am on Search & Select Demo Page
When I insert "In"
And I pick India in the matched result
Then the choice is displayed into the DDL

Scenario: Date Picker
Given I am on Date Picker Demo Page
When I click to "Select Date"
And I click to "Today" button
Then chosen date is displayed

Scenario: Copy File
Given I am on Data table Download Page
When I type "Airi" into unput
And press "Copy" button
Then the success modal appears

Scenario: Searching through Data table
Given I am on Data table Demo Page
When I typing request "Land" into a search input
Then there is a match is displayed

Scenario: Filtering Data table
Given I am on Data table Filtering Page
When I click to "sorting filters" button
And I typing 'Jacobs' into a surname field
Then there is a matching data table sorting is displayed

Scenario: PDF File Download
Given I am on Data Page
When I input "Chief" into a search field
Then I click to PDF icon for file downloading

Scenario: IFrame
Given I am on IFrame Sample Page
When I Switch to the Frame
Then I see the heading "Nested Page Example"