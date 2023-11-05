import axios from "./axios";

export const crearTareaRequest = (tarea) => axios.post("/tareas", tarea);

export const obtenerTareasRequest = () => axios.get("/tareas");

export const EliminarTareaRequest = (id) => axios.delete(`/tareas/${id}`)