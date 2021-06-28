import { browser, by, element, ElementFinder, ExpectedConditions, Key } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { SeleniumEasyPage } from "../pageObjects/seleniumEasy.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    const seleniumEasyPage = new SeleniumEasyPage;

    //Default cucumber timeout
    this.setDefaultTimeout(600 * 1000);

    //Loading browser hacks
    let browserHacks = new BrowserHacks;

    //Hooks
    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        //ACTIONS AFTER EXECUTING EACH TEST, I.E. CLEANUP
        await browserHacks.ClearBrowserData();
    });

  //Checkbox  

    this.Given(/^I am on Checkbox Demo Page$/, async () => {
            await seleniumEasyPage.goTocheckboxSeleniumEasy();
           });
             this.Then(/^I click to "Click on this check box"$/, async () => {
      await seleniumEasyPage.checkboxPick();
    });
this. Then (/^the checkbox is selected$/, async () => {
    await seleniumEasyPage.checkboxChoice();

});


//Radiobuttons 

 this.Given(/^I am on Radio Button Demo Page$/, async () => {
      await seleniumEasyPage.goToradiobuttonSeleniumEasy();
 });

    this.Then(/^I click 'Female' RadioButton$/, async () => {
       await seleniumEasyPage.radioPick1();
    });
    this.Then(/^I click '15 to 50' RadioButton$/, async () => {
        await seleniumEasyPage.radioPick2();
     });

  this.Then(/^I click to 'Get values' button$/, async () => {
       await seleniumEasyPage.buttonConfirm();

    });
    this.Then(/^The Radiobuttons are selected$/, async () => {
        await seleniumEasyPage.radioSelect();
 
     });

//DDL


this.Given(/^I am on DDL Demo Page$/, async () => {
    await seleniumEasyPage.goToddlSeleniumEasy();
});

  this.Then(/^I click to "Select a day" DDL$/, async () => {
     await seleniumEasyPage.ddlExpand();
  });
  this.Then(/^I click "Sunday" in expanded DDL$/, async () => {
      await seleniumEasyPage.ddlPick();
   });

  this.Then(/^the Sunday is selected in a DDL$/, async () => {
      await seleniumEasyPage.ddlPickconfirm();
   });

//Input

//this.Given(/^I am on Input Demo Page$/, async () => {
 //   await seleniumEasyPage.goToinputSeleniumEasy();
//});

 // this.Then(/^I input a request "Зубочистка"$/, async () => {
 //    await seleniumEasyPage.reqinput();
 // });
 // this.Then(/^I click to a "Show message" buttonL$/, async () => {
 //     await seleniumEasyPage.buttonclick();
 //  });

//  this.Then(/^the "Зубочистка" result is displayed$/, async () => {
//      await seleniumEasyPage.messageDisplay();
//   });


}

