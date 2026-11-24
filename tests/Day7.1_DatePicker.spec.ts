
import { test, expect, Page } from "@playwright/test";

async function dateSelector(
    month: string,
    day: string,
    year: string,
    page: Page,
    isFuture: boolean
) {

    while (true) {

        // Get current selected month
        const currentMonth = await page
            .locator(".ui-datepicker-month option:checked")
            .innerText();

        // Get current selected year
        const currentYear = await page
            .locator(".ui-datepicker-year option:checked")
            .innerText();

        console.log("Current Month:", currentMonth);
        console.log("Current Year:", currentYear);

        // Compare month and year
        if (currentMonth === month && currentYear === year) {
            break;
        }

        // Navigate to required month and year
        if (isFuture) {
            await page.locator(".ui-datepicker-next").click();
        }
        else {
            await page.locator(".ui-datepicker-prev").click();
        }
    }

    // Get all dates
    const allDates = await page
        .locator(".ui-datepicker-calendar td")
        .all();

    // Select required date
    for (const date of allDates) {

        const dateText = (await date.innerText()).trim();

        if (dateText === day) {

            await date.click();
            break;
        }
    }
}


test("DatePicker testcase2", async ({ page }) => {

    await page.goto("https://sdetqa.vercel.app/autoplay");

    // Click datepicker input
    const date2 = page.locator("input#datepicker2");

    await date2.click();

    // Required date
    const day = "17";
    const month = "Mar";
    const year = "2027";

    // Call dateSelector function
    await dateSelector(month, day, year, page, true);

    // Verify selected date
    console.log("Selected Date:", await date2.inputValue());

    await expect(date2).not.toHaveValue("");
await page.waitForTimeout(5000)
});
