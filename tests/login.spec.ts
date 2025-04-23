import { test, expect } from "./fixtures/base.test";

test.describe('Login Page Tests', () => {

    test('should have cancel button on Youtube video popup', async ({ page, homePage }) => {
        
        await homePage.navigate('https://wall.itsquiz.com/activations');
        await homePage.SignUpBtn.click();
        await homePage.signupModalWindow.waitFor({ state: 'visible' });
        await homePage.useEmailBtn.click();
        await expect(page).toHaveURL(/\/en\/login/);
        await homePage.youtubeLink.click();
        await homePage.youtubePopup.waitFor({ state: 'visible' });
        await expect(homePage.youtubePopup).toBeVisible();
        await expect(homePage.closeButton).toBeVisible();
    });

    test('should login with linkedin oauth', async ({ page, homePage, loginPage }) => {
        
        await homePage.navigate('https://app.itsquiz.com/en/login');
        await loginPage.linkedinBtn.click();
        await expect(page).toHaveURL(/linkedin\.com\//);
        await loginPage.emailInput.fill(process.env.GOOGLE_EMAIL || '');
        await loginPage.passwordInput.fill(process.env.GOOGLE_PASSWORD || '');
        await loginPage.signInBtn.click();
        
        await expect(page).toHaveURL(/app\.itsquiz\.com\//);
    
    });
}); 