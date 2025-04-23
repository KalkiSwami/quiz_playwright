import { Page, expect } from '@playwright/test';
import { BasePage } from "./base.page";

export class ProfilePage extends BasePage {

    constructor(page: Page) {
        super(page);
      }

    // Profile form elements
    get nameInput() {
        return this.page.getByLabel('First name');
    }

    get secondnameInput() {
        return this.page.getByLabel('Second Name');
    }

    get summaryInput() {
        return this.page.getByLabel('Summary');
    }

    get countrySelect() {
        return this.page.locator('.Select-input > input[role="combobox"]');
    }

    get cityInput() {
        return this.page.getByLabel('City');
    }

    get activityInput() {
        return this.page.getByLabel('Business activity');
    }

    get websiteInput() {
        return this.page.getByLabel('Website');
    }

    get saveButton() {
        return this.page.getByRole('button', { name: 'Save' });
    }

    get imageIcon() {
        return this.page.locator('div.avatar');
    }

    get editProfileBtn() {
        return this.page.locator('.FloatingButton');
    }

    async fillProfileInfo(profileData: {
        name?: string;
        secondname?: string;
        summary?: string;
        country?: string;
        city?: string;
        activity?: string;
        website?: string;
    }) {
        if (profileData.name) await this.nameInput.fill(profileData.name);
        if (profileData.secondname) await this.secondnameInput.fill(profileData.secondname);
        if (profileData.summary) await this.summaryInput.fill(profileData.summary);
        
        if (profileData.country) {
            await this.countrySelect.fill(profileData.country);
            await this.countrySelect.press('Enter');
        }
    
        if (profileData.city) await this.cityInput.fill(profileData.city);
        if (profileData.activity) await this.activityInput.fill(profileData.activity);
        if (profileData.website) await this.websiteInput.fill(profileData.website);
    }

    async saveChanges() {
        await this.saveButton.click();
    }

    async verifyProfileInfo(profileData: {
        name?: string;
        secondname?: string;
        summary?: string;
        country?: string;
        city?: string;
        activity?: string;
        website?: string;
    }) {
        if (profileData.name) await expect(this.nameInput).toHaveValue(profileData.name);
        if (profileData.secondname) await expect(this.secondnameInput).toHaveValue(profileData.secondname);
        if (profileData.summary) await expect(this.summaryInput).toHaveValue(profileData.summary);
        if (profileData.country) await expect(this.countrySelect).toHaveValue('');
        if (profileData.city) await expect(this.cityInput).toHaveValue(profileData.city);
        if (profileData.activity) await expect(this.activityInput).toHaveValue(profileData.activity);
        if (profileData.website) await expect(this.websiteInput).toHaveValue(profileData.website);
        
    }
} 