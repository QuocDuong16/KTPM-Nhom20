const Puppeteer = require('puppeteer');
describe('Thanh toan test', () => {
    test('Them san pham vao gio hang', async () => {
        const browser = await Puppeteer.launch({
            // headless: true,
            headless: false,
            slowMo: 120,
            defaultViewport: null,
            args: ['--start-maximized']
        });
        const page = await browser.newPage();
        await page.goto(
            'http://localhost:8080/DoAn/'
        );

        // Them 3 san pham vao gio hang
        await page.waitForSelector(".themvaogio");
        await page.evaluate(() => {
            let sp = document.querySelectorAll(".themvaogio");
            for (let i = 0; i < 3; i++) {
                sp[i].click();
            }
        })
        // Nhan gio hang
        await page.waitForSelector(".cart");
        await page.click(".cart");

        await page.waitForSelector(".item-count-test");
        const products = await page.$$(".item-count-test");
        await page.waitForSelector(".soluong-test");
        const soluong = await page.$eval(".soluong-test", el => el.value);
        expect(products.length).toBe(3);
        expect(soluong).toBe("1");
        browser.close();
    }, 20000);

    test('Thanh toan khi chua dang nhap', async () => {
        const browser = await Puppeteer.launch({
            // headless: true,
            headless: false,
            slowMo: 120,
            defaultViewport: null,
            args: ['--start-maximized']
        });
        const page = await browser.newPage();
        await page.goto(
            'http://localhost:8080/DoAn/'
        );
        
        // Them san pham vao gio hang
        await page.waitForSelector(".themvaogio");
        await page.click(".themvaogio");
        // Nhan gio hang
        await page.waitForSelector(".cart");
        await page.click(".cart");

        // Nhan thanh toan
        await page.waitForSelector(".btn.btn-primary");
        await page.click(".btn.btn-primary");
        const text = await page.$eval("#swal2-content", el => el.textContent);
        expect(text).toBe("Bạn cần đăng nhập để mua hàng");
        browser.close();
    }, 20000);

    test('Dang nhap va thanh toan', async () => {
        const browser = await Puppeteer.launch({
            // headless: true,
            headless: false,
            slowMo: 120,
            defaultViewport: null,
            args: ['--start-maximized']
        });
        const page = await browser.newPage();
        await page.goto(
            'http://localhost:8080/DoAn/'
        );
        
        let usename = "NianD";
        let password = "123";

        // Dang nhap voi account NianD
        await page.waitForSelector(".member");
        await page.click(".member");
        await page.waitForSelector("input#username");
        await page.click("input#username");
        await page.type("input#username", usename);
        await page.waitForSelector("input#pass");
        await page.click("input#pass");
        await page.type("input#pass", password);
        await page.waitForSelector(".button.button-block");
        await page.click(".button.button-block");
        await page.keyboard.press("Enter");
        // Them san pham vao gio hang
        await page.waitForSelector(".themvaogio");
        await page.click(".themvaogio");
        // Nhan gio hang
        await page.waitForSelector(".cart");
        await page.click(".cart");
        // Nhan thanh toan
        await page.waitForSelector(".btn-primary");
        await page.click(".btn-primary");
        await page.waitForSelector("#btnXacNhan");
        await page.click("#btnXacNhan");
        const dongGiaoDienThanhToan = await page.$eval(".modal-content", (elem) => {
            return window.getComputedStyle(elem).getPropertyValue('display') !== 'none' && elem.offsetHeight ? false : true;
        });
        // Code
        expect(dongGiaoDienThanhToan).toBe(true);
        browser.close();
    }, 1000000);

    test('Xoa san pham trong gio hang', async () => {
        const browser = await Puppeteer.launch({
            // headless: true,
            headless: false,
            slowMo: 120,
            defaultViewport: null,
            args: ['--start-maximized']
        });
        const page = await browser.newPage();
        await page.goto(
            'http://localhost:8080/DoAn/'
        );

        // Them san pham vao gio hang
        await page.waitForSelector(".themvaogio");
        await page.click(".themvaogio"); // id # class .
        // Nhan gio hang
        await page.waitForSelector(".cart");
        await page.click(".cart");

        // Nhan thanh toan
        await page.waitForSelector(".fa.fa-trash");
        await page.click(".fa.fa-trash");
        await page.waitForSelector(".swal2-confirm.swal2-styled");
        await page.click(".swal2-confirm.swal2-styled"); // Nhan ok

        // Code
        await page.waitForSelector(".message-test");
        const text = await page.$eval(".message-test", el => el.textContent);
        expect(text.trim()).toBe("Giỏ hàng trống !!");
        browser.close();
    }, 20000);

    test('Tang giam so luong san pham trong gio hang', async () => {
        const browser = await Puppeteer.launch({
            // headless: true,
            headless: false,
            slowMo: 120,
            defaultViewport: null,
            args: ['--start-maximized']
        });
        const page = await browser.newPage();
        await page.goto(
            'http://localhost:8080/DoAn/'
        );

        // Them san pham vao gio hang
        await page.waitForSelector(".themvaogio");
        await page.click(".themvaogio");
        // Nhan gio hang
        await page.waitForSelector(".cart");
        await page.click(".cart");

        // Nhan tang so luong
        await page.waitForSelector(".fa.fa-plus");
        await page.click(".fa.fa-plus");
        await page.waitForSelector(".fa.fa-plus");
        await page.click(".fa.fa-plus");

        // Nhan giam so luong
        await page.waitForSelector(".fa.fa-minus");
        await page.click(".fa.fa-minus");
        await page.waitForSelector(".soluong-test");
        soluong = await page.$eval(".soluong-test", el => el.value);
        expect(soluong).toBe("2");
        browser.close();
    }, 1000000);

    test('Thay doi so luong trong o so luong', async () => {
        const browser = await Puppeteer.launch({
            // headless: true,
            headless: false,
            slowMo: 120,
            defaultViewport: null,
            args: ['--start-maximized']
        });
        const page = await browser.newPage();
        await page.goto(
            'http://localhost:8080/DoAn/'
        );
        let dataSoLuong = "10";

        // Them san pham vao gio hang
        await page.waitForSelector(".themvaogio");
        await page.click(".themvaogio");
        // Nhan gio hang
        await page.waitForSelector(".cart");
        await page.click(".cart");

        await page.waitForSelector(".soluong-test");
        await page.click(".soluong-test");
        await page.type(".soluong-test", dataSoLuong);
        await page.keyboard.press("Enter");
        

        soluong = await page.$eval(".soluong-test", el => el.value);
        expect(soluong).toBe("10");
        browser.close();
    }, 1000000);
})


/*
TC1
npm test -- bbthanhtoan.test.js -t 'Them san pham vao gio hang'
TC2
npm test -- bbthanhtoan.test.js -t 'Thanh toan khi chua dang nhap'
TC3
npm test -- bbthanhtoan.test.js -t 'Dang nhap va thanh toan'
TC4
npm test -- bbthanhtoan.test.js -t 'Xoa san pham trong gio hang'
TC5
npm test -- bbthanhtoan.test.js -t 'Tang giam so luong san pham trong gio hang'
TC6
npm test -- bbthanhtoan.test.js -t 'Thay doi so luong trong o so luong'
*/
