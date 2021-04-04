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


function linkUpdater() {
    quantity = document.getElementById('quantity_input').value;
    productID = document.getElementById('productID').value;
    document.getElementById("addCartLink").href = "/cart/"+productID+"/"+quantity;
    /*console.log(productID);
    const data = { quantity };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    };
    const res = await fetch('/cart/'+productID, options);
    const json = await res.json();
    console.log(res);
     if(success_msg != ''){
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            success_msg
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>

    }*/
 }

var myVar = setInterval(linkUpdater, 500);
