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
this.Given(/^I am on Input Demo Page$/, async () => {
    await seleniumEasyPage.goToinputSeleniumEasy();
});

  this.Then(/^I type something into an input field$/, async () => {
     await seleniumEasyPage.typeIntoInput();
  });
  this.Then(/^click to "Show Message button"$/, async () => {
      await seleniumEasyPage.buttonInputClick();
   });

  this.Then(/^there is a message is displayed$/, async () => {
      await seleniumEasyPage.buttonInputShow();
   });

   //Submit Form
this.Given(/^I an on Submit Form Demo Page$/, async () => {
    await seleniumEasyPage.goTosubmitFormSeleniumEasy();
});

  this.Then(/^I type my name into the "Name" field$/, async () => {
     await seleniumEasyPage.nameFieldTyping();
  });
  this.Then(/^then I click to "Submit" button$/, async () => {
      await seleniumEasyPage.submitButtonPress();
   });

  this.Then(/^I see the loading icon animation$/, async () => {
      await seleniumEasyPage.loadingIconSpin();
   });

   
   //List Box Easy Demo
this.Given(/^I am on List Box Demo Page$/, async () => {
    await seleniumEasyPage.goTolistboxeSeleniumEasy();
});

  this.Then(/^I press to "Select All" button$/, async () => {
     await seleniumEasyPage.buttonSelectAllElement();
  });


  this.Then(/^all list boxes are selected$/, async () => {
      await seleniumEasyPage.selectedBoxesAnimation();
   });

   //File Download
this.Given(/^I am on File Download Demo Page$/, async () => {
    await seleniumEasyPage.goTofiledownloadSeleniumEasy();
});

  this.Then(/^I input "Example" into an input$/, async () => {
     await seleniumEasyPage.exampleInputForDownload();
  });
  this.Then(/^Click to Generate button$/, async () => {
      await seleniumEasyPage.generateButtonPress();
   });

   this.Then(/^the download button is appeared$/, async () => {
    await seleniumEasyPage.downloadButtonNew();
 });
 //Numeric Calculator
 this.Given(/^I am on input Demo Page$/, async () => {
    await seleniumEasyPage.goToNumericInputSeleniumEasy();
});

  this.Then(/^I input "3" into an input1$/, async () => {
     await seleniumEasyPage.firstNumericInput();
  });
  this.Then(/^I input "6" into an input2$/, async () => {
      await seleniumEasyPage.secondNumericInput();
   });

   this.Then(/^I click to "Get Total" button$/, async () => {
    await seleniumEasyPage.getTotalButtonPress();
 });

   this.Then(/^the total sum is displayed$/, async () => {
    await seleniumEasyPage.totalSumDisplay();
 });

 //Multiple checkboxes
 this.Given(/^I am on checkbox Demo Page$/, async () => {
   await seleniumEasyPage.goToMultipleCheckboxPage();
});

 this.Then(/^I click to "Select All" button$/, async () => {
    await seleniumEasyPage.selectallCheckButton();
 });

  this.Then(/^all checkboxes are selected$/, async () => {
   await seleniumEasyPage.multipleCheckboxSelect();
});

//Keyword Filter Check
this.Given(/^I am on Filter Check Demo Page$/, async () => {
   await seleniumEasyPage.goToFilterList();
});

 this.Then(/^I type into an input "Tree"$/, async () => {
    await seleniumEasyPage.filterTypeCheck();
 });

  this.Then(/^there is a matching result is shown$/, async () => {
   await seleniumEasyPage.matchingFilterResults();
});

//Loading Bar
this.Given(/^I am on Loading Bar Demo Page$/, async () => {
   await seleniumEasyPage.goToloadingbarSeleniumEasy();
});

 this.Then(/^I click to "Start Download" button$/, async () => {
    await seleniumEasyPage.startDownloadClick();
 });

  this.Then(/^the progress bar is displayed$/, async () => {
   await seleniumEasyPage.progressBarDisplay();
});

//Modal Window
this.Given(/^I am on Modal Demo Page$/, async () => {
   await seleniumEasyPage.goTomodalwindowSeleniumEasy();
});

 this.Then(/^I click to "Launch Modal" button$/, async () => {
    await seleniumEasyPage.launchModalClick();
 });

  this.Then(/^the modal is opened$/, async () => {
   await seleniumEasyPage.modalWindowDisplay();
});

this.Then(/^I click to save the changes$/, async () => {
   await seleniumEasyPage.saveChangesClick();
});

//Alert Message
this.Given(/^I am on Sample Messages Page$/, async () => {
   await seleniumEasyPage.goToalertmessageSeleniumEasy();
});

 this.Then(/^I click to Alert Message$/, async () => {
    await seleniumEasyPage.dangerMessageClick();
 });

  this.Then(/^the Message is visible$/, async () => {
   await seleniumEasyPage.dangerMessageDisplay();
});

this.Then(/^I click to close the Alert Message$/, async () => {
   await seleniumEasyPage.closeButtonClick();
});

//Search & Select
this.Given(/^I am on Search & Select Demo Page$/, async () => {
   await seleniumEasyPage.goTosearchselectSeleniumEasy();
});

 this.Then(/^I type "In" into the input$/, async () => {
    await seleniumEasyPage.ddlInputTyping();
 });

  this.Then(/^I pick India in the matched result$/, async () => {
   await seleniumEasyPage.ddlValuePick();
});

this.Then(/^the choice is displayed into the DDL$/, async () => {
   await seleniumEasyPage.ddlchoicedisplay();
});

//Date Picker
this.Given(/^I am on Date Picker Demo Page$/, async () => {
   await seleniumEasyPage.goTodatepickerSeleniumEasy();
});

 this.Then(/^I click to "Select Date"$/, async () => {
    await seleniumEasyPage.selectDatePick();
 });

  this.Then(/^I click to "Today" button$/, async () => {
   await seleniumEasyPage.todayButtonClick();
});

this.Then(/^chosen date is displayed$/, async () => {
   await seleniumEasyPage.todayDateDisplay();
});



}