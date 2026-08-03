import { expect } from "@playwright/test";

class SignupPage {
  constructor(page) {
    this.page = page;
    this.nameInput = page.locator('input[data-qa="signup-name"]');
    this.emailInput = page.locator('input[data-qa="signup-email"]');
    this.signupButton = page.locator('button[data-qa="signup-button"]');
    this.accountInformationHeading = page.getByText('Enter Account Information');
  }

  async signup(name, email){
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.signupButton.click();

  }

  async verifySignupPage() {
    await expect(this.accountInformationHeading).toBeVisible();
}
}

export default SignupPage;
