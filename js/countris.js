const loadCountries =()=>{
    fetch('https://restcountries.com/v2/all')
    .then(res =>res.json())
    .then(data =>displayCountries(data))
}
const displayCountries =(countries)=>{
    console.log(countries[0])
    const allCountries=countries.map(contry =>getCountryHtml(contry))
    const contry = document.getElementById('contry').innerHTML=allCountries.join(' ')
}

const getCountryHtml =(country)=>{
    return `
    <div class='country'>
         <h1>${country.name}</h1>
         <img src="${country.flags.png}" alt="">
    </div>
    
    `
}
loadCountries()