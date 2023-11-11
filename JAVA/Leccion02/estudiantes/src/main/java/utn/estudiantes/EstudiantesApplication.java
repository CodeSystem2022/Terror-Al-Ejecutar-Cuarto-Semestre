package UTN.estudiantes;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EstudiantesApplication implements CommandLineRunner {
	public static void main(String[] args) {
		SpringApplication.run(EstudiantesApplication.class, args);
	}


	@Override
	public void run(String... args) throws Exception{

	}

	Private boolean ejecutarOpciones(Scanner consola){
		var opcion = Integer.parseInt(consola.nextLine());
		var salir = false;
		switch (opcion){
			case 1 {}
			case 2 {}
			case 3 {}
			case 4 ->{ //Modificar estudiante
				logger.info("Modificar estudiante: "+nl);
				logger.info("Ingresar el id estudiante: ");
				var idEstudiante = Integer.parseInt(consola.nextLine());
				//buscamos el estudiante a modificar
				Estudiantes2022 estudiante =
						estudianteServicio.buscarEstudiantePorId(idEstudiante);
				if(estudiante != null){
					logger.info("Nombre: ");
					var nombre = consola.nextLine();
					logger.info("Apellido: ");
					var apellido = consola.nextLine();
					logger.info("Telefono: ");
					var telefono = consola.nextLine();
					logger.info("Email: ");
					var email = consola.nextLine();
					estudiante.setNombre(nombre);
					estudiante.setApellido(apellido);
					estudiante.setTelefono(telefono);
					estudiante.setEmail(email);
					estudianteServicio.guardarEstudiante(estudiante);
					logger.info("Estudiante modificado: "+estudiante+nl);
				}
				else
					logger.info("Estudiante NO encontrado con el if: "+idEstudiante+nl);
			}
		}//Fin Switch
	}return salir;

}
