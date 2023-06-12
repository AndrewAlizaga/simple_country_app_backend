const express = require("express")
//country router
const CountryRouter = express.Router()
const CountryController = require("../../controllers/country/country")

//country routes middleware
CountryRouter.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

//country routes
CountryRouter.get("/", CountryController.GetCountries)
CountryRouter.get("/capital/:capitalName", CountryController.GetCountriesByCapital)
CountryRouter.get("/region/:regionName", CountryController.GetCountriesByRegion)
CountryRouter.get("/name/:name", CountryController.GetCountriesByName)


module.exports = CountryRouter