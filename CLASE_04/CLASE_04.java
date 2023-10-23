String nl = System.lineSeparator();

public static void main(String[] args){
    logger.info("Iniciando la aplicacion...");
    //Levantar la fabrica de Spring
    SpringApplication.run(EstudiantesApplicattion.class, args);
    logger.info("Aplicacion finalizada");
}

@override
public void run(String... args) throws Exception {
    logger.info("Ejecutando el metodo run de Spring...");
}
