import {by, element, ElementFinder} from "protractor";

export class seleniumEasyRepository {
    readonly checkboxdemo: ElementFinder = element (by.id('isAgeSelected'));
    readonly radiobuttonsex: ElementFinder = element(by.xpath('//*[@id="easycont"]/div/div[2]/div[2]/div[2]/div[1]/label[2]/input'));
    readonly radiobuttonage: ElementFinder = element(by.xpath('//*[@id="easycont"]/div/div[2]/div[2]/div[2]/div[2]/label[3]/input'));
    readonly confirmbutton: ElementFinder = element(by.xpath('//*[@id="easycont"]/div/div[2]/div[2]/div[2]/button'));
    readonly ddldemo: ElementFinder = element(by.id ('select-demo'));
    readonly sundaypick: ElementFinder = element (by.xpath ('//*[@id="select-demo"]/option[2]'));
    readonly inputdemo: ElementFinder = element (by.xpath ('/html/body/div[2]/div/div[2]/div[1]/div[2]/form/div/input'));
    readonly inputbuttonclick: ElementFinder = element (by.xpath('//*[@id="get-input"]/button')); 
    readonly inputdisplay:ElementFinder = element (by.id('display'));
    readonly submitbuttonelem: ElementFinder = element (by.id('btn-submit'));
    readonly nameinput: ElementFinder = element (by.id('title'));
    readonly spinnericon: ElementFinder = element (by.xpath('/html/body/div[2]/div/div[2]/div/div[2]/form/div[3]/img'));
    readonly selectalldefault: ElementFinder = element (by.xpath('//*[@id="listhead"]/div[2]/div/a'));
    readonly selectallpicked: ElementFinder = element (by.xpath('/html/body/div[2]/div/div[2]/div/div[1]/div/div/div[2]/div/a/i'));
    readonly exampleinput: ElementFinder = element (by.id('textbox'));
    readonly generatebutton: ElementFinder = element (by.id('create'));
    readonly downloadbutton: ElementFinder = element (by.id('link-to-download'));
    readonly inputfieldfirst: ElementFinder = element (by.id('sum1'));
    readonly inputfieldsecond:ElementFinder = element (by.id('sum2'));
    readonly gettotalbutton: ElementFinder = element (by.xpath ('//*[@id="gettotal"]/button'));
    readonly totalsumvalue: ElementFinder = element (by.id ('displayvalue'));
    readonly selectallchecks: ElementFinder = element(by.id ('check1'));
    readonly inputforfiltercheck: ElementFinder = element(by.id('input-search'));
    readonly filtermatchtile: ElementFinder = element (by.xpath('/html/body/div[2]/div/div[2]/section/div/div[2]/div[2]/div/h4'));
    readonly startdownloadbutton: ElementFinder = element (by.id('downloadButton'));
    readonly progressbarelem: ElementFinder = element (by.xpath('/html/body/div[3]/div[1]'));
    readonly launchmodalbutton: ElementFinder = element (by.xpath('/html/body/div[2]/div/div[2]/div[1]/div/div/div[2]/a'));
    readonly modalwindowelem: ElementFinder = element (by.xpath ('//*[@id="myModal0"]/div/div/div[1]'));
    readonly savechangesbutton: ElementFinder = element (by.xpath('//*[@id="myModal0"]/div/div/div[4]/a[2]'));
    readonly dangermessagebutton: ElementFinder= element(by.id('normal-btn-danger'));
    readonly dangermessage: ElementFinder = element(by.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[6]'));
    readonly messageclosebutton: ElementFinder = element(by.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[6]/button'));
    readonly ddlinputfield: ElementFinder = element (by.xpath('/html/body/div[2]/div/div[2]/div[1]/div/div[2]/span/span[1]/span'));
    readonly matchddlvalue: ElementFinder = element (by.xpath ('//*[@id="select2-country-results"]/li'));
    readonly ddlpickresult: ElementFinder= element (by.id('select2-country-container'));
    readonly datepick: ElementFinder = element (by.xpath('//*[@id="sandbox-container1"]/div/span'));
    readonly todaybutton: ElementFinder = element (by.xpath('/html/body/div[3]/div[1]/table/tfoot/tr[1]/th'));
    readonly todaydisplay: ElementFinder = element (by.xpath('//*[@id="sandbox-container1"]/div/input'));
    readonly inputsearching: ElementFinder = element(by.xpath('//*[@id="example_filter"]/label/input'));
    readonly copybutton: ElementFinder = element (by.xpath('//*[@id="example_wrapper"]/div[1]/a[1]'));
    readonly clipboardmodal: ElementFinder = element(by.id('datatables_buttons_info'));
    readonly inputtyping: ElementFinder = element (by.id('task-table-filter'));
    readonly rowfilter: ElementFinder = element (by.xpath('//*[@id="task-table"]/tbody/tr[2]'));
    readonly sortingfilterselem: ElementFinder = element (by.xpath('/html/body/div[2]/div/div[2]/div[2]/div/div/div/button'));
    readonly surnameinput: ElementFinder = element (by.xpath('/html/body/div[2]/div/div[2]/div[2]/div/table/thead/tr/th[2]/input'));
    readonly rowusershown: ElementFinder = element (by.xpath('/html/body/div[2]/div/div[2]/div[2]/div/table/tbody/tr[2]'));
    readonly pdficon: ElementFinder = element (by.xpath('//*[@id="example_wrapper"]/div[1]/a[4]'));
    readonly iframeelem: ElementFinder = element (by.id('theheaderhtml'));
    readonly iframetext: ElementFinder = element (by.xpath('/html/body/div/h1'));


    }