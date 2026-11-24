import { test, expect, Page } from "@playwright/test"


async function dateselector(page: Page, month: string, date: string, year: string,isFuture:boolean) {


    while (true) {
        const currentmonth = await page.locator('.ui-datepicker-month').innerText()
        const currentyear = await page.locator('.ui-datepicker-year').innerText()
        if (currentmonth === month && currentyear === year) {
            break;
        }
        if(isFuture){
           await page.locator('.ui-datepicker-next').click()
        }
        else{
            await page.locator('.ui-datepicker-prev').click()
        }
    }
    const alldates= await page.locator(".ui-datepicker-calendar td").all()
    for (let dt of alldates){
        const alltext=await dt.innerText()
        if(alltext===date){
            await dt.click()
        }
    }

}

test("Date validation", async ({ page }) => {

    await page.goto("https://sdetqa.vercel.app/autoplay")
    // Approach 1

    let date1 = page.locator("input#datepicker1")
    //    await date1.fill("11/03/2026")


    //   await page.waitForTimeout(5000)
    // Approach2

    await date1.click()

    const year = "2025"
    const month = "March"
    const date = "17"

    await dateselector(page, month, date, year,false)

    await page.waitForTimeout(5000)



})