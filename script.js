document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const touristSpotsList = document.getElementById('touristSpotsList');
  const searchIcon = document.getElementById('searchIcon');
  const locationSummary = document.getElementById('locationSummary');

  function handleSearch() {
      const userInput = searchInput.value.toLowerCase();
      const countries = {
          'pt': ['Lisbon', 'Porto', 'Faro'],  
          'Pt': ['Lisbon', 'Porto', 'Faro'],
          'PT': ['Lisbon', 'Porto', 'Faro'],
          'portugal': ['Lisbon', 'Porto', 'Faro'],
          'Portugal': ['Lisbon', 'Porto', 'Faro'],
          'PORTUGAL': ['Lisbon', 'Porto', 'Faro'],  

          'ita': ['Rome', 'Venice', 'Florence'],
          'ITA': ['Rome', 'Venice', 'Florence'],
          'italy': ['Rome', 'Venice', 'Florence'],
          'Italy': ['Rome', 'Venice', 'Florence'],
          'ITALY': ['Rome', 'Venice', 'Florence'],
          
          'jp': ['Tokyo', 'Kyoto', 'Osaka'],
          'Jp': ['Tokyo', 'Kyoto', 'Osaka'],
          'JP': ['Tokyo', 'Kyoto', 'Osaka'],
          'japan': ['Tokyo', 'Kyoto', 'Osaka'],
          'Japan': ['Tokyo', 'Kyoto', 'Osaka'],
          'JAPAN': ['Tokyo', 'Kyoto', 'Osaka'],
          
          'fr': ['Paris', 'Nice', 'Lyon'],
          'Fr': ['Paris', 'Nice', 'Lyon'],
          'FR': ['Paris', 'Nice', 'Lyon'],
          'france': ['Paris', 'Nice', 'Lyon'],
          'France': ['Paris', 'Nice', 'Lyon'],
          'FRANCE': ['Paris', 'Nice', 'Lyon'],


          'es': ['Barcelona', 'Madrid', 'Seville'],
          'Es': ['Barcelona', 'Madrid', 'Seville'],
          'ES': ['Barcelona', 'Madrid', 'Seville'],
          'spain': ['Barcelona', 'Madrid', 'Seville'],
          'Spain': ['Barcelona', 'Madrid', 'Seville'],
          'SPAIN': ['Barcelona', 'Madrid', 'Seville'],

          'ger': ['Berlin', 'Munich', 'Hamburg'],
          'Ger': ['Berlin', 'Munich', 'Hamburg'],
          'GER': ['Berlin', 'Munich', 'Hamburg'],
          'germany': ['Berlin', 'Munich', 'Hamburg'],
          'Germany': ['Berlin', 'Munich', 'Hamburg'],
          'GERMANY': ['Berlin', 'Munich', 'Hamburg'],
          
          'uk': ['London', 'Edinburgh', 'Manchester'],
          'Uk': ['London', 'Edinburgh', 'Manchester'],
          'UK': ['London', 'Edinburgh', 'Manchester'],
          'united kingdom': ['London', 'Edinburgh', 'Manchester'],
          'United Kingdom': ['London', 'Edinburgh', 'Manchester'],
          'UNITED KINGDOM': ['London', 'Edinburgh', 'Manchester'],  

          'usa': ['New York', 'Los Angeles', 'Chicago'],
          'Usa': ['New York', 'Los Angeles', 'Chicago'],
          'USA': ['New York', 'Los Angeles', 'Chicago'],
          'united states': ['New York', 'Los Angeles', 'Chicago'],
          'United States': ['New York', 'Los Angeles', 'Chicago'],
          'UNITED STATES': ['New York', 'Los Angeles', 'Chicago'],

          'ca': ['Toronto', 'Vancouver', 'Montreal'],
          'Ca': ['Toronto', 'Vancouver', 'Montreal'],
          'CA': ['Toronto', 'Vancouver', 'Montreal'],
          'canada': ['Toronto', 'Vancouver', 'Montreal'],
          'Canada': ['Toronto', 'Vancouver', 'Montreal'],
          'CANADA': ['Toronto', 'Vancouver', 'Montreal'],

          'au': ['Sydney', 'Melbourne', 'Brisbane'],
          'Au': ['Sydney', 'Melbourne', 'Brisbane'],
          'AU': ['Sydney', 'Melbourne', 'Brisbane'],
          'australia': ['Sydney', 'Melbourne', 'Brisbane'],
          'Australia': ['Sydney', 'Melbourne', 'Brisbane'],
          'AUSTRALIA': ['Sydney', 'Melbourne', 'Brisbane'],
          
          'br': ['Rio de Janeiro', 'São Paulo', 'Salvador'],
          'Br': ['Rio de Janeiro', 'São Paulo', 'Salvador'],
          'BR': ['Rio de Janeiro', 'São Paulo', 'Salvador'],
          'brasil': ['Rio de Janeiro', 'São Paulo', 'Salvador'],
          'Brasil': ['Rio de Janeiro', 'São Paulo', 'Salvador'],
          'BRASIL': ['Rio de Janeiro', 'São Paulo', 'Salvador'],
          
          'sa': ['Cape Town', 'Johannesburg', 'Durban'],
          'Sa': ['Cape Town', 'Johannesburg', 'Durban'],
          'SA': ['Cape Town', 'Johannesburg', 'Durban'],
          'south africa': ['Cape Town', 'Johannesburg', 'Durban'],
          'South Africa': ['Cape Town', 'Johannesburg', 'Durban'],
          'SOUTH AFRICA': ['Cape Town', 'Johannesburg', 'Durban'],

          'eg': ['Cairo', 'Luxor', 'Sharm El Sheikh'],
          'Eg': ['Cairo', 'Luxor', 'Sharm El Sheikh'],
          'EG': ['Cairo', 'Luxor', 'Sharm El Sheikh'],
          'egypt': ['Cairo', 'Luxor', 'Sharm El Sheikh'],
          'Egypt': ['Cairo', 'Luxor', 'Sharm El Sheikh'],
          'EGYPT': ['Cairo', 'Luxor', 'Sharm El Sheikh'],

          'cro': ['Dubrovnik', 'Split', 'Plitvice Lakes National Park'],
          'Cro': ['Dubrovnik', 'Split', 'Plitvice Lakes National Park'],
          'CRO': ['Dubrovnik', 'Split', 'Plitvice Lakes National Park'],
          'croatia': ['Dubrovnik', 'Split', 'Plitvice Lakes National Park'],
          'Croatia': ['Dubrovnik', 'Split', 'Plitvice Lakes National Park'],
          'CROATIA': ['Dubrovnik', 'Split', 'Plitvice Lakes National Park'],

          'po': ['Warsaw', 'Krakow', 'Wieliczka Salt Mine'],
          'Po': ['Warsaw', 'Krakow', 'Wieliczka Salt Mine'],
          'PO': ['Warsaw', 'Krakow', 'Wieliczka Salt Mine'],
          'poland': ['Warsaw', 'Krakow', 'Wieliczka Salt Mine'],
          'Poland': ['Warsaw', 'Krakow', 'Wieliczka Salt Mine'],
          'POLAND': ['Warsaw', 'Krakow', 'Wieliczka Salt Mine'],

          'nz': ['Auckland', 'Rotorua', 'Milford Sound'],
          'Nz': ['Auckland', 'Rotorua', 'Milford Sound'],
          'NZ': ['Auckland', 'Rotorua', 'Milford Sound'],
          'new zealand': ['Auckland', 'Rotorua', 'Milford Sound'],
          'New Zealand': ['Auckland', 'Rotorua', 'Milford Sound'],
          'NEW ZEALAND': ['Auckland', 'Rotorua', 'Milford Sound'],

          'mv': ['Malé', 'Thulusdhoo', 'Ari Atoll'],
          'Mv': ['Malé', 'Thulusdhoo', 'Ari Atoll'],
          'MV': ['Malé', 'Thulusdhoo', 'Ari Atoll'],
          'maldives': ['Malé', 'Thulusdhoo', 'Ari Atoll'],
          'Maldives': ['Malé', 'Thulusdhoo', 'Ari Atoll'],
          'MALDIVES': ['Malé', 'Thulusdhoo', 'Ari Atoll'],

          'cn': ['Beijing', 'The Great Wall', 'Shanghai Bund'],
          'Cn': ['Beijing', 'The Great Wall', 'Shanghai Bund'],
          'CN': ['Beijing', 'The Great Wall', 'Shanghai Bund'],
          'china': ['Beijing', 'The Great Wall', 'Shanghai Bund'],
          'China': ['Beijing', 'The Great Wall', 'Shanghai Bund'],
          'CHINA': ['Beijing', 'The Great Wall', 'Shanghai Bund'],

          'ind': ['Taj Mahal', 'Jaipur', 'Kerala Backwaters'],
          'Ind': ['Taj Mahal', 'Jaipur', 'Kerala Backwaters'],
          'IND': ['Taj Mahal', 'Jaipur', 'Kerala Backwaters'],
          'india': ['Taj Mahal', 'Jaipur', 'Kerala Backwaters'],
          'India': ['Taj Mahal', 'Jaipur', 'Kerala Backwaters'],
          'INDIA': ['Taj Mahal', 'Jaipur', 'Kerala Backwaters'],

          'rus': ['Moscow Kremlin', 'Saint Petersburg Hermitage', 'Trans-Siberian Railway'],
          'Rus': ['Moscow Kremlin', 'Saint Petersburg Hermitage', 'Trans-Siberian Railway'],
          'RUS': ['Moscow Kremlin', 'Saint Petersburg Hermitage', 'Trans-Siberian Railway'],
          'russia': ['Moscow Kremlin', 'Saint Petersburg Hermitage', 'Trans-Siberian Railway'],
          'Russia': ['Moscow Kremlin', 'Saint Petersburg Hermitage', 'Trans-Siberian Railway'],
          'RUSSIA': ['Moscow Kremlin', 'Saint Petersburg Hermitage', 'Trans-Siberian Railway'],

          'arg': ['Buenos Aires', 'Iguazu Falls', 'Perito Moreno Glacier'],
          'Arg': ['Buenos Aires', 'Iguazu Falls', 'Perito Moreno Glacier'],
          'ARG': ['Buenos Aires', 'Iguazu Falls', 'Perito Moreno Glacier'],
          'argentina': ['Buenos Aires', 'Iguazu Falls', 'Perito Moreno Glacier'],
          'Argentina': ['Buenos Aires', 'Iguazu Falls', 'Perito Moreno Glacier'],
          'ARGENTINA': ['Buenos Aires', 'Iguazu Falls', 'Perito Moreno Glacier'],

          'mx': ['Chichen Itza', 'Cancun Beaches', 'Mexico City Zocalo'],
          'Mx': ['Chichen Itza', 'Cancun Beaches', 'Mexico City Zocalo'],
          'MX': ['Chichen Itza', 'Cancun Beaches', 'Mexico City Zocalo'],
          'mexico': ['Chichen Itza', 'Cancun Beaches', 'Mexico City Zocalo'],
          'Mexico': ['Chichen Itza', 'Cancun Beaches', 'Mexico City Zocalo'],
          'MEXICO': ['Chichen Itza', 'Cancun Beaches', 'Mexico City Zocalo'],

          'th': ['Bangkok Grand Palace', 'Phuket Beaches', 'Chiang Mai Temples'],
          'Th': ['Bangkok Grand Palace', 'Phuket Beaches', 'Chiang Mai Temples'],
          'TH': ['Bangkok Grand Palace', 'Phuket Beaches', 'Chiang Mai Temples'],
          'thailand': ['Bangkok Grand Palace', 'Phuket Beaches', 'Chiang Mai Temples'],
          'Thailand': ['Bangkok Grand Palace', 'Phuket Beaches', 'Chiang Mai Temples'],
          'THAILAND': ['Bangkok Grand Palace', 'Phuket Beaches', 'Chiang Mai Temples'],

          'tr': ['Hagia Sophia', 'Cappadocia Hot Air Balloons', 'Pamukkale'],
          'Tr': ['Hagia Sophia', 'Cappadocia Hot Air Balloons', 'Pamukkale'],
          'TR': ['Hagia Sophia', 'Cappadocia Hot Air Balloons', 'Pamukkale'],
          'turkey': ['Hagia Sophia', 'Cappadocia Hot Air Balloons', 'Pamukkale'],
          'Turkey': ['Hagia Sophia', 'Cappadocia Hot Air Balloons', 'Pamukkale'],
          'TURKEY': ['Hagia Sophia', 'Cappadocia Hot Air Balloons', 'Pamukkale'],

          'gr': ['Acropolis of Athens', 'Santorini', 'Mykonos Windmills'],
          'Gr': ['Acropolis of Athens', 'Santorini', 'Mykonos Windmills'],
          'GR': ['Acropolis of Athens', 'Santorini', 'Mykonos Windmills'],
          'greece': ['Acropolis of Athens', 'Santorini', 'Mykonos Windmills'],
          'Greece': ['Acropolis of Athens', 'Santorini', 'Mykonos Windmills'],
          'GREECE': ['Acropolis of Athens', 'Santorini', 'Mykonos Windmills'],

          'no': ['Oslo Opera House', 'Northern Lights', 'Geirangerfjord'],
          'No': ['Oslo Opera House', 'Northern Lights', 'Geirangerfjord'],
          'NO': ['Oslo Opera House', 'Northern Lights', 'Geirangerfjord'],
          'norway': ['Oslo Opera House', 'Northern Lights', 'Geirangerfjord'],
          'Norway': ['Oslo Opera House', 'Northern Lights', 'Geirangerfjord'],
          'NORWAY': ['Oslo Opera House', 'Northern Lights', 'Geirangerfjord'],

          'ch': ['Matterhorn', 'Lucerne Chapel Bridge', 'Interlaken'],
          'Ch': ['Matterhorn', 'Lucerne Chapel Bridge', 'Interlaken'],
          'CH': ['Matterhorn', 'Lucerne Chapel Bridge', 'Interlaken'],
          'switzerland': ['Matterhorn', 'Lucerne Chapel Bridge', 'Interlaken'],
          'Switzerland': ['Matterhorn', 'Lucerne Chapel Bridge', 'Interlaken'],
          'SWITZERLAND': ['Matterhorn', 'Lucerne Chapel Bridge', 'Interlaken'],

          'nl': ['Amsterdam Canals', 'Keukenhof Gardens', 'Van Gogh Museum'],
          'Nl': ['Amsterdam Canals', 'Keukenhof Gardens', 'Van Gogh Museum'],
          'NL': ['Amsterdam Canals', 'Keukenhof Gardens', 'Van Gogh Museum'],
          'netherlands': ['Amsterdam Canals', 'Keukenhof Gardens', 'Van Gogh Museum'],
          'Netherlands': ['Amsterdam Canals', 'Keukenhof Gardens', 'Van Gogh Museum'],
          'NETHERLANDS': ['Amsterdam Canals', 'Keukenhof Gardens', 'Van Gogh Museum'],

          'se': ['Stockholm Old Town', 'Icehotel', 'Gotland'],
          'Se': ['Stockholm Old Town', 'Icehotel', 'Gotland'],
          'SE': ['Stockholm Old Town', 'Icehotel', 'Gotland'],
          'sweden': ['Stockholm Old Town', 'Icehotel', 'Gotland'],
          'Sweden': ['Stockholm Old Town', 'Icehotel', 'Gotland'],
          'SWEDEN': ['Stockholm Old Town', 'Icehotel', 'Gotland'],

          'dk': ['Copenhagen Tivoli Gardens', 'Nyhavn', 'Legoland Billund'],
          'Dk': ['Copenhagen Tivoli Gardens', 'Nyhavn', 'Legoland Billund'],
          'DK': ['Copenhagen Tivoli Gardens', 'Nyhavn', 'Legoland Billund'],
          'denmark': ['Copenhagen Tivoli Gardens', 'Nyhavn', 'Legoland Billund'],
          'Denmark': ['Copenhagen Tivoli Gardens', 'Nyhavn', 'Legoland Billund'],
          'DENMARK': ['Copenhagen Tivoli Gardens', 'Nyhavn', 'Legoland Billund'],

          'ie': ['Cliffs of Moher', 'Dublin Temple Bar', 'Ring of Kerry'],
          'Ie': ['Cliffs of Moher', 'Dublin Temple Bar', 'Ring of Kerry'],
          'IE': ['Cliffs of Moher', 'Dublin Temple Bar', 'Ring of Kerry'],
          'ireland': ['Cliffs of Moher', 'Dublin Temple Bar', 'Ring of Kerry'],
          'Ireland': ['Cliffs of Moher', 'Dublin Temple Bar', 'Ring of Kerry'],
          'IRELAND': ['Cliffs of Moher', 'Dublin Temple Bar', 'Ring of Kerry'],

          'sg': ['Marina Bay Sands', 'Gardens by the Bay', 'Sentosa Island'],
          'Sg': ['Marina Bay Sands', 'Gardens by the Bay', 'Sentosa Island'],
          'SG': ['Marina Bay Sands', 'Gardens by the Bay', 'Sentosa Island'],
          'singapore': ['Marina Bay Sands', 'Gardens by the Bay', 'Sentosa Island'],
          'Singapore': ['Marina Bay Sands', 'Gardens by the Bay', 'Sentosa Island'],
          'SINGAPORE': ['Marina Bay Sands', 'Gardens by the Bay', 'Sentosa Island'],

          'my': ['Petronas Towers', 'Langkawi Sky Bridge', 'Penang Street Art'],
          'My': ['Petronas Towers', 'Langkawi Sky Bridge', 'Penang Street Art'],
          'MY': ['Petronas Towers', 'Langkawi Sky Bridge', 'Penang Street Art'],
          'malaysia': ['Petronas Towers', 'Langkawi Sky Bridge', 'Penang Street Art'],
          'Malaysia': ['Petronas Towers', 'Langkawi Sky Bridge', 'Penang Street Art'],
          'MALAYSIA': ['Petronas Towers', 'Langkawi Sky Bridge', 'Penang Street Art'],

          'vn': ['Halong Bay', 'Hue Imperial City', 'Ho Chi Minh City War Remnants Museum'],
          'Vn': ['Halong Bay', 'Hue Imperial City', 'Ho Chi Minh City War Remnants Museum'],
          'vN': ['Halong Bay', 'Hue Imperial City', 'Ho Chi Minh City War Remnants Museum'],
          'vietnam': ['Halong Bay', 'Hue Imperial City', 'Ho Chi Minh City War Remnants Museum'],
          'Vietnam': ['Halong Bay', 'Hue Imperial City', 'Ho Chi Minh City War Remnants Museum'],
          'vIETNAM': ['Halong Bay', 'Hue Imperial City', 'Ho Chi Minh City War Remnants Museum'],

      };

      if (countries.hasOwnProperty(userInput)) {
          displayTouristSpots(countries[userInput]);
      } else {
          clearTouristSpotsList();
      }

      touristSpotsList.classList.add('show');
  }

  searchInput.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
          handleSearch();
      }
  });

  searchIcon.addEventListener('click', function () {
      handleSearch();
  });

  function displayTouristSpots(spots) {
      clearTouristSpotsList();
      spots.forEach(function (spot) {
          const listItem = document.createElement('li');
          listItem.textContent = spot;
          listItem.addEventListener('click', function () {
              showLocationSummary(spot);
          });
          touristSpotsList.appendChild(listItem);
      });
  }

  function showLocationSummary(location) {
      const summaries = {
        'Lisbon': 'Lisbon, the capital of Portugal, is known for its charming streets, historic architecture, and the iconic Belem Tower. Must-visit spots include the Alfama district and São Jorge Castle.',
        'Porto': 'Porto, a coastal city in Portugal, is famous for its port wine cellars, Ribeira district, and Clerigos Tower.',
        'Faro': 'Faro, located in the Algarve region of Portugal, is known for its historic Old Town, Faro Cathedral, and beautiful beaches.',
        'Rome': 'Rome, the capital of Italy, is home to iconic landmarks like the Colosseum, Roman Forum, and Vatican City with St. Peter\'s Basilica.',
        'Venice': 'Venice is a unique city in Italy known for its canals, St. Mark\'s Square, and historic architecture. Don\'t miss a gondola ride and the Rialto Bridge.',
        'Florence': 'Florence, the birthplace of the Renaissance, boasts attractions like the Uffizi Gallery, Ponte Vecchio, and the Florence Cathedral.',
        'Tokyo': 'Tokyo, the capital of Japan, offers a mix of modern and traditional attractions. Visit the Tokyo Tower, Senso-ji Temple, and explore the bustling districts like Shibuya.',
        'Kyoto': 'Kyoto is known for its traditional temples, beautiful gardens, and geisha districts. Must-visit places include Kinkaku-ji (Golden Pavilion) and Fushimi Inari Shrine.',
        'Osaka': 'Osaka is a vibrant city in Japan with attractions like Osaka Castle, Universal Studios Japan, and the lively Dotonbori district.',
        'Paris': 'Paris, the City of Light, is famous for the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. Explore charming neighborhoods like Montmartre and Le Marais.',
        'Nice': 'Nice, located on the French Riviera, is known for its Promenade des Anglais, Castle Hill, and vibrant markets.',
        'Lyon': 'Lyon, known for its gastronomy, features attractions like the Basilica of Notre-Dame de Fourvière, Old Town, and Presqu\'île.',
        'Barcelona': 'Barcelona in Spain is famous for its unique architecture by Antoni Gaudí, including the Sagrada Familia and Park Güell. The city also boasts beautiful beaches like Barceloneta.',
        'Madrid': 'Madrid, the capital of Spain, offers attractions like the Royal Palace, Prado Museum, and Retiro Park.',
        'Seville': 'Seville, known for its Moorish architecture, features the Alcazar of Seville, Seville Cathedral, and Plaza de España.',
        'Cape Town': 'Cape Town, South Africa, is known for iconic landmarks like Table Mountain, Robben Island, and the Victoria & Alfred Waterfront.',
        'Johannesburg': 'Johannesburg is the largest city in South Africa, offering attractions like the Apartheid Museum, Lion Park, and Soweto.',
        'Durban': 'Durban, a coastal city in South Africa, is famous for its Golden Mile beachfront, uShaka Marine World, and Moses Mabhida Stadium.',
        'Cairo': 'Cairo, the capital of Egypt, is rich in history with the Giza Pyramids, Sphinx, and Egyptian Museum. Explore the vibrant Khan El Khalili bazaar.',
        'Luxor': 'Luxor is known for its ancient temples and monuments, including the Karnak Temple, Valley of the Kings, and Luxor Temple.',
        'Sharm El Sheikh': 'Sharm El Sheikh is a popular resort destination in Egypt, known for its Red Sea beaches, coral reefs, and water activities.',
        'Dubrovnik': 'Dubrovnik in Croatia is famous for its well-preserved medieval architecture, city walls, and stunning views from Mount Srd.',
        'Split': 'Split, located on the Adriatic coast, features the Diocletian\'s Palace, Marjan Hill, and beautiful beaches like Bacvice.',
        'Plitvice Lakes National Park': 'Plitvice Lakes National Park is a natural wonder in Croatia, known for its cascading lakes, waterfalls, and lush greenery.',
        'Warsaw': 'Warsaw, the capital of Poland, offers historical sites like the Royal Castle, Wilanów Palace, and the Warsaw Uprising Museum.',
        'Krakow': 'Krakow is known for its medieval Old Town, Wawel Castle, and the historic Cloth Hall in the Main Square.',
        'Wieliczka Salt Mine': 'Wieliczka Salt Mine, near Krakow, is a UNESCO World Heritage site known for its underground chambers, sculptures, and saline lakes.',
        'Auckland': 'Auckland, New Zealand, is known for its stunning harbors, Sky Tower, and vibrant waterfront. Explore nearby islands like Waiheke and Rangitoto.',
        'Rotorua': 'Rotorua is famous for its geothermal wonders, Maori culture, and attractions like Te Puia and Wai-O-Tapu Thermal Wonderland.',
        'Milford Sound': 'Milford Sound, a fjord in New Zealand, is known for its dramatic landscapes, waterfalls, and cruise experiences.',
        'Malé': 'Malé is the capital of the Maldives, offering attractions like the Old Friday Mosque, Maldives Islamic Centre, and vibrant markets.',
        'Thulusdhoo': 'Thulusdhoo is known for its surf breaks, local crafts, and the Coca-Cola factory. Explore the laid-back island atmosphere.',
        'Ari Atoll': 'Ari Atoll in the Maldives is famous for its overwater bungalows, coral reefs, and stunning marine life.',
        'Beijing': 'Beijing, the capital of China, is home to historic sites like the Forbidden City, Temple of Heaven, and the iconic Tiananmen Square.',
        'The Great Wall': 'The Great Wall of China, a UNESCO World Heritage site, is a must-visit with its impressive architecture and breathtaking views.',
        'Shanghai Bund': 'The Shanghai Bund, along the Huangpu River, is known for its colonial architecture, modern skyscrapers, and vibrant waterfront.',
        'Taj Mahal': 'Taj Mahal in India is an architectural masterpiece, known for its white marble structure, intricate details, and beautiful gardens.',
        'Jaipur': 'Jaipur, the Pink City of India, offers attractions like the Hawa Mahal, City Palace, and the Amer Fort.',
        'Kerala Backwaters': 'Kerala Backwaters is a network of serene waterways in India, surrounded by lush green landscapes and traditional houseboats.',
        'Moscow Kremlin': 'Moscow Kremlin in Russia is a historic fortress with attractions like the Cathedral Square, Tsar Bell, and Tsar Cannon.',
        'Saint Petersburg Hermitage': 'The Hermitage Museum in Saint Petersburg, Russia, is one of the largest and oldest museums in the world, housing a vast art collection.',
        'Trans-Siberian Railway': 'The Trans-Siberian Railway is the longest railway line, connecting Moscow with Vladivostok, offering scenic views of diverse landscapes.',
        'Buenos Aires': 'Buenos Aires, Argentina, is known for its tango culture, historic neighborhoods like San Telmo, and iconic landmarks like the Obelisco.',
        'Iguazu Falls': 'Iguazu Falls, on the Argentina-Brazil border, is a breathtaking natural wonder with numerous cascades surrounded by lush rainforest.',
        'Perito Moreno Glacier': 'Perito Moreno Glacier in Argentina is a stunning glacier with frequent ice calving, offering incredible views in Los Glaciares National Park.',
        'Chichen Itza': 'Chichen Itza in Mexico is a UNESCO World Heritage site, known for the iconic El Castillo pyramid and ancient Mayan ruins.',
        'Cancun Beaches': 'Cancun, Mexico, boasts beautiful beaches with crystal-clear waters, vibrant nightlife, and the nearby Mayan archaeological site of Tulum.',
        'Mexico City Zocalo': 'Mexico City\'s Zocalo is the historic main square, surrounded by landmarks like the Metropolitan Cathedral and the National Palace.',
        'Bangkok Grand Palace': 'The Grand Palace in Bangkok, Thailand, is a stunning complex with the Emerald Buddha, golden spires, and intricate Thai architecture.',
        'Phuket Beaches': 'Phuket, Thailand, offers pristine beaches like Patong, Karon, and Kata, along with vibrant nightlife and water activities.',
        'Chiang Mai Temples': 'Chiang Mai in Thailand is known for its ancient temples, including Wat Phra Singh, Wat Chedi Luang, and Wat Phra That Doi Suthep.',
        'Hagia Sophia': 'Hagia Sophia in Istanbul, Turkey, is a marvel of Byzantine architecture, featuring a blend of Christian and Islamic elements.',
        'Cappadocia Hot Air Balloons': 'Cappadocia in Turkey is famous for its unique landscapes, cave dwellings, and hot air balloon rides over fairy chimneys.',
        'Pamukkale': 'Pamukkale in Turkey is known for its terraces of white mineral-rich thermal waters, travertines, and the ancient Hierapolis city ruins.',
        'Acropolis of Athens': 'The Acropolis of Athens, Greece, is an ancient citadel with iconic structures like the Parthenon, Erechtheion, and Temple of Athena Nike.',
        'Santorini': 'Santorini, Greece, is a picturesque island known for its white-washed buildings, blue-domed churches, and stunning sunsets over the Caldera.',
        'Mykonos Windmills': 'The Mykonos Windmills in Greece are iconic landmarks, offering panoramic views of the island and the Aegean Sea.',
        'Oslo Opera House': 'Oslo Opera House in Norway is a modern architectural gem, located by the waterfront, and offers a unique rooftop with panoramic views.',
        'Northern Lights': 'The Northern Lights, or Aurora Borealis, are a natural phenomenon visible in Norway, creating vibrant colors in the Arctic night sky.',
        'Geirangerfjord': 'Geirangerfjord in Norway is a UNESCO-listed fjord known for its stunning scenery, waterfalls like the Seven Sisters, and steep cliffs.',
        'Matterhorn': 'The Matterhorn in Switzerland is one of the most iconic mountains in the Alps, attracting climbers and offering breathtaking views.',
        'Lucerne Chapel Bridge': 'Chapel Bridge in Lucerne, Switzerland, is a historic wooden bridge with a tower, providing scenic views of the city and mountains.',
        'Interlaken': 'Interlaken in Switzerland is nestled between Lake Thun and Lake Brienz, offering outdoor activities, stunning landscapes, and adventure sports.',
        'Amsterdam Canals': 'The canals of Amsterdam, Netherlands, are UNESCO World Heritage sites, with picturesque views, historic houses, and vibrant street life.',
        'Keukenhof Gardens': 'Keukenhof Gardens in the Netherlands is famous for its colorful tulip displays, attracting visitors from around the world each spring.',
        'Van Gogh Museum': 'The Van Gogh Museum in Amsterdam showcases the works of Vincent van Gogh and other artists from the Dutch Golden Age.',
        'Stockholm Old Town': 'Stockholm\'s Old Town, Gamla Stan, is a charming area with cobblestone streets, colorful buildings, and landmarks like the Royal Palace.',
        'Icehotel': 'The Icehotel in Sweden is a unique hotel constructed from ice and snow, offering a one-of-a-kind Arctic experience.',
        'Gotland': 'Gotland, an island in Sweden, is known for its medieval architecture, Visbys city walls, and scenic landscapes.',
        'Copenhagen Tivoli Gardens': 'Tivoli Gardens in Copenhagen, Denmark, is one of the world\'s oldest amusement parks, featuring rides, gardens, and entertainment.',
        'Nyhavn': 'Nyhavn in Copenhagen is a picturesque waterfront area with colorful buildings, historic ships, and a lively atmosphere.',
        'Legoland Billund': 'Legoland Billund in Denmark is a popular theme park featuring Lego-themed attractions, rides, and imaginative displays.',
        'Edinburgh Castle': 'Edinburgh Castle in Scotland is a historic fortress on Castle Rock, offering panoramic views of the city and housing the Crown Jewels.',
        'Loch Ness': 'Loch Ness in Scotland is famous for the mythical Loch Ness Monster and its stunning Scottish Highland scenery.',
        'Giant\'s Causeway': 'Giant\'s Causeway in Northern Ireland is a UNESCO World Heritage site known for its unique hexagonal basalt columns along the coast.',
        'Cliffs of Moher': 'The Cliffs of Moher in Ireland are dramatic sea cliffs rising along the Atlantic Ocean, offering breathtaking views of the Irish coastline.',
        'Dublin Temple Bar': 'Temple Bar in Dublin, Ireland, is a cultural and entertainment district with pubs, galleries, and a lively atmosphere.',
        'Paris Disneyland': 'Disneyland Paris is a magical theme park with attractions, entertainment, and the enchanting Sleeping Beauty Castle.',
        'Mont Saint-Michel': 'Mont Saint-Michel in France is a medieval abbey perched on a rocky island, surrounded by tidal waters and picturesque landscapes.',
        'Loire Valley Châteaux': 'The Loire Valley in France is known for its beautiful châteaux, including Château de Chambord and Château de Chenonceau.',
        'Provence Lavender Fields': 'Provence in France is famous for its vibrant lavender fields, charming villages, and scenic landscapes.',
        'Swiss Alps': 'The Swiss Alps offer stunning mountain scenery, outdoor adventures, and iconic destinations like the Jungfrau and Matterhorn.',
        'Bavarian Alps': 'The Bavarian Alps in Germany feature picturesque landscapes, charming villages, and outdoor activities like hiking and skiing.',
        'Neuschwanstein Castle': 'Neuschwanstein Castle in Germany is a fairy-tale castle nestled in the Bavarian Alps, known for its stunning architecture.',
        'Berlin Brandenburg Gate': 'The Brandenburg Gate in Berlin, Germany, is a historic landmark and symbol of reunification, surrounded by important government buildings.',
        'Black Forest': 'The Black Forest in Germany is a dense, wooded region with charming villages, cuckoo clocks, and the scenic Triberg Waterfalls.',
        'Amsterdam Canals': 'The canals of Amsterdam, Netherlands, are UNESCO World Heritage sites, with picturesque views, historic houses, and vibrant street life.',
        'Keukenhof Gardens': 'Keukenhof Gardens in the Netherlands is famous for its colorful tulip displays, attracting visitors from around the world each spring.',
        'Van Gogh Museum': 'The Van Gogh Museum in Amsterdam showcases the works of Vincent van Gogh and other artists from the Dutch Golden Age.',
        'Stockholm Old Town': 'Stockholm\'s Old Town, Gamla Stan, is a charming area with cobblestone streets, colorful buildings, and landmarks like the Royal Palace.',
        'Icehotel': 'The Icehotel in Sweden is a unique hotel constructed from ice and snow, offering a one-of-a-kind Arctic experience.',
        'Gotland': 'Gotland, an island in Sweden, is known for its medieval architecture, Visby\'s city walls, and scenic landscapes.',
        'Copenhagen Tivoli Gardens': 'Tivoli Gardens in Copenhagen, Denmark, is one of the world\'s oldest amusement parks, featuring rides, gardens, and entertainment.',
        'Nyhavn': 'Nyhavn in Copenhagen is a picturesque waterfront area with colorful buildings, historic ships, and a lively atmosphere.',
        'Legoland Billund': 'Legoland Billund in Denmark is a popular theme park featuring Lego-themed attractions, rides, and imaginative displays.',
        'Edinburgh Castle': 'Edinburgh Castle in Scotland is a historic fortress on Castle Rock, offering panoramic views of the city and housing the Crown Jewels.',
        'Loch Ness': 'Loch Ness in Scotland is famous for the mythical Loch Ness Monster and its stunning Scottish Highland scenery.',
        'Giant\'s Causeway': 'Giant\'s Causeway in Northern Ireland is a UNESCO World Heritage site known for its unique hexagonal basalt columns along the coast.',
        'Cliffs of Moher': 'The Cliffs of Moher in Ireland are dramatic sea cliffs rising along the Atlantic Ocean, offering breathtaking views of the Irish coastline.',
        'Dublin Temple Bar': 'Temple Bar in Dublin, Ireland, is a cultural and entertainment district with pubs, galleries, and a lively atmosphere.',
        'Paris Disneyland': 'Disneyland Paris is a magical theme park with attractions, entertainment, and the enchanting Sleeping Beauty Castle.',
        'Mont Saint-Michel': 'Mont Saint-Michel in France is a medieval abbey perched on a rocky island, surrounded by tidal waters and picturesque landscapes.',
        'Loire Valley Châteaux': 'The Loire Valley in France is known for its beautiful châteaux, including Château de Chambord and Château de Chenonceau.',
        'Provence Lavender Fields': 'Provence in France is famous for its vibrant lavender fields, charming villages, and scenic landscapes.',
        'Swiss Alps': 'The Swiss Alps offer stunning mountain scenery, outdoor adventures, and iconic destinations like the Jungfrau and Matterhorn.',
        'Bavarian Alps': 'The Bavarian Alps in Germany feature picturesque landscapes, charming villages, and outdoor activities like hiking and skiing.',
        'Neuschwanstein Castle': 'Neuschwanstein Castle in Germany is a fairy-tale castle nestled in the Bavarian Alps, known for its stunning architecture.',
        'Berlin Brandenburg Gate': 'The Brandenburg Gate in Berlin, Germany, is a historic landmark and symbol of reunification, surrounded by important government buildings.',
        'Black Forest': 'The Black Forest in Germany is a dense, wooded region with charming villages, cuckoo clocks, and the scenic Triberg Waterfalls.',
        'Athens Acropolis': 'The Acropolis of Athens, Greece, is an ancient citadel with iconic structures like the Parthenon, Erechtheion, and Temple of Athena Nike.',
        'Santorini': 'Santorini, Greece, is a picturesque island known for its white-washed buildings, blue-domed churches, and stunning sunsets over the Caldera.',
        'Mykonos Windmills': 'The Mykonos Windmills in Greece are iconic landmarks, offering panoramic views of the island and the Aegean Sea.',
        'Oslo Opera House': 'Oslo Opera House in Norway is a modern architectural gem, located by the waterfront, and offers a unique rooftop with panoramic views.',
        'Northern Lights': 'The Northern Lights, or Aurora Borealis, are a natural phenomenon visible in Norway, creating vibrant colors in the Arctic night sky.',
        'Geirangerfjord': 'Geirangerfjord in Norway is a UNESCO-listed fjord known for its stunning scenery, waterfalls like the Seven Sisters, and steep cliffs.',
        'Matterhorn': 'The Matterhorn in Switzerland is one of the most iconic mountains in the Alps, attracting climbers and offering breathtaking views.',
        'Lucerne Chapel Bridge': 'Chapel Bridge in Lucerne, Switzerland, is a historic wooden bridge with a tower, providing scenic views of the city and mountains.',
        'Interlaken': 'Interlaken in Switzerland is nestled between Lake Thun and Lake Brienz, offering outdoor activities, stunning landscapes, and adventure sports.',
        'Amsterdam Canals': 'The canals of Amsterdam, Netherlands, are UNESCO World Heritage sites, with picturesque views, historic houses, and vibrant street life.',
        'Keukenhof Gardens': 'Keukenhof Gardens in the Netherlands is famous for its colorful tulip displays, attracting visitors from around the world each spring.',
        'Van Gogh Museum': 'The Van Gogh Museum in Amsterdam showcases the works of Vincent van Gogh and other artists from the Dutch Golden Age.',
        'Stockholm Old Town': 'Stockholm\'s Old Town, Gamla Stan, is a charming area with cobblestone streets, colorful buildings, and landmarks like the Royal Palace.',
        'Icehotel': 'The Icehotel in Sweden is a unique hotel constructed from ice and snow, offering a one-of-a-kind Arctic experience.',
        'Gotland': 'Gotland, an island in Sweden, is known for its medieval architecture, Visby\'s city walls, and scenic landscapes.',
        'Copenhagen Tivoli Gardens': 'Tivoli Gardens in Copenhagen, Denmark, is one of the world\'s oldest amusement parks, featuring rides, gardens, and entertainment.',
        'Nyhavn': 'Nyhavn in Copenhagen is a picturesque waterfront area with colorful buildings, historic ships, and a lively atmosphere.',
        'Legoland Billund': 'Legoland Billund in Denmark is a popular theme park featuring Lego-themed attractions, rides, and imaginative displays.',
        'Edinburgh Castle': 'Edinburgh Castle in Scotland is a historic fortress on Castle Rock, offering panoramic views of the city and housing the Crown Jewels.',
        'Loch Ness': 'Loch Ness in Scotland is famous for the mythical Loch Ness Monster and its stunning Scottish Highland scenery.',
        'Giant\'s Causeway': 'Giant\'s Causeway in Northern Ireland is a UNESCO World Heritage site known for its unique hexagonal basalt columns along the coast.',
        'Cliffs of Moher': 'The Cliffs of Moher in Ireland are dramatic sea cliffs rising along the Atlantic Ocean, offering breathtaking views of the Irish coastline.',
        'Dublin Temple Bar': 'Temple Bar in Dublin, Ireland, is a cultural and entertainment district with pubs, galleries, and a lively atmosphere.',
        'Paris Disneyland': 'Disneyland Paris is a magical theme park with attractions, entertainment, and the enchanting Sleeping Beauty Castle.',
        'Mont Saint-Michel': 'Mont Saint-Michel in France is a medieval abbey perched on a rocky island, surrounded by tidal waters and picturesque landscapes.',
        'Loire Valley Châteaux': 'The Loire Valley in France is known for its beautiful châteaux, including Château de Chambord and Château de Chenonceau.',
        'Provence Lavender Fields': 'Provence in France is famous for its vibrant lavender fields, charming villages, and scenic landscapes.',
        'Swiss Alps': 'The Swiss Alps offer stunning mountain scenery, outdoor adventures, and iconic destinations like the Jungfrau and Matterhorn.',
        'Bavarian Alps': 'The Bavarian Alps in Germany feature picturesque landscapes, charming villages, and outdoor activities like hiking and skiing.',
        'Neuschwanstein Castle': 'Neuschwanstein Castle in Germany is a fairy-tale castle nestled in the Bavarian Alps, known for its stunning architecture.',
        'Berlin Brandenburg Gate': 'The Brandenburg Gate in Berlin, Germany, is a historic landmark and symbol of reunification, surrounded by important government buildings.',
        'Black Forest': 'The Black Forest in Germany is a dense, wooded region with charming villages, cuckoo clocks, and the scenic Triberg Waterfalls.',
        'Athens Acropolis': 'The Acropolis of Athens, Greece, is an ancient citadel with iconic structures like the Parthenon, Erechtheion, and Temple of Athena Nike.',
        'Santorini': 'Santorini, Greece, is a picturesque island known for its white-washed buildings, blue-domed churches, and stunning sunsets over the Caldera.',
        'Mykonos Windmills': 'The Mykonos Windmills in Greece are iconic landmarks, offering panoramic views of the island and the Aegean Sea.',
        'Oslo Opera House': 'Oslo Opera House in Norway is a modern architectural gem, located by the waterfront, and offers a unique rooftop with panoramic views.',
        'Northern Lights': 'The Northern Lights, or Aurora Borealis, are a natural phenomenon visible in Norway, creating vibrant colors in the Arctic night sky.',
        'Geirangerfjord': 'Geirangerfjord in Norway is a UNESCO-listed fjord known for its stunning scenery, waterfalls like the Seven Sisters, and steep cliffs.',
        'Matterhorn': 'The Matterhorn in Switzerland is one of the most iconic mountains in the Alps, attracting climbers and offering breathtaking views.',
        'Lucerne Chapel Bridge': 'Chapel Bridge in Lucerne, Switzerland, is a historic wooden bridge with a tower, providing scenic views of the city and mountains.',
        'Interlaken': 'Interlaken in Switzerland is nestled between Lake Thun and Lake Brienz, offering outdoor activities, stunning landscapes, and adventure sports.',
        'Amsterdam Canals': 'The canals of Amsterdam, Netherlands, are UNESCO World Heritage sites, with picturesque views, historic houses, and vibrant street life.',
        'Keukenhof Gardens': 'Keukenhof Gardens in the Netherlands is famous for its colorful tulip displays, attracting visitors from around the world each spring.',
        'Van Gogh Museum': 'The Van Gogh Museum in Amsterdam showcases the works of Vincent van Gogh and other artists from the Dutch Golden Age.',
        'Stockholm Old Town': 'Stockholm\'s Old Town, Gamla Stan, is a charming area with cobblestone streets, colorful buildings, and landmarks like the Royal Palace.',
        'Icehotel': 'The Icehotel in Sweden is a unique hotel constructed from ice and snow, offering a one-of-a-kind Arctic experience.',
        'Gotland': 'Gotland, an island in Sweden, is known for its medieval architecture, Visby\'s city walls, and scenic landscapes.',
        'Copenhagen Tivoli Gardens': 'Tivoli Gardens in Copenhagen, Denmark, is one of the world\'s oldest amusement parks, featuring rides, gardens, and entertainment.',
        'Nyhavn': 'Nyhavn in Copenhagen is a picturesque waterfront area with colorful buildings, historic ships, and a lively atmosphere.',
        'Legoland Billund': 'Legoland Billund in Denmark is a popular theme park featuring Lego-themed attractions, rides, and imaginative displays.',
        'Edinburgh Castle': 'Edinburgh Castle in Scotland is a historic fortress on Castle Rock, offering panoramic views of the city and housing the Crown Jewels.',
        'Loch Ness': 'Loch Ness in Scotland is famous for the mythical Loch Ness Monster and its stunning Scottish'
                
      };
      const summary = summaries[location];
    if (summary) {
        const locationSummaryContainer = document.getElementById('locationSummaryContainer');

        
        locationSummaryContainer.innerHTML = '';

       
        const locationSummaryElement = document.createElement('div');
        locationSummaryElement.textContent = summary;

      
        locationSummaryContainer.appendChild(locationSummaryElement);

      
      locationSummaryContainer.style.position = 'absolute';
      locationSummaryContainer.style.top = '100%'; 
      locationSummaryContainer.style.left = '50%';
      locationSummaryContainer.style.transform = 'translateX(-50%)';
      locationSummaryContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
      locationSummaryContainer.style.padding = '20px';
      locationSummaryContainer.style.borderRadius = '10px';
      locationSummaryContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
      locationSummaryContainer.style.zIndex = '1000';


locationSummaryContainer.style.display = 'block';


        
        locationSummaryContainer.style.display = 'block';
    }
}

  function clearTouristSpotsList() {
      touristSpotsList.innerHTML = '';
      touristSpotsList.classList.remove('show');
  }
  
  
});
