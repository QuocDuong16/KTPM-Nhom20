const Swal = require('./__mocks__/Swal')
// dungchung
function addToGioHang(masp) {
    var currentList = getListGioHang();

    if (!currentList) {
        currentList = [];
    }

    var daCo = false;
    for (var sp of currentList) {
        if (sp.masp == masp) {
            sp.soLuong++;
            daCo = true;
        }
    }

    if (!daCo) {
        currentList.push({
            masp: masp,
            soLuong: 1
        })
    }

    setListGioHang(currentList);
}
function getListGioHang() {
    return JSON.parse(localStorage.getItem('giohang'));
}

function setListGioHang(list) {
    localStorage.setItem('giohang', JSON.stringify(list));
}
// giohang
function xoaSanPhamTrongGioHang(masp, tensp) {
    Swal.fire({
        type: "question",
        title: "Xác nhận?",
        html: "Bạn có chắc muốn xóa sản phẩm <b style='color:red'>" + tensp + "</b> ?",
        grow: "row",
        cancelButtonText: 'Hủy',
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            var listProduct = getListGioHang();
            for (var i = 0; i < listProduct.length; i++) {
                if (listProduct[i].masp == masp) {
                    listProduct.splice(i, 1);
                    break;
                }
            }
            setListGioHang(listProduct);
        }
    });
}

// Cập nhật số lượng lúc nhập số lượng vào input
function capNhatSoLuongFromInput(inp, masp) {
    var soLuongMoi = Number(inp.value);
    if (!soLuongMoi || soLuongMoi <= 0) soLuongMoi = 1;

    var listProduct = getListGioHang();

    for (var p of listProduct) {
        if (p.masp == masp && p.soLuong > 0) {
            p.soLuong = soLuongMoi;
        }
    }

    setListGioHang(listProduct);
}

function tangSoLuong(masp) {
    var listProduct = getListGioHang();

    for (var p of listProduct) {
        if (p.masp == masp) {
            p.soLuong++;
        }
    }

    setListGioHang(listProduct);
}

function giamSoLuong(masp) {
    var listProduct = getListGioHang();

    for (var p of listProduct) {
        if (p.masp == masp && p.soLuong > 1) {
            p.soLuong--;
        }
    }
    setListGioHang(listProduct);
}

// npm i jest-environment-jsdom --save-dev
module.exports = {
    "testEnvironment": "jsdom"
}

module.exports = {
    addToGioHang: addToGioHang,
    getListGioHang: getListGioHang,
    xoaSanPhamTrongGioHang: xoaSanPhamTrongGioHang,
    capNhatSoLuongFromInput: capNhatSoLuongFromInput,
    tangSoLuong: tangSoLuong,
    giamSoLuong: giamSoLuong,
};