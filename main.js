document.addEventListener("DOMContentLoaded", function () {
  const XiaomiProducts = document.querySelectorAll(".XiaomiProduct");
  const IphoneProducts = document.querySelectorAll(".IphoneProduct");
  const RealmeProducts = document.querySelectorAll(".RealmeProduct");
  let xiaomi = document.getElementById("Xiaomi");
  let apple = document.getElementById("Apple");

  function click() {
    let Visible = true;

    xiaomi.addEventListener("click", function (e) {
      e.preventDefault();
      if (Visible) {
        IphoneProducts.forEach(function (product) {
          product.style.display = "none";
        });
        RealmeProducts.forEach(function (product) {
          product.style.display = "none";
        });
      } else {
        IphoneProducts.forEach(function (product) {
          product.style.display = "block";
        });
        RealmeProducts.forEach(function (product) {
          product.style.display = "block";
        });
      }
      Visible = !Visible;
    });
    apple.addEventListener("click", function (e) {
      e.preventDefault();
      if (Visible) {
        XiaomiProducts.forEach(function (product) {
          product.style.display = "none";
        });
        RealmeProducts.forEach(function (product) {
          product.style.display = "none";
        });
      } else {
        XiaomiProducts.forEach(function (product) {
          product.style.display = "block";
        });
        RealmeProducts.forEach(function (product) {
          product.style.display = "block";
        });
      }
      Visible = !Visible;
    });
  }
  click();
});
