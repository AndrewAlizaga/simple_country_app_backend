const express = require("express")
const Router = express.Router()

//country router
const CountryRouter = require("./country/country")


//routing sets

//country

Router.use("/country", CountryRouter)

module.exports = Router