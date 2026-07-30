import { test } from '@playwright/test';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

test('User cannot login with invalid credentials', async ({ page }) => {

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await homePage.open();
    await homePage.clickSignupLogin();

    await loginPage.login(
        'invalid@example.com',
        'wrongpassword'
    );
    await loginPage.verifyInvalidLoginError();
});