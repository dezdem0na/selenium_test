require('chromedriver');

var By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until,
    test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver'),
    assert = require('assert');
    Key = require('selenium-webdriver').Key

var driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build();


test.describe('Test Suite Ruby on Rails Jobs', function() {
    this.timeout(15000);

    test.before(function() {
        driver.get('https://moikrug.ru/');
        driver.findElement(By.id('q')).sendKeys('Ruby on Rails');
        driver.findElement(By.id('location')).sendKeys('Москва');
        driver.sleep(2500)
        driver.findElement(By.id('location')).sendKeys(Key.ENTER);
        driver.findElement(By.xpath("//*[@value='Найти']")).click();
    });

    test.after(function() {
        driver.quit();
    });

    test.it('Getting jobs', function() {

        driver.findElement(By.id('jobs_list_title'))
        .then(function(list_title){
            list_title.getText().then(function(textValue){
                console.log(textValue)
                console.log('>>')
            })
        })

        driver.findElements(By.xpath("//div[@id='jobs_list']/div/div/div/div[1]"))
        .then(function(elements){
            elements.forEach(function (element) {
                element.getText().then(function(textValue){
                    console.log(textValue);
                });
            });
        });

        driver.findElements(By.xpath("//div[@class='pagination']/a[@class='page']"))
        .then(function(pagination){
            pagination.forEach(function (page) {
                driver.findElement(By.xpath("//a[@rel='next']")).click()
                driver.findElements(By.xpath("//div[@id='jobs_list']/div/div/div/div[1]"))
                .then(function(elements){
                    elements.forEach(function (element) {
                        element.getText().then(function(textValue){
                            console.log(textValue);
                        });
                    });
                });
            });
        });

        assert.true;

    });
});
