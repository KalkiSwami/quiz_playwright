import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";
import { MenuComponent } from "./components/menubar.page";


export class QuizwallPage extends BasePage {
    readonly menu: MenuComponent;

    constructor(page: Page) {
      super(page);
      this.menu = new MenuComponent(page);
    }
  
  get quizCards(): Locator {
    return this.page.locator(".QuizCard");
  }

  get accountCardBtn(): Locator {
    return this.page.locator(".ActivationsPage__grid div button");
  }

  get emailInput(): Locator {
    return this.page.locator("#username");
  }
  
  get signInBtn(): Locator {
    return this.page.locator("button[aria-label='Sign in']");
  }
  // Handle Google OAuth popup
}
