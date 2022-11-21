
const Puppeteer = require('puppeteer');

describe('Chuc nang loc test', () => {
    // loc san pham
    test('Loc san pham theo giam gia', async () => {
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


        //
        await page.waitForSelector(".promosFilter.dropdown");
        await page.click(".promosFilter.dropdown"); // Chọn loại bộ lọc
        await page.evaluate(() => {
            // Thay .promosFilter.dropdown thành class của loại bộ lọc
            document.querySelectorAll(".promosFilter.dropdown .dropdown-content a")[1].click(); 
            // Số [1] tương ứng với các item của dropdown như (0: không khuyến mãi, 1: giảm giá,...)
        });

        browser.close();

        

    }, 20000);

    // loc san pham
    test('Loc san pham theo hai sao', async () => {
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


        //
        await page.waitForSelector(".starFilter.dropdown");
        await page.click(".starFilter.dropdown"); // Chọn loại bộ lọc
        await page.evaluate(() => {
            // Thay .promosFilter.dropdown thành class của loại bộ lọc
            document.querySelectorAll(".starFilter.dropdown .dropdown-content a")[2].click(); 
            // Số [1] tương ứng với các item của dropdown như (0: 0 sao, 1: 1 sao,...)
        });

        browser.close();

        

    }, 20000);
})

//npm test -- chucnangloc.test.js -t 'Loc san pham theo giam gia'
//npm test -- chucnangloc.test.js -t 'Loc san pham theo hai sao' starFilter dropdown