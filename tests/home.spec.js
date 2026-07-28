import {test, expect} from '@playwright/test';
test('Verify Automation Exercise homepage loads', async ({page})=>{

    await page.goto('/');
    await expect(page).toHaveTitle(/Automation Exercise/);

});
