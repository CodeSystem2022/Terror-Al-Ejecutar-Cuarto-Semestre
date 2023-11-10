//delete
const deleteProduct = modalBody.querySelector(".delete-product");

deleteProduct.addEventListener("click", ()=> {
    deleteCartProduct(product.id);
    
    
});

const deleteCartProduct =(id)=> {
    const foundId = cart.findaindex((element)=> element.id === id)
    
}
