import { Router } from "express";
import  indexController from '../controller/indexController';
import UploadDownloadHelper from "../middleware/UploadDownloadHelper";

const router = Router();
router.post("/", indexController.prodImgCtrl.create);
router.get("/", indexController.prodImgCtrl.findAll);
router.post("/images", UploadDownloadHelper.uploadImages, indexController.prodImgCtrl.uploudFile);

export default router;