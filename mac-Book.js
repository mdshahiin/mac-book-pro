///memory unified start------------
const memoryLow = document.getElementById('memory-low');
const memoryHeigh = document.getElementById('memory-heigh');
const extraMemory = document.getElementById('extra-memory');
const bestPrice = document.getElementById('best-price')
//const total = document.getElementById('total-price')
/* bestPrice.addEventListener('click',function () {
    bestPrice.innerText = 1299;
    updateTotal();
})
 */
memoryLow.addEventListener('click',function () {
    extraMemory.innerText = 0;
    return  updateTotal();
 
})
memoryHeigh.addEventListener('click', function () {
    extraMemory.innerText = 180;
    return updateTotal();
})
///memory unified end------------
const storageLow = document.getElementById('storage-low');
const storageMedium = document.getElementById('storage-medium');
const storageHeigh = document.getElementById('storage-heigh');
const totalStorageValue = document.getElementById('extra-storage');

storageLow.addEventListener('click', function 
() {
    totalStorageValue.innerText= 0;
    return updateTotal();
})
storageMedium.addEventListener('click', function 
() {
    totalStorageValue.innerText= 100;
    return  updateTotal();
})
storageHeigh.addEventListener('click', function 
() {
    totalStorageValue.innerText= 180;
    return  updateTotal();
});
const deliveryLate = document.getElementById('delivery-late');
const deliveryFirst = document.getElementById('delivery-first');
const deliveryCharge = document.getElementById('delivery-charge');
deliveryLate.addEventListener('click', function () {
    deliveryCharge.innerText = 0;
   return updateTotal();
})
deliveryFirst.addEventListener('click', function () {
    deliveryCharge.innerText = 20;
    return updateTotal();
})


 const totalPrice = document.getElementById('total-price')
  totalPrice.addEventListener('click', function () {
     totalPrice.innerText= 1299;
    return updateTotal();
 })
 

function updateTotal() {
    const memoryCost = parseInt(document.getElementById('extra-meory').innerText);
    const storageCost = parseInt(document.getElementById('extra-storage').innerText);
    const deliveryCost = parseInt(document.getElementById('delivery-charge').innerText);
    const bestPriceAmount = parseInt(totalPrice.innerText);
    const totalPhoneCost = memoryCost + storageCost + deliveryCost + bestPriceAmount;
    alert(totalPhoneCost)
    alert(totalPhoneCost)
    alert(totalPhoneCost)
    alert(totalPhoneCost)
    alert(totalPhoneCost)
   // const totalPhoneCost = parseInt(totalPrice.innerText);

    //const totalPhoneValue = totalPhoneCost + totalPrice;
    //document.getElementById('total-price').innerText= bestPriceAmount;

    totalPrice.innerText = totalPhoneCost;
    // updateTotal();
}
 

/* applyPromo.addEventListener('click',function () {
const applyPromo = document.getElementById('apply-promo');
const userApply = applyPromo.Value;
const promoNumber = document.getElementById('promo');
const promoApply =  promoNumber.value;
    if (userApply == 'stevekaku'  ) {
        console.log('ata kaj hoibo ')
    }
})
 */
function promoApply() {
    const applyPromo = document.getElementById('applye-promo');
    const userApply = applyPromo.value;
    const promoNumber =document.getElementById('promo');
     const promoCode = promoNumber.value;
    if (userApply == 'stevekaku'&& promoCode == stevekaku) {
        return promoApply()
    }
}
