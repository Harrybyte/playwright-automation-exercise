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
})
