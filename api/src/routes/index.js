const { Router } = require('express');
const countryRoutes = require("./Country");
const activityRoutes = require("./Activity");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/country', countryRoutes); // http://localhost:3001/country
router.use('/activity', activityRoutes); // http://localhost:3001/activity


module.exports = router;
