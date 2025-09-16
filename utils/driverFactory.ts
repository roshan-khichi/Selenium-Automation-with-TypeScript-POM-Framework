import { Builder, WebDriver } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome";

export async function createDriver(): Promise<WebDriver> {
  const options = new chrome.Options();
  options.addArguments("--start-maximized");

  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

  return driver;
}
