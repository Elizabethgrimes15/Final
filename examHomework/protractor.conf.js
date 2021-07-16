const crew = require('serenity-js/lib/stage_crew');
const fs = require("fs");
const rimraf = require('rimraf');
const mkdirp = require("mkdirp");
const reportsFolder = process.cwd() + "/target";

exports.config = {
    chromeOnly: true,
    directConnect: true,
    // Framework definition - tells Protractor to use Serenity/JS
    framework: 'custom',
    frameworkPath: require.resolve('serenity-js'),

    specs: ['features/**/*.feature'],

    params: {
        defaultTimeout: 6000,
        checkboxSeleniumEasy: "https://www.seleniumeasy.com/test/basic-checkbox-demo.html",
        radiobuttonSeleniumEasy: "https://www.seleniumeasy.com/test/basic-radiobutton-demo.html",
        ddlSeleniumEasy: "https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html",
        inputSeleniumEasy: "https://www.seleniumeasy.com/test/basic-first-form-demo.html",
        submitFormSeleniumEasy: "https://www.seleniumeasy.com/test/ajax-form-submit-demo.html",
        listboxeSeleniumEasy: "https://www.seleniumeasy.com/test/bootstrap-dual-list-box-demo.html",
        filterlist: "https://www.seleniumeasy.com/test/data-list-filter-demo.html",
        filedownloadSeleniumEasy: "https://www.seleniumeasy.com/test/generate-file-to-download-demo.html",
        paginationdemoSeleniumEasy: "https://www.seleniumeasy.com/test/table-pagination-demo.html",
        loadingbarSeleniumEasy: "https://www.seleniumeasy.com/test/jquery-download-progress-bar-demo.html",
        modalwindowSeleniumEasy: "https://www.seleniumeasy.com/test/bootstrap-modal-demo.html",
        alertmessageSeleniumEasy: "https://www.seleniumeasy.com/test/bootstrap-alert-messages-demo.html",
        searchselectSeleniumEasy: "https://www.seleniumeasy.com/test/jquery-dropdown-search-demo.html",
        datepickerSeleniumEasy: "https://www.seleniumeasy.com/test/bootstrap-date-picker-demo.html",
        datatabledownloadpage: "https://www.seleniumeasy.com/test/table-data-download-demo.html",
        datatablesearch: "https://www.seleniumeasy.com/test/table-search-filter-demo.html",
        iframesamplepage: "https://testpages.herokuapp.com/styled/iframes-test.html",
    },


    cucumberOpts: {
        require: ['features/**/*.ts'], // loads step definitions
        format: 'pretty', // enable console output
        compiler: 'ts:ts-node/register', // interpret step definitions as TypeScript
        tags: ['@smoke'] //Execution tags, will be executed tests with ALL tags, i.e. if you have ['@smoke', '@1'] then BOTH @smoke and @1 tagged test(s) will run
    },

    serenity: {
        crew: [
            crew.serenityBDDReporter(),
            crew.photographer()
        ],

        dialect: 'cucumber', // or 'mocha'
    },

    beforeLaunch: () => {
        //Check if reports directory exists, if not create it
        //If exists - clean it
        if (!fs.existsSync(reportsFolder)) {
            mkdirp.sync(reportsFolder);
        } else {
            rimraf.sync(reportsFolder);
            mkdirp.sync(reportsFolder);
        }
    },

    onPrepare: () => {
        /**
         * If you are testing against a non-angular site - set ignoreSynchronization setting to true
         *
         * If true, Protractor will not attempt to synchronize with the page before
         * performing actions. This can be harmful because Protractor will not wait
         * until $timeouts and $http calls have been processed, which can cause
         * tests to become flaky. This should be used only when necessary, such as
         * when a page continuously polls an API using $timeout.
         *
         * @type {boolean}
         */
        browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization = true;
    },

    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: "https://google.com",
    capabilities: {
        browserName: "chrome",
        //Parallel Execution
        //-----------------------------------------
        //TODO: Optimize logger for parallel mode
        shardTestFiles: true,
        maxInstances: 2,
        chromeOptions: {
            //Standard mode
            args: ["--window-size=1920,1080"]
                //-----------------------------------------
                //Headless Mode
                //-----------------------------------------
                //args: ["--headless", "--disable-gpu", "--window-size=1920,1080"]
                //-----------------------------------------
        }
    }
}