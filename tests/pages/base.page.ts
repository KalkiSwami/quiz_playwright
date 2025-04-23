import { Page, Locator } from "@playwright/test";

export class BasePage {
  constructor(readonly page: Page) {}

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState("networkidle");
  }

}
