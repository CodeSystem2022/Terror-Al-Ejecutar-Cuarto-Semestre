import  Router from "express-promise-router";
import { profile, signin, signout, signup } from "../src/controllers/auth.controller";

const router = Router();

router.post("/signin", signin);

router.post("/signup", signup);

router.post("/signout", signout);

router.get("/profile", profile);

export default router;