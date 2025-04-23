import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";


export class LoginPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  get linkedinBtn(): Locator {
    return this.page.locator(".socials > button:nth-child(3)");
  }

  get emailInput(): Locator {
    return this.page.locator("#username");
  }
  
  get signInBtn(): Locator {
    return this.page.locator("button[aria-label='Sign in']");
  }

  get passwordInput(): Locator {
    return this.page.locator("#password");
  }

  get youtubePopup(): Locator {
    return this.page.locator('.video-popup');
  }

  get closeButton(): Locator {
    return this.page.locator('.video-popup__close');
  }

  // Handle Google OAuth popup
}
