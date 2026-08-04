import { expect } from "@playwright/test";

class SignupPage {
  constructor(page) {
    this.page = page;
    this.nameInput = page.locator('input[data-qa="signup-name"]');
    this.emailInput = page.locator('input[data-qa="signup-email"]');
    this.signupButton = page.locator('button[data-qa="signup-button"]');
    this.accountInformationHeading = page.getByText(
      "Enter Account Information",
    );
    this.titleMr = page.locator("#id_gender1");
    this.passwordInput = page.locator("#password");

    this.dayDropdown = page.locator("#days");
    this.monthDropdown = page.locator("#months");
    this.yearDropdown = page.locator("#years");

    this.addressInput = page.locator("#address1");
    this.countryDropdown = page.locator("#country");
    this.stateInput = page.locator("#state");
    this.cityInput = page.locator("#city");
    this.zipcodeInput = page.locator("#zipcode");
    this.mobileNumberInput = page.locator("#mobile_number");
    this.createAccountButton = page.locator('button[data-qa="create-account"]');

    this.accountCreatedHeading = page.getByText("Account Created!");
    this.continueButton = page.locator('a[data-qa="continue-button"]');

    this.newsletterCheckbox = page.locator("#newsletter");
    this.specialOffersCheckbox = page.locator("#optin");

    this.firstNameInput = page.locator("#first_name");
    this.lastNameInput = page.locator("#last_name");
    this.companyInput = page.locator("#company");

    this.addressInput = page.locator("#address1");
  }

  async signup(name, email) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.signupButton.click();
  }

  async verifySignupPage() {
    await expect(this.accountInformationHeading).toBeVisible();
  }

  async enterAccountInformation(password) {
    await this.titleMr.check();
    await this.passwordInput.fill(password);
  }

  async selectDateOfBirth(day, month, year) {
    await this.dayDropdown.selectOption(day);
    await this.monthDropdown.selectOption(month);
    await this.yearDropdown.selectOption(year);
  }

  async enterPersonalInformation(firstName, lastName, company) {
    await this.newsletterCheckbox.check();
    await this.specialOffersCheckbox.check();

    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.companyInput.fill(company);
  }

  async enterAddressInformation(
    address,
    country,
    state,
    city,
    zipcode,
    mobile,
  ) {
    await this.addressInput.fill(address);

    await this.countryDropdown.selectOption(country);

    await this.stateInput.fill(state);

    await this.cityInput.fill(city);

    await this.zipcodeInput.fill(zipcode);

    await this.mobileNumberInput.fill(mobile);
  }

  async createAccount() {
    await this.createAccountButton.click();
  }

  async verifyAccountCreated() {
    await expect(this.accountCreatedHeading).toBeVisible();
  }

  async clickContinue() {
    await this.continueButton.click();
  }
}

export default SignupPage;
