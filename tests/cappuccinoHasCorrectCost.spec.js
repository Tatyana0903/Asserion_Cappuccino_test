import { test, expect } from '@playwright/test';

test('Cappuccino cup has correct cost', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  const checkCappucino = page.getByRole('heading').filter({ hasText: 'Cappuccino' });
  await expect(checkCappucino).toContainText('$19.00');
  // ToDo: Assert "Cappuccino" cup conatins text '$19.00'
  // Tip: Use the .filter({ has: child })
});
