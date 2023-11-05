
//capturamos los id y los metemos dentro de una constante
const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");

const cartBtn = document.getElementById("cart-btn");
const cartCounter = document.getElementById("cart-counter");

//el modal sera una funcion que se ejecutara cuando el usuario haga click con el elemento del carrito

const displayCart = () => {

        modalContainer.innerHTML = ""; //limpiamos el carrito pos i hubiese algo antes
    //como en css el display por defecto es none. lo modificamos al llamar a esta funcion a block
    //para que de esa forma se pueda ver
    modalContainer.style.display = "block";
    modalOverlay.style.block = ""
    //modal Header
    const modalHeader = document.createElement("div");

    const modalClose = document.createElement("div");
    modalClose.innerText = "❌"; //le asignamos el cierre del modal a un texto que en este caso es el emoji de cruz
    modalClose.className = "modal-close";
    modalHeader.append(modalClose); //metemos el modalClose en el header del modal


    modalClose.addEventListener("click", ()=> { //cuando escuche el evento click ejecuta una funcion con display none
        modalContainer.style.display = "none";
        modalOverlay.style.display = "none";
    })

    //le asignamos un titulo "cart"
    const modalTitle = document.createElement("div");
    modalTitle.innertText = "Cart";
    modalTitle.className = "modal-title";
    modalHeader.append(modalTitle);


    modalContainer.append(modalHeader); //agregamos el header a modal containe

    //MODAL BODY

    if (cart.length > 0){
        cart.forEach((product) => {
            const modalBody = document.createElement("div");
            modalBody = "modal-body";
            modalBody.innerHTML = `
            <div class="product">
                <img class="product-img" src="${product.img}" /> //imagen producto
                <div class="product-info">
                    <h4>${product.productName}<h4> //nombre producto
                </div>
                <div class="quantity">
                    <span class="quantity-btn-decrese">-</span> //restar cantidad producto
                    <span class="quantity-input">${product.quanty}</span> //cantidad producto
                    <span class="quantity-btn-increse">+</span> //sumar cantidad producto
                </div>
                <div class="price">${product.price * product.quanty} $</div> //calculo total
                <div class="delete-product">❌</div>
            </div>
            `;
            modalContainer.append(modalBody);
            
            const decrease = modalBody.querySelector(".quantity-btn-decrese");//selecciona por clase css
            decrease.addEventListener("click", ()=> {
                if(product.quanty > 0){
                    product.quanty--;
                    displayCart(); //hacemos uso de recursividad para volver a llamar y nos refresque el carrito
                }
                displayCartCounter();
                
            });
    
            const increse = modalBody.querySelector(".quantity-btn-increse");//selecciona por clase css
            increse.addEventListener("click", ()=> {
                product.quanty++;
                displayCart(); //hacemos uso de recursividad para volver a llamar y nos refresque el carrito
                displayCartCounter();
                
            });
    
            //delete
            const deleteProduct = modalBody.querySelector("delete-product");
            deleteProduct.addEventListener("click", ()=>{
                deleteCartProduct(product.id); //le enviamos como parametro el id del producto que esta a eliminar
            })


        });

        //MODAL FOTTER

        const total = cart.reduce((acc, el) => acc + el.precio * el.quanty, 0); //este metodo trabaja con dos parametros, el acumulador, donde acumula lo que le escriba despues
        //que en este caso es el precio del producto por lac cantidad, el segundo representa cada uno de los elementos, que estan
        //dentro del carrito, el representa elementos, acc donde se guardaran y 0 es de donde empieza acc

        const modalFooter = document.createElement("div");
        modalFooter.className = "modal-footer";
        modalFooter.innerHTML = `
        <div class="total-price">Total: ${total}</div>
        <button class="btn-primary" id="checkout-btn"> go to checkout</button>
        <div id="button-checkout"></div>
        `;
        modalContainer.append(modalFooter);

        //mp
    const mercadopago = new MercadoPagoResponse("TEST-4289631b-7e3d-4b61-a7a2-13fcf6d85d86", {
        //una constante de mercado pago que inicia una instancia de mp, lleva una pk que se genera desde la pagina de mp
        //y tiene el idioma y moneda con la que se trabajara
        locale: "es-AR", 
    });


    const displayCartCounter = () => {
    const cartLength = cart.reduce((acc, el) => acc + el.quanty, 0);
    if(cartLength > 0){
        
        cartCounter.style.display = "block";
        cartCounter.innerText = cartLength;
    }else{
        cartCounter.style.display = "none"
    }
    
}

   