import { Page, Locator } from "@playwright/test";

export class MenuComponent {
  constructor(readonly page: Page) {}

  get leftNavigationDiv(): Locator {
    return this.page.locator('div.LeftNav__content');
  }

  get topMenuDiv(): Locator {
    return this.page.locator(".TopMenu");
  }

  get menuItem(): Locator {
    return this.page.locator(".LeftNav__menu > div");
  }

}