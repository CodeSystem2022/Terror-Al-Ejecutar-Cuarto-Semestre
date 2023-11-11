//modal Body
if (cart.length > 0) {
    cart.forEach((product) => {
        const modalBody = document.createElement("div");
        modalBody.className = "modal-body";
        modalBody.innerHTML =
            <div class="product">
                <img class="product-img" src="${product.img}" />
                <div class="product-info">
                    <h4>${product.productName}</h4>
                </div>
     <div class="quantity">
                    <span class="quantity-btn-decrese">-</span>
                    <span class="quantity-input">${product.quanty}</span>
                    <span class="quantity-btn-increse">+</span>
                </div>
                <div class="price">${product.price * product.quanty} $</div>
                <div class="delete-product">X</div>
            </div>

            modalContainer.append(modalBody);

            const decrese = modalBody.querySelector(".quantity-btn-decrese");
            decrese.addEventListener("click", () => {
                if (product.quanty !==1) {
                    product.quanty--;
                    displayCart();
                }
                displayCartCounter();
            });

            const increse = modalBody.querySelector(".quantity-btn-increse");
            increse.addEventListener("click", ()=> {
                product.quanty++;
                displayCart();
                displayCartCounter();
            });
            //modal fotter
            const total = cart.reduce((acc,el) => acc + el.price * el.quanty, 0);

            const modalFooter = document.createElement("div");
            modalFooter.classNamme = "modal-footer";
            modalFooter.innerHTML = 
            <div class="total-price">Total: $(total)</div>

            ;
            modalContainer.append(modalFooter);
            } else {
              const modalText = document.createElement("h2");
              modalText.className = "modal-body";
              modalText.innertext = "your cart is empty";
              modalContainer.append(modalText)

            }
        };


