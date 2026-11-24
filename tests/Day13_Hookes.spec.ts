import{test,expect} from "@playwright/test"


test.beforeEach("BeforeEach", async()=>{

    console.log("This is a Before Each....")
})
test.afterEach("AfterEach", async ()=>{
    console.log("This is a After Each....")
})

test("Test 1", async () => {
    console.log("This is a Test1.....   ")
})
test("Test 2", async () => {
    console.log("This is a Test2.....   ")
})

test("Test 3", async () => {
    console.log("This is a Test3.....   ")
})
test("Test 4", async () => {
    console.log("This is a Test4.....   ")
})