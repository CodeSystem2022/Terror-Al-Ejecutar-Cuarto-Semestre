
import {Button, Card, Input} from "../components/ui"
import {useform} from "react-hook-from";

function RegisterPage() {

    const {register, handleSubmit, fromState: {errors} } = useform();

    const {signup, errors: setUserErrors} = useAuth();
    const navigate = useNavigate();
    const onSubmit = handleSubmit(async(data) => {
        const user = await signup(data);
        navigate("/perfil")
    });


    return (
        <Container className="h-[calc(100vh-10rem)] flex items-center justify-center">            
            <Card>
                {setUserErrors &&
                  setUserErrors.map((error) => (
                    <p className="bg-red-500 text-white p2">{error}</p>
                  ))}
            <h3 className="text-2x1 font-bold">Registro</h3>
                <form onSubmit={onSubmit}>

                    <Input placeholder="Ingrese su nombre">
                        {register("name", {required:true})}</Input>
                    {
                        errors.name && <p className="text-red-500">este campo es requerido</p>
                    }    
                    <Input type="email" placeholder="Ingrese su email">
                        {register("email",{required:true})}</Input>                    
                    {
                        errors.name && <p className="text-red-500">este campo es requerido</p>
                    }   
                    <Input type="password" placeholder="Ingrese su contraseña">
                        {register("password",{required:true})}</Input>                    
                    {
                        errors.name && <p className="text-red-500">este campo es requerido</p>
                    }

                    <button>Registrarse</button>
                </form>
            </Card>
        </Container>
    );
}

export default RegisterPage;