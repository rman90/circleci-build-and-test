const { test, expect } = require('@playwright/test');

test('button click shows new text', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080');
  await page.click('#showText');
  await expect(page.locator('#message')).toHaveText('Hello from CircleCI!');
});
