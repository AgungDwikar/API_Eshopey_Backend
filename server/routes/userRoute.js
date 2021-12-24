import { Router } from "express";
import  indexController from '../controller/indexController';
import authJWT from "../middleware/authJWT";
// import UploadDownloadHelper from "../middleware/UploadDownloadHelper";

const router = Router();

router.get("/", indexController.userCtrl.findAll);
router.get("/:id", indexController.userCtrl.findOne);
router.post("/login",authJWT.authenticate,authJWT.login);
router.post("/signup",indexController.userCtrl.signup);

export default router;