import tareasRouters from "./router/tareas.routers.js"
import authRouters from "./router/auth.routers.js"

const app = express();

app.use('/api',tareasRouters);
app.use('/api',authRouters);