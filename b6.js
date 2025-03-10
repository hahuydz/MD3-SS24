let chuoiNhap = "";
let luaChon = "";

while (luaChon !== "7") {
    console.log("\n===== MENU =====");
    console.log("1. Nhập chuỗi");
    console.log("2. Hiển thị chuỗi");
    console.log("3. Tính độ dài của chuỗi");
    console.log("4. Đếm số lần xuất hiện của một ký tự");
    console.log("5. Kiểm tra chuỗi có phải là chuỗi đối xứng không");
    console.log("6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ");
    console.log("7. Thoát chương trình");
    
    luaChon = prompt("Chọn một chức năng: ");

    switch (luaChon) {
        case "1":
            chuoiNhap = prompt("Nhập chuỗi: ");
            break;
        case "2":
            console.log("Chuỗi hiện tại: ", chuoiNhap || "(Chưa có chuỗi)");
            break;
        case "3":
            console.log("Độ dài của chuỗi: ", chuoiNhap.length);
            break;
        case "4":
            let kyTuDem = prompt("Nhập ký tự cần đếm: ");
            let dem = 0;
            for (let i = 0; i < chuoiNhap.length; i++) {
                if (chuoiNhap[i] === kyTuDem) {
                    dem++;
                }
            }
            console.log(`Số lần xuất hiện của '${kyTuDem}': `, dem);
            break;
        case "5":
            let laDoiXung = true;
            for (let i = 0; i < Math.floor(chuoiNhap.length / 2); i++) {
                if (chuoiNhap[i] !== chuoiNhap[chuoiNhap.length - 1 - i]) {
                    laDoiXung = false;
                    break;
                }
            }
            console.log(laDoiXung ? "Chuỗi là đối xứng" : "Chuỗi không phải là đối xứng");
            break;
        case "6":
            let tuArray = chuoiNhap.split(" ");
            for (let i = 0; i < tuArray.length; i++) {
                if (tuArray[i].length > 0) {
                    tuArray[i] = tuArray[i][0].toUpperCase() + tuArray[i].slice(1);
                }
            }
            console.log("Chuỗi sau khi chuyển đổi: ", tuArray.join(" "));
            break;
        case "7":
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng thử lại.");
    }
}