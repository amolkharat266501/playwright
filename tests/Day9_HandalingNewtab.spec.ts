import { test, expect } from "@playwright/test";

test("Handling new tab", async ({ page }) => {

    await page.goto("https://sdetqa.vercel.app/autoplay");
//This line waits for a new tab to open.
    const newPagePromise = page.waitForEvent('popup');

    await page.getByRole("button", { name: 'New Tab' }).click();
    
//This line captures the newly opened tab and stores it in the newPage variable
    const newPage = await newPagePromise;

    // Perform actions on new tab

    await newPage.waitForLoadState();

    console.log(await newPage.title());

    console.log( newPage.url());

    // Example validations
    await expect(newPage).toHaveURL("https://playwright.dev/");

    // Take screenshot
    await newPage.screenshot({ path: 'newTab.png' });

    // Close new tab
    await newPage.close();

});

test("handaling new tab case 2",  async ({browser})=>{
    const context= await browser.newContext()
    const page= await context.newPage()

    await page.goto("https://sdetqa.vercel.app/autoplay")

    const [newWindow]= await Promise.all([
        context.waitForEvent('page'),
        page.getByRole("button", { name: 'New Tab' }).click()
    ])
    console.log(await newWindow.title())


})