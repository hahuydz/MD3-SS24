let arr=[];
let choice;
do {
    console.log("1. Nhập mảng");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm phần tử lớn nhất và nhỏ nhất");
    console.log("4. Tính tổng các phần tử");
    console.log("5. Tìm số lần xuất hiện của một phần tử");
    console.log("6. Sắp xếp mảng tăng dần");
    console.log("7. Thoát");
    choice = +prompt("Nhập lựa chọn (1-7): ");
    switch(choice){
        case 1:
            let arrNumbers = +prompt("Mời bạn nhập số lượng phần tử mảng: ");
           if (arrNumbers>0) {
            for(let i = 0;i < arrNumbers;i++){
                arr[i]=+prompt (`Nhập phần tử thứ ${i+1}`);
            }
           }
            break;
        case 2:
            console.log(`Danh sách các phần tử ${arr}`);
            break;
        case 3:
            if (arr.length === 0) {
                console.log("Mảng chưa có dữ liệu!");
            } else {
                let max = arr[0];
                let min = arr[0];
                for (let i = 1; i < arr.length; i++) {
                    if (arr[i] > max) {
                        max = arr[i];
                    }
                    if (arr[i] < min) {
                        min = arr[i];
                    }
                }
                console.log("Phần tử lớn nhất:", max);
                console.log("Phần tử nhỏ nhất:", min);
            }
            break;
        case 4:
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            console.log("Tổng các phần tử trong mảng:", sum); 
            break;
        case 5:
            let searchNum = +prompt("Nhập số cần tìm: ");
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === searchNum) {
                    count++;
                }
            }
            console.log(`Số ${searchNum} xuất hiện ${count} lần trong mảng.`);
            break;
        case 6:
            for (let i = 0; i < arr.length - 1; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    if (arr[i] > arr[j]) {
                        let temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
            }
            console.log("Mảng sau khi sắp xếp tăng dần:", arr);
            break;
        case 7:
            break;
        default :
            console.log ("Lựa chọn không hợp lệ!! vui lòng chọn lại từ 1-7");
    }
} while (choice !== 7);