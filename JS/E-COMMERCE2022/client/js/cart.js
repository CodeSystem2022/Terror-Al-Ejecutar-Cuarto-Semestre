
// MODAL BODY clase 3.1
cart.forEach((product) -> `{
    const modalBody = document.createElement("div");
    modalBody.className = "modal-body"
    modalBody.innerHTML =
    <div class="product"> 
        <img class="product-img" src="${product.img}"/>
        <div class="product-info">
            <h4>${product.productName}</h4>
    </div>
    <div class="quantity">
        <spam class="quantity-btn.decrese">-</spam>
        <spam class="quantity-input">${product.quanty}</spam>
        <spam class="quantity-btn-increse">+</spam>
    </div>
        <div class="price">${product.price * product.quanty} $</div>
        <div class="delete-product">❌</div>
    </div>
    
    }`);
