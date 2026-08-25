import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  // This expects the page to load successfully
  await expect(page).toHaveTitle(/Turbo|Document|Assistant/i);
});
