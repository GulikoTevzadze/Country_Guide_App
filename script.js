const country = document.getElementById("country");
const button = document.getElementById("button");
const result = document.getElementById("result");


button.addEventListener("click", randomCountry);

function randomCountry() {
  let countryName = country.value;
  fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((response) => response.json())
    .then((data) => {
      result.innerHTML = `
        <img src="${data[0].flags.svg}" alt="flag"
        class="flag-img">
        <h1>${data[0].name.common}</h1>
        <div class="result-block">
        <h3>Capital: <span> ${data[0].capital[0]} ;</span></h3>
        <h3>Continent: <span> ${data[0].continents[0]} ;</span></h3>
        <h3>Population: <span> ${data[0].population} ;</span></h3>
        <h3>Languages: <span> ${Object.values(data[0].languages)
          .toString()
          .split(",")
          .join(" ,")} ;</span></h3>
        </div>
        
        `;
    })
    .catch(() => {
      if (countryName.length ==0) {
        result.innerHTML = `<h4> The input field cannot be empty </h4>`;
      } else {
        result.innerHTML = `<h4>Please enter a country </h4>`;
      }
    });
}
