const eventsAccordion = document.querySelector("#eventsAccordion");

eventsAccordion.innerHTML = "";

// =====================================================
// DATE
// =====================================================

function formatDate(date) {
  const d = new Date(date);

  const month = d
    .toLocaleString("en-US", {
      month: "short",
    })
    .toUpperCase();

  return `${month} ${d.getDate()}, ${d.getFullYear()}`;
}

// =====================================================
// NEXT 4 MONTHS OF 2026
// =====================================================

// წარმოვიდგინოთ, რომ ახლა 2026 წლის დასაწყისია
const startDate = new Date("2026-01-01");

// 4 თვის შემდეგ — 2026 წლის 1 ივნისამდე
const endDate = new Date("2026-06-01");

// მხოლოდ მომდევნო 4 თვის კონცერტები
const upcomingBands = bands.filter((band) => {
  const eventDate = new Date(band.event.date);

  return eventDate >= startDate && eventDate < endDate;
});

// =====================================================
// CREATE ACCORDIONS
// =====================================================

upcomingBands.forEach((band) => {
  const accordion = document.createElement("div");

  accordion.classList.add("eventAcordion");

  accordion.innerHTML = `

    <div class="closedAcordion">

      <div>

        <p class="event-date">
          ${formatDate(band.event.date)}
        </p>

        <h2 class="artistNAm">
          ${band.bandName}
        </h2>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            fill="currentColor"
            d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10s10-4.49 10-10S17.51 2 12 2m0 15.41L7.29 12.7l1.41-1.41l2.29 2.29v-6.59h2v6.59l2.29-2.29l1.41 1.41l-4.71 4.71Z"
          />
        </svg>

      </div>

      <button class="getTicketBtn">
        <span>get tickets</span>
      </button>

    </div>

    <div class="openAcordion">

      <div>

        <p class="vnt-dt-tm-drt">
          ${formatDate(band.event.date)}
          ·
          ${band.event.time}
        </p>

        <p class="adress">
          ${band.location.venue},
          ${band.location.address}
        </p>

      </div>

      <p class="vntDscrp">
        ${band.event.description}
      </p>

      <div class="share">

        <p>share</p>

        <!-- შენი არსებული SVG-ები აქ დატოვე -->

      </div>

    </div>
  `;

  // თავიდან დახურულია
  const open = accordion.querySelector(".openAcordion");
  open.style.display = "none";

  // CLOSED
  const closed = accordion.querySelector(".closedAcordion");

  closed.addEventListener("click", function (e) {
    // Get Tickets-ზე accordion არ გაიხსნას
    if (e.target.closest(".getTicketBtn")) {
      return;
    }

    if (open.style.display === "none") {
      open.style.display = "flex";
    } else {
      open.style.display = "none";
    }
  });

  eventsAccordion.appendChild(accordion);
});

// =====================================================
// CHECK
// =====================================================

console.log("TOTAL BANDS:", bands.length);
console.log("UPCOMING BANDS:", upcomingBands.length);
console.log("ACCORDIONS:", eventsAccordion.children.length);
