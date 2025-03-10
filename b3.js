let arr = [];
let choice;

do {
    console.log("1. Nhập mảng số nguyên");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó");
    console.log("4. Tính tổng và trung bình cộng của các số dương trong mảng");
    console.log("5. Đảo ngược mảng");
    console.log("6. Kiểm tra mảng có đối xứng không");
    console.log("7. Thoát chương trình");
    choice = +prompt("Nhập lựa chọn (1-7): ");
    switch(choice){
       case 1:;
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
            let max = arr[0];
            let index = 0;
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                    index = i;
                }
            }
            console.log("Phần tử lớn nhất:", max, "tại vị trí:", index);
       break;
       case 4:
            let sum = 0, count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > 0) {
                    sum += arr[i];
                    count++;
                }
            }
            let average = count > 0 ? sum / count : 0;
            console.log("Tổng các số dương:", sum);
            console.log("Trung bình cộng các số dương:", average);
        break;
        
       case 5:
            let reversedArr = [];
            for (let i = arr.length - 1; i >= 0; i--) {
                reversedArr.push(arr[i]);
            }
            console.log("Mảng sau khi đảo ngược:", reversedArr);
        break;
        
        case 6:
            let isSymmetric = true;
            for (let i = 0; i < arr.length / 2; i++) {
                if (arr[i] !== arr[arr.length - 1 - i]) {
                    isSymmetric = false;
                    break;
                }
            }
            if (isSymmetric) {
                console.log("Mảng là đối xứng.");
            } else {
                console.log("Mảng không đối xứng.");
            }
        break;
        default :
        console.log ("Lựa chọn không hợp lệ!! vui lòng chọn lại từ 1-7");
        }
    } while (choice !== 7);