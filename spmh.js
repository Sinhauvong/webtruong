let cartItems = [];

function addToCart() {
  const productName = "Hoa Hồng";
  const productName2 = "Hoa Lan";
  const productName3 = "Hoa Thúy";
  const productName4 = "Hoa Mộc";
  const productName5 = "Hoa Quế";
  const productName6 = "Hoa Cẩm Chướng";
  const productName7 = "Hoa Lài";
  const productName8 = "Hoa Tulip";
  const productName9 = "Hoa Mai";
  const productName10 = "Hoa Đào";
  const productName11 = "Hoa Mẫu Đơn";
  const productName12 = "Hoa Cúc";
  const productName13 = "Hoa Hướng Dương";
  const productName14 = "Hoa Ly";
  const productName15 = "Hoa Sen";

  const productPrice = 100000;
  const productPrice2 = 110000;
  const productPrice3 = 120000;
  const productPrice4 = 130000;
  const productPrice5 = 140000;
  const productPrice6 = 150000;
  const productPrice7 = 160000;
  const productPrice8 = 170000;
  const productPrice9 = 180000;
  const productPrice10 = 190000;
  const productPrice11 = 200000;
  const productPrice12 = 210000;
  const productPrice13 = 220000;
  const productPrice14 = 230000;
  const productPrice15 = 240000;

  const productQuantity = parseInt(document.getElementById("productQuantity").value);
  const productQuantity2 = parseInt(document.getElementById("productQuantity2").value);
  const productQuantity3 = parseInt(document.getElementById("productQuantity3").value);
  const productQuantity4 = parseInt(document.getElementById("productQuantity4").value);
  const productQuantity5 = parseInt(document.getElementById("productQuantity5").value);
  const productQuantity6 = parseInt(document.getElementById("productQuantity6").value);
  const productQuantity7 = parseInt(document.getElementById("productQuantity7").value);
  const productQuantity8 = parseInt(document.getElementById("productQuantity8").value);
  const productQuantity9 = parseInt(document.getElementById("productQuantity9").value);
  const productQuantity10 = parseInt(document.getElementById("productQuantity10").value);
  const productQuantity11 = parseInt(document.getElementById("productQuantity11").value);
  const productQuantity12 = parseInt(document.getElementById("productQuantity12").value);
  const productQuantity13 = parseInt(document.getElementById("productQuantity13").value);
  const productQuantity14 = parseInt(document.getElementById("productQuantity14").value);
  const productQuantity15 = parseInt(document.getElementById("productQuantity15").value);

  const productImage = "hoa-hong.jpg";
  const productImage2 = "hoa-lan.jpg";
  const productImage3 = "hoa-thuy.jpg";
  const productImage4 = "hoa-moc.jpg";
  const productImage5 = "hoa-que.jpg";
  const productImage6 = "hoa-cam-chuong.jpg";
  const productImage7 = "hoa-lai.jpg";
  const productImage8 = "hoa-tulip.jpg";
  const productImage9 = "hoa-mai.jpg";
  const productImage10 = "hoa-dao.jpg";
  const productImage11 = "hoa-mau-don.jpg";
  const productImage12 = "hoa-cuc.jpg";
  const productImage13 = "hoa-huong-duong.jpg";
  const productImage14 = "hoa-ly.jpg";
  const productImage15 = "hoa-sen.jpg";
  if (productQuantity > 1) {
    const queryString = `ten-hoa=${productName}&gia-hoa=${productPrice}&so-luong=${productQuantity}&hinh-anh=${productImage}`;
    window.location.href = `muahang.html?${queryString}`;
  }

  if (productQuantity2 > 2) {
    const queryString2 = `ten-hoa=${productName2}&gia-hoa=${productPrice2}&so-luong=${productQuantity2}&hinh-anh=${productImage2}`;
    window.location.href = `muahang.html?${queryString2}`;
  }

  if (productQuantity3 > 3) {
    const queryString3 = `ten-hoa=${productName3}&gia-hoa=${productPrice3}&so-luong=${productQuantity3}&hinh-anh=${productImage3}`;
    window.location.href = `muahang.html?${queryString3}`;
  }


  if (productQuantity4 > 4) {
    const queryString4 = `ten-hoa=${productName4}&gia-hoa=${productPrice4}&so-luong=${productQuantity4}&hinh-anh=${productImage4}`;
    window.location.href = `muahang.html?${queryString4}`;
  }

  if (productQuantity5 > 5) {
    const queryString5 = `ten-hoa=${productName5}&gia-hoa=${productPrice5}&so-luong=${productQuantity5}&hinh-anh=${productImage5}`;
    window.location.href = `muahang.html?${queryString5}`;
  }


  if (productQuantity6 > 6) {
    const queryString6 = `ten-hoa=${productName6}&gia-hoa=${productPrice6}&so-luong=${productQuantity6}&hinh-anh=${productImage6}`;
    window.location.href = `muahang.html?${queryString6}`;
  }


  if (productQuantity7 > 7) {
    const queryString7 = `ten-hoa=${productName7}&gia-hoa=${productPrice7}&so-luong=${productQuantity7}&hinh-anh=${productImage7}`;
    window.location.href = `muahang.html?${queryString7}`;
  }


  if (productQuantity8 > 8) {
    const queryString8 = `ten-hoa=${productName8}&gia-hoa=${productPrice8}&so-luong=${productQuantity8}&hinh-anh=${productImage8}`;
    window.location.href = `muahang.html?${queryString8}`;
  }


  if (productQuantity > 9) {
    const queryString9 = `ten-hoa=${productName9}&gia-hoa=${productPrice9}&so-luong=${productQuantity9}&hinh-anh=${productImage9}`;
    window.location.href = `muahang.html?${queryString9}`;
  }



  if (productQuantity > 10) {
    const queryString10 = `ten-hoa=${productName10}&gia-hoa=${productPrice10}&so-luong=${productQuantity10}&hinh-anh=${productImage10}`;
    window.location.href = `muahang.html?${queryString10}`;
  }


  if (productQuantity11 > 11) {
    const queryString11 = `ten-hoa=${productName11}&gia-hoa=${productPrice11}&so-luong=${productQuantity11}&hinh-anh=${productImage11}`;
    window.location.href = `muahang.html?${queryString11}`;
  }


  if (productQuantity12 > 12) {
    const queryString12 = `ten-hoa=${productName12}&gia-hoa=${productPrice12}&so-luong=${productQuantity12}&hinh-anh=${productImage12}`;
    window.location.href = `muahang.html?${queryString12}`;
  }


  if (productQuantity13 > 13) {
    const queryString13 = `ten-hoa=${productName13}&gia-hoa=${productPrice13}&so-luong=${productQuantity13}&hinh-anh=${productImage13}`;
    window.location.href = `muahang.html?${queryString13}`;
  }


  if (productQuantity14 > 14) {
    const queryString14 = `ten-hoa=${productName14}&gia-hoa=${productPrice14}&so-luong=${productQuantity14}&hinh-anh=${productImage14}`;
    window.location.href = `muahang.html?${queryString14}`;
  }


  if (productQuantity15 > 15) {
    const queryString15 = `ten-hoa=${productName15}&gia-hoa=${productPrice15}&so-luong=${productQuantity15}&hinh-anh=${productImage15}`;
    window.location.href = `muahang.html?${queryString15}`;
  }


}

function clearCart() {
  cartItems = [];
  document.getElementById("cartItems").innerHTML = "";
}



const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('ten-hoa');
const productPrice = urlParams.get('gia-hoa');
const productQuantity = urlParams.get('so-luong');
const productImage = urlParams.get('hinh-anh');


document.getElementById("productName").innerText = productName;
document.getElementById("productQuantity").innerText = productQuantity;
document.getElementById("productPrice").innerText = productPrice * productQuantity;





function confirmPurchase() {
  const totalPrice = productPrice * productQuantity;
  const confirmationMessage = `Bạn có chắc chắn muốn thanh toán ${totalPrice} VNĐ cho sản phẩm ${productName}?`;

  if (confirm(confirmationMessage)) {
    alert(`Cảm ơn bạn đã thanh toán ${totalPrice} VNĐ cho sản phẩm ${productName}. Chúc bạn một ngày tốt lành!`);
  }
}






