import tareasRouters from "./router/tareas.routers.js"
import authRouters from "./router/auth.routers.js"
import cookieParser from "cookie-parser"

const app = express();

app.use(cookieParser());
app.use('/api',tareasRouters);
app.use('/api',authRouters);