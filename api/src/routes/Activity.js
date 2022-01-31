const router = require('express').Router();
const {Op} = require('sequelize');
const {Country , Activity} = require('../db');



router.get('/', (req, res, next) => {
    return Activity.findAll({})
    .then((actividadesCreadas) => {
        res.json(actividadesCreadas)
    })
    .catch((error) => {
        next(error)
    }) 
})

router.post('/', async (req, res, next) => {
    const {name,difficulty,duration,season,countryId} = req.body
    try {
        if(name && difficulty && duration && season){
            let activityCreated = await Activity.create({
                    name,
                    difficulty,
                    duration ,
                    season,
                })
    try {
        let country = await Country.findAll({
            where:{
                id : countryId
            }})
            await activityCreated.addCountries(country)
            res.send(country)
    }
    catch (error) {
            next(error)
        }
    }
    else{
        res.status(404).send("Error no ingresaste los campos correctamente")
        }
    }
    catch (error) {
        next(error)
        }
    });


module.exports = router;