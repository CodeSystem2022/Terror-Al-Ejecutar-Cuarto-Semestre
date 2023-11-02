import {pool} from "../db.js"

export const signin = (req,res) => res.send ("Ingresando");
export const signup = async(req,res) => {
    const {name, email, password} = req.body;
    res.send("Regristrado");

    const result = await pool.query("INSERT INTO usuarios (name, email, password) VALUES ($1, $2, $3)",[name, email, password]);
    console.log(result);
    return res.json(result.rows[0]);
};
export const signout = (req,res) => res.send("cerrando sesion");
export const profile = (req,res) => res.send("Perfil de usuario");
