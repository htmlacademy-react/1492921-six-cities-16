const offerList = [
  {
    id: '38f33a49-572b-4199-8fac-b09c90206562',
    title: 'Tile House',
    description:
      'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    type: 'house',
    price: 693,
    images: [
      'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
    ],
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16,
    },
    goods: ['Towels', 'Wi-Fi', 'Kitchen', 'Breakfast', 'Fridge'],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl:
        'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
    },
    isPremium: true,
    isFavorite: false,
    rating: 2.7,
    bedrooms: 3,
    maxAdults: 5,
  },
  {
    id: 'dabae48f-da25-4db3-ba22-1750d257b744',
    title: 'Loft Studio in the Central Area',
    description:
      'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    type: 'house',
    price: 621,
    images: [
      'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    ],
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16,
    },
    goods: [
      'Kitchen',
      'Heating',
      'Washing machine',
      'Coffee machine',
      'Laptop friendly workspace',
      'Baby seat',
      'Towels',
      'Fridge',
      'Wi-Fi',
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl:
        'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
    },
    isPremium: false,
    isFavorite: false,
    rating: 2.5,
    bedrooms: 3,
    maxAdults: 8,
  },
  {
    id: 'e630b5b5-c5e9-4dad-9a2a-252096667d96',
    title: 'Waterfront with extraordinary view',
    description:
      'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    type: 'room',
    price: 245,
    images: [
      'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    ],
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16,
    },
    goods: ['Fridge', 'Breakfast', 'Dishwasher'],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl:
        'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
    },
    isPremium: false,
    isFavorite: false,
    rating: 1.3,
    bedrooms: 1,
    maxAdults: 1,
  },
  {
    id: '4c8a629b-0905-4043-8847-2b802fc1ed3b',
    title: 'Wood and stone place',
    description:
      // eslint-disable-next-line quotes
      "This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.",
    type: 'hotel',
    price: 193,
    images: [
      'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
    ],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.36554,
      longitude: 4.911976,
      zoom: 16,
    },
    goods: [
      'Air conditioning',
      'Breakfast',
      'Heating',
      'Coffee machine',
      'Washing machine',
      'Washer',
      'Towels',
      'Laptop friendly workspace',
      'Kitchen',
      'Fridge',
      'Cable TV',
      'Baby seat',
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl:
        'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
    },
    isPremium: true,
    isFavorite: false,
    rating: 3.5,
    bedrooms: 2,
    maxAdults: 9,
  },
  {
    id: 'ac9fc8de-5e54-4737-a09e-f2bfd883f39c',
    title: 'House in countryside',
    description:
      'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    type: 'room',
    price: 164,
    images: [
      'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
    ],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.37454,
      longitude: 4.881976,
      zoom: 16,
    },
    goods: ['Washer', 'Laptop friendly workspace', 'Heating'],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl:
        'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
    },
    isPremium: false,
    isFavorite: false,
    rating: 2.1,
    bedrooms: 1,
    maxAdults: 2,
  },
  {
    id: 'df9c6d64-5775-44f2-8868-1c6b7521e124',
    title: 'Canal View Prinsengracht',
    description:
      // eslint-disable-next-line quotes
      "This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.",
    type: 'hotel',
    price: 192,
    images: [
      'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
    ],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.385540000000006,
      longitude: 4.902976,
      zoom: 16,
    },
    goods: ['Laptop friendly workspace', 'Baby seat', 'Fridge', 'Breakfast'],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl:
        'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
    },
    isPremium: false,
    isFavorite: false,
    rating: 3.7,
    bedrooms: 5,
    maxAdults: 10,
  },
  {
    id: '030ce394-3e4e-4696-8e31-20ace4377015',
    title: 'Loft Studio in the Central Area',
    description:
      'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    type: 'room',
    price: 283,
    images: [
      'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
    ],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.397540000000006,
      longitude: 4.9099759999999995,
      zoom: 16,
    },
    goods: [
      'Fridge',
      'Towels',
      'Kitchen',
      'Breakfast',
      'Coffee machine',
      'Cable TV',
      'Laptop friendly workspace',
      'Washing machine',
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl:
        'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
    },
    isPremium: true,
    isFavorite: false,
    rating: 3.1,
    bedrooms: 1,
    maxAdults: 3,
  },
  {
    id: '7d449370-f9d7-470a-b00c-931ba95e1614',
    title: 'Amazing and Extremely Central Flat',
    description:
      'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    type: 'apartment',
    price: 422,
    images: [
      'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
    ],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.35754,
      longitude: 4.9179759999999995,
      zoom: 16,
    },
    goods: [
      'Kitchen',
      'Heating',
      'Coffee machine',
      'Dishwasher',
      'Towels',
      'Washing machine',
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl:
        'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
    },
    isPremium: true,
    isFavorite: false,
    rating: 3.6,
    bedrooms: 4,
    maxAdults: 2,
  },
];

export { offerList };
