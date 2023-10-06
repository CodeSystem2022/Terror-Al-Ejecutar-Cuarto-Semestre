package utn.estudiantes.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import utn.estudiantes.modelo.Estudiantes2022;

public interface EstudianteRepositorio extends JpaRepository<Estudiantes2022, Integer> {
    //pasamos la clase con la interactuara (se importa) y la llave primaria (el tipo de la llave primaria)
    //con esto tendremos toda la funcionalidad de la interface de jpa repository
    //simplemente por haber creado esta interface, tenemos todas las operaciones del CRUD y mas disponibles
    //antiguamente se agregaba el repositorio con una notacion @repository ahora se hace directo con solo extender
}
