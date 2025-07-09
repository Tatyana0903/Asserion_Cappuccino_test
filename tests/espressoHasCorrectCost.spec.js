import { test, expect } from '@playwright/test';

test('Espresso cup has correct cost', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  // ToDo: Assert "Espresso" cup conatins text '$10.00'
  // Tip: Use the .filter({ has: child })
});
