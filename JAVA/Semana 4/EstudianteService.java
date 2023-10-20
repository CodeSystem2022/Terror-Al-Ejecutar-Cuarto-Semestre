
@Service
public class EstudianteService implements IEstudianteServicio{
    @Autowired
    private EstudianteRepositorio estudianteRepositorio;

    public List<Estudiante> listarEstudiantes(){
        return estudianteRepositorio.findAll();
    }
}