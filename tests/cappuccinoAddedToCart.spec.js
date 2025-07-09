import { test, expect } from '@playwright/test';

test('Cappuccino correctly added to the Cart', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.getByTestId('Cappuccino').click();
  await page.getByLabel('Cart page').click();
  await page.waitForURL('https://coffee-cart.app/cart');

  
  const cartLocator = page.getByRole('list').nth(1);
  const cartFirstLocator = cartLocator.getByRole('listitem').nth(1);
  const cartNameLocator = cartFirstLocator.locator('div').nth(0);
  const cartUnitLocator = cartFirstLocator.locator('div').nth(1);
  const cartTotal = cartFirstLocator.locator('div').nth(3);

  await expect(cartNameLocator).toContainText('Cappuccino');
  await expect(cartUnitLocator).toContainText('$19.00 x 1');
  await expect(cartTotal).toContainText('$19.00');




  
  // ToDo: Assert that the 'Cappuccino' text is visible in the Item column
  // ToDo: Assert that the '$19.00 x 1' text is present in the Unit column
  // ToDo: Assert that the '$19.00' text is present in the Total column
  // Tip: Use nth locator and locator('div')
});
