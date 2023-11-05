import  Router from "express-promise-router";
import { profile, signin, signout, signup } from "../src/controllers/auth.controller";
import { isAuth } from "../middlewares/auth.middleware";
const router = Router();

router.post("/signin", signin);

router.post("/signup", signup);

router.post("/signout", signout);

router.get("/profile", isAuth, profile);

export default router;