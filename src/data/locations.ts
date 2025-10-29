export interface Location {
  id: string;
  name: string;
  coordinates: [number, number]; // [latitude, longitude]
  description: string;
  modelType: 'tower' | 'pyramid' | 'temple' | 'modern' | 'castle' | 'reactor' | 'statue' | 'dome' | 'wall';
  category: 'landmark' | 'ancient' | 'modern' | 'reactor';
}

export const locations: Location[] = [
  {
    id: 'eiffel-tower',
    name: 'Eiffel Tower',
    coordinates: [48.8584, 2.2945],
    description: 'Iconic iron lattice tower in Paris, France. Built in 1889, it stands 330 meters tall and is one of the most recognizable structures in the world.',
    modelType: 'tower',
    category: 'landmark'
  },
  {
    id: 'great-wall',
    name: 'Great Wall of China',
    coordinates: [40.4319, 116.5704],
    description: 'Ancient series of fortifications built across northern China. Stretching over 13,000 miles, it was built to protect against invasions.',
    modelType: 'wall',
    category: 'ancient'
  },
  {
    id: 'machu-picchu',
    name: 'Machu Picchu',
    coordinates: [-13.1631, -72.5450],
    description: 'Ancient Incan citadel in Peru, built in the 15th century. Situated high in the Andes Mountains, it showcases remarkable stone architecture.',
    modelType: 'temple',
    category: 'ancient'
  },
  {
    id: 'petra',
    name: 'Petra',
    coordinates: [30.3285, 35.4444],
    description: 'Ancient city in Jordan famous for its rock-cut architecture. The Treasury is its most iconic structure, carved directly into sandstone cliffs.',
    modelType: 'temple',
    category: 'ancient'
  },
  {
    id: 'giza-pyramids',
    name: 'Pyramids of Giza',
    coordinates: [29.9792, 31.1342],
    description: 'Ancient Egyptian pyramids built around 2560 BC. The Great Pyramid is one of the Seven Wonders of the Ancient World.',
    modelType: 'pyramid',
    category: 'ancient'
  },
  {
    id: 'colosseum',
    name: 'Colosseum',
    coordinates: [41.8902, 12.4922],
    description: 'Ancient Roman amphitheater in Rome, Italy. Built in 80 AD, it could hold up to 80,000 spectators for gladiatorial contests.',
    modelType: 'dome',
    category: 'ancient'
  },
  {
    id: 'angkor-wat',
    name: 'Angkor Wat',
    coordinates: [13.4125, 103.8670],
    description: 'Massive temple complex in Cambodia, originally built as a Hindu temple in the 12th century. It is the largest religious monument in the world.',
    modelType: 'temple',
    category: 'ancient'
  },
  {
    id: 'pantheon',
    name: 'Pantheon',
    coordinates: [41.8986, 12.4768],
    description: 'Ancient Roman temple in Rome with a magnificent dome. Built around 126 AD, it features the world\'s largest unreinforced concrete dome.',
    modelType: 'dome',
    category: 'ancient'
  },
  {
    id: 'stonehenge',
    name: 'Stonehenge',
    coordinates: [51.1789, -1.8262],
    description: 'Prehistoric monument in England consisting of massive standing stones. Built around 3000 BC, its purpose remains a mystery.',
    modelType: 'temple',
    category: 'ancient'
  },
  {
    id: 'statue-of-liberty',
    name: 'Statue of Liberty',
    coordinates: [40.6892, -74.0445],
    description: 'Colossal neoclassical sculpture in New York Harbor. A gift from France in 1886, it symbolizes freedom and democracy.',
    modelType: 'statue',
    category: 'landmark'
  },
  {
    id: 'sydney-opera-house',
    name: 'Sydney Opera House',
    coordinates: [-33.8568, 151.2153],
    description: 'Multi-venue performing arts center in Sydney, Australia. Its distinctive sail-like design makes it one of the most recognizable buildings.',
    modelType: 'modern',
    category: 'modern'
  },
  {
    id: 'christ-redeemer',
    name: 'Christ the Redeemer',
    coordinates: [-22.9519, -43.2105],
    description: 'Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil. Standing 30 meters tall atop Corcovado mountain, it overlooks the city.',
    modelType: 'statue',
    category: 'landmark'
  },
  {
    id: 'big-ben',
    name: 'Big Ben',
    coordinates: [51.5007, -0.1246],
    description: 'Iconic clock tower at the Palace of Westminster in London. Completed in 1859, its Great Bell chimes every hour.',
    modelType: 'tower',
    category: 'landmark'
  },
  {
    id: 'burj-khalifa',
    name: 'Burj Khalifa',
    coordinates: [25.1972, 55.2744],
    description: 'The world\'s tallest building in Dubai, UAE. Standing at 828 meters, it features cutting-edge engineering and stunning architecture.',
    modelType: 'modern',
    category: 'modern'
  },
  {
    id: 'neuschwanstein',
    name: 'Neuschwanstein Castle',
    coordinates: [47.5576, 10.7498],
    description: '19th-century Romanesque Revival palace in Bavaria, Germany. Built by King Ludwig II, it inspired Disney\'s castle design.',
    modelType: 'castle',
    category: 'landmark'
  },
  {
    id: 'mount-rushmore',
    name: 'Mount Rushmore',
    coordinates: [43.8791, -103.4591],
    description: 'Massive sculpture carved into granite in South Dakota, USA. Features 60-foot heads of four US presidents.',
    modelType: 'statue',
    category: 'landmark'
  },
  {
    id: 'alhambra',
    name: 'Alhambra',
    coordinates: [37.1760, -3.5881],
    description: 'Palace and fortress complex in Granada, Spain. Built in the 13th century, it showcases stunning Islamic architecture.',
    modelType: 'castle',
    category: 'ancient'
  },
  {
    id: 'forbidden-city',
    name: 'Forbidden City',
    coordinates: [39.9163, 116.3972],
    description: 'Imperial palace complex in Beijing, China. Built in the 15th century, it served as home to Chinese emperors for 500 years.',
    modelType: 'temple',
    category: 'ancient'
  },
  {
    id: 'saint-basils',
    name: "Saint Basil's Cathedral",
    coordinates: [55.7525, 37.6231],
    description: 'Colorful orthodox church in Moscow, Russia. Built in 1561, its distinctive onion domes are an iconic symbol of Russia.',
    modelType: 'dome',
    category: 'landmark'
  },
  {
    id: 'sagrada-familia',
    name: 'Sagrada Familia',
    coordinates: [41.4036, 2.1744],
    description: 'Basilica in Barcelona, Spain designed by Antoni Gaudí. Construction began in 1882 and continues today with its unique Gothic and Art Nouveau design.',
    modelType: 'tower',
    category: 'landmark'
  },
  {
    id: 'lotus-tower',
    name: 'Lotus Tower',
    coordinates: [6.9271, 79.8612],
    description: 'Tower in Colombo, Sri Lanka standing 350 meters tall. Completed in 2019, it is South Asia\'s tallest self-supported structure.',
    modelType: 'modern',
    category: 'modern'
  },
  {
    id: 'sigiriya',
    name: 'Sigiriya',
    coordinates: [7.9570, 80.7603],
    description: 'Ancient rock fortress in Sri Lanka. Built in the 5th century, this palace sits atop a 200-meter high rock column.',
    modelType: 'temple',
    category: 'ancient'
  },
  {
    id: 'sri-lankan-parliament',
    name: 'Sri Lankan Parliament',
    coordinates: [6.9042, 79.9208],
    description: 'Modern parliament building in Sri Jayawardenepura Kotte. Built on an island in a lake, it opened in 1982.',
    modelType: 'modern',
    category: 'modern'
  },
  {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    coordinates: [27.1751, 78.0421],
    description: 'Ivory-white marble mausoleum in Agra, India. Built in 1653, it is considered one of the finest examples of Mughal architecture.',
    modelType: 'dome',
    category: 'ancient'
  },
  {
    id: 'shanghai-pudong',
    name: 'Shanghai Pudong Airport',
    coordinates: [31.1434, 121.8052],
    description: 'Major international airport in Shanghai, China. One of the world\'s busiest airports, known for its modern terminal design.',
    modelType: 'modern',
    category: 'modern'
  },
  {
    id: 'hotel-altier',
    name: 'Hotel Altier',
    coordinates: [48.8566, 2.3522],
    description: 'Luxury hotel in Paris, France. Known for its elegant architecture and premium accommodations.',
    modelType: 'modern',
    category: 'modern'
  },
  {
    id: 'ryugyong-hotel',
    name: "Ryugyong Hotel",
    coordinates: [39.0392, 125.7294],
    description: 'Unfinished pyramid-shaped skyscraper in Pyongyang, North Korea. Construction began in 1987, it stands 330 meters tall.',
    modelType: 'pyramid',
    category: 'modern'
  },
  {
    id: 'leaning-tower',
    name: 'Leaning Tower of Pisa',
    coordinates: [43.7230, 10.3966],
    description: 'Freestanding bell tower in Pisa, Italy. Famous for its unintended tilt, construction began in 1173.',
    modelType: 'tower',
    category: 'landmark'
  },
  {
    id: 'silicon-valley',
    name: 'Silicon Valley',
    coordinates: [37.3875, -122.0575],
    description: 'Global center of technology and innovation in California, USA. Home to major tech companies and startups.',
    modelType: 'modern',
    category: 'modern'
  },
  {
    id: 'chernobyl',
    name: 'Chernobyl Reactor 4',
    coordinates: [51.3890, 30.0992],
    description: 'Site of the 1986 nuclear disaster in Ukraine. Now covered by a massive containment structure called the New Safe Confinement.',
    modelType: 'reactor',
    category: 'reactor'
  },
  {
    id: 'fukushima',
    name: 'Fukushima Daiichi',
    coordinates: [37.4213, 141.0325],
    description: 'Nuclear power plant in Japan that experienced a major accident in 2011 following a tsunami. Decommissioning is ongoing.',
    modelType: 'reactor',
    category: 'reactor'
  },
  {
    id: 'three-mile-island',
    name: 'Three Mile Island',
    coordinates: [40.1539, -76.7252],
    description: 'Nuclear power plant in Pennsylvania, USA. Site of a partial meltdown in 1979, the most serious accident in US commercial nuclear power history.',
    modelType: 'reactor',
    category: 'reactor'
  }
];
