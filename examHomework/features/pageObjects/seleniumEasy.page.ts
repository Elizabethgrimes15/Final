import { seleniumEasyRepository } from "../objectRepository/seleniumEasy.obj";
import { BrowserHacks } from "../../support/browserHacks";
import { browser, by, ExpectedConditions } from "protractor";
import { expect } from "chai";


const defaultTimeout = browser.params.defaultTimeout;

export class SeleniumEasyPage {

    seleniumEasyRepo: seleniumEasyRepository;

    constructor () {
        this.seleniumEasyRepo = new seleniumEasyRepository;
    }

    public async clearBrowserData() {
        let browserHacks = new BrowserHacks;
        browserHacks.ClearBrowserData();
    }

    //Checkbox
    public async goTocheckboxSeleniumEasy() {
        await browser.navigate().to(browser.params.checkboxSeleniumEasy);
    }
    public async checkboxPick(){
        await browser.wait(ExpectedConditions.visibilityOf(this.seleniumEasyRepo.checkboxdemo), defaultTimeout, "Time out");
        await this.seleniumEasyRepo.checkboxdemo.click();
    }
    public async checkboxChoice(){
        expect( await this.seleniumEasyRepo.checkboxdemo.isSelected()).equal(true);
    }

    //Radio Button 

    public async goToradiobuttonSeleniumEasy() {
        await browser.navigate().to(browser.params.radiobuttonSeleniumEasy);
    }

    public async radioPick1() {
        await browser.wait(ExpectedConditions.visibilityOf(this.seleniumEasyRepo.radiobuttonsex), defaultTimeout, "Time out");
        await this.seleniumEasyRepo.radiobuttonsex.click();
    
    }
    public async radioPick2() {
        await browser.wait(ExpectedConditions.visibilityOf(this.seleniumEasyRepo.radiobuttonage), defaultTimeout, "Time out");
        await this.seleniumEasyRepo.radiobuttonage.click();
    
    }
        public async buttonConfirm() {
        await browser.wait(ExpectedConditions.visibilityOf(this.seleniumEasyRepo.confirmbutton), defaultTimeout, "Time out");
        await this.seleniumEasyRepo.confirmbutton.click();
    }
    
    public async radioSelect(){
        expect( await this.seleniumEasyRepo.radiobuttonsex.isSelected()).equal(true);
        expect( await this.seleniumEasyRepo.radiobuttonage.isSelected()).equal(true);
    }
    //DDL

    public async goToddlSeleniumEasy() {
        await browser.navigate().to(browser.params.ddlSeleniumEasy);
    }
    public async ddlExpand() {
        await browser.wait(ExpectedConditions.visibilityOf(this.seleniumEasyRepo.ddldemo), defaultTimeout, "Time out");
        await this.seleniumEasyRepo.ddldemo.click();
    }
    public async ddlPick() {
    await browser.wait(ExpectedConditions.visibilityOf(this.seleniumEasyRepo.sundaypick), defaultTimeout, "Time out");    
    await this.seleniumEasyRepo.sundaypick.click();
    }

    public async ddlPickconfirm(){
        expect( await this.seleniumEasyRepo.sundaypick.isSelected()).equal(true);
    }

    //Input
    public async goToinputSeleniumEasy() {
    await browser.navigate().to(browser.params.inputSeleniumEasy);
    }
    public async typeIntoInput() {
        await browser.wait(ExpectedConditions.visibilityOf(this.seleniumEasyRepo.inputdemo), defaultTimeout, "Time out");
        await browser.actions().mouseMove(this.seleniumEasyRepo.inputdemo).click().sendKeys('Test').perform()
    }

    public async buttonInputClick() {
        await browser.wait(ExpectedConditions.visibilityOf(this.seleniumEasyRepo.inputbuttonclick), defaultTimeout, "Time out");
        await browser.actions().mouseMove(this.seleniumEasyRepo.inputbuttonclick).click().perform();

    }
    public async buttonInputShow(){
        await browser.wait(ExpectedConditions.presenceOf(await this.seleniumEasyRepo.inputdisplay), defaultTimeout, "Текст не введен");
    }
    //Submit Form
    public async goTosubmitFormSeleniumEasy() {
        await browser.navigate().to(browser.params.submitFormSeleniumEasy);
        }
       
        public async nameFieldTyping() {
            await browser.wait(ExpectedConditions.visibilityOf(this.seleniumEasyRepo.nameinput), defaultTimeout, "Time out");
            await browser.actions().mouseMove(this.seleniumEasyRepo.nameinput).click().sendKeys('Liza').perform();
        }
        public async submitButtonPress() {
            await browser.wait(ExpectedConditions.visibilityOf(this.seleniumEasyRepo.submitbuttonelem), defaultTimeout, "Time out");
            await browser.actions().mouseMove(this.seleniumEasyRepo.submitbuttonelem).click().perform();
            }

        public async loadingIconSpin(){
            await browser.wait(ExpectedConditions.visibilityOf(await this.seleniumEasyRepo.spinnericon),defaultTimeout,"Имя не введено");
        }
//List Box Easy Demo
public async goTolistboxeSeleniumEasy() {
    await browser.navigate().to(browser.params.listboxeSeleniumEasy);
    }
   
    public async buttonSelectAllElement() {
        await browser.wait(ExpectedConditions.visibilityOf(this.seleniumEasyRepo.selectalldefault), defaultTimeout, "Time out");
        await browser.actions().mouseMove(this.seleniumEasyRepo.selectalldefault).click().perform();
    }

    public async selectedBoxesAnimation(){
        
        await browser.wait(ExpectedConditions.presenceOf(await this.seleniumEasyRepo.selectallpicked), defaultTimeout);

       
    }
    //File Download

    public async goTofiledownloadSeleniumEasy() {
        await browser.navigate().to(browser.params.filedownloadSeleniumEasy);
        }
       
        public async exampleInputForDownload() {
            await browser.wait(ExpectedConditions.visibilityOf(this.seleniumEasyRepo.exampleinput), defaultTimeout, "Time out");
            await browser.actions().mouseMove(this.seleniumEasyRepo.exampleinput).click().sendKeys('example').perform();
        }
        public async generateButtonPress() {
            await browser.wait(ExpectedConditions.visibilityOf(this.seleniumEasyRepo.generatebutton), defaultTimeout, "Time out");
            await browser.actions().mouseMove(this.seleniumEasyRepo.generatebutton).click().perform();
            }
        public async downloadButtonNew() {
            await browser.wait(ExpectedConditions.visibilityOf(await this.seleniumEasyRepo.downloadbutton), defaultTimeout);
            await browser.actions().mouseMove(this.seleniumEasyRepo.downloadbutton).click().perform();
            
        }

    //Numeric Calculator 
    public async goToNumericInputSeleniumEasy() {
        await browser.navigate().to(browser.params.inputSeleniumEasy);
        }
       
    public async firstNumericInput() {
        await browser.wait(ExpectedConditions.visibilityOf(await this.seleniumEasyRepo.inputfieldfirst), defaultTimeout);
        await browser.actions().mouseMove(this.seleniumEasyRepo.inputfieldfirst).click().sendKeys('3').perform();
        }
    public async secondNumericInput() {
        await browser.wait(ExpectedConditions.visibilityOf(await this.seleniumEasyRepo.inputfieldsecond), defaultTimeout);
            await browser.actions().mouseMove(this.seleniumEasyRepo.inputfieldsecond).click().sendKeys('6').perform();
            }
            public async getTotalButtonPress() {
                await browser.wait(ExpectedConditions.visibilityOf(await this.seleniumEasyRepo.gettotalbutton), defaultTimeout);
                await browser.actions().mouseMove(this.seleniumEasyRepo.gettotalbutton).click().perform();
                }
    public async totalSumDisplay() {
    await browser.wait(ExpectedConditions.visibilityOf(await this.seleniumEasyRepo.totalsumvalue));
        }


    //Multiple Checkboxes
    public async goToMultipleCheckboxPage() {
        await browser.navigate().to(browser.params.checkboxSeleniumEasy);
    }
    public async selectallCheckButton(){
        await browser.wait(ExpectedConditions.visibilityOf(await this.seleniumEasyRepo.selectallchecks), defaultTimeout);
        await this.seleniumEasyRepo.selectallchecks.click();
    }
    public async multipleCheckboxSelect(){
        expect( await this.seleniumEasyRepo.selectallchecks.isSelected()).equal(false);
    }

//Filter Check
    public async goToFilterList() {
        await browser.navigate().to(browser.params.filterlist);
    }
    public async filterTypeCheck(){
        await browser.wait(ExpectedConditions.visibilityOf(this.seleniumEasyRepo.inputforfiltercheck), defaultTimeout, "Time out");
        await browser.actions().mouseMove(this.seleniumEasyRepo.inputforfiltercheck).click().sendKeys('Tree').perform();
    }
    public async matchingFilterResults(){
        await browser.wait(ExpectedConditions.visibilityOf(await this.seleniumEasyRepo.filtermatchtile), defaultTimeout);
    }

//Loading Bar
public async goToloadingbarSeleniumEasy() {
    await browser.navigate().to(browser.params.loadingbarSeleniumEasy);
}
public async startDownloadClick(){
    await browser.wait(ExpectedConditions.visibilityOf(this.seleniumEasyRepo.startdownloadbutton), defaultTimeout, "Time out");
    await browser.actions().mouseMove(this.seleniumEasyRepo.startdownloadbutton).click().perform();
}
public async progressBarDisplay(){
    await browser.wait(ExpectedConditions.visibilityOf(await this.seleniumEasyRepo.progressbarelem), defaultTimeout);
}

//Modal Window
public async goTomodalwindowSeleniumEasy() {
    await browser.navigate().to(browser.params.modalwindowSeleniumEasy);
}
public async launchModalClick(){
    await browser.wait(ExpectedConditions.visibilityOf(this.seleniumEasyRepo.launchmodalbutton), defaultTimeout, "Time out");
    await browser.actions().mouseMove(this.seleniumEasyRepo.launchmodalbutton).click().perform();
}
public async modalWindowDisplay(){
    await browser.wait(ExpectedConditions.visibilityOf(await this.seleniumEasyRepo.modalwindowelem), defaultTimeout);
}
public async saveChangesClick(){
    await browser.wait(ExpectedConditions.visibilityOf(this.seleniumEasyRepo.savechangesbutton), defaultTimeout, "Time out");
    await browser.actions().mouseMove(this.seleniumEasyRepo.savechangesbutton).click().perform();
}


//Alert Message
public async goToalertmessageSeleniumEasy() {
    await browser.navigate().to(browser.params.alertmessageSeleniumEasy);
}
public async dangerMessageClick(){
    await browser.wait(ExpectedConditions.visibilityOf(this.seleniumEasyRepo.dangermessagebutton), defaultTimeout, "Time out");
    await browser.actions().mouseMove(this.seleniumEasyRepo.dangermessagebutton).click().perform();
}
public async dangerMessageDisplay(){
    await browser.wait(ExpectedConditions.visibilityOf(await this.seleniumEasyRepo.dangermessage), defaultTimeout);
}
public async closeButtonClick(){
    await browser.wait(ExpectedConditions.visibilityOf(this.seleniumEasyRepo.messageclosebutton), defaultTimeout, "Time out");
    await browser.actions().mouseMove(this.seleniumEasyRepo.messageclosebutton).click().perform();
}


//Search & Select
public async goTosearchselectSeleniumEasy() {
    await browser.navigate().to(browser.params.searchselectSeleniumEasy);
}
public async ddlInputTyping(){
    await browser.wait(ExpectedConditions.visibilityOf(this.seleniumEasyRepo.ddlinputfield), defaultTimeout, "Time out");
    await browser.actions().mouseMove(this.seleniumEasyRepo.ddlinputfield).click().sendKeys('In').perform();
}
public async ddlValuePick(){
    await browser.wait(ExpectedConditions.visibilityOf(this.seleniumEasyRepo.matchddlvalue), defaultTimeout, "Time out");
    await browser.actions().mouseMove(this.seleniumEasyRepo.matchddlvalue).click().perform();
}
public async ddlchoicedisplay(){
    await browser.wait(ExpectedConditions.visibilityOf(this.seleniumEasyRepo.ddlpickresult), defaultTimeout, "Time out");
    await browser.actions().mouseMove(this.seleniumEasyRepo.ddlpickresult).click().perform();
}

//Date Picker
public async goTodatepickerSeleniumEasy() {
    await browser.navigate().to(browser.params.datepickerSeleniumEasy);
}
public async selectDatePick(){
    await browser.wait(ExpectedConditions.visibilityOf(this.seleniumEasyRepo.datepick), defaultTimeout, "Time out");
    await browser.actions().mouseMove(this.seleniumEasyRepo.datepick).click().perform();
}
public async todayButtonClick(){
    await browser.wait(ExpectedConditions.visibilityOf(this.seleniumEasyRepo.todaybutton), defaultTimeout, "Time out");
    await browser.actions().mouseMove(this.seleniumEasyRepo.todaybutton).click().perform();
}
public async todayDateDisplay(){
    await browser.wait(ExpectedConditions.visibilityOf(this.seleniumEasyRepo.todaydisplay), defaultTimeout, "Time out");
    await browser.actions().mouseMove(this.seleniumEasyRepo.todaydisplay).click().perform();

}

}
