const filterEl = document.getElementById("filter");
const gridEl = document.getElementById("projectsGrid");
const cards = Array.from(document.querySelectorAll(".project-card"));
const msgEl = document.getElementById("selectionMessage");

let visitCount = 0;

function filterProjects() {
  const selected = filterEl.value;

  // LOOP: iterate over all project cards
  for (const card of cards) {
    const category = card.getAttribute("data-category");
    const shouldShow =
      selected === "all" || category === selected; // CONDITIONAL

    card.style.display = shouldShow ? "block" : "none";
  }

  msgEl.textContent = (selected === "all")
    ? "Showing all projects."
    : `Showing projects in category: ${selected}.`; // CONDITIONAL via ternary
}

function selectProject(e) {
  const card = e.target.closest(".project-card");
  const title = card.querySelector("h3")?.textContent ?? "Selected project";

  // FUNCTION updates state + responds based on a condition
  visitCount++;

  let feedback;
  if (visitCount === 1) feedback = "Nice! You selected your first project.";
  else if (visitCount <= 3) feedback = "Great—keep exploring!";
  else feedback = "Awesome—you're really interested in this portfolio!";

  msgEl.textContent = `${feedback} (${title})`;
}

filterEl.addEventListener("change", filterProjects);

// Add click handlers to each card button
for (const card of cards) {
  const btn = card.querySelector(".open-btn");
  btn.addEventListener("click", selectProject);
}

document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Initialize filter on load
filterProjects();
