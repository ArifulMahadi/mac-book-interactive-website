//For extra memory cost
function memoryCost(memoryId,isIncreasing){
    const memoryCost=document.getElementById(memoryId);
    const memoryCostText=parseInt(memoryCost.innerText);
    if(isIncreasing==true){
        memoryCost.innerText=0;
    }
   else{
    memoryCost.innerText=180;
   }  
}
//For extra storage cost
const storageCost=document.getElementById('storage-cost');
const storageCostText=storageCost.innerText;
//For delivery charge
function deliveryCharge(deliveryId,isAdd){
    const deliveryCost=document.getElementById(deliveryId);
    const deliveryCostText=parseInt(deliveryCost.innerText);
    if(isAdd==true){
        deliveryCost.innerText=0;
    }
   else{
    deliveryCost.innerText=20;
   }  
}
// for total price
function updateTotal(){
    const memoryCost=document.getElementById('memory-cost');
    const memoryCostText=parseInt(memoryCost.innerText);
    const deliveryCost=document.getElementById('delivery-charge');
    const deliveryCostText=parseInt(deliveryCost.innerText);
    const storageCost=document.getElementById('storage-cost');
    const storageCostText=parseInt(storageCost.innerText);
    const total=1299+memoryCostText+deliveryCostText+storageCostText;
    const update=document.getElementById('total-price');
    update.innerText=total;
    // final total for everything
    const finalTotal=document.getElementById('final-total');
    finalTotal.innerText=total;
    
}
// event handler for Extra memory cost 
document.getElementById('button-8GB').addEventListener('click',function(){
   memoryCost('memory-cost',true);
   updateTotal();
   
})
document.getElementById('button-16GB').addEventListener('click',function(){
    memoryCost('memory-cost',false);
    updateTotal();
  
})
//  event handler for Extra storage cost
document.getElementById('button-256GB').addEventListener('click',function(){
    storageCost.innerText=0;
    updateTotal();
  
})
document.getElementById('button-512GB').addEventListener('click',function(){
    storageCost.innerText=100;
    updateTotal();
    
})
document.getElementById('button-1TB').addEventListener('click',function(){
    storageCost.innerText=180;
    updateTotal();
 
})
//  event handler for delivery charge
document.getElementById('free-delivery').addEventListener('click',function(){
    deliveryCharge('delivery-charge',true);
    updateTotal();
  
 })
 document.getElementById('charge-delivery').addEventListener('click',function(){
    deliveryCharge('delivery-charge',false);
    updateTotal();
    
 })

//  add promo Code
const codeButton = document.getElementById("promo-button")
const codeInput = document.getElementById("promo-code")




codeButton.addEventListener('click', function(){
    
})