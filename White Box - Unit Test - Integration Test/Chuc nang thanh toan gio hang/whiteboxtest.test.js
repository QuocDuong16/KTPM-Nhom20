const { addToGioHang, getListGioHang, xoaSanPhamTrongGioHang, 
    capNhatSoLuongFromInput, tangSoLuong, giamSoLuong } = require('./whiteboxtest');

describe('thanh toan', () => {
    // 1 Test case 1 hàm addToGioHang
    test('Them san pham moi vao gio hang', () => {
        addToGioHang(1);
        addToGioHang(6);
        let result = getListGioHang();
        expect(result.length).toEqual(2);
    });

    // 2 Test case 2 hàm addToGioHang
    test('Them san pham da co trong gio hang', () => {
        let start = getListGioHang();
        addToGioHang(1);
        let result = getListGioHang();
        expect(start.length).toEqual(result.length);
        expect(result[0].soLuong).toEqual(2);
    });

    // 3 Test case 1 hàm xoaSanPhamTrongGioHang
    test('Xoa san pham co trong gio hang', async () => {
        addToGioHang(1);
        let start = getListGioHang();
        await xoaSanPhamTrongGioHang(1, "Iphone"); // gia su xac nhan xoa
        let result = getListGioHang();
        expect(start.length).toBeGreaterThan(result.length);
    });

    // 4 Test case 2 hàm xoaSanPhamTrongGioHang
    test('Xoa san pham khong co trong gio hang', async () => {
        let start = getListGioHang();
        await xoaSanPhamTrongGioHang(4, "Iphone"); // gia su xac nhan xoa
        let result = getListGioHang();
        expect(start.length).toEqual(result.length);
    });

    // 5 Test case 1 hàm capNhatSoLuongFromInput
    // Các test số lượng giả sử trong giỏ hàng chỉ có 1 sản phẩm với mã sản phẩm 6
    test('Tang so luong san pham da co trong gio hang', () => {
        // Giá trị nhập vào hàm là thẻ input và mã sản phẩm
        var inp = {value: 10}; // giả lập lấy value
        let start = getListGioHang();
        capNhatSoLuongFromInput(inp, 6);
        let result = getListGioHang();
        expect(start.length).toEqual(result.length);
        expect(result[0].soLuong).toEqual(Number(inp.value));
    });

    // 6 Test case 2 hàm capNhatSoLuongFromInput
    test('Tang so luong san pham voi du lieu khong dung', () => {
        // Giá trị nhập vào hàm là thẻ input và mã sản phẩm
        var inp = {value: -10 }; // giả lập lấy value
        let start = getListGioHang();
        capNhatSoLuongFromInput(inp, 6);
        let result = getListGioHang();
        expect(start.length).toEqual(result.length);
        expect(result[0].soLuong).toEqual(1);
    });

    // 7 Test case 3 hàm capNhatSoLuongFromInput
    test('Tang so luong san pham khong co trong gio hang', () => {
        // Giá trị nhập vào hàm là thẻ input và mã sản phẩm
        var inp = {value: 10}; // giả lập lấy value
        let start = getListGioHang();
        capNhatSoLuongFromInput(inp, 1);
        let result = getListGioHang();
        expect(start.length).toEqual(result.length);
        expect(result[0].soLuong).toEqual(1);
    });

    // 8 Test case 1 hàm tangSoLuong
    test('Tang 1 so luong san pham da co trong gio hang', () => {
        let start = getListGioHang();
        tangSoLuong(6);
        let result = getListGioHang();
        expect(start.length).toEqual(result.length);
        expect(result[0].soLuong).toEqual(Number(start[0].soLuong + 1));
    });

    // 9 Test case 2 hàm tangSoLuong
    test('Tang 1 so luong san pham khong co trong gio hang', () => {
        let start = getListGioHang();
        tangSoLuong(1);
        let result = getListGioHang();
        expect(start.length).toEqual(result.length);
        expect(start[0].soLuong).toEqual(result[0].soLuong);
    });

    // 10 Test case 1 hàm giamSoLuong
    test('Giam 1 so luong san pham da co trong gio hang', () => {
        let start = getListGioHang();
        giamSoLuong(6);
        let result = getListGioHang();
        expect(start.length).toEqual(result.length);
        expect(result[0].soLuong).toEqual(Number(start[0].soLuong - 1));
    });

    // 11 Test case 2 hàm giamSoLuong
    test('Giam 1 so luong san pham khong co trong gio hang', () => {
        let start = getListGioHang();
        giamSoLuong(1);
        let result = getListGioHang();
        expect(start.length).toEqual(result.length);
        expect(start[0].soLuong).toEqual(result[0].soLuong);
    });

    // 12 Test case 3 hàm giamSoLuong
    test('Giam 1 so luong san pham da co trong gio hang khi san pham chi co 1', () => {
        let start = getListGioHang();
        // Đặt số lượng mã 6 về 1
        var inp = {value: 1};
        capNhatSoLuongFromInput(inp, 6);
        giamSoLuong(6);
        let result = getListGioHang();
        expect(start.length).toEqual(result.length);
        expect(start[0].soLuong).toEqual(result[0].soLuong);
    });

})
/*
npm test -- whiteboxtest.test.js
*/
