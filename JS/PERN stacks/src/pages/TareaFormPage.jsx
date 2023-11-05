import { func } from "prop-types"
import { Card, Textarea, Label } from "../components/ui"
import {useForm} from 'react-hook-form'
import {useNavigate} from "react-router-dom"
import { crearTareaReqest } from "../api/tareas.api"
import { useState } from "react"


function TareaFormPage() {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()
    const navigate = useNavigate();
    const [postError, setPostError] = useState ([]);

    const onSubmit = handleSubmit(async (data) => {
        try{
        const res = await crearTareaRequest(data)
        navigate("/tareas");
        } catch (error){
          setPostError([error.response.data.message])
        }
    });

    return (
        <div className="flex h-[80vh] justify-center items-center">
            <Card>
                {
                    postError.map((error, i) => (
                        <p className="bg-red-500 text-white p-2 "key={i}>{error}</p>
                    ))
                }
                <h2 className="text-3x1 font-bold my-4">Formulario de Tareas</h2>
                <form onSubmit={onSubmit}>
                    <Label htmlFor="Titulo">Titulo</Label>
                    <Input 
                    type="text"
                    placeholder="Titulo"
                    autoFocus 
                    {...register("titulo",{required: true})
                    }/>
                    {errors.titulo && (
                        <p className="text-red-500">El título es requerido</p>
                    )}

                    <Label htmlFor="Descripción">Descripción</Label>
                    <Textarea type="text" placeholder="Description"
                    rows={3}
                    {...register("descripción")}/>

                    <Button>
                        Guardar
                    </Button>
                </form>
            </Card>
        </div>
    )
}

export default TareaFormPage