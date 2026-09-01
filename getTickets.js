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

const selectedBand = bands.find((band) => band.id === bandId);

if (!selectedBand) {
  console.log("Band not found");
} else {
  const container = document.querySelector(".selectTktContainer");

  // =========================
  // BAND INFO
  // =========================

  container.querySelector(".bandNam").textContent = selectedBand.bandName;

  container.querySelector(".vntDate").textContent =
    `${selectedBand.event.date} • ${selectedBand.event.time}`;

  container.querySelector(".vntLocation").textContent =
    `${selectedBand.location.venue}, ${selectedBand.location.city}`;

  // =========================
  // HERO INFO
  // =========================

  const bandName = document.querySelector(".tittle-date-dcrp-btn .bandNam");

  const heroDate = document.querySelector(
    ".tittle-date-dcrp-btn p:nth-of-type(1)",
  );

  const heroDescription = document.querySelector(
    ".tittle-date-dcrp-btn p:nth-of-type(2)",
  );

  const bandImg = document.querySelector(".bandImg2");

  if (bandName) {
    bandName.textContent = selectedBand.bandName;
  }

  if (heroDate) {
    heroDate.textContent = `${selectedBand.event.date} • ${selectedBand.event.time}`;
  }

  if (heroDescription) {
    heroDescription.textContent = selectedBand.bandDescription.trim();
  }

  if (bandImg) {
    bandImg.src = selectedBand.bandImg2;
    bandImg.alt = selectedBand.bandName;
  }

  // =========================
  // TIME & LOCATION
  // =========================

  const timeLocation = document.querySelector(".timeLocation");

  if (timeLocation) {
    const paragraphs = timeLocation.querySelectorAll("p");

    paragraphs[0].textContent = `${selectedBand.event.time} (doors ${selectedBand.event.doorsOpen})`;

    paragraphs[1].textContent = `${selectedBand.location.venue}, ${selectedBand.location.city}`;
  }

  // =========================
  // TICKET PRICES
  // =========================

  const tickets = selectedBand.tickets;

  const premiumPrice = document.querySelector(".premiumPrice");
  const vipPrice = document.querySelector(".vipPrice");

  if (premiumPrice && tickets.medium) {
    premiumPrice.textContent = `${tickets.medium.name}: ${tickets.medium.price}${tickets.medium.currency}`;
  }

  if (vipPrice && tickets.vip) {
    vipPrice.textContent = `${tickets.vip.name}: ${tickets.vip.price}${tickets.vip.currency}`;
  }
}
function renderTicketList() {
  const list = document.querySelector(".emptyBskt .tktsInList");
  const freeTkts = document.querySelector(".emptyBskt .freeTkts");

  if (!list || !selectedBand) return;

  list.innerHTML = "";

  let availableTickets = [];

  hallMap.sections.forEach((section) => {
    const ticket = selectedBand.tickets[section.ticketType];

    if (!ticket) return;

    for (let row = 1; row <= section.rows; row++) {
      for (let seat = 1; seat <= section.seatsPerRow; seat++) {
        availableTickets.push({
          section: section.id,
          row: row,
          seat: seat,
          type: ticket.name,
          price: ticket.price,
          currency: ticket.currency,
          serviceFee: ticket.serviceFee || 0,
        });
      }
    }
  });

  freeTkts.textContent = `available tickets (${availableTickets.length})`;

  availableTickets.forEach((ticket) => {
    const card = document.createElement("div");

    card.className = `tktCard section-${ticket.section.toLowerCase()}`;
    card.innerHTML = `
      <div class="tktInfo">

        <div class="sectionCont">

          <h5>
            section
            <p class="section">${ticket.section}</p>
          </h5>

          <h5>
            row
            <p class="row">${ticket.row}</p>
          </h5>

          <h5>
            seat
            <p class="seat">${ticket.seat}</p>
          </h5>

        </div>

        <div class="tktPriceCont">

          <p class="tktType">
            ${ticket.type}
          </p>

          <p class="tktprice">
            ${ticket.price}${ticket.currency}
          </p>

          <h5 class="serviceFee">
            service fee
            <span>
              ${ticket.serviceFee}${ticket.currency}
            </span>
          </h5>

        </div>

      </div>

      <button class="addToBskt">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.25em"
          height="1.25em"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none"/>

          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="2"
            d="M12 20v-8m0 0V4m0 8h8m-8 0H4"
          />
        </svg>

        <span>add to basket</span>

      </button>
    `;

    list.appendChild(card);
  });
}

renderTicketList();

const bsktTitleP = document.querySelector(".bsktTitle-p");

if (tktListContainer && bsktTitleP) {
  const observer = new MutationObserver(() => {
    if (getComputedStyle(tktListContainer).display !== "none") {
      bsktTitleP.style.display = "none";
    } else {
      bsktTitleP.style.display = "";
    }
  });

  observer.observe(tktListContainer, {
    attributes: true,
    attributeFilter: ["style", "class"],
  });
}

// =========================
// TICKET FILTERING
// =========================

const ticketTypeFilter = document.querySelector(".fillterByTktType");
const zoneFilter = document.querySelector(".fillterByZone");

function filterTickets() {
  const selectedType = ticketTypeFilter.value;
  const selectedZone = zoneFilter.value;

  // Get all ticket cards
  const ticketCards = document.querySelectorAll(".emptyBskt .tktCard");

  ticketCards.forEach((card) => {
    const tktType = card.querySelector(".tktType").textContent.toLowerCase();
    const section = card.querySelector(".section").textContent.toLowerCase();

    // Map zones to sections
    const zoneToSection = {
      "zone-a": "a",
      "zone-b": "b",
      "zone-c": "c",
    };

    const cardZone = zoneToSection[selectedZone] || "";

    // Check if card matches filters
    const typeMatch =
      !selectedType || tktType.includes(selectedType.toLowerCase());
    const zoneMatch = !selectedZone || section === cardZone;

    // Show or hide card
    if (typeMatch && zoneMatch) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });

  // Update available tickets count
  const visibleCards = document.querySelectorAll(
    ".emptyBskt .tktCard:not([style*='display: none'])",
  );
  const freeTkts = document.querySelector(".emptyBskt .freeTkts");
  if (freeTkts) {
    freeTkts.textContent = `available tickets (${visibleCards.length})`;
  }

  // =========================
  // UPDATE MAP SECTIONS OPACITY
  // =========================

  // Map ticket types to sections
  const typeToSection = {
    standard: "a",
    cheap: "a",
    medium: "b",
    vip: "c",
  };

  // Map zones to sections
  const zoneToSection = {
    "zone-a": "a",
    "zone-b": "b",
    "zone-c": "c",
  };

  // Get the matching section based on filters
  let matchingSections = [];

  if (selectedType) {
    const matchingType = typeToSection[selectedType];
    if (matchingType) matchingSections.push(matchingType);
  }

  if (selectedZone) {
    const matchingZone = zoneToSection[selectedZone];
    if (matchingZone) {
      if (!matchingSections.includes(matchingZone)) {
        matchingSections.push(matchingZone);
      }
    }
  }

  // If both filters are applied, only show sections that match BOTH
  if (selectedType && selectedZone) {
    const typeSection = typeToSection[selectedType];
    const zoneSection = zoneToSection[selectedZone];
    matchingSections = typeSection === zoneSection ? [typeSection] : [];
  }

  // Apply opacity to all sections in the map
  const allSections = document.querySelectorAll(".stageMap .hall-section");
  allSections.forEach((sectionEl) => {
    const sectionClass = sectionEl.className.match(/section-([a-c])/);
    if (sectionClass) {
      const sectionId = sectionClass[1];

      // If no filter is applied, show all sections normally
      if (!selectedType && !selectedZone) {
        sectionEl.style.opacity = "1";
      } else if (matchingSections.includes(sectionId)) {
        // If this section matches the filter, show it fully
        sectionEl.style.opacity = "1";
      } else {
        // Otherwise, dim it
        sectionEl.style.opacity = "0.3";
      }
    }
  });
}

// Add event listeners to filter dropdowns
if (ticketTypeFilter) {
  ticketTypeFilter.addEventListener("change", filterTickets);
}

if (zoneFilter) {
  zoneFilter.addEventListener("change", filterTickets);
}
