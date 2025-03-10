let arr = [];
let choice;
do {
    console.log("1. Nhập mảng 2 chiều");
    console.log("2. Hiển thị mảng 2 chiều");
    console.log("3. Tính tổng các phần tử trong mảng");
    console.log("4. Tìm phần tử lớn nhất và chỉ số của nó");
    console.log("5. Tính trung bình cộng của một hàng");
    console.log("6. Đảo ngược các hàng trong mảng");
    console.log("7. Thoát");
    choice = +prompt("Nhập lựa chọn (1-7): ");
    switch(choice){
   case 1:
        let rows = +prompt("Nhập số hàng: ");
        let cols = +prompt("Nhập số cột: ");
        arr = [];
        for (let i = 0; i < rows; i++) {
            arr[i] = [];
            for (let j = 0; j < cols; j++) {
                arr[i][j] = +prompt("Nhập phần tử [" + i + "][" + j + "]: ");
            }
        }
        console.log("Mảng đã nhập!");
    break;
   case 2:
        console.log("Mảng 2 chiều:");
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i].join(" "));
        }
    break;
   case 3:
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                sum += arr[i][j];
            }
        }
        console.log("Tổng các phần tử trong mảng:", sum);
    break;
    case 4:
        let max = arr[0][0];
        let maxRow = 0, maxCol = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i][j] > max) {
                    max = arr[i][j];
                    maxRow = i;
                    maxCol = j;
                }
            }
        }
        console.log("Phần tử lớn nhất:", max, "tại vị trí [" + maxRow + "][" + maxCol + "]");
    break;
    case 5:
        let row = +prompt("Nhập số hàng để tính trung bình (0 đến " + (arr.length - 1) + "): ");
        if (row >= 0 && row < arr.length) {
            let sum = 0;
            for (let j = 0; j < arr[row].length; j++) {
                sum += arr[row][j];
            }
            let average = sum / arr[row].length;
            console.log("Trung bình cộng hàng", row, "là:", average);
        } else {
            console.log("Hàng không hợp lệ.");
        }
    break
   case 6:
        let reversedArr = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            reversedArr.push(arr[i]);
        }
        arr = reversedArr;
        console.log("Mảng sau khi đảo ngược hàng:");
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i].join(" "));
        }
    break;
    default :
        console.log ("Lựa chọn không hợp lệ!! vui lòng chọn lại từ 1-7");
        }
    } while (choice !== 7);