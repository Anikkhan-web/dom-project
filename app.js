    const bestPrice = document.getElementById('best-price');
    const memoryPrice = document.getElementById('memory-cost') ;
    const storagePrice = document.getElementById('storage-cost');
    const deliveryPrice = document.getElementById('delivery-cost');
    const totalPrice = document.getElementById('total-price');

    function clickWithElement(withElement,price){
        const elementCost = document.getElementById( withElement +'-cost')
        elementCost.innerText = price;
        grandTotalCost()
    }
    function grandTotalCost(){
        totalPrice.innerText = parseInt(bestPrice.innerText) +parseInt(memoryPrice.innerText ) +parseInt(storagePrice.innerText ) + parseInt(deliveryPrice.innerText );
        const grandTotal =  document.getElementById('grand-total');
        grandTotal.innerText = totalPrice.innerText ;
    }

    document.getElementById('memoryFrist-field').addEventListener('click',function(){
        clickWithElement('memory',0);
    })

    document.getElementById('memorySecond-field').addEventListener('click',function(){
        clickWithElement('memory',180); 
    })

    document.getElementById('storageFrist-field').addEventListener('click',function(){
        clickWithElement('storage',0);  
    })

    document.getElementById('storageSecond-field').addEventListener('click',function(){
    clickWithElement('storage',100); 
    })

    document.getElementById('storageThird-field').addEventListener('click',function(){
        clickWithElement('storage',180);  
    })

    document.getElementById('deliveryFrist-field').addEventListener('click',function(){
        clickWithElement('delivery',0);     
    })

    document.getElementById('deliverySecond-field').addEventListener('click',function(){
        clickWithElement('delivery',20);
    })

    document.getElementById('submit-pomo').addEventListener('click',function(){
        const promoInput = document.getElementById('promo-input')
        const totalPriceText = document.getElementById('total-price').innerText 
    
        if(promoInput.value == 'stevekaku'){
        const discount = totalPriceText - (totalPriceText* 20 / 100);
        document.getElementById('grand-total').innerText = discount
        promoInput.value = '';
        }else{
            promoInput.value = 'Reload and Get Promo'
        }
    })  
