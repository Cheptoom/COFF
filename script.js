function handleActive(event, items) {
  // rip off active class from each item
  items.forEach((item) => {
    item.classList.remove("active");
  });

  // now add active class to clicked-item
  event.target.classList.add("active");
}

function handleClose(sections, procedureModal) {
  // grab x
  const closeModal = document.querySelector("#close-modal");

  // close
  closeModal.addEventListener("click", (e) => {
    // hide modal
    procedureModal.style.display = "none";

    // make all sections clear
    sections.forEach((section) => {
      section.style.filter = `blur(0px)`;
    });
  });
}

function handleBlur(sections) {
  // only modal will be visible clearly
  sections.forEach((section) => {
    section.style.filter = `blur(7px)`;
  });
}

function displayProcedureAsModal(steps) {
  // grab elements
  const sections = document.querySelectorAll("section");
  const procedureModal = document.querySelector("#procedure-modal");

  // create ol container
  const olsteps = document.createElement("ol");

  // iterate steps
  steps.forEach((step) => {
    // create li for each step
    const liStep = document.createElement("li");

    // manipulate dom
    liStep.innerHTML = step;

    // attach to ol
    olsteps.appendChild(liStep);
  });

  // attach ol to modal
  procedureModal.appendChild(olsteps);

  // display modal
  procedureModal.style.display = "block";

  // make background blurred
  handleBlur(sections);

  // close modal
  handleClose(sections, procedureModal);
}

function bindUrlWithParams(url, params) {
  const queryString = new URLSearchParams(params).toString(); //e.g., "name=...&excludeIngredients=..."
  return `${url}?${queryString}`;
}

function handleDOMContentLoaded(e) {
  // grab elements
  const btnsAddToCart = document.querySelectorAll(".card-btn");
  const cartBadge = document.querySelector("#cart-badge");
  const navLinks = document.querySelectorAll("#navigation-links .nav-link");
  const menuItems = document.querySelectorAll(".services-item");

  // invoke to display options in select
  displaySelectDiets();
  // clicking a nav link
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", (e) => {
      handleActive(e, navLinks);
    });
  });

  // clicking a servics-item
  servicsItems.forEach((servicesItem) => {
    servicesItem.addEventListener("click", (e) => {
      handleActive(e, servicesItems);
    });
  });
}

// wait HTML to load first
document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
