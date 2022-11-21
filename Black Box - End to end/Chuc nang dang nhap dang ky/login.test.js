const Puppeteer = require('puppeteer');
const { boolean } = require('webidl-conversions');

describe('login test', () => {
    test('login voi du lieu sai', async() => { // ten test case
        // hien trang web ao
        const browser = await Puppeteer.launch({
            // headless: true,
            headless: false,
            slowMo: 120,
            defaultViewport: null,
            args: ['--start-maximized']
        });
        const page = await browser.newPage();
        await page.goto(
            'http://localhost/DoAn/'
        );
        
        let usename = "congdang102@";
        let password = "123";

        await page.waitForSelector(".member");
        await page.click(".member");
        await page.waitForSelector("#username");
        await page.click("#username");
        await page.type("#username", usename);
        await page.waitForSelector("#pass");
        await page.click("#pass");
        await page.type("#pass", password);
        //await page.waitForSelector(".signup");
        //await page.click(".signup");
        await page.waitForSelector(".button.button-block");
        await page.click(".button.button-block");
        const text = await page.$eval(".swal2-title", el => el.textContent);
        expect(text).toBe("Tên tài khoản hoăc mật khẩu không đúng");
        browser.close();
    }, 100000);
    test('signup voi Ho la number', async() => { // ten test case
        // hien trang web ao
        const browser = await Puppeteer.launch({
            // headless: true,
            headless: false,
            slowMo: 120,
            defaultViewport: null,
            args: ['--start-maximized']
        });
        const page = await browser.newPage();
        await page.goto(
            'http://localhost/DoAn/'
        );
        
        let Ho= "12341";
        let Ten = "Cong";
        let Sodienthoai = "0343754375";
        let Email = "congdang102@gmail.com";
        let DiaChi = "SaiGon";
        let Userame = "Congdang102";
        let Password = "congdang"

        await page.waitForSelector(".member");
        await page.click(".member");
        await page.waitForSelector(".signup");
        await page.click(".signup");
        await page.waitForSelector("#ho");
        await page.click("#ho");
        await page.type("#ho", Ho);
        await page.waitForSelector("#ten");
        await page.click("#ten");
        await page.type("#ten", Ten);
        await page.waitForSelector("#sdt");
        await page.click("#sdt");
        await page.type("#sdt", Sodienthoai);
        await page.waitForSelector("#email");
        await page.click("#email");
        await page.type("#email", Email);
        await page.waitForSelector("#diachi");
        await page.click("#diachi");
        await page.type("#diachi", DiaChi);
        //Nhap username
        await page.waitForSelector("#newUser");
        await page.click("#newUser");
        await page.type("#newUser", Userame);
        //nhap pass
        await page.waitForSelector("#newPass");
        await page.click("#newPass");
        await page.type("#newPass", Password);
        //nhan dang ki
        await page.waitForSelector(".button.button-block2");
        await page.click(".button.button-block2");
        const text = await page.$eval(".swal2-title", el => el.textContent);
        expect(text).toBe("Đăng kí không thành công Congdang102");

        browser.close();
    }, 100000);
    test('signup voi Ten la number', async() => { // ten test case
        // hien trang web ao
        const browser = await Puppeteer.launch({
            // headless: true,
            headless: false,
            slowMo: 120,
            defaultViewport: null,
            args: ['--start-maximized']
        });
        const page = await browser.newPage();
        await page.goto(
            'http://localhost/DoAn/'
        );
        
        let Ho= "Dang";
        let Ten = "123";
        let Sodienthoai = "0343754375";
        let Email = "congdang102@gmail.com";
        let DiaChi = "SaiGon";
        let Userame = "Congdang102";
        let Password = "congdang"

        await page.waitForSelector(".member");
        await page.click(".member");
        await page.waitForSelector(".signup");
        await page.click(".signup");
        await page.waitForSelector("#ho");
        await page.click("#ho");
        await page.type("#ho", Ho);
        await page.waitForSelector("#ten");
        await page.click("#ten");
        await page.type("#ten", Ten);
        await page.waitForSelector("#sdt");
        await page.click("#sdt");
        await page.type("#sdt", Sodienthoai);
        await page.waitForSelector("#email");
        await page.click("#email");
        await page.type("#email", Email);
        await page.waitForSelector("#diachi");
        await page.click("#diachi");
        await page.type("#diachi", DiaChi);
        await page.waitForSelector("#newUser");
        await page.click("#newUser");
        await page.type("#newUser", Userame);
        await page.waitForSelector("#newPass");
        await page.click("#newPass");
        await page.type("#newPass", Password);
        await page.waitForSelector(".button.button-block");
        await page.click(".button.button-block");
        const text = await page.$eval(".swal2-title", el => el.textContent);
        expect(text.trim()).toBe("Đăng kí không thành công Congdang102");

        browser.close();
    }, 100000);
    test('signup voi SDT la text', async() => { // ten test case
        // hien trang web ao
        const browser = await Puppeteer.launch({
            // headless: true,
            headless: false,
            slowMo: 120,
            defaultViewport: null,
            args: ['--start-maximized']
        });
        const page = await browser.newPage();
        await page.goto(
            'http://localhost/DoAn/'
        );
        
        let Ho= "Dang";
        let Ten = "Cong";
        let Sodienthoai = "cong";
        let Email = "congdang102@gmail.com";
        let DiaChi = "SaiGon";
        let Userame = "Congdang102";
        let Password = "congdang"

        await page.waitForSelector(".member");
        await page.click(".member");
        await page.waitForSelector(".signup");
        await page.click(".signup");
        await page.waitForSelector("#ho");
        await page.click("#ho");
        await page.type("#ho", Ho);
        await page.waitForSelector("#ten");
        await page.click("#ten");
        await page.type("#ten", Ten);
        await page.waitForSelector("#sdt");
        await page.click("#sdt");
        await page.type("#sdt", Sodienthoai);
        await page.waitForSelector("#email");
        await page.click("#email");
        await page.type("#email", Email);
        await page.waitForSelector("#diachi");
        await page.click("#diachi");
        await page.type("#diachi", DiaChi);
        await page.waitForSelector("#newUser");
        await page.click("#newUser");
        await page.type("#newUser", Userame);
        await page.waitForSelector("#newPass");
        await page.click("#newPass");
        await page.type("#newPass", Password);
        await page.waitForSelector(".button.button-block");
        await page.click(".button.button-block");
        const text = await page.$eval(".swal2-title", el => el.textContent);
        expect(text.trim()).toBe("Đăng kí không thành công Congdang102");
        browser.close();
    }, 100000);
    //TC5
    test('login voi thieu du lieu', async() => { // ten test case
        // hien trang web ao
        const browser = await Puppeteer.launch({
            // headless: true,
            headless: false,
            slowMo: 120,
            defaultViewport: null,
            args: ['--start-maximized']
        });
        const page = await browser.newPage();
        await page.goto(
            'http://localhost/DoAn/'
        );
        
        let usename = "congdang102@";
        let password = "123";

        await page.waitForSelector(".member");
        await page.click(".member");
        await page.waitForSelector(".button.button-block");
        await page.waitForSelector("#username");
        await page.click("#username");
        await page.type("#username", usename);
        const dongGiaoDienThanhToan= await page.evaluate(() => {
            
            document.querySelector("input#pass").addEventListener('invalid', (e) => {
                
            })
            document.querySelector(".button.button-block").click();
        })
        expect(dongGiaoDienThanhToan).toBe(undefined);
        browser.close();
    }, 100000);
});
/*
TC1:
npm test -- login.test.js -t 'login voi du lieu sai'
TC2:
npm test -- login.test.js -t 'signup voi Ho la number'
TC3:
npm test -- login.test.js -t 'signup voi ten la number'
TC4:
npm test -- login.test.js -t 'signup voi SDT la text'
TC5
npm test -- login.test.js -t 'login voi thieu du lieu'
*/