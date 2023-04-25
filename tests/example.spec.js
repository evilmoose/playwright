import { test, expect } from '@playwright/test';

test("Simple basic test", async ({ page }) => {
    await page.goto('https://example.com/');    // Load web site
    
    const pageTitle = await page.locator('h1'); // Store element into a variable

    await expect(pageTitle).toContainText('Example Domain');    // Called the stored element to use 'expect' funtion.
});

test("Clicking on Elements", async ({ page }) => {
    await page.goto("https://www.oreilly.com/");
    await page.click("#nav-signIn");
    await page.click('text=Continue');

    const errorMessage = await page.locator('.orm-Input-errorTxt');
    await expect(errorMessage).toContainText('Invalid email address.');

})