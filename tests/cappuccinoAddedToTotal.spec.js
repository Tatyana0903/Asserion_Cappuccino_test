import { test, expect } from '@playwright/test';

test('Cappuccino cost is added to Total in Menu', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.getByTestId('Cappuccino').click();
  await expect(page.getByTestId('checkout')).toContainText('Total: $19.00');
});
// ToDo: Assert "Total" button conatins text 'Total: $19.00'
