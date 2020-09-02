// Bài 1. Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false
// - Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra

// Ví dụ: checkStringExist("i love you", "you") => true

// checkStringExist("i love you", "hate") => false
function checkStringExist(str, substr) {
    if (str.indexOf(substr) != -1) {
        return true
    } else {
        return false
    }
}
console.log(checkStringExist("i love you", "you"))

// Bài 2. Viết hàm rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. 
// Ví dụ: shortenString('Xin chào các bạn') => Kết quả trả về là 'Xin chào...'
function shortenString(str) {
    if (str.slice(0, 8)) {
        return str.slice(0, 8) + '...'
    }
}
console.log(shortenString('Xin chào các bạn'))

// Bài 3. Viết hàm có tác dụng biến 1 chuỗi thành chỉ viết hoa từ đầu tiên. 
// Ví dụ: capitalizeString('chÀo MừnG đẾn với techMaster') => Kết quả trả về là 'Chào Mừng Đến Với Techmaster'
function capitalizeString(str) {
    var arr = str.split(' ')
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    return (arr.join(' '))
}
console.log(capitalizeString('chÀo MừnG đẾn với techMaster'))

// Bài 4. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần.
function huge(str) {
    let h = ('')
    for (var i = 0; i < 10; i++) {
        h = h + str
    }
    return h
}
console.log(huge('fas '))

// Bài 5. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang. 
// Ví dụ: repeatString('a') => Kết quả trả về là 'a-a-a-a-a-a-a-a-a-a'
function repeatString(str) {
    let h = ('')
    for (var i = 0; i < 10; i++) {
        h = h + '-' + str
    }
    return h.slice(1)
}
console.log(repeatString('a'))

// Bài 6. Cho 1 chuỗi và 1 số nguyên n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang. 
// Ví dụ: repeatString('a', 5) => Kết quả trả về là 'a-a-a-a-a'
function repString(str, n) {
    let h = ('')
    for (var i = 0; i < n; i++) {
        h = h + '-' + str
    }
    return h.slice(1)
}
console.log(repString('a', 5))

// Bài 7. Viết hàm đảo ngược chuỗi.Viết dunction với đầu vào là 1 chuỗi string.Trả về chuỗi đảo ngược của chuỗi đó
// Ví dụ: reverseString('Hello') => Kết quả trả về là 'olleH'
function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}
console.log(reverseString("Hello"))

// Bài 8. Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false. 
// Ví dụ 'Race car' trả về true, 'hello world' trả về false.
function revString(str) {
    for (var i = 0; i < str.length; i++) {

    }
}