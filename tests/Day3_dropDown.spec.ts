import { test, expect } from "@playwright/test"

const url = "https://sdetqa.vercel.app/autoplay"

test.beforeEach(async ({ page }) => {
    await page.goto(url)
})

test("validate the url", async ({ page }) => {
    const allcountry = page.locator('#country')
    await expect(allcountry).toBeVisible()
    await expect(allcountry).toHaveValue('india')

    // selec dropDown value by label
    await allcountry.selectOption({ label: 'USA' })
    await expect(allcountry).toHaveValue('usa')
    // select dropdown by value
    await allcountry.selectOption({ value: 'uk' })
    await expect(allcountry).toHaveValue('uk')


    // select dropdown by option
    await allcountry.selectOption({ index: 3 })
    await expect(allcountry).toHaveValue('germany')


    // Get all dropdown option text
    const countries = allcountry.locator('option');
    await expect(countries).toHaveCount(5)

    const alltest = await countries.allTextContents()
    expect(alltest).toContain('USA')

    // Print all options
    console.log(alltest);
    await page.waitForTimeout(5000)
})


test.only("multiSelectOption", async ({ page }) => {

    const multiSelectDropdown = page.locator('#colors');

    await expect(multiSelectDropdown).toBeVisible();

    await multiSelectDropdown.selectOption([
        { label: "Red" },
        { label: "Green" },
        { label: "Yellow" }
    ]);

    // Validate selected values
    await expect(multiSelectDropdown).toHaveValues([
        "red",
        "green",
        "yellow"
    ]);

    // Get all options
    const allColors = await multiSelectDropdown
        .locator('option')
        .allTextContents();

    console.log(allColors);

    expect(allColors).toContain("Green");
});
