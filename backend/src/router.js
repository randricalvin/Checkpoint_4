const express = require("express");

const { ProjectsController } = require("./controllers");

const router = express.Router();

router.get("/projectsadmin", ProjectsController.browse);
router.get("/projectsadmin/:id", ProjectsController.read);
router.put("/projectsadmin/:id", ProjectsController.edit);
router.post("/projectsadmin", ProjectsController.add);
router.delete("/projectsadmin/:id", ProjectsController.delete);

module.exports = router;
