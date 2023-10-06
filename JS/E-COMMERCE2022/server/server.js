const express = require("express"); //framework de nodeJs que facilita algunas cosas
const app = express(); //inicializ exppres
const cors = require("cors"); //medida de seguridad de navegadores
const mercadopago = require("mercadopago"); 
const path = require("path");

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
//para poner nuestras credednciales
mercadopago.configure({
	access_token: "TEST-3128219492036881-091501-c8a44669133348ac21dc6bfa6ff002e0-833874441",
});


app.use(express.urlencoded({ extended: false }));
app.use(express.json()); //permite leer archivos json

app.use(express.static(path.join(__dirname, "../client"))) //inficamos que cuando arranque servidor, se dirija a carpeta client
app.use(cors());

app.get("/", function (req, res) {
    //inicializa una primera ruta, lo que hace es que cuando arranca el servidor se va al index.html para mostrar lo que hay ahi
	path.resolve(__dirname, "..", "client", "index.html") //que vaya a carpeta client y levante archivo 
});

app.post("/create_preference", (req, res) => {
    //cuando desde el front enviamos los datos de la compra mediante una petision, crea una preferencia

	let preference = { //crea lla preferencia
        //la preferencia tiene determinados items que estan dentro del objeto
		items: [
			{
				title: req.body.description, //titulo objeto TODO DESDE FRONT
				unit_price: Number(req.body.price), //precio
				quantity: Number(req.body.quantity), //cantidad
			}
		],
		back_urls: {
            //rutas
			"success": "http://localhost:8080", //resultado exitoso, redirije 
			"failure": "http://localhost:8080", //falla, redirije
			"pending": "" //esta pendiente, si paga en efectivo o lo que sea y esta pendiente pago (no vamos a usar)
		},
		auto_return: "approved", //cuando la compra se aprovo, redirije a succres
	};

	mercadopago.preferences.create(preference)
        //crea la preferencia y devuelve una respuesta en forma de json, manda a back el id de la compra y devuelve en el front
        //para poder mostrar todos los detalles de compra
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
			console.log(error);
		});
});

app.get('/feedback', function (req, res) {
    //ruta para dar feedback si configuramos mas cosas, como para enviar a una pagina para poder seguir el estado de pago, compra, etc
    //(NO VAMOS A USAR ESTA PARTE)
	res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
});

app.listen(8080, () => {
    //escucha el servidor en puerto 8080 app == expres  (framework)
	console.log("The server is now running on Port 8080");
});