import { test as setup, expect } from "./fixtures/base.test";


// This script runs before tests to create authenticated state
setup('authenticate', async ({ page, homePage, loginPage }) => {
    // Login with LinkedIn
    await loginPage.navigate('https://app.itsquiz.com/en/login');
    await loginPage.linkedinBtn.click();
    await expect(page).toHaveURL(/linkedin\.com\//);
    await loginPage.emailInput.fill(process.env.GOOGLE_EMAIL || '');
    await loginPage.passwordInput.fill(process.env.GOOGLE_PASSWORD || '');
    await loginPage.signInBtn.click();

    await expect(page).toHaveURL(/app\.itsquiz\.com\//);
    await page.waitForLoadState('networkidle');
    // Save storage state to a file that will be used in tests
    await page.context().storageState({ path: './auth/storage-state.json' });
});