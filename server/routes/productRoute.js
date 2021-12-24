import { Router } from "express";
import  indexController from '../controller/indexController';
import UploadDownloadHelper from "../middleware/UploadDownloadHelper";

const router = Router();

router.post("/", indexController.prodCtrl.create);
router.get("/", indexController.prodCtrl.findAll);
router.get("/:id", indexController.prodCtrl.findOne);
router.delete("/:id", indexController.prodCtrl.deleteRow);
router.post("/images", UploadDownloadHelper.uploadImages, indexController.prodCtrl.createFull);
router.post("/aplod",UploadDownloadHelper.uploadImages, indexController.prodCtrl.input, indexController.prodImgCtrl.create1);

export default router;