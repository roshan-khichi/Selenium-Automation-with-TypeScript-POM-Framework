import { expect } from "chai";
import { createDriver } from "../utils/driverFactory";
import LoginPage from "../pages/LoginPage";
import LogoutPage from "../pages/LogoutPage";
import { By, WebDriver } from "selenium-webdriver";
import * as dotenv from "dotenv";

dotenv.config();

describe("E-commerce Login Tests", () => {
  let driver: WebDriver;
  let loginPage: LoginPage;

  //define variable for login
  const username = process.env.email!
  const password = process.env.pass!

  before(async () => {
    driver = await createDriver();
    loginPage = new LoginPage(driver);
    await driver.get("https://www.demoblaze.com/");
  });

  after(async () => {
    await driver.quit();
  });

  it("should log in successfully with valid credentials", async () => {
    await driver.findElement(By.id("login2")).click();
    await driver.sleep(1000);

    await loginPage.login(username, password);
    await driver.sleep(2000);

    const loggedInUser = await driver.findElement(By.id("nameofuser")).getText();
    expect(loggedInUser).to.include("Welcome");
  });

  it("should log out successfully", async () => {
    await driver.sleep(1000);

    const logoutPage = new LogoutPage(driver);
    await logoutPage.logout();
    await driver.sleep(5000);

    const loggedInUser = await driver.findElement(By.id("login2")).getText();
    expect(loggedInUser).to.include("Log in");
  });

});
