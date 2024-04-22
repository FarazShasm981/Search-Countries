let countryInput = document.getElementById("searchCountry").value.trim();
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

//   let countryName = countryInput;
  let url = `https://restcountries.com/v3.1/all${countryInput}`;
  fetch(url)
    .then((response) =>
     response.json())
    .then(function (data) {
      searchResult.style.display = "block";

      if(data.status === 404){
        alert('Country Not Found!');
        return;
      }

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
