import express from "express";
export const router = express.Router();
import * as homeController from "../controllers/homeController.js";
import * as catalogController from "../controllers/catalogController.js"
import * as detailController from "../controllers/detailController.js"
import * as whoController from "../controllers/whoController.js"
import * as contactController from "../controllers/contactController.js"
import * as adminController from"../controllers/adminController.js"

router.get("/", homeController.homePage)

router.get("/catalogue", catalogController.catalogPage)

router.get("/detail/:id", detailController.detailPage)

router.get("/who", whoController.whoPage)

// page admin
router.get("/admin", adminController.filtreCafe, adminController.adminPage)
router.post("/addCafe", adminController.createCafe)
router.post("/deleteCafe", adminController.deleteCafe)
router.post("/modifyCafe", adminController.modifyCafe)

// Page de contacts
router.get("/contact", contactController.contactPage )

router.post("/contact", contactController.form )


router.use((req, res) => {
    res.status(404).render("error", {title : "404", text : "Oups, could not find that"});
});
