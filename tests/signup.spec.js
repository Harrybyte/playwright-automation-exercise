import { test } from "@playwright/test";
import HomePage from "../pages/HomePage";
import SignupPage from "../pages/SignupPage";
import { user } from "../testdata/users";

const { generateUser } = require("../testdata/users");

test("User can start the signup Process", async ({ page }) => {
  const testUser = generateUser();
  const homePage = new HomePage(page);
  const signupPage = new SignupPage(page);

  await homePage.open();
  await homePage.clickSignupLogin();

  await signupPage.signup(testUser.firstName, testUser.email);
  await signupPage.verifySignupPage();

  await signupPage.enterAccountInformation(testUser.password);

  await signupPage.selectDateOfBirth("10", "5", "1997");

  await signupPage.enterPersonalInformation("Harvinder", "Singh", "OpenAI");

  await signupPage.enterAddressInformation(
    testUser.address,
    testUser.country,
    testUser.state,
    testUser.city,
    testUser.zipcode,
    testUser.mobile,
  );

  await signupPage.createAccount();
  await signupPage.verifyAccountCreated();
  await signupPage.clickContinue();
});
