const axios = require('axios');
const { log } = require('console');
const CountryParser = require("../../models/country")


async function GetCountries(req, res){
    console.log('route: / GetCountries')

    //api call
    try {
        const {data} = await axios.get('https://restcountries.com/v3.1/all');
        results = CountryParser(data)
        return res.json(results)
    } catch (error) {
        console.log('error try catch')
        console.log(error)
        return res.json({})
    }
}

async function GetCountriesByName(req, res){
    console.log('route: / GetCountriesByName')
    //api call
    try {
        const {data} = await axios.get('https://restcountries.com/v3.1/name/'+req.params.name);
        results = CountryParser(data)
        return res.json(results)
    } catch (error) {
        console.log('error try catch')
        console.log(error)
        return res.json({})
    }
        
}

async function GetCountriesByRegion(req, res){
    console.log('route: / GetCountriesByRegion')
    //api call
    try {
        const {data} = await axios.get('https://restcountries.com/v3.1/region/'+req.params.regionName);
        results = CountryParser(data)
        return res.json(results)
    } catch (error) {
        console.log('error try catch')
        console.log(error)
        return res.json({})
    }

}

async function GetCountriesByCapital(req, res){
    console.log('route: / GetCountriesByCapital')
    //api call
    try {
        const {data} = await axios.get('https://restcountries.com/v3.1/capital/'+req.params.capitalName);
        results = CountryParser(data)
        return res.json(results)
    } catch (error) {
        console.log('error try catch')
        console.log(error)
        return res.json({})
    }

}

module.exports = {
    GetCountries, 
    GetCountriesByCapital, 
    GetCountriesByRegion, 
    GetCountriesByName
}

