const { Router } = require("express");

// Ejemplo: const authRouter = require('./auth.js');

const {
  getAll,
  getFromId,
  getFromName
} = require("../aux_functions/countryfunctions");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", getAll);

router.get("/:id", getFromId);

router.get("/", getFromName);


module.exports = router;