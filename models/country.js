//parser
function CountryParser(countryData){
    let countries = []

    countryData.forEach(element => {
        
        countries.push({
            cname: element.name.official,
            capital: element.capital,
            region: element.region,
            population: element.population,
            flag: element.flags.png

        })
    });

    return countries
}


module.exports = CountryParser