
describe("Smoke Test",()=>{

    it("Login: User should able to login via API key  ",async()=>{

        const el1 = await driver.$("-ios class chain:**/XCUIElementTypeButton[`name == \"Add\"`]");
        await el1.click();
        const el2 = await driver.$("class name:XCUIElementTypeTextField");
        await el2.addValue("This is test from Saurabh");
        const el3 = await driver.$("accessibility id:Save");
        await el3.click();
        const el5 = await driver.$("-ios class chain:**/XCUIElementTypeOther[`name == \"Edit\"`]");
        await el5.click();
        const el6 = await driver.$("xpath:(//XCUIElementTypeImage[@name=\"remove\"])[2]");
        await el6.click();
        const el7 = await driver.$("-xpath:**/XCUIElementTypeStaticText[`name == \"Delete\"`]");
        await el7.click();
        

     
    });
    


 });