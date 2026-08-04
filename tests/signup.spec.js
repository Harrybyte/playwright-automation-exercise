import {test} from '@playwright/test'
import HomePage from '../pages/HomePage';
import SignupPage from '../pages/SignupPage';

const uniqueEmail = `harry${Date.now()}@gmail.com`;

test('User can start the signup Process', async({page})=>{

    const homePage = new HomePage(page);
    const signupPage = new SignupPage(page);

    await homePage.open();
    await homePage.clickSignupLogin();

    await signupPage.signup('Harvinder',uniqueEmail)
    await signupPage.verifySignupPage();

    await signupPage.enterAccountInformation('Password@123');

await signupPage.selectDateOfBirth(
    '10',
    '5',
    '1997'
);

await signupPage.enterPersonalInformation(
    'Harvinder',
    'Singh',
    'OpenAI'
);

await signupPage.enterAddressInformation(
    'Noida Sector 62',
    'India',
    'Uttar Pradesh',
    'Noida',
    '201301',
    '9876543210'
);

await signupPage.createAccount();
await signupPage.verifyAccountCreated();
await signupPage.clickContinue();
})
