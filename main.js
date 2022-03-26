var arr = [];
const doiViTri = (a, b) => {
  var x = a,
    y = b;
  arr[x] = arr.splice(y, 1, arr[x])[0];
  return arr;
};
const soSanhSoAmVaSoDuong = () => {
  let soAm = 0;
  let soDuong = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] < 0 ? (soAm += 1) : (soDuong += 1);
  }
  if (soAm > soDuong) return "Số âm lớn hơn số dương";
  else if (soAm < soDuong) return "Số dương lớn hơn số âm";
  else return "Số âm và số dương bằng nhau";
};
const demSoNguyen = () => {
  return arr.reduce((total1, value1) => {
    if (value1 % 1 === 0) total1 += 1;
    return total1;
  }, 0);
};
const timSoNguyenTo = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};
const timSoNguyenToDauTien = () => {
  for (let i = 0; i < arr.length; i++) {
    if (timSoNguyenTo(arr[i]) && arr[i] % 1 === 0) {
      return arr[i];
    }
  }
  return -1;
};
const sapXepMang = () => {
  return arr.slice(0).sort((a, b) => {
    return a - b;
  });
};
const timSoChanCuoi = () => {
  let num = -1;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 === 0) {
      num = arr[i];
    }
  }
  return num;
};
const timSoDuongNhoNhat = () => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      min = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i] && arr[i] > 0) {
      min = arr[i];
    }
  }
  return min;
};
const timSoNhoNhat = () => {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
};
const demSoDuong = () => {
  return arr.reduce((total, value) => {
    if (value > 0) total += 1;
    return total;
  }, 0);
};
const tongSoDuong = () => {
  let tong = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > 0) tong += arr[i];
  }
  return tong;
};
document.querySelector(".btn1").addEventListener("click", function () {
  var so1 = document.getElementById("so1").value * 1;
  var so2 = document.getElementById("so2").value * 1;
  var thongBao = document.querySelector(".footer1");
  so1 = parseInt(so1);
  arr.push(so1, so2);
  thongBao.innerHTML = `Đã thêm ${so1} vs ${so2} vào mảng [${arr}] <br/>  `;
});
document.querySelector(".btn2").addEventListener("click", function () {
  var doi1 = document.getElementById("doi1").value * 1;
  var doi2 = document.getElementById("doi2").value * 1;
  var thongBao = document.querySelector(".footer1");
  thongBao.innerHTML += `1. Tổng số dương là: ${tongSoDuong()}<br/> 2. Có tất cả ${demSoDuong()} số dương <br/>3. Số nhỏ nhất: ${timSoNhoNhat()} <br/>4. Số dương nhỏ nhất: ${timSoDuongNhoNhat()} <br/> 5. Sắp xếp mảng tăng dần: ${sapXepMang()} <br/> 6. Số nguyên tố đầu tiên trong mảng: ${timSoNguyenToDauTien()} <br/> 7. Có tất cả ${demSoNguyen()} số nguyên <br/> 8. ${soSanhSoAmVaSoDuong()}  <br> 9. Số chẵn cuối cùng của mảng: ${timSoChanCuoi()} <br/>10. Đã đổi vị trí ${doi1} và ${doi2}: [${doiViTri(
    doi1,
    doi2
  )}]`;
});
