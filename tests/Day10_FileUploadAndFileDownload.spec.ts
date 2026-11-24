import{test,expect} from "@playwright/test"
import fs from "fs"

test("Upload a file", async ({page})=>{
await page.goto("https://sdetqa.vercel.app/autoplay")

const singlefileUploadtab= page.locator('#singleFileInput')
const uploadSingleFile = page.getByRole("button",{name:'Upload Single File'})
const singleFileStatus= page.locator("#singleFileStatus")

await singlefileUploadtab.setInputFiles("uploadFile/Amol.txt")
await uploadSingleFile.click()
await page.waitForTimeout(5000)
await expect (singleFileStatus).toHaveText(/Single file selected/)
})

test.only("FileDownload", async ({ page }) => {

    await page.goto("https://sdetqa.vercel.app/autoplay");

    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole("button", { name: 'Download File' }).click()
    ]);

    const downloadFilePath =
        `downloadFile/${download.suggestedFilename()}`;

    await download.saveAs(downloadFilePath);

    const filexits = fs.existsSync(downloadFilePath)
     expect(filexits).toBeTruthy()

     if(filexits){
        fs.unlinkSync(downloadFilePath)
     }
await page.waitForTimeout(5000)
});