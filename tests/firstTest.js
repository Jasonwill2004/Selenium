const {Builder, By, Key} = require("selenium-webdriver");

async function runTest() {

// laucnh the browser
let driver = await new Builder().forBrowser("firefox").build();

//navigate to the application
await driver.get("https://lambdatest.github.io/sample-todo-app/")

//add a todo
await driver.findElement(By.id("sampletodotext")).sendKeys("test todo",Key.RETURN);
//close the browser
await driver.quit();
console.log("Test completed successfully");
}
runTest()

