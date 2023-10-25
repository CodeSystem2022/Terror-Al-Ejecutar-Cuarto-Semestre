import pg from "pg";

const pool = new pg.Pool{( 
    port: 5434,
    host: "localhost",
    user: "postgres",
    password: "admin",
)};

pool.on("connect",() => {
    console.log("Conectado a la base de datos");
});

