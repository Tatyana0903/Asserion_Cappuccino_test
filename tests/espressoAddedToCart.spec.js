import { test, expect } from '@playwright/test';

test('Check Espresso correctly added to the Cart', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.getByTestId('Espresso').click();
  await page.getByLabel('Cart page').click();
  await page.waitForURL('https://coffee-cart.app/cart');
  // ToDo: Assert that the 'Espresso' text is visible in the Item column
  // ToDo: Assert that the '$10.00 x 1' text is present in the Unit column
  // ToDo: Assert that the '$10.00' text is present in the Total column
  // Tip: Use nth locator and locator('div')
});
