<<<<<<<< HEAD:JAVA/Leccion03/tienda_libros/src/main/java/utn/tienda_libros/modelo/Libro.java
package utn.tienda_libros.modelo;
========
package UTN.estudiantes.modelo;
>>>>>>>> main:JAVA/Semana2/estudiantes/src/main/java/UTN/estudiantes/modelo/Estudiante.java

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
<<<<<<<< HEAD:JAVA/Leccion03/tienda_libros/src/main/java/utn/tienda_libros/modelo/Libro.java
========
//boilerplate - Repetitive code
>>>>>>>> main:JAVA/Semana2/estudiantes/src/main/java/UTN/estudiantes/modelo/Estudiante.java
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
<<<<<<<< HEAD:JAVA/Leccion03/tienda_libros/src/main/java/utn/tienda_libros/modelo/Libro.java
public class Libro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer idLibro;
    String nombreLibro;
    String autor;
    Double precio;
    Integer existencias;

========
public class Estudiante {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idEstudiante;
    private String nombre;
    private String apellido;
    private String telefono;
    private String email;
>>>>>>>> main:JAVA/Semana2/estudiantes/src/main/java/UTN/estudiantes/modelo/Estudiante.java
}
