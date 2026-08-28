const params = new URLSearchParams(window.location.search);

const bandId = Number(params.get("id"));

const band = bands.find((band) => band.id === bandId);

if (!band) {
  console.log("Band not found");
} else {
  // =========================
  // FIRST SECTION
  // =========================

  // Band name
  document.querySelector(".bandNam").textContent = band.bandName;

  // Event date
  const firstSectionDate = document.querySelector(".tittle-date-dcrp-btn p");

  firstSectionDate.textContent = band.event.date;

  // Event description
  const description = document.querySelector(
    ".tittle-date-dcrp-btn p:nth-of-type(2)",
  );

  description.textContent = band.event.description;

  // =========================
  // BAND IMAGE
  // =========================

  const bandImage = document.querySelector(".bandImg2");

  bandImage.src = band.bandImg2;

  bandImage.alt = band.bandName;

  // =========================
  // SECOND SECTION
  // TIME & LOCATION
  // =========================

  const timeLocation = document.querySelector(".timeLocation");

  const time = timeLocation.querySelector("p:nth-of-type(1)");

  const location = timeLocation.querySelector("p:nth-of-type(2)");

  time.textContent = `${band.event.time} — Doors open ${band.event.doorsOpen}`;

  location.textContent = `${band.location.venue}, ${band.location.city}`;

  // =========================
  // TICKETS
  // =========================

  const ticketInfo = document.querySelector(".ticketInfo");

  const priceRange = ticketInfo.querySelector("p:nth-of-type(2)");

  priceRange.innerHTML = `from ${band.tickets.cheap.price}${band.tickets.cheap.currency}
     <span>to</span>
     ${band.tickets.vip.price}${band.tickets.vip.currency}`;

  // =========================
  // MAP
  // =========================

  const map = document.querySelector(".map");

  map.innerHTML = `
    <iframe
      src="https://www.google.com/maps?q=${band.location.coordinates.lat},${band.location.coordinates.lng}&output=embed"
      width="100%"
      height="100%"
      style="border:0;"
      allowfullscreen=""
      loading="lazy">
    </iframe>
  `;
}
