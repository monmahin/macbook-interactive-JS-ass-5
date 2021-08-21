// all things price
function getPrice(priceCategory, price) {
    const allPrice = document.getElementById(priceCategory);
    allPrice.innerText = price;
    totalPrice()
    return price

}

// total-price
function totalPrice() {
    const bestPriceField = document.getElementById('best-price')
    const bestPrice = parseFloat(bestPriceField.innerText);
    const memoryPriceField = document.getElementById('memory-price');
    const memoryPrice = parseFloat(memoryPriceField.innerText);
    const storagePriceField = document.getElementById('storage-price');
    const storagePrice = parseFloat(storagePriceField.innerText);
    const deliveryChargeField = document.getElementById('delivery-charge');
    const deliveryCharge = parseFloat(deliveryChargeField.innerText);
    const totalPrices = document.getElementById('total-price')
    const sum = bestPrice + memoryPrice + storagePrice + deliveryCharge;
    totalPrices.innerText = sum;
    const displayTotalPrice = document.getElementById('display-total');
    displayTotalPrice.innerText = sum;
}

// memory event handler

document.getElementById('small-memory').addEventListener('click', function () {
    const price = 0;
    getPrice('memory-price', price)

})
document.getElementById('large-memory').addEventListener('click', function () {
    const price = 20;
    getPrice('memory-price', price)

})
// storage event handler


document.getElementById('small-storage').addEventListener('click', function () {
    const price = 0;
    getPrice('storage-price', price)

})
document.getElementById('medium-storage').addEventListener('click', function () {
    const price = 100;
    getPrice('storage-price', price)

})
document.getElementById('large-storage').addEventListener('click', function () {
    const price = 180;
    getPrice('storage-price', price)

})
// delivery event handler
document.getElementById('free-delivery').addEventListener('click', function () {
    const price = 0;
    getPrice('delivery-charge', price)

})
document.getElementById('cost-delivery').addEventListener('click', function () {
    const price = 20;
    getPrice('delivery-charge', price)

})

// discount coupon 
function getDiscount() {
    const couponInput = document.getElementById('coupon-code')
    const code = 'stevekaku';
    const displayTotalPrice = document.getElementById('display-total');

    const total = parseFloat(displayTotalPrice.innerText)
    const discountPrice = total - (total * .20);

    if (couponInput.value == code) {
        displayTotalPrice.innerText = discountPrice;
        couponInput.value = ''
        return discountPrice
    }
    else {
        couponInput.value = '';
        alert('please input valid code');

    }

}





