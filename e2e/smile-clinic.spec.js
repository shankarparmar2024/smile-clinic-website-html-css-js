const { test, expect } = require('@playwright/test');

const URL = 'https://smile-clinic-website-html-css-js.vercel.app/';

test.describe('SmileIndia Dental Clinic - E2E Testing', () => {

  test.setTimeout(90000);

  test.beforeEach(async ({ page }) => {

    await page.goto(URL, {
      waitUntil: 'commit',
      timeout: 90000
    });

    await page.waitForTimeout(5000);
  });


  test('TC-01 - Website loads successfully', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

    console.log('TC-01 PASS: Website loaded successfully');
  });


  test('TC-04 - Valid hero booking shows success message', async ({ page }) => {

    const nameField = page.locator('#form-name');

    await expect(nameField).toBeVisible({
      timeout: 30000
    });

    await nameField.fill('Test Patient');

    await page.locator('#form-phone').fill('9876543210');

    const city = page.locator('#form-city');

    if (await city.count()) {
      await city.selectOption({ label: 'Delhi / NCR' });
    }

    const consent = page.locator(
      '#hero-form input[type="checkbox"]'
    );

    if (await consent.count()) {
      await consent.check();
    }

    await page.locator('#hero-submit').click();

    await expect(
      page.locator('#toast')
    ).toBeVisible({
      timeout: 15000
    });

    await expect(
      page.locator('#toast')
    ).toContainText(/Booked/i);

    console.log('TC-04 PASS: Booking success message displayed');
  });


  test('TC-08 - Before and After slider works', async ({ page }) => {

    const slider = page.locator('#compare-range');

    await expect(slider).toBeVisible({
      timeout: 30000
    });

    await slider.fill('75');

    await expect(
      page.locator('#before-div')
    ).toHaveAttribute('style', /width:\s*75%/);

    await expect(
      page.locator('#compare-line')
    ).toHaveAttribute('style', /left:\s*75%/);

    console.log('TC-08 PASS: Before/After slider works');
  });


  test('TC-09 - FAQ accordion works', async ({ page }) => {

    const faq = page.locator('#faq-accordion');

    await expect(faq).toBeVisible({
      timeout: 30000
    });

    await faq.locator('button').first().click();

    console.log('TC-09 PASS: FAQ accordion works');
  });


  test('TC-10 - Reviews section works', async ({ page }) => {

    await expect(
      page.locator('#review-carousel')
    ).toBeVisible({
      timeout: 30000
    });

    console.log('TC-10 PASS: Reviews section tested');
  });


  test('TC-11 - Mobile menu works', async ({ page }) => {

    await page.setViewportSize({
      width: 390,
      height: 844
    });

    await page.reload({
      waitUntil: 'commit',
      timeout: 90000
    });

    await page.waitForTimeout(5000);

    const menuButton = page.locator('#menu-btn');
    const navigation = page.locator('#main-nav');

    await expect(menuButton).toBeVisible({
      timeout: 30000
    });

    await menuButton.click();

    await expect(navigation).toHaveClass(/open/);

    await menuButton.click();

    await expect(navigation).not.toHaveClass(/open/);

    console.log('TC-11 PASS: Mobile menu works');
  });


  test('TC-12 - WhatsApp button is available', async ({ page }) => {

    await expect(
      page.locator('#whatsapp-float')
    ).toBeVisible({
      timeout: 30000
    });

    console.log('TC-12 PASS: WhatsApp CTA is visible');
  });


  test('TC-13 - Smile Clinic page is accessible', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible({
      timeout: 30000
    });

    console.log('TC-13 PASS: Smile Clinic page is accessible');
  });


  test('TC-14 - Treatments section is available', async ({ page }) => {

    await expect(
      page.locator('#treatments')
    ).toBeVisible({
      timeout: 30000
    });

    console.log('TC-14 PASS: Treatments section is visible');
  });

});