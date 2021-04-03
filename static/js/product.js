function increment() {
    quantity = document.getElementById('quantity_input');
    if (quantity.value<9) {
        quantity.setAttribute("value", quantity.value++);
    }
    
 }
 function decrement() {
    quantity = document.getElementById('quantity_input');
    if (quantity.value>1) {
        quantity.setAttribute("value", quantity.value--);
    }
 }


 async function addToCart() {
    quantity = document.getElementById('quantity_input').value;
    productId = document.getElementById('productId').value;
    console.log(productId);
    const data = { quantity };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    };
    const res = await fetch('/cart/'+productId, options);
    const json = await res.json();
    console.log(res);
    /* if(success_msg != ''){
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            success_msg
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>

    }*/
 }