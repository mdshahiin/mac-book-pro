const myPromo = "stevekaku";

let bestPrice = document.getElementById('best-price'),
    extraMemory = document.getElementById('extra-memory'),
    extraStorage = document.getElementById('extra-storage'),
    deliveryCharge = document.getElementById('delivery-charge'),
    totalPrice = document.getElementById('total-price'),
    promo = document.getElementById('promo'),
    final = document.getElementById('final')
    

function addMemory(value)
{
    extraMemory.innerText = parseFloat(value)
    calcTotalPrice()
}

function addStorage(value)
{
    extraStorage.innerText = parseFloat(value)
    calcTotalPrice()
}

function addDelivery(value)
{
    deliveryCharge.innerText = parseFloat(value)
    calcTotalPrice()
}

function calcTotalPrice() {
    totalPrice.innerText = parseFloat(extraMemory.innerText) + parseFloat(extraStorage.innerText) + parseFloat(deliveryCharge.innerText) + parseFloat(bestPrice.innerText)
    caclFinal(totalPrice.innerText)
}

function caclFinal(value) {
    if(myPromo == promo.value)
    {
        value = parseFloat(value) * parseFloat(.80) 
    }

    final.innerText = value
}

document.getElementById('apply-promo').addEventListener('click', calcTotalPrice)