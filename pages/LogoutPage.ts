import { By, WebDriver } from "selenium-webdriver";

export default class LogoutPage {
  constructor(private driver: WebDriver) {}

  logoutBtn = By.id('logout2')

  async logout() {
    await this.driver.findElement(this.logoutBtn).click();
  }
}
