const Puppeteer = require('puppeteer');
describe('Tìm kiem test', () => {
    test('Tim Kiem', async () => {
        const browser = await Puppeteer.launch({
            // headless: true,
            headless: false,
            slowMo: 100,
            defaultViewport: null,
            args: ['--start-maximized']
        });
        const page = await browser.newPage();
        await page.goto(
            'http://localhost/DoAn/'
        );
        //Kiểm tra chức năng tìm kiếm sản phẩm với đúng với nội dung
        let search_search = "Iphone";
        
        await page.waitForSelector(".autocomplete");
        await page.click(".autocomplete");
        await page.waitForSelector("input#search-box");
        await page.click("input#search-box");
        await page.type("input#search-box", search_search);
        
        await page.waitForSelector(".fa.fa-search");
        await page.click(".fa.fa-search");
        //Kiểm trả kết quả tìm kiếm không nhập giá trị
        let search_empty = "";
        await page.waitForSelector(".autocomplete");
        await page.click(".autocomplete");
        await page.waitForSelector("input#search-box");
        await page.click("input#search-box");
        await page.type("input#search-box", search_empty);
        await page.waitForSelector(".fa.fa-search");
        await page.click(".fa.fa-search");
        await page.waitForSelector(".fa.fa-arrow-down");
        await page.click(".fa.fa-arrow-down");
        //Kiểm tra kết quả tìm kiếm có chặn SQL injection 
        let search_sql_injection = "<h1>Iphone</h1>";
        await page.waitForSelector(".autocomplete");
        await page.click(".autocomplete");
        await page.waitForSelector("input#search-box");
        await page.click("input#search-box");
        await page.type("input#search-box", search_sql_injection);
        await page.waitForSelector(".fa.fa-search");
        await page.click(".fa.fa-search");
        await page.waitForSelector(".fa.fa-arrow-down");
        await page.click(".fa.fa-arrow-down");
        //Kiểm tra kết quả tìm kiếm với dữ liệu là dấu cách
        let search_space = " Iphone ";
        await page.waitForSelector(".autocomplete");
        await page.click(".autocomplete");
        await page.waitForSelector("input#search-box");
        await page.click("input#search-box");
        await page.type("input#search-box", search_space);
        await page.waitForSelector(".fa.fa-search");
        await page.click(".fa.fa-search");
        await page.waitForSelector(".fa.fa-arrow-down");
        await page.click(".fa.fa-arrow-down");
        //Kiểm tra kết quả tìm kiếm với dữ liệu là một số
        let search_number = "12";
        await page.waitForSelector(".autocomplete");
        await page.click(".autocomplete");
        await page.waitForSelector("input#search-box");
        await page.click("input#search-box");
        await page.type("input#search-box", search_number);
        await page.waitForSelector(".fa.fa-search");
        await page.click(".fa.fa-search");
        //Kiểm tra kết quả tìm kiếm với dữ liệu không hợp lệ là lý tự đặc biệt
        let search_speacial = "!@#$%%*";
        await page.waitForSelector(".autocomplete");
        await page.click(".autocomplete");
        await page.waitForSelector("input#search-box");
        await page.click("input#search-box");
        await page.type("input#search-box", search_speacial);
        await page.waitForSelector(".fa.fa-search");
        await page.click(".fa.fa-search");
        await page.waitForSelector(".fa.fa-arrow-down");
        await page.click(".fa.fa-arrow-down");

        //Kiểm trả kết quả tìm kiếm với giá trị siêu dài
        /*
        let search_too_long = "abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc";
        await page.waitForSelector(".autocomplete");
        await page.click(".autocomplete");
        await page.waitForSelector("input#search-box");
        await page.click("input#search-box");
        await page.type("input#search-box", search_too_long);
        
        await page.waitForSelector(".fa.fa-search");
        await page.click(".fa.fa-search");
        */
        
        const dongGiaoDienTimkiem = await page.$eval(".modal-content", (elem) => {
            return window.getComputedStyle(elem).getPropertyValue('display') !== 'none' && elem.offsetHeight ? false : true;
        });
        // Code
        expect(dongGiaoDienTimkiem).toBe(true);
        browser.close();
    }, 1500000);
})

/*
npm test -- timkiem.test.js -t 'Tim Kiem'
*/