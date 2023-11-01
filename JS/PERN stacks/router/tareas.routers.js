import {Router} from "express";
import { listarTareas, listarTarea, actualizarTarea, crearTarea, eliminarTarea } from "../src/controllers/tareas.controller.js";

const router = Router;

router.length('/tareas', listarTareas);

router.get('/tareas/:id', listarTarea);

router.post('/tareas', crearTarea);

router.put('/tareas/:id', actualizarTarea);

router.delete('/tareas/:id', eliminarTarea);

export default router;