import { Router } from "express";
import  indexController from '../controller/indexController'
// import UploadDownloadHelper from "../middleware/UploadDownloadHelper";

const router = Router();

router.get("/", indexController.categoryCtrl.findAll);
router.get("/:id", indexController.categoryCtrl.findOne);
router.post("/", indexController.categoryCtrl.create);
router.put("/:id", indexController.categoryCtrl.update);
router.delete("/:id", indexController.categoryCtrl.deleteRow);


export default router;