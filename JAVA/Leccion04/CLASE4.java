import java.util.List;


@Service
public class EstudianteServicio implements IEstudianteServicio{
    @Autowired
    private EstudianteRepositorio estudianteRepositorio;
    
    @Override 
    public List<Estudiante> estudiantes = estudianteRepositorio.findAll();
    return estudiantes;
    
}