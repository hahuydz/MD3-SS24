let arr = [];
let choice;
let sum = 0;
do {
    console.log("1. Nhập mảng 2 chiều");
    console.log("2. Hiển thị mảng 2 chiều");
    console.log("3. Tính tổng các phần tử trong mảng");
    console.log("4. Tính tổng đường chéo chính");
    console.log("5. Tính tổng đường chéo phụ");
    console.log("6. Tính trung bình cộng của một hàng hoặc một cột");
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
        
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                sum += arr[i][j];
            }
        }
        console.log("Tổng các phần tử trong mảng:", sum);
   break;
    case 4:
       
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i][i];
        }
        console.log("Tổng đường chéo chính:", sum);
    break;
    
    case 5:
        
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i][arr.length - 1 - i];
        }
        console.log("Tổng đường chéo phụ:", sum);
    break;
    
    case 6:
        let option = prompt("Nhập 'row' để tính theo hàng hoặc 'col' để tính theo cột: ");
        if (option === "row") {
            let row = +prompt("Nhập số hàng (0 đến " + (arr.length - 1) + "): ");
            if (row >= 0 && row < arr.length) {
                let sum = 0;
                for (let j = 0; j < arr[row].length; j++) {
                    sum += arr[row][j];
                }
                console.log("Trung bình cộng hàng", row, "là:", sum / arr[row].length);
            } else {
                console.log("Hàng không hợp lệ.");
            }
        }
        else if (option === "col") {
            let col = +prompt("Nhập số cột (0 đến " + (arr[0].length - 1) + "): ");
            if (col >= 0 && col < arr[0].length) {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += arr[i][col];
                }
                console.log("Trung bình cộng cột", col, "là:", sum / arr.length);
            } else {
                console.log("Cột không hợp lệ.");
            }
        }
        else {
            console.log("Lựa chọn không hợp lệ.");
        }
     break;
 default :
        console.log ("Lựa chọn không hợp lệ!! vui lòng chọn lại từ 1-7");
        }
    } while (choice !== 7);
    