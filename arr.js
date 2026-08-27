const bands = [
  {
    id: 1,

    bandName: "Imagine Dragons",

    bandImage: "./images/imagine-dragons.jpg",

    bandDescription: `
      Imagine Dragons is one of the most influential alternative rock bands
      of the modern era. Known for their powerful live performances,
      emotional lyrics and global hits, the band has built a massive
      international fanbase and performed at some of the world's biggest
      music festivals and arenas.
    `,

    event: {
      title: "Imagine Dragons — Live in Georgia",

      description: `
        Experience Imagine Dragons live in an unforgettable night of music,
        lights and spectacular production. The band will perform their
        biggest international hits together with songs from their latest
        releases in one of Georgia's largest concert venues.
      `,

      date: "2026-08-30",

      time: "21:00",

      doorsOpen: "18:00",
    },

    tickets: {
      cheap: {
        name: "Standard",
        price: 80,
        currency: "₾",
      },

      medium: {
        name: "Premium",
        price: 150,
        currency: "₾",
      },

      vip: {
        name: "VIP",
        price: 300,
        currency: "₾",
      },
    },

    location: {
      city: "Tbilisi",

      venue: "Dinamo Arena",

      address: "2 Akaki Tsereteli Ave, Tbilisi, Georgia",

      map: "https://maps.google.com/?q=Dinamo+Arena+Tbilisi",

      coordinates: {
        lat: 41.7239,
        lng: 44.7888,
      },
    },
  },

  {
    id: 2,

    bandName: "The Killers",

    bandImage: "./images/the-killers.jpg",

    bandDescription: `
      The Killers are an internationally acclaimed rock band known for
      their energetic performances, distinctive sound and timeless hits.
      Their music combines alternative rock, indie rock and electronic
      influences, making their live shows a major experience for fans
      around the world.
    `,

    event: {
      title: "The Killers — Live at Black Sea Arena",

      description: `
        Get ready for a spectacular night on the Black Sea coast.
        The Killers will bring their legendary live performance to Georgia,
        featuring their biggest songs, immersive lighting and a massive
        concert production.
      `,

      date: "2026-08-15",

      time: "21:30",

      doorsOpen: "18:30",
    },

    tickets: {
      cheap: {
        name: "Standard",
        price: 100,
        currency: "₾",
      },

      medium: {
        name: "Premium",
        price: 180,
        currency: "₾",
      },

      vip: {
        name: "VIP",
        price: 350,
        currency: "₾",
      },
    },

    location: {
      city: "Shekvetili",

      venue: "Black Sea Arena",

      address: "Shekvetili, Guria, Georgia",

      map: "https://maps.google.com/?q=Black+Sea+Arena+Shekvetili",

      coordinates: {
        lat: 41.9256,
        lng: 41.9355,
      },
    },
  },

  {
    id: 3,

    bandName: "OneRepublic",

    bandImage: "./images/onerepublic.jpg",

    bandDescription: `
      OneRepublic is an American pop rock band recognized for their
      emotional songwriting, powerful vocals and international chart-topping
      songs. The band's music combines pop, rock and electronic elements,
      creating a unique sound that has attracted millions of listeners
      worldwide.
    `,

    event: {
      title: "OneRepublic — Live in Georgia",

      description: `
        OneRepublic arrives in Georgia for a spectacular live concert.
        Fans will experience an evening filled with powerful vocals,
        unforgettable melodies and the band's biggest worldwide hits.
      `,

      date: "2026-05-10",

      time: "21:00",

      doorsOpen: "18:00",
    },

    tickets: {
      cheap: {
        name: "Standard",
        price: 70,
        currency: "₾",
      },

      medium: {
        name: "Premium",
        price: 140,
        currency: "₾",
      },

      vip: {
        name: "VIP",
        price: 280,
        currency: "₾",
      },
    },

    location: {
      city: "Shekvetili",

      venue: "Black Sea Arena",

      address: "Shekvetili, Guria, Georgia",

      map: "https://maps.google.com/?q=Black+Sea+Arena+Shekvetili",

      coordinates: {
        lat: 41.9256,
        lng: 41.9355,
      },
    },
  },
  {
    id: 4,

    bandName: "Coldplay",

    bandImage: "./images/coldplay.jpg",

    bandDescription: `
      Coldplay is one of the world's most successful alternative rock bands,
      famous for their spectacular live performances, emotional songs and
      unforgettable visual productions.
    `,

    event: {
      title: "Coldplay — Live in Georgia",

      description: `
        Coldplay brings an extraordinary concert experience to Georgia,
        featuring their biggest hits, spectacular lights and an unforgettable
        atmosphere for thousands of fans.
      `,

      date: "2026-09-12",

      time: "21:00",

      doorsOpen: "18:00",
    },

    tickets: {
      cheap: {
        name: "Standard",
        price: 90,
        currency: "₾",
      },

      medium: {
        name: "Premium",
        price: 180,
        currency: "₾",
      },

      vip: {
        name: "VIP",
        price: 350,
        currency: "₾",
      },
    },

    location: {
      city: "Tbilisi",

      venue: "Dinamo Arena",

      address: "2 Akaki Tsereteli Ave, Tbilisi, Georgia",

      map: "https://maps.google.com/?q=Dinamo+Arena+Tbilisi",

      coordinates: {
        lat: 41.7239,
        lng: 44.7888,
      },
    },
  },

  {
    id: 5,

    bandName: "Arctic Monkeys",

    bandImage: "./images/arctic-monkeys.jpg",

    bandDescription: `
      Arctic Monkeys are an English rock band known for their distinctive
      sound, powerful guitar riffs and energetic performances.
    `,

    event: {
      title: "Arctic Monkeys — Live in Georgia",

      description: `
        Experience Arctic Monkeys live in an unforgettable evening featuring
        their biggest alternative rock hits and a spectacular concert setup.
      `,

      date: "2026-09-20",

      time: "20:30",

      doorsOpen: "17:30",
    },

    tickets: {
      cheap: {
        name: "Standard",
        price: 80,
        currency: "₾",
      },

      medium: {
        name: "Premium",
        price: 160,
        currency: "₾",
      },

      vip: {
        name: "VIP",
        price: 320,
        currency: "₾",
      },
    },

    location: {
      city: "Tbilisi",

      venue: "Tbilisi Concert Hall",

      address: "1 Kostava St, Tbilisi, Georgia",

      map: "https://maps.google.com/?q=Tbilisi+Concert+Hall",

      coordinates: {
        lat: 41.7036,
        lng: 44.7925,
      },
    },
  },

  {
    id: 6,

    bandName: "Linkin Park",

    bandImage: "./images/linkin-park.jpg",

    bandDescription: `
      Linkin Park is one of the most influential rock bands of the modern
      era, combining alternative rock, electronic music and powerful vocals.
    `,

    event: {
      title: "Linkin Park — Live in Georgia",

      description: `
        A massive rock concert featuring Linkin Park's iconic songs,
        powerful production and an unforgettable live atmosphere.
      `,

      date: "2026-10-03",

      time: "21:00",

      doorsOpen: "18:00",
    },

    tickets: {
      cheap: {
        name: "Standard",
        price: 85,
        currency: "₾",
      },

      medium: {
        name: "Premium",
        price: 170,
        currency: "₾",
      },

      vip: {
        name: "VIP",
        price: 330,
        currency: "₾",
      },
    },

    location: {
      city: "Tbilisi",

      venue: "Dinamo Arena",

      address: "2 Akaki Tsereteli Ave, Tbilisi, Georgia",

      map: "https://maps.google.com/?q=Dinamo+Arena+Tbilisi",

      coordinates: {
        lat: 41.7239,
        lng: 44.7888,
      },
    },
  },

  {
    id: 7,

    bandName: "Muse",

    bandImage: "./images/muse.jpg",

    bandDescription: `
      Muse are an English rock band recognized for their dramatic sound,
      powerful instrumentation and spectacular stadium performances.
    `,

    event: {
      title: "Muse — Live in Georgia",

      description: `
        Muse will deliver a spectacular night of alternative rock with
        powerful performances, immersive visuals and their biggest hits.
      `,

      date: "2026-10-18",

      time: "21:30",

      doorsOpen: "18:30",
    },

    tickets: {
      cheap: {
        name: "Standard",
        price: 90,
        currency: "₾",
      },

      medium: {
        name: "Premium",
        price: 190,
        currency: "₾",
      },

      vip: {
        name: "VIP",
        price: 360,
        currency: "₾",
      },
    },

    location: {
      city: "Tbilisi",

      venue: "Dinamo Arena",

      address: "2 Akaki Tsereteli Ave, Tbilisi, Georgia",

      map: "https://maps.google.com/?q=Dinamo+Arena+Tbilisi",

      coordinates: {
        lat: 41.7239,
        lng: 44.7888,
      },
    },
  },

  {
    id: 8,

    bandName: "Imagine Dragons",

    bandImage: "./images/imagine-dragons-2.jpg",

    bandDescription: `
      A powerful live rock experience featuring energetic performances,
      emotional songs and spectacular concert production.
    `,

    event: {
      title: "Imagine Dragons — Summer Night",

      description: `
        Enjoy another spectacular Imagine Dragons performance featuring
        their biggest songs and an incredible live production.
      `,

      date: "2026-11-01",

      time: "20:00",

      doorsOpen: "17:00",
    },

    tickets: {
      cheap: {
        name: "Standard",
        price: 75,
        currency: "₾",
      },

      medium: {
        name: "Premium",
        price: 150,
        currency: "₾",
      },

      vip: {
        name: "VIP",
        price: 300,
        currency: "₾",
      },
    },

    location: {
      city: "Tbilisi",

      venue: "Olympic Palace",

      address: "University Street, Tbilisi, Georgia",

      map: "https://maps.google.com/?q=Olympic+Palace+Tbilisi",

      coordinates: {
        lat: 41.7151,
        lng: 44.7396,
      },
    },
  },

  {
    id: 9,

    bandName: "Foo Fighters",

    bandImage: "./images/foo-fighters.jpg",

    bandDescription: `
      Foo Fighters are an iconic American rock band known for their energetic
      live performances, powerful guitar sound and legendary rock anthems.
    `,

    event: {
      title: "Foo Fighters — Live in Georgia",

      description: `
        Get ready for a massive rock show featuring Foo Fighters' biggest
        songs, powerful guitars and an unforgettable live performance.
      `,

      date: "2026-11-14",

      time: "21:00",

      doorsOpen: "18:00",
    },

    tickets: {
      cheap: {
        name: "Standard",
        price: 85,
        currency: "₾",
      },

      medium: {
        name: "Premium",
        price: 175,
        currency: "₾",
      },

      vip: {
        name: "VIP",
        price: 340,
        currency: "₾",
      },
    },

    location: {
      city: "Tbilisi",

      venue: "Dinamo Arena",

      address: "2 Akaki Tsereteli Ave, Tbilisi, Georgia",

      map: "https://maps.google.com/?q=Dinamo+Arena+Tbilisi",

      coordinates: {
        lat: 41.7239,
        lng: 44.7888,
      },
    },
  },

  {
    id: 10,

    bandName: "The Weeknd",

    bandImage: "./images/the-weeknd.jpg",

    bandDescription: `
      The Weeknd is one of the world's most successful contemporary artists,
      combining pop, R&B and electronic influences with cinematic live shows.
    `,

    event: {
      title: "The Weeknd — Live in Georgia",

      description: `
        Experience an unforgettable night with The Weeknd featuring his
        biggest global hits, immersive lighting and spectacular production.
      `,

      date: "2026-12-05",

      time: "21:00",

      doorsOpen: "18:00",
    },

    tickets: {
      cheap: {
        name: "Standard",
        price: 100,
        currency: "₾",
      },

      medium: {
        name: "Premium",
        price: 200,
        currency: "₾",
      },

      vip: {
        name: "VIP",
        price: 400,
        currency: "₾",
      },
    },

    location: {
      city: "Tbilisi",

      venue: "Dinamo Arena",

      address: "2 Akaki Tsereteli Ave, Tbilisi, Georgia",

      map: "https://maps.google.com/?q=Dinamo+Arena+Tbilisi",

      coordinates: {
        lat: 41.7239,
        lng: 44.7888,
      },
    },
  },
];
