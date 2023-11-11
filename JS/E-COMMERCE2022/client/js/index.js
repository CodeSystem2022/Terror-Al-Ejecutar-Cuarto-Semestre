const shopContent = document.getElementById("shopContent"); //shopcontent es el id de una etiqueta div
const cart = []; //Este es nuestro carrito, un array vacio

productos.forEach((product) =>{ //Insertamos codigo html
    const content = document.createElement("div"); //Creamos un elemento div
    //la linea de abajo y su contenido es una insercion de codigo html que insertamos en el elemento div
    //las caracteristicas insertadas seran del elemento que este recorriendo el foreach
    content.innerHTML = ` 
    <img src ="${product.img}">
    <h3>${product.productName}</h3>
    <p>${product.price} $</p>
    `;
    shopContent.append(content);

    const buyButton = document.createElement("button"); //creamos el elemento button
    buyButton.innerText = "Comprar"; //DENTRO DEL BOTON EMPUJAMOS LA FRASE COMPRAR


    content.append(buyButton); //lo aderimos al content (contentn es donde tenemos el div)


    buyButton.addEventListener("click", ()=>{ //hacemos escucha del boton de compra creado
        const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id);
        //Explicacion linea arriba
        //car.some este metodo recorrera el carrito buscando una coincidencia que le pase en una funcion para que haga una comparacion
        //le pasamos primero para que detecte todos los productos que ya estan en el carrito (repeatProduct)
        //y le pedimos que busque lo siguiente: }
        //alguno de los id que estan en el carrito, son extrictamente iguales a alguno de los id que el usuario intenta ingresar al carrito?
        // == true o false


        if(repeat){ //si hay repeticion
            cart.map((prod) => { //mapeamos el carrito producto por producto
                if(prod.id === product.id){//si existe un producto con igual id al que se esta queriendo agregar
                    prod.quanty++; //sumarle  al quanty de ese producto
                    displayCartCounter();
                }
            })
        }else{
            //es decir agregamos un evento de escucha, a travez de un click nosotros:
            cart.push({ //hacemos push en el carrito de los datos a continuacion
                id: product.id,
                productName: product.productName,
                price:product.price,
                quanty: product.quanty,
                img: product.img
            });
            displayCartCounter();
        }

        console.log(cart) //muestra lo que esta en el carrito
    })
});



