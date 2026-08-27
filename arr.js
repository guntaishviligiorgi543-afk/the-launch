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
];
