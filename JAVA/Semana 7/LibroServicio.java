
@Service
public class LibroServicio implements IlibroServicio(){
    
    @Autowired
    private LibrorRepositorio libroRepositorio;
    
    @Override
    public List<Libro> listarLibros(){
        return libroRepositorio.findAll();
    }

    @Override 
    public Libro buscarLibroPorId(Integer idLibro){
        return libroRepositorio.findById(idLibro).orElse(null);
    }

    @Override
    public void guardarLibro(Libro libro){
        libroRepositorio.save(libro);
    }

    @Override
    public void eliminarLibro(Libro libro){
        libroRepositorio.delete(libro);
    }
}