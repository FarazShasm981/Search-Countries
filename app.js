let countryInput = document.getElementById("searchCountry");
let search = document.getElementById("search");
let searchResult = document.getElementById("search-result");
let flag = document.getElementById("flag");
let Name = document.getElementById("name");
let capital = document.getElementById("capital");
let population = document.getElementById("population");
let language = document.getElementById("language");

search.addEventListener("click", function () {
  if (countryInput.value === "") {
    alert("Please Enter Country Name");
    return;
  }

 let countryName = countryInput.value;
  let apiUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
  console.log(apiUrl);
  fetch(apiUrl)
    .then((response) =>
     response.json())
    .then(function (data) {
      
      if(data.status === 404){
        alert('Country Not Found!');
        return;
      }
      searchResult.style.display = "block";

      countryData = data[0];
      console.log(countryData);
      flag.src = countryData.flags.png;
      Name.innerHTML = countryData.name.common;
      capital.innerHTML = countryData.capital;
      region.innerHTML = countryData.continents;
      population.innerHTML = countryData.population;
      language.innerHTML = Object.values( countryData.languages).toString( );

    })
});
