const eventsAccordion = document.querySelector("#eventsAccordion");

// წაშალე ყველაფერი რაც მანამდე იყო გამოტანილი
eventsAccordion.innerHTML = "";

// DATE
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
// ALL BANDS
// =====================================================

bands.forEach((band) => {
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

        <!-- ORIGINAL ARROW -->

     <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            fill="currentColor"
            d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10s10-4.49 10-10S17.51 2 12 2m0 15.41L7.29 12.7l1.41-1.41l2.29 2.29V6.99h2v6.59l2.29-2.29l1.41 1.41l-4.71 4.71Z"
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

 <a href="#"
  ><svg
    xmlns="http://www.w3.org/2000/svg"
    width="2em"
    height="2em"
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M10.488 3.788A5.25 5.25 0 0 1 14.2 2.25h2.7a.75.75 0 0 1 .75.75v3.6a.75.75 0 0 1-.75.75h-2.7a.15.15 0 0 0-.15.15v1.95h2.85a.75.75 0 0 1 .728.932l-.9 3.6a.75.75 0 0 1-.728.568h-1.95V21a.75.75 0 0 1-.75.75H9.7a.75.75 0 0 1-.75-.75v-6.45H7a.75.75 0 0 1-.75-.75v-3.6A.75.75 0 0 1 7 9.45h1.95V7.5a5.25 5.25 0 0 1 1.538-3.712M14.2 3.75a3.75 3.75 0 0 0-3.75 3.75v2.7a.75.75 0 0 1-.75.75H7.75v2.1H9.7a.75.75 0 0 1 .75.75v6.45h2.1V13.8a.75.75 0 0 1 .75-.75h2.114l.525-2.1H13.3a.75.75 0 0 1-.75-.75V7.5a1.65 1.65 0 0 1 1.65-1.65h1.95v-2.1z"
      clip-rule="evenodd"
    />
  </svg>
</a>
<a href="#"
  ><svg
    xmlns="http://www.w3.org/2000/svg"
    width="2em"
    height="2em"
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      fill="currentColor"
      d="M13.68 10.62L20.24 3h-1.55L13 9.62L8.45 3H3.19l6.88 10.01L3.19 21h1.55l6.01-6.99l4.8 6.99h5.24l-7.13-10.38Zm-2.13 2.47l-.7-1l-5.54-7.93H7.7l4.47 6.4l.7 1l5.82 8.32H16.3z"
    />
  </svg>
</a>
<a href="#"
  ><svg
    xmlns="http://www.w3.org/2000/svg"
    width="2em"
    height="2em"
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4zM2.57 21.83h4V8.799h-4zM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.57 2.57 0 0 1-1.82.748a2.6 2.6 0 0 1-1.818-.747A2.55 2.55 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.58 2.58 0 0 1 4.571 2c.682 0 1.336.269 1.819.747s.753 1.126.753 1.803"
      clip-rule="evenodd"
    />
  </svg>
</a>

      </div>

    </div>

  `;

  // თავიდან დახურულია
  const open = accordion.querySelector(".openAcordion");

  open.style.display = "none";

  // CLOSED
  const closed = accordion.querySelector(".closedAcordion");

  closed.addEventListener("click", function (e) {
    // Get tickets-ს accordion არ გახსნას
    if (e.target.closest(".getTicketBtn")) {
      return;
    }

    if (open.style.display === "none") {
      open.style.display = "flex";
    } else {
      open.style.display = "none";
    }
  });

  // დამატება
  eventsAccordion.appendChild(accordion);
});

// =====================================================
// CHECK
// =====================================================

console.log("TOTAL BANDS:", bands.length);
console.log("TOTAL ACCORDIONS:", eventsAccordion.children.length);
