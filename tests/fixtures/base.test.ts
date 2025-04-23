import { test as base } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';
import { ProfilePage } from '../pages/profile.page';
import { QuizwallPage } from '../pages/quizwall.page';

// Declare the types of fixtures
type Fixtures = {
    homePage: HomePage;
    loginPage: LoginPage;   
    profilePage: ProfilePage;
    quizwallPage: QuizwallPage;
};

// Extend base test with our fixtures
export const test = base.extend<Fixtures>({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    profilePage: async ({ page }, use) => {
        const profilePage = new ProfilePage(page);
        await use(profilePage);
    },
    quizwallPage: async ({ page }, use) => {
        const quizwallPage = new QuizwallPage(page);
        await use(quizwallPage);
    },
});

export { expect } from '@playwright/test'; 