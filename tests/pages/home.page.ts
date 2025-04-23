import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";


export class HomePage extends BasePage {

  constructor(page: Page) {
    super(page);
  }
  get SignUpBtn(): Locator {
    return this.page.locator('.AppBar__menu-item');
  }

  get signupModalWindow(): Locator {
    return this.page.locator('.ReactModal__Content');
  }
  
  get useEmailBtn(): Locator {
    return this.page.locator(".LoginDialog__title--clickable");
  }

  get youtubeLink(): Locator {
    return this.page.locator('.watch-link');
  }

  get youtubePopup(): Locator {
    return this.page.locator('.video-popup');
  }

  get closeButton(): Locator {
    return this.page.locator('.video-popup__close');
  }

  // Handle Google OAuth popup
}


        
