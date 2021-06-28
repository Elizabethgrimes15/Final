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
        await this.seleniumEasyRepo.radiobuttonsex.click();
    
    }
    public async radioPick2() {
        await this.seleniumEasyRepo.radiobuttonage.click();
    
    }
        public async buttonConfirm() {
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
        await this.seleniumEasyRepo.ddldemo.click();
    }
    public async ddlPick() {
    await this.seleniumEasyRepo.sundaypick.click();
    }

    public async ddlPickconfirm(){
        expect( await this.seleniumEasyRepo.sundaypick.isSelected()).equal(true);
    }

    //Input
   // public async goToinputSeleniumEasy() {
    //    await browser.navigate().to(browser.params.inputSeleniumEasy);
   // }
   // public async reqinput() {
    //    await this.seleniumEasyRepo.ddldemo.click();
    //}
    //public async buttonclick() {
    //await this.seleniumEasyRepo.sundaypick.click();
    //}

    //public async messageDisplay(){
      //  expect( await this.seleniumEasyRepo.sundaypick.isSelected()).equal(true);
    //}
}    

