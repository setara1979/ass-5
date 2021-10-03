document.getElementById('btn-8gb').addEventListener('click', function(){
    
   const firstSsd = document.getElementById('256-gb');
   const firstSsdInput =firstSsd.innerText;
   
// console.log(firstSsdInput,'paisi')

const bestPriceInput = document.getElementById('best-price');
bestprice = bestPriceInput.innerText;

// console.log(bestPriceInput.innerText)

const deliveryInput = document.getElementById('delivary-free-input');
const deliveryFree = deliveryInput.innerText;
// deliveryInput.innerText = 20;
// console.log(deliveryFree);

const deliveryInputCharge = document.getElementById('delivery-charge');


const deliveryCharge = deliveryInputCharge.innerText;

deliveryInputCharge.innerText = 0;
const newDeliveryCharge = parseFloat(deliveryInputCharge.innerText);


// console.log(deliveryInputCharge.innerText);

const totalPriceInput = document.getElementById('total-price');
const totalPriceText = totalPriceInput.innerText;
const totalPrice = parseFloat(totalPriceText);

// totalPriceInput.innerText = totalPrice + newDeliveryCharge;

const newTotalPrice = totalPrice + newDeliveryCharge;
const lastNewTotalPrice = newTotalPrice;
console.log(newTotalPrice);
totalPriceInput.innerText=newTotalPrice;




})


// 256gb


document.getElementById('btn-16gb').addEventListener('click',function(){
    // console.log('paisi 16gb')
    const secendSsd = document.getElementById('512-gb');
    // console.log('hose')
    const secendSsdInput =secendSsd.innerText;

    const secendPriceInput = document.getElementById('best-price');
    secendPriceText = secendPriceInput.innerText;
    secendPriceInput.innerText = 1499;
    const secendPrice = parseFloat(secendPriceInput.innerText) ;
   const newSecendPrice =  secendPrice;

    // console.log(newSecendPrice);
    secendPriceInput.innerText = newSecendPrice;


    // EXTRA MEMORY

    const  tbSsdInput = document.getElementById('tb-ssd-1tb');
    // console.log(tbSsdInput,'500')
    const tbSsdText = tbSsdInput.innerText;

    // const tbSsd = parseFloat(tbSsdText);
    // const newTbSsd = 100 + tbSsd;

    // console.log(newTbSsd);
    // tbSsdInput.innerText = newTbSsd;

    const extraStorngeInput = document.getElementById('extra-storange');
    // console.log('extraaaa')

    const extraText = extraStorngeInput.innerText;
    extraStorngeInput.innerText =100;
    const extraStornge = parseFloat(extraStorngeInput.innerText);
    const newExtra = extraStornge;
    // console.log(newExtra)

    extraStorngeInput.innerText = newExtra;





    // charge delivery 
    

    

    const deliveryChargeInput = document.getElementById('delivary-charge-input');
    const deliveryCharge = deliveryChargeInput.innerText;

    // console.log(deliveryCharge,)

    const secendDeliveryCharge = document.getElementById('delivery-charge');
    // console.log('ddddddddddddddddd')
    secendDeliveryChargeText = secendDeliveryCharge.innerText;
    secendDeliveryCharge.innerText= 20;

    // console.log(secendDeliveryCharge.innerText,'20tkk')

    const newSecendDelivery =parseFloat(secendDeliveryCharge.innerText)

    // console.log(newSecendDelivery);

    // totalPrice

    const secendTotalPrice = document.getElementById('total-price');
    const secendTotalPriceTex = secendTotalPrice.innerText;
    // console.log(secendTotalPriceTex,'hhhhh')
    secendTotalPrice.innerText = 0;
    // console.log(secendTotalPrice.innerText)
    const newPriceText = parseFloat(secendTotalPrice.innerText);
    const newSecendPriceTotal = newPriceText;


    const totalNew = newSecendPrice + newExtra + newSecendDelivery + newSecendPriceTotal;
    console.log(totalNew);

    secendTotalPrice.innerText = totalNew;
    




   

})

