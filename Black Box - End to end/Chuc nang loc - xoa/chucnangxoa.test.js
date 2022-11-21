const Puppeteer = require('puppeteer');

describe('TC03 Chuc nang xoa test', () => {
    // xoa san pham
    test('Xoa san pham', async () => {
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

        
        // them san pham
        await page.waitForSelector(".themvaogio");
        await page.click(".themvaogio");

        // vao gio hang 
        await page.waitForSelector(".fa.fa-shopping-cart");
        await page.click(".fa.fa-shopping-cart");

        // nhan nut xoa
        await page.waitForSelector(".fa.fa-trash");
        await page.click(".fa.fa-trash");

        // xac nhan xoa
        await page.waitForSelector(".swal2-confirm.swal2-styled");
        await page.click(".swal2-confirm.swal2-styled");

        // expected
        const text = await page.$eval(".message-test", el => el.textContent);
        expect(text.trim()).toBe("Giỏ hàng trống !!");

        browser.close();

    }, 20000);

    // huy xoa san pham
    test('TC04 Huy xoa san pham', async () => {
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

        
        // them san pham
        await page.waitForSelector(".themvaogio");
        await page.click(".themvaogio");

        // vao gio hang 
        await page.waitForSelector(".fa.fa-shopping-cart");
        await page.click(".fa.fa-shopping-cart");

        // nhan nut xoa
        await page.waitForSelector(".fa.fa-trash");
        await page.click(".fa.fa-trash");

        // xac huy nhan xoa
        await page.waitForSelector(".swal2-cancel.swal2-styled");
        await page.click(".swal2-cancel.swal2-styled");

        // expected
        await page.waitForSelector(".item-count-test");
        const text = await page.$eval(".item-count-test", el => el.textContent);
        expect(text.trim()).not.toBe("Giỏ hàng trống !!");

        browser.close();

    }, 50000);

    test('TC1 Xoa nhieu san pham', async () => {
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

        
        // them nhieu san pham
        await page.waitForSelector(".themvaogio");
        await page.click(".themvaogio");

        await page.waitForSelector(".tooltip");
        await page.evaluate(() => {
            document.querySelectorAll(".tooltip button")[1].click(); 
        });

        await page.waitForSelector(".tooltip");
        await page.evaluate(() => {
            document.querySelectorAll(".tooltip button")[2].click(); 
        });


        // vao gio hang 
        await page.waitForSelector(".fa.fa-shopping-cart");
        await page.click(".fa.fa-shopping-cart");

        // nhan nut xoa
        await page.waitForSelector(".btn.btn-danger");
        await page.click(".btn.btn-danger");

        // xac nhan xoa
        await page.waitForSelector(".swal2-confirm.swal2-styled");
        await page.click(".swal2-confirm.swal2-styled");

        // expected
        const text = await page.$eval(".message-test", el => el.textContent);
        expect(text.trim()).toBe("Giỏ hàng trống !!");

        browser.close();

    }, 20000);


    // huy xoa nhieu san pham
    test('TC2 Huy xoa nhieu san pham ', async () => {
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

        
        // them nhieu san pham
        await page.waitForSelector(".themvaogio");
        await page.click(".themvaogio");

        await page.waitForSelector(".tooltip");
        await page.evaluate(() => {
            document.querySelectorAll(".tooltip button")[1].click(); 
        });

        await page.waitForSelector(".tooltip");
        await page.evaluate(() => {
            document.querySelectorAll(".tooltip button")[2].click(); 
        });


        // vao gio hang 
        await page.waitForSelector(".fa.fa-shopping-cart");
        await page.click(".fa.fa-shopping-cart");

        // nhan nut xoa
        await page.waitForSelector(".btn.btn-danger");
        await page.click(".btn.btn-danger");

        // xac nhan huy xoa
        await page.waitForSelector(".swal2-cancel.swal2-styled");
        await page.click(".swal2-cancel.swal2-styled");

        // expected
        const text = await page.$eval(".item-count-test", el => el.textContent);
        expect(text.trim()).not.toBe("Giỏ hàng trống !!");

        browser.close();

    }, 20000);
})

//npm test -- chucnangxoa.test.js -t 'TC03 Xoa san pham'
//npm test -- chucnangxoa.test.js -t 'TC04 Huy xoa san pham'
//npm test -- chucnangxoa.test.js -t 'TC1 Xoa nhieu san pham' 
// npm test -- chucnangxoa.test.js -t 'TC2 Huy xoa nhieu san pham' 
