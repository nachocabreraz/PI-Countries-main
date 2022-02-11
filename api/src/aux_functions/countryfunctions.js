const { Activity, Country } = require("../db");
const axios = require("axios");
const { Op, where } = require("sequelize");
const { URL } = require("../Variables");

const call = async (URL, flag) => {
  try {
    const call = await axios.get(URL);
    const arr = call.data.map((e) => ({
      id: e.cca3,
      name: e.translations.spa.common,
      flag: e.flags[1],
      continent: e.continents[0],
      capital: e.capital ? e.capital[0] : "No capital registered",
      subregion: e.subregion,
      area: e.area,
      population: e.population,
    }));
    if (flag === true) {
      const result = await Country.bulkCreate(arr);
      return result;
    } else return arr;
  } catch (err) {
    console.log(err);
  }
};

const getAll = async (req, res, next) => {
  const { name } = req.query;
  if (name) return next();
  try {
    const activityDb = await Country.findAll({
      include: {
        model: Activity,
      },
    });
    if (!activityDb.length) {
      const firstCall = await call(URL.COUNTRIES, true);
      res.json(firstCall);
    } else res.json(activityDb);
  } catch (err) {
    next(err);
  }
};

const getFromId = (req, res, next) => {
  const { id } = req.params;
  Country.findByPk(id.toUpperCase(), {
    include: {
      model: Activity,
    },
  })
    .then((countryDb) => {
      countryDb
        ? res.json(countryDb)
        : res.status(404).send("No matches were found");
    })
    .catch((error) => {
      console.log(error);
      res.status(404).send("No matches were found");
    });
};

const getFromName = async (req, res) => {
  const { name } = req.query;
  try{
    if(name){
      let country = await Country.findAll({
        include: {model: Activity},
        where: {name: {[Op.iLike]: `%${name}%`}} //agregue%
      });
      if(country.length===0) {
        country = [{
          name: 'Country not found, please check your spelling',
          flag: 'https://ps.w.org/404-solution/assets/icon-256x256.jpg?rev=1610739',
          capital: '-',
          continent:'-',
          population: '-'
        }]
      }
      return res.json(country)
    } else {
      let auxCountries = await axios.get(`https://restcountries.com/v2/all`);
      await Promise.all(auxCountries.data.map((el)=>{
        let info = {
          id: el.cca3,
      name: el.translations.spa.common,
      flag: el.flags[1],
      continent: el.continents[0],
      capital: el.capital ? el.capital[0] : "No capital registered",
      subregion: el.subregion,
      area: el.area,
      population: el.population,
        };
        Country.findOrCreate( {where: info} );
      }));
      return info? res.status(200).json(info) : res.status(404).json('There is no country with that name')
    }
  } catch(error){
    console.log(error)
  }
};



module.exports = {
  getAll,
  getFromId,
  getFromName,
};