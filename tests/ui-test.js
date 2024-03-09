const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    // Navigate to the dashboard page
    console.log('Navigating to the dashboard page...');
    await page.goto('http://localhost:3000');

    // Wait for the "Go to List" button to appear
    console.log('Waiting for the "Go to List" button...');
    await page.waitForSelector('button.btn-primary', { visible: true });

    // Click on the "Go to List" button
    console.log('Clicking on the "Go to List" button...');
    await page.click('button.btn-primary');

    // Wait for the "/list" page to load
    console.log('Waiting for the "/list" page to load...');
    await page.goto('http://localhost:3000/list');  

    // Wait for the button on the "/list" page to be visible
    console.log('Waiting for the button on the "/list" page...');
    await page.waitForSelector('button.btn-warning', { visible: true });

    console.log('UI test passed successfully!');
  } catch (error) {
    console.error('Error during UI test:', error);
  } finally {
    await browser.close();
  }
})();
