import { Router } from "express";
import auth from "./auth.routes";
import index from "./index.routes";
import user from "./user.routes";
import web from "./web.routes"
import traderssenales from "./traderssenales.routes"
import cursotrading from "./cursotrading.routes"


const router = Router();

router.use(index);
router.use(auth);
router.use(user);
router.use(web);
//router.use(traderssenales);


router.use("/trader",traderssenales);
router.use("/trading", cursotrading);

export default router;
