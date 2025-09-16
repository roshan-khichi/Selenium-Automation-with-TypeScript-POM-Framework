import { By, WebDriver } from "selenium-webdriver";

export default class LoginPage {
  constructor(private driver: WebDriver) {}

  usernameInput = By.id("loginusername");
  passwordInput = By.id("loginpassword");
  loginBtn = By.xpath("//button[text()='Log in']");

  async login(username: string, password: string) {
    await this.driver.findElement(this.usernameInput).sendKeys(username);
    await this.driver.findElement(this.passwordInput).sendKeys(password);
    await this.driver.findElement(this.loginBtn).click();
  }
}
