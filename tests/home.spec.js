import {test} from '@playwright/test';
import HomePage from '../pages/HomePage';

test('Verify Automation Exercise homepage loads', async ({page})=>{

    const homePage = new HomePage(page);
    await homePage.open();
    await homePage.verifyTitle();
    await homePage.verifyLogoIsVisible();
    await homePage.clickSignupLogin();
    await homePage.verifyLoginPage();

   
});

