let countrySelect, citySelect, nightsInput, mealsPerDayInput, calculateButton, clearButton, budgetResult, budgetMessage;
document.addEventListener('DOMContentLoaded', function () {
  countrySelect = document.getElementById('country');
  citySelect = document.getElementById('city');
  nightsInput = document.getElementById('nights');
  mealsPerDayInput = document.getElementById('mealsPerDay');
  calculateButton = document.querySelector('#budgetForm button[type="button"]');
  clearButton = document.querySelector('#budgetForm button[type="button"]:nth-child(2)');
  budgetResult = document.getElementById('budgetResult');
  budgetMessage = document.getElementById('budgetMessage');


  const countries = {
          'portugal': ['Lisbon', 'Porto', 'Faro'],
          'italy': ['Rome', 'Venice', 'Florence'],
          'japan': ['Tokyo', 'Kyoto', 'Osaka'],
          'france': ['Paris', 'Nice', 'Lyon'],
          'spain': ['Barcelona', 'Madrid', 'Seville'],
          'germany': ['Berlin', 'Munich', 'Hamburg'],
          'uk': ['London', 'Edinburgh', 'Manchester'],
          'usa': ['New York', 'Los Angeles', 'Chicago'],
          'canada': ['Toronto', 'Vancouver', 'Montreal'],
          'australia': ['Sydney', 'Melbourne', 'Brisbane'],
          'brazil': ['Rio de Janeiro', 'São Paulo', 'Salvador'],
          'south africa': ['Cape Town', 'Johannesburg', 'Durban'],
          'egypt': ['Cairo', 'Luxor', 'Sharm El Sheikh'],
          'croatia': ['Dubrovnik', 'Split', 'Plitvice Lakes National Park'],
          'poland': ['Warsaw', 'Krakow', 'Wieliczka Salt Mine'],
          'new zealand': ['Auckland', 'Rotorua', 'Milford Sound'],
          'maldives': ['Malé', 'Thulusdhoo', 'Ari Atoll'],
          'china': ['Beijing', 'The Great Wall', 'Shanghai Bund'],
          'india': ['Taj Mahal', 'Jaipur', 'Kerala Backwaters'],
          'russia': ['Moscow Kremlin', 'Saint Petersburg Hermitage', 'Trans-Siberian Railway'],
          'argentina': ['Buenos Aires', 'Iguazu Falls', 'Perito Moreno Glacier'],
          'mexico': ['Chichen Itza', 'Cancun Beaches', 'Mexico City Zocalo'],
          'thailand': ['Bangkok Grand Palace', 'Phuket Beaches', 'Chiang Mai Temples'],
          'turkey': ['Hagia Sophia', 'Cappadocia Hot Air Balloons', 'Pamukkale'],
          'greece': ['Acropolis of Athens', 'Santorini', 'Mykonos Windmills'],
          'norway': ['Oslo Opera House', 'Northern Lights', 'Geirangerfjord'],
          'switzerland': ['Matterhorn', 'Lucerne Chapel Bridge', 'Interlaken'],
          'netherlands': ['Amsterdam Canals', 'Keukenhof Gardens', 'Van Gogh Museum'],
          'sweden': ['Stockholm Old Town', 'Icehotel', 'Gotland'],
          'denmark': ['Copenhagen Tivoli Gardens', 'Nyhavn', 'Legoland Billund'],
          'ireland': ['Cliffs of Moher', 'Dublin Temple Bar', 'Ring of Kerry'],
          'singapore': ['Marina Bay Sands', 'Gardens by the Bay', 'Sentosa Island'],
          'malaysia': ['Petronas Towers', 'Langkawi Sky Bridge', 'Penang Street Art'],
          'vietnam': ['Halong Bay', 'Hue Imperial City', 'Ho Chi Minh City War Remnants Museum'],
  };

  // Preencha a lista de países no formulário
  for (const country in countries) {
    const option = document.createElement('option');
    option.value = country;
    option.textContent = country.charAt(0).toUpperCase() + country.slice(1);
    countrySelect.appendChild(option);
  }

  // Adicione um ouvinte de evento ao selecionar um país para preencher as cidades correspondentes
  countrySelect.addEventListener('change', function () {
    const selectedCountry = countrySelect.value;
    const cities = countries[selectedCountry] || [];

    // Limpe as opções antigas
    citySelect.innerHTML = '<option value="" disabled selected>Select a city</option>';

    // Adicione as novas opções de cidade
    cities.forEach(function (city) {
      const option = document.createElement('option');
      option.value = city;
      option.textContent = city;
      citySelect.appendChild(option);
    });
  });

  calculateButton.addEventListener('click', calculateBudget);
  

  function calculateBudget() {
    const selectedCountry = countrySelect.value;
    const selectedCity = citySelect.value;
    const nights = parseInt(nightsInput.value, 10);
    const mealsPerDay = parseInt(mealsPerDayInput.value, 10);

    if (!selectedCountry || !selectedCity || isNaN(nights) || isNaN(mealsPerDay) || nights <= 0 || mealsPerDay <= 0) {
      alert('Please fill in all fields with valid numbers.');
      return;
    }

    // Obtenha os custos específicos do país e da cidade
    const countryData = countries[selectedCountry];
    if (!countryData) {
      alert('Invalid country selected.');
      return;
    }

    const accommodationCost = 100; // Substitua pelo custo real de acomodação
    const transportationCost = 50; // Substitua pelo custo real de transporte
    const costPerMeal = 10; // Substitua pelo custo real por refeição

    const totalAccommodationCost = nights * accommodationCost;
    const totalTransportationCost = transportationCost;
    const totalMealsCost = nights * mealsPerDay * costPerMeal;
    const totalCost = totalAccommodationCost + totalTransportationCost + totalMealsCost;

    // Exemplo de exibição do resultado
    const formattedResult = `
      <h2>Your Estimated Budget for ${selectedCity}, ${selectedCountry}</h2>
      <p>Accommodation (${nights} nights): $${totalAccommodationCost.toFixed(2)}</p>
      <p>Transportation: $${totalTransportationCost.toFixed(2)}</p>
      <p>Meals (${nights} nights, ${mealsPerDay} meals/day): $${totalMealsCost.toFixed(2)}</p>
      <hr>
      <p>Total Budget: $${totalCost.toFixed(2)}</p>
    `;

    budgetResult.innerHTML = formattedResult;
    budgetResult.style.display = 'block';
  }
});

clearButton.addEventListener('click', clearForm);

function clearForm() {
  // Reset the form fields
  countrySelect.value = '';
  citySelect.innerHTML = '<option value="" disabled selected>Select a city</option>';
  nightsInput.value = '';
  mealsPerDayInput.value = '';

  // Hide the budget result and clear its content
  budgetResult.style.display = 'none';
  budgetResult.innerHTML = '';

  // Clear the content of the budget message and hide it
  budgetMessage.style.display = 'none';
  budgetMessage.textContent = ''; // Use textContent to clear the content
}
// Adicione este código no seu arquivo budgetcalculator.js
function clearBudgetResult() {
  // Seleciona o elemento com o ID "budgetResult" e define seu conteúdo como vazio
  document.getElementById("budgetResult").innerHTML = "";
}


