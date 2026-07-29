import { expect } from "@playwright/test";

class HomePage{
    constructor(page){
        this.page = page;
        this.homeLogo = page.locator('img[alt="Website for automation practice"]');
        this.signupLoginLink = page.getByRole('link', {
    name: /Signup/
});
        
    }

    async open(){
        await this.page.goto('/');
    }

    async verifyTitle(){
        await expect(this.page).toHaveTitle(/Automation Exercise/);
    }

    async verifyLogoIsVisible(){
        await expect(this.homeLogo).toBeVisible();
    }

    async clickSignupLogin() {
    await this.signupLoginLink.click();
}

async verifyLoginPage() {
    await expect(this.page).toHaveURL(/login/);
}
}

export default HomePage;