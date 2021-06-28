import {by, element, ElementFinder} from "protractor";

export class seleniumEasyRepository {
    readonly checkboxdemo: ElementFinder = element (by.id('isAgeSelected'));
    readonly radiobuttonsex: ElementFinder = element(by.xpath('//*[@id="easycont"]/div/div[2]/div[2]/div[2]/div[1]/label[2]/input'));
    readonly radiobuttonage: ElementFinder = element(by.xpath('//*[@id="easycont"]/div/div[2]/div[2]/div[2]/div[2]/label[3]/input'));
    readonly confirmbutton: ElementFinder = element(by.xpath('//*[@id="easycont"]/div/div[2]/div[2]/div[2]/button'));
    readonly ddldemo: ElementFinder = element(by.id ('select-demo'));
    readonly sundaypick: ElementFinder = element (by.xpath ('//*[@id="select-demo"]/option[2]'));
}