const loadCountries =()=>{
    fetch('https://restcountries.com/v2/all')
    .then(res =>res.json())
    .then(data =>displayCountries(data))
}
const displayCountries =(countries)=>{
    console.log(countries)
    const allCountries=countries.map(contry =>getCountryHtml(contry))
    const contry = document.getElementById('contry').innerHTML=allCountries
}

const getCountryHtml =(country)=>{
    return `
    <div>
         <h1>${country.name}</h1>
    </div>
    
    `
}
loadCountries()