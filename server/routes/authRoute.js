import { Router } from "express";
import authJWT from "../middleware/authJWT";
import indexController from "../controller/indexController";

const router = Router();

router.post("/signin",authJWT.authenticate,authJWT.login);
router.post("/signup",indexController.userCtrl.signup);

export default router