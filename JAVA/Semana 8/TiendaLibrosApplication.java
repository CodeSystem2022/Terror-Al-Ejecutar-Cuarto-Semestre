package utn.tienda_libros;



@SpringbootApplication
public class TiendaLibrosApplication{

    public static void main(String[] args){ SpringbootApplication.class}
    ConfigurableApplicationContext contextoSpring = 
            new SpringbootApplicationBuilder(TiendaLibrosApplication.class)
            .headless(false)
            .web(WebApplicationType.NONE)
            .run(args);

    //Ejecutamos el codigo para cargar el formulario
    EventQueue.invokeLater(() ->{
        //obtener el objeto from a traves del spring
        LibroFrom libroFrom = contextoSpring.getBean(LibroFrom.class);
    });
}