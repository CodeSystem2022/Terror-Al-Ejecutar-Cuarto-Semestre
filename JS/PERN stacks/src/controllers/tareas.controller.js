export const listarTareas = (req,res) => res.send('obteniendo tareas');

export const listarTarea = async (req,res)=> {
    const resultado = await pool.query('SELECT = FROM tareas WHERE id =$1',[req.params.id]);
    if (resultado.rowCount === 0){
        return res.status(404).json({
            message: 'La tarea no existe'
        });
    }
    return res.json(resultado.rows[0]);
}
    
export const crearTarea = (req,res)=>res.send('creando tarea');

export const actualizarTarea = (req,res) => res.send('actualizando tarea única');

export const eliminarTarea = (req,res) => res.send('eliminando tarea única');