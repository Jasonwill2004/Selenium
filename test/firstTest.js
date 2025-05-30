const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");
var should = require("chai").should();

//describe block
describe("add todo tests", function () {
  it("should add a todo and mark it as completed", async function () {
    // laucnh the browser
    let driver = await new Builder().forBrowser("firefox").build();

    //navigate to the application
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    //add a todo
    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("test todo", Key.RETURN);

    //assert
    let todoText = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then(function (value) {
        return value;
      });

    // assert.strictEqual(todoText, "test todo");

    //assert using chai should
    todoText.should.equal("test todo");

    //click on the todo
    await driver.findElement(By.xpath("//li[last()]/input")).click();

    //close the browser
    await driver.quit();
    console.log("Test completed successfully");
  });
});
