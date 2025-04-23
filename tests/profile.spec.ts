import { test, expect } from "./fixtures/base.test";


test.describe('Profile Tests', () => {

    test('should save profile data correctly', async ({ page, profilePage }) => {
        // Navigate to profile page
        await page.goto('https://app.itsquiz.com/edit-profile');
        await profilePage.imageIcon.waitFor({ state: 'visible' });
        // Test data
        const profileData = {
            name: 'Test',
            secondname: 'User',
            summary: 'Summ',
            country: 'Poland',
            city: 'Lviv',
            activity: 'IT',
            website: 'https://test.com'
        };

        // Fill in all profile fields
        await profilePage.fillProfileInfo(profileData);
        
        // Save changes
        await profilePage.saveChanges();
        await expect(page).toHaveURL(/\/profile/);
        await profilePage.editProfileBtn.click();
        await expect(page).toHaveURL(/\/edit-profile/);
        // Verify all fields
        await profilePage.verifyProfileInfo(profileData);
    });
    
    test.only('should not duplicate left and top menu', async ({ page, quizwallPage }) => {
        await page.waitForLoadState('networkidle');
        await page.waitForLoadState('domcontentloaded');
        await quizwallPage.menu.topMenuDiv.waitFor({ state: 'visible' });
        await quizwallPage.menu.menuItem.nth(0).click();
        await expect(page).toHaveURL(/\/quizwall/);
        await quizwallPage.accountCardBtn.nth(1).waitFor({ state: 'visible', timeout: 50000  });
        //await quizwallPage.quizCards.first()
        //await page.waitForLoadState('networkidle');
        await quizwallPage.accountCardBtn.nth(1).click();
        await expect(page).toHaveURL(/\/accounts/);
        // Verify all fields
        const menusCount = await quizwallPage.menu.leftNavigationDiv.count();
        const topMenusCount = await quizwallPage.menu.topMenuDiv.count();
        expect(menusCount).toBe(1);
        expect(topMenusCount).toBe(1);
    });

}); 