import Navbar from './components/Navbar/Navbar'
import { Container } from './components/ui/Container'
import { ProtectedRoute } from './components/ProtectedRoute'
import { useAuth } from "../context/AuthContext"

import { Router, Route } from 'react-router-dom'

import ProfilePage from './pages/ProfilePage'
import TareasPage from './pages/TareasPage'
import TareaFormPage from './pages/TareaFormPage'
import NotFound from './pages/NotFound'


function App() {

    const { isAuth } = useAuth();


    return (
        <>
            <Navbar />
            <Container className="py-5">
                <Routes>
                    <Route element={<ProtectedRoute isAllowed={!isAuth} redirecTo="/tareas" />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                    </Route>

                    <Route element={<ProtectedRoute isAllowed={isAuth} redirecTo="/login" />}>
                        <Route path="/perfil" element={<ProfilePage />} />
                        <Route path="/tareas" element={<TareasPage />} />
                        <Route path="/tareas/crear" element={<TareaFormPage />} />
                        <Route path="/tareas/editar/:id" element={<TareaFormPage />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Container>
        </>
    )
}

export default App