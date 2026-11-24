import{ test, expect} from "@playwright/test"

test("test case name", async ({page})=>
{
await page.goto("https://sdetqa.vercel.app/autoplay")

await page.mouse.wheel(0,700)

await page.waitForTimeout(5000)
}
)