import { test, expect } from '@playwright/test';

test('Espresso cost is added to Total on menu page', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.getByTestId('Espresso').click();
  // ToDo: Assert "Total" button conatins text 'Total: $10.00'
});
