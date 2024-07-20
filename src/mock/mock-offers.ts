const offers = [
  {
    'id': '38f33a49-572b-4199-8fac-b09c90206562',
    'title': 'Tile House',
    'type': 'house',
    'price': 693,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.7
  },
  {
    'id': 'dabae48f-da25-4db3-ba22-1750d257b744',
    'title': 'Loft Studio in the Central Area',
    'type': 'house',
    'price': 621,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 2.5
  },
  {
    'id': 'e630b5b5-c5e9-4dad-9a2a-252096667d96',
    'title': 'Waterfront with extraordinary view',
    'type': 'room',
    'price': 245,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.335499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.3
  },
  {
    'id': '37400227-cb7a-4899-a628-e27d18e8d93c',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'apartment',
    'price': 308,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.85761,
      'longitude': 2.358499,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 2.7
  },
  {
    'id': 'cc02d992-486f-4192-8a3b-6e49515729fb',
    'title': 'Canal View Prinsengracht',
    'type': 'apartment',
    'price': 383,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.87561,
      'longitude': 2.375499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.3
  },
  {
    'id': '8247e106-f767-4e34-abdd-ca42d0c24cf5',
    'title': 'Canal View Prinsengracht',
    'type': 'room',
    'price': 231,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.87961000000001,
      'longitude': 2.353499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.5
  },
  {
    'id': 'd5ea6adb-c31a-47a9-97b1-3a43b76da0d2',
    'title': 'The Joshua Tree House',
    'type': 'hotel',
    'price': 137,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.364499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.6
  },
  {
    'id': 'bc75fafb-e5e4-400d-9b8f-133226a88341',
    'title': 'House in countryside',
    'type': 'hotel',
    'price': 430,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.837610000000005,
      'longitude': 2.3454990000000002,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.1
  },
  {
    'id': '55b983de-f2dc-4e71-8d70-b91b64682ed6',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'hotel',
    'price': 124,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.84761,
      'longitude': 2.356499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.8
  },
  {
    'id': 'e2e9c055-90c7-4517-9e7f-7104818b2755',
    'title': 'Loft Studio in the Central Area',
    'type': 'room',
    'price': 153,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.83861,
      'longitude': 2.350499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.2
  },
  {
    'id': '13807bd6-f266-42b9-bff9-8a491171b018',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'apartment',
    'price': 169,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.861610000000006,
      'longitude': 2.340499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4
  },
  {
    'id': '98272ae7-4c15-4ed4-b478-375a63dd3c4b',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'hotel',
    'price': 258,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.87861,
      'longitude': 2.357499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.9
  },
  {
    'id': 'e3fe10a3-f444-4dfe-8bd6-ee5b41323145',
    'title': 'The Joshua Tree House',
    'type': 'apartment',
    'price': 456,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.877610000000004,
      'longitude': 2.333499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.2
  },
  {
    'id': 'ab652023-bae4-4beb-b8c7-81bc5592e430',
    'title': 'House in countryside',
    'type': 'room',
    'price': 207,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.83961,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.8
  },
  {
    'id': '9aca8b64-8e43-472b-9005-93bcb7c370df',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'apartment',
    'price': 188,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.865610000000004,
      'longitude': 2.350499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.9
  },
  {
    'id': 'c3a66a2d-ecb3-4bf5-8709-827faadaa9fd',
    'title': 'Tile House',
    'type': 'hotel',
    'price': 302,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.846610000000005,
      'longitude': 2.374499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.5
  },
  {
    'id': 'ad11d175-1557-4d22-93ee-d18d46903501',
    'title': 'The house among olive ',
    'type': 'room',
    'price': 189,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.837610000000005,
      'longitude': 2.364499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.7
  },
  {
    'id': 'b6ec6e73-7a63-44c4-809d-4a085e60edf5',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'hotel',
    'price': 225,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.843610000000005,
      'longitude': 2.338499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4
  },
  {
    'id': '9d3afc4c-f816-41ab-95ac-c67bef1b5c52',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'hotel',
    'price': 370,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.84461,
      'longitude': 2.374499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.4
  },
  {
    'id': 'cea51758-0318-4aa6-98cc-995fa5971871',
    'title': 'The house among olive ',
    'type': 'house',
    'price': 237,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.950361,
      'longitude': 6.961974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.5
  },
  {
    'id': '82bb5832-c818-4392-b575-7267675485ef',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'apartment',
    'price': 315,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.932361,
      'longitude': 6.937974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.3
  },
  {
    'id': 'feb607c8-2160-43c7-a57d-9d5dfc6436cb',
    'title': 'Canal View Prinsengracht',
    'type': 'house',
    'price': 170,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.934361,
      'longitude': 6.943974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.2
  },
  {
    'id': '544412a6-428f-4d8c-8360-3a51df93df31',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'hotel',
    'price': 500,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.947361,
      'longitude': 6.9799739999999995,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 3.4
  },
  {
    'id': '5682ff8e-b017-4893-88bc-ebe2375b6172',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'hotel',
    'price': 156,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.960361,
      'longitude': 6.967974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.9
  },
  {
    'id': 'e8941808-45d1-40d6-ac1f-48f61fbc2108',
    'title': 'The Joshua Tree House',
    'type': 'hotel',
    'price': 347,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.941361,
      'longitude': 6.956974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.9
  },
  {
    'id': '6c7de4e3-4f4b-40be-a86e-e323cba13356',
    'title': 'The Joshua Tree House',
    'type': 'house',
    'price': 801,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.916361,
      'longitude': 6.944974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.6
  },
  {
    'id': '04964eb4-d3df-4583-8fd9-bfa0d788203b',
    'title': 'Loft Studio in the Central Area',
    'type': 'room',
    'price': 102,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.949361,
      'longitude': 6.976974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.5
  },
  {
    'id': '07592d62-a15e-412d-8f5c-81f9fe4fd161',
    'title': 'The Joshua Tree House',
    'type': 'room',
    'price': 284,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.913361,
      'longitude': 6.9509739999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.9
  },
  {
    'id': '56680561-2b14-40fe-804e-4ea9301236ee',
    'title': 'Waterfront with extraordinary view',
    'type': 'apartment',
    'price': 468,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.930361,
      'longitude': 6.937974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.8
  },
  {
    'id': '0eca14e4-0af8-480a-8e18-57b6c93685ce',
    'title': 'Wood and stone place',
    'type': 'house',
    'price': 848,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.960361,
      'longitude': 6.9509739999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.9
  },
  {
    'id': 'e55c3aa3-91a3-4dff-8e13-9dbac7dfbe7b',
    'title': 'The Joshua Tree House',
    'type': 'hotel',
    'price': 193,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.918461,
      'longitude': 6.969974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.5
  },
  {
    'id': '91d286a6-9a45-4fde-a4a6-5a96179ef718',
    'title': 'Perfectly located Castro',
    'type': 'hotel',
    'price': 418,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.957361,
      'longitude': 6.9509739999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.3
  },
  {
    'id': '2a54487f-c80b-4e20-9ad8-507318417232',
    'title': 'Wood and stone place',
    'type': 'apartment',
    'price': 428,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.951361,
      'longitude': 6.944974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.6
  },
  {
    'id': '06f317fc-ec41-42f6-ae91-4f35addebc9a',
    'title': 'Perfectly located Castro',
    'type': 'room',
    'price': 250,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.959361,
      'longitude': 6.978974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.6
  },
  {
    'id': 'ad29d5f8-244d-4c12-9f54-c2574cf41c89',
    'title': 'House in countryside',
    'type': 'hotel',
    'price': 142,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.932361,
      'longitude': 6.960974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.8
  },
  {
    'id': 'f0abc837-0c11-47bb-9957-f5d6272a8119',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'hotel',
    'price': 253,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.954361,
      'longitude': 6.982974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.6
  },
  {
    'id': '029020f4-ecb4-45cd-8902-5ac924ef05d3',
    'title': 'Waterfront with extraordinary view',
    'type': 'room',
    'price': 162,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.945361,
      'longitude': 6.962974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.8
  },
  {
    'id': 'c4a6a53b-081e-4ada-85e2-6faa3dab17c5',
    'title': 'The house among olive ',
    'type': 'house',
    'price': 665,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.917361,
      'longitude': 6.977974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.2
  },
  {
    'id': 'af34b26b-9829-46f8-abd2-ae93a152167c',
    'title': 'The Joshua Tree House',
    'type': 'room',
    'price': 250,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.945361,
      'longitude': 6.935974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2
  },
  {
    'id': '877cf95b-c634-4429-be06-8426bacf4217',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'room',
    'price': 166,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.854557,
      'longitude': 4.364697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.9
  },
  {
    'id': 'b49c8653-f61e-4ed0-b976-8ebbabc0e88e',
    'title': 'Tile House',
    'type': 'apartment',
    'price': 433,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.867557,
      'longitude': 4.371696999999999,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.6
  },
  {
    'id': '0ea8193f-aedb-4701-9062-f73cd456a0d0',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'hotel',
    'price': 207,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.827557,
      'longitude': 4.336697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.1
  },
  {
    'id': 'eb7c0eb9-3465-485a-a117-7cfc5fd55457',
    'title': 'The Joshua Tree House',
    'type': 'house',
    'price': 412,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.833557,
      'longitude': 4.374696999999999,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.6
  },
  {
    'id': '9d360e84-cc59-4a39-9bab-cc5658bf6ea1',
    'title': 'Tile House',
    'type': 'room',
    'price': 237,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.837557,
      'longitude': 4.339697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.7
  },
  {
    'id': '5a49f06a-ad52-44b8-b7f9-dbd779a6be46',
    'title': 'Wood and stone place',
    'type': 'room',
    'price': 289,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.849557,
      'longitude': 4.374696999999999,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.1
  },
  {
    'id': '18c07d03-dc0e-4e2f-be0d-dfb5e5397b05',
    'title': 'The house among olive ',
    'type': 'house',
    'price': 783,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.852557,
      'longitude': 4.3376969999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.6
  },
  {
    'id': '121d86de-9d10-44f1-8059-5563bd1356e8',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'apartment',
    'price': 230,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.828556999999996,
      'longitude': 4.362697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3
  },
  {
    'id': '81f72339-7bf6-4e9a-849e-b825f1196562',
    'title': 'The Joshua Tree House',
    'type': 'apartment',
    'price': 242,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.835556999999994,
      'longitude': 4.354697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.8
  },
  {
    'id': 'a2c26bdb-89ab-4763-9964-db48f5c1f66a',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'apartment',
    'price': 271,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.867557,
      'longitude': 4.339697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.6
  },
  {
    'id': '2b9d195d-b206-4370-b344-2ee037a3baac',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'hotel',
    'price': 355,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.839557,
      'longitude': 4.346697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.1
  },
  {
    'id': 'd25ded4d-aa39-41a1-9a6e-2deb8ef6ee32',
    'title': 'Canal View Prinsengracht',
    'type': 'house',
    'price': 686,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.844556999999995,
      'longitude': 4.346697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.2
  },
  {
    'id': 'a8b66f34-542b-412a-813e-4920d53e95b0',
    'title': 'The house among olive ',
    'type': 'hotel',
    'price': 317,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.865556999999995,
      'longitude': 4.371696999999999,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3
  },
  {
    'id': 'f513d94a-2e01-48ab-a2af-18262ed5db53',
    'title': 'Tile House',
    'type': 'apartment',
    'price': 214,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.869557,
      'longitude': 4.332697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.1
  },
  {
    'id': '6045bd42-dfb9-44da-ab81-f0bfb443f43b',
    'title': 'Wood and stone place',
    'type': 'house',
    'price': 617,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.860557,
      'longitude': 4.376697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.3
  },
  {
    'id': 'c685da44-f75b-4c1c-9b9c-231c6acfce53',
    'title': 'Waterfront with extraordinary view',
    'type': 'hotel',
    'price': 450,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.862556999999995,
      'longitude': 4.375697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.2
  },
  {
    'id': 'e42f4988-4468-4bcf-a61d-0f3fabde1575',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'room',
    'price': 137,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.842557,
      'longitude': 4.3536969999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.9
  },
  {
    'id': 'a26632f6-c7c3-4570-b15b-049be58cd173',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'house',
    'price': 515,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.822556999999996,
      'longitude': 4.347697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2
  },
  {
    'id': '0794a960-ff1e-426a-af36-93eafb45885f',
    'title': 'Waterfront with extraordinary view',
    'type': 'hotel',
    'price': 134,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.867557,
      'longitude': 4.357697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.7
  },
  {
    'id': '6646e5e8-33c8-432c-b980-164789163ad9',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'hotel',
    'price': 262,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.842557,
      'longitude': 4.363696999999999,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.2
  },
  {
    'id': 'b46a92fe-e4f6-4f2c-aa25-7b7efa797240',
    'title': 'Canal View Prinsengracht',
    'type': 'house',
    'price': 700,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36554,
      'longitude': 4.911976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.3
  },
  {
    'id': 'ea8cd250-b94a-4772-bc5f-dca00e35b527',
    'title': 'Loft Studio in the Central Area',
    'type': 'house',
    'price': 224,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.385540000000006,
      'longitude': 4.902976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.2
  },
  {
    'id': '7711ee76-3bb5-4597-8e32-4822100a436e',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'room',
    'price': 114,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.397540000000006,
      'longitude': 4.9099759999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.1
  },
  {
    'id': 'b4c0cf5d-86fc-43bb-9d3f-a0d42c479c9b',
    'title': 'The house among olive ',
    'type': 'apartment',
    'price': 454,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.37454,
      'longitude': 4.881976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.5
  },
  {
    'id': 'e7e8de6e-7ff3-41ec-abeb-28cb71da2343',
    'title': 'The house among olive ',
    'type': 'apartment',
    'price': 373,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.367540000000005,
      'longitude': 4.883976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.1
  },
  {
    'id': 'efd7465d-eb9a-4157-924c-7c6d58b6b415',
    'title': 'Canal View Prinsengracht',
    'type': 'apartment',
    'price': 161,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.361540000000005,
      'longitude': 4.883976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1
  },
  {
    'id': '7d2bab90-b2a0-4451-9d92-283d31618da1',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'house',
    'price': 368,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.35754,
      'longitude': 4.9179759999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.8
  },
  {
    'id': '05e63fba-b210-4230-9aaa-8074c2baa4e3',
    'title': 'House in countryside',
    'type': 'room',
    'price': 274,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.37854,
      'longitude': 4.894976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2
  },
  {
    'id': 'f590d80d-c371-47ec-a621-cfbdbdf690e5',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'room',
    'price': 252,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36854,
      'longitude': 4.887976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.7
  },
  {
    'id': '3dc9fb08-8110-4c0a-babe-12b20ba54c3e',
    'title': 'Waterfront with extraordinary view',
    'type': 'room',
    'price': 141,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.370540000000005,
      'longitude': 4.9099759999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.5
  },
  {
    'id': 'd7728fff-f450-402d-a797-5dc8bd54af1e',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'hotel',
    'price': 156,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.389540000000004,
      'longitude': 4.883976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.6
  },
  {
    'id': '8568f033-9953-4229-9efc-7075046a71d0',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'room',
    'price': 197,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.35054,
      'longitude': 4.908976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.2
  },
  {
    'id': '687a1be2-55f9-4f57-8171-9b15d84f0a00',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'house',
    'price': 329,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.37154,
      'longitude': 4.889976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.3
  },
  {
    'id': 'efcc2f97-26a0-4074-9f72-9c4e751bf994',
    'title': 'Wood and stone place',
    'type': 'hotel',
    'price': 106,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.364540000000005,
      'longitude': 4.9019759999999994,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.9
  },
  {
    'id': '94649225-909d-488c-a90f-91b8399451aa',
    'title': 'Loft Studio in the Central Area',
    'type': 'apartment',
    'price': 242,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36354,
      'longitude': 4.911976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.3
  },
  {
    'id': '7d044967-4c5c-4cd6-a639-61cc7cb4f9e9',
    'title': 'Perfectly located Castro',
    'type': 'hotel',
    'price': 388,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36354,
      'longitude': 4.889976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.2
  },
  {
    'id': 'cd8e170a-756e-4da0-92a4-8f85f4ae27cd',
    'title': 'Tile House',
    'type': 'house',
    'price': 194,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.388540000000006,
      'longitude': 4.899976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.7
  },
  {
    'id': 'f2764c38-b849-4b50-b814-206bf77a3885',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'apartment',
    'price': 393,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36954,
      'longitude': 4.914976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.1
  },
  {
    'id': 'e8d2d0b8-3f9e-40b0-bbeb-f1207fa76464',
    'title': 'House in countryside',
    'type': 'room',
    'price': 180,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.37554,
      'longitude': 4.9019759999999994,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.9
  },
  {
    'id': 'fc89a15d-f878-4dd9-a074-79ea3ac013e5',
    'title': 'Loft Studio in the Central Area',
    'type': 'house',
    'price': 105,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.385540000000006,
      'longitude': 4.886976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2
  },
  {
    'id': '65bd6c53-e9d2-4c05-9b7d-63f46331f66f',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'house',
    'price': 475,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.228402,
      'longitude': 6.784314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4
  },
  {
    'id': '813949fd-ae33-43fd-a6da-d913dfe0c915',
    'title': 'Canal View Prinsengracht',
    'type': 'hotel',
    'price': 499,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.204402,
      'longitude': 6.7773140000000005,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1
  },
  {
    'id': '0b8ce300-edd5-4e51-b8c7-9bc3f44fac3d',
    'title': 'The house among olive ',
    'type': 'hotel',
    'price': 199,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.217402,
      'longitude': 6.7693140000000005,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.2
  },
  {
    'id': '64cd1dfb-680d-4000-aa46-54af8d3cdf58',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'apartment',
    'price': 179,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.241402,
      'longitude': 6.782314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.3
  },
  {
    'id': '79fe6f0e-b93d-4973-8a0d-8596ebbdc906',
    'title': 'Wood and stone place',
    'type': 'room',
    'price': 233,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.235402,
      'longitude': 6.800314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.7
  },
  {
    'id': '257aab7c-efba-48d8-a760-5e231df637cf',
    'title': 'Wood and stone place',
    'type': 'house',
    'price': 544,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.237402,
      'longitude': 6.779314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.8
  },
  {
    'id': '85a37761-04ef-45a1-9d1c-df27b62682a4',
    'title': 'The house among olive ',
    'type': 'hotel',
    'price': 205,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.237402,
      'longitude': 6.797314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.7
  },
  {
    'id': 'aef3f1cc-e8a0-40df-a400-62e4e8c262ac',
    'title': 'Loft Studio in the Central Area',
    'type': 'hotel',
    'price': 392,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.222402,
      'longitude': 6.786314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.1
  },
  {
    'id': '57dfbc8d-b85e-40bd-855f-bea066af6358',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'apartment',
    'price': 287,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.232402,
      'longitude': 6.800314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.2
  },
  {
    'id': '609b6057-68d3-4240-92ac-97ee1e82d8e6',
    'title': 'Canal View Prinsengracht',
    'type': 'house',
    'price': 536,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.216402,
      'longitude': 6.758314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.4
  },
  {
    'id': 'a9661521-2e2a-404a-80cc-e1fa5aab7221',
    'title': 'The Joshua Tree House',
    'type': 'apartment',
    'price': 249,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.205402,
      'longitude': 6.7613140000000005,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.8
  },
  {
    'id': '6c80003b-9731-4b34-9227-2207ed54d949',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'room',
    'price': 162,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.248402000000006,
      'longitude': 6.763314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3
  },
  {
    'id': '78106d97-b333-46ae-855b-4f19dc59cafa',
    'title': 'Canal View Prinsengracht',
    'type': 'house',
    'price': 691,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.250402,
      'longitude': 6.7853140000000005,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.3
  },
  {
    'id': '7ee15749-b44c-4a0d-a5a4-bd93ae5c4761',
    'title': 'Tile House',
    'type': 'hotel',
    'price': 210,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.239402000000005,
      'longitude': 6.756314000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.8
  },
  {
    'id': 'ac1d8599-dc67-4cbc-8fdb-e4e9c2ca7ea2',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'apartment',
    'price': 299,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.243402,
      'longitude': 6.791314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.2
  },
  {
    'id': '2d228559-de4a-4843-9965-27d30c5206ce',
    'title': 'House in countryside',
    'type': 'hotel',
    'price': 326,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.214402,
      'longitude': 6.764314000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.6
  },
  {
    'id': 'd38cee94-dfe0-4727-b1d8-576d6ad143d3',
    'title': 'Waterfront with extraordinary view',
    'type': 'apartment',
    'price': 241,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.225402,
      'longitude': 6.784314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.3
  }
];


export {offers};
