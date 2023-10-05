﻿// Lấy giá trị của một input : bỏ khoảng trắng 2 đầu
function getValue(id) {
    return document.getElementById(id).value.trim();
}
// Hiển thị lỗi
function showError(key, mess) {
    document.getElementById(key + '_error').innerHTML = mess;
}

//kiểm tra lỗi
function Id(obj) {
    var flag = true;
    //studentId
    var studentId = getValue('studentId');
    if (studentId.length < 10 || studentId.length > 10) {
        flag = false;
        showError('studentId', 'Mã sinh viên gồm 10 ký tự')
    }
    return flag;
};
function Name(obj) {
    var flag = true;
    //name
    var studentName = getValue('studentName');
    if (studentName == '' || studentName.length > 30) {
        flag = false;
        showError('studentName', 'Họ tên không rỗng và <30 ký tự')
    }
    return flag;
};

function Age(obj) {
    var flag = true;
    //age
    var age = getValue('age');
    if (age < 18) {
        flag = false;
        showError('age', 'Tuổi phải 18 trở lên')
    }
    return flag;
};

//ngoại ngữ
function languageChanged(obj) {
    var language = document.getElementById('show_language');
    var value = obj.value;
    if (value == Anh + Nhat) {
        language.innerHTML = "Anh và Nhật";
    }
    else if (value == Anh + Phap) {
        language.innerHTML = "Anh và Pháp";
    }
    else if (value == Phap + Nhat) {
        language.innerHTML = "Pháp và Nhật";
    }
    else if (value == Anh + Phap + Nhat) {
        language.innerHTML = "Anh Pháp và Nhật";
    }
};

//chuyên ngành
function majorChanged(obj) {
    var message = document.getElementById('show');
    var value = obj.value;
    if (value === 'hethong') {
        message.innerHTML = "Phân tích và thiết kế";
    }
    else if (value === 'phanmem') {
        message.innerHTML = "Lập trình";
    }
    else if (value === 'mangmaytinh') {
        message.innerHTML = "Quản lý mạng";
    }
};
function validate(obj) {
    var a = document.getElementById('anounce');
    if (Id(obj) && Name(obj) && Age(obj)) {
        a.innerHTML = 'Bạn đã đăng ký thành công';
    }
    else {
        a.innerHTML = 'Bạn phải nhập lại cho đúng'
    }
}