let arr = [];
let choice;

do {
    console.log("1. Nhập mảng số nguyên");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm các phần tử chẵn và lẻ");
    console.log("4. Tính trung bình cộng của mảng");
    console.log("5. Xóa phần tử tại vị trí chỉ định");
    console.log("6. Tìm phần tử lớn thứ hai trong mảng");
    console.log("7. Thoát");

    choice = +prompt("Nhập lựa chọn (1-7): ");

    switch(choice){
        case 1:
        arr = [];
        let n = +prompt("Nhập số lượng phần tử: ");
        for (let i = 0; i < n; i++) {
            arr[i] = +prompt("Nhập phần tử thứ " + (i + 1) + ": ");
        }
        console.log("Mảng đã nhập:", arr);
     
    break;
    case 2:
        console.log("Mảng hiện tại:", arr);
    break;
    
    case 3:
        let evenNumber = [] ;
        let oddNumber = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evenNumber.push(arr[i]);
            } else {
                oddNumber.push(arr[i]);
            }
        }
        console.log("Số chẵn:", evenNumber);
        console.log("Số lẻ:", oddNumber);
    break;
    case 4:
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        console.log("Trung bình cộng:", sum / arr.length);
    break;
    case 5:
        let index = +prompt("Nhập vị trí cần xóa (0 đến " + (arr.length - 1) + "): ");
        if (index >= 0 && index < arr.length) {
            for (let i = index; i < arr.length - 1; i++) {
                arr[i] = arr[i + 1];
            }
            arr.length -= 1;
            console.log("Mảng sau khi xóa:", arr);
        } else {
            console.log("Vị trí không hợp lệ.");
        }
    break;
    case 6:
        let max = arr[0], secondMax = -Infinity;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                secondMax = max;
                max = arr[i];
            } else if (arr[i] > secondMax && arr[i] !== max) {
                secondMax = arr[i];
            }
        }
        console.log("Phần tử lớn thứ hai:", secondMax);
    break;
    default :
            console.log ("Lựa chọn không hợp lệ!! vui lòng chọn lại từ 1-7");
    }
} while (choice !== 7);