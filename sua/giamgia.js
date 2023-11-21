var saleElements = document.getElementsByClassName('label--on-sale');
var priceElement = document.getElementsByClassName('price-item')[0];
var salePriceElements = document.getElementsByClassName('price--highlight');

// Hàm định dạng số với dấu phân tách hàng nghìn là dấu "."
function formatWithCommas(number) {
    return number.toLocaleString('vi-VN', {});
}

// Hàm tính giá mới dựa trên giảm giá
function calculateNewPrice(originalPrice, discountPercentage) {
    var newPrice = originalPrice;

    if (discountPercentage && discountPercentage.indexOf('%') > -1) {
        discountPercentage = parseFloat(discountPercentage);
        newPrice = originalPrice - (originalPrice * (discountPercentage / 100));
    }

    return newPrice;
}

// Hàm cập nhật giá mới và hiển thị trên trang
function updatePrices() {
    var originalPrice = parseFloat(priceElement.textContent.replace(/[^0-9.-]+/g, ""));

    for (var i = 0; i < saleElements.length; i++) {
        var discountPercentage = saleElements[i].textContent;
        var newPrice = calculateNewPrice(originalPrice, discountPercentage);

        salePriceElements[i].textContent = formatWithCommas(newPrice);
        priceElement.textContent = formatWithCommas(originalPrice);
    }
}

// Gọi hàm cập nhật giá mới khi trang web tải xong hoặc khi cần
updatePrices();
