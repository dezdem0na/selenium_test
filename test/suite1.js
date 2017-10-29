require('chromedriver');

var By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until,
    test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver'),
    assert = require('assert');

var driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build();


test.describe('Test Suite Moikrug', function() {
    this.timeout(10000);

    test.before(function() {
        driver.get('https://moikrug.ru/');
    });

    test.after(function() {
        driver.quit();
    });

    test.it('We are on moikrug.ru', function() {
        driver.wait(until.titleIs('Работа в IT-индустрии — Мой круг'));
    });

});
