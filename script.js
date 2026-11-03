// EDIT BY ZEYROX - EditHub

const categories = [
  { name: "AI Edit Prompt", sub: "Trending", icon: "✨" },
  { name: "AI Edit Prompt", sub: "Gaming", icon: "🎮" },
  { name: "AI Edit Prompt", sub: "Natural", icon: "🌿" },
  { name: "AI Edit Prompt", sub: "Logo", icon: "💠" },

  { name: "AI Template", sub: "Trending", icon: "🔥" },
  { name: "AI Template", sub: "Gaming", icon: "🎮" },
  { name: "AI Template", sub: "Natural", icon: "🌄" },
  { name: "AI Template", sub: "Logo", icon: "💠" },

  { name: "PNG Material", sub: "Trending", icon: "🖼️" },
  { name: "PNG Material", sub: "Gaming", icon: "🎯" },
  { name: "PNG Material", sub: "Natural", icon: "🌳" },
  { name: "PNG Material", sub: "Logo", icon: "⭐" },

  { name: "VFX Material", sub: "Trending", icon: "⚡" },
  { name: "VFX Material", sub: "Gaming", icon: "🎮" },
  { name: "VFX Material", sub: "Natural", icon: "🌊" },
  { name: "VFX Material", sub: "Logo", icon: "💎" }
];

// Materials list
// New materials can be added here later.
const materials = [];

let activeCategory = "All";

const categoryGrid = document.getElementById("categoryGrid");
const materialsGrid = document.getElementById("materialsGrid");
const chips = document.getElementById("chips");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const emptyState = document.getElementById("emptyState");
const themeBtn = document.getElementById("themeBtn");

// Category cards
function showCategories() {
  categoryGrid.innerHTML = "";

  categories.forEach(category => {
    const card = document.createElement("div");
    card.className = "category";

    card.innerHTML = `
      <div class="cat-icon">${category.icon}</div>
      <h3>${category.name}</h3>
      <p>${category.sub}</p>
    `;

    card.addEventListener("click", () => {
      activeCategory = category.name + " / " + category.sub;
      showChips();
      showMaterials();
      document.getElementById("materials").scrollIntoView({
        behavior: "smooth"
      });
    });

    categoryGrid.appendChild(card);
  });
}

// Category filters
function showChips() {
  chips.innerHTML = "";

  const allCategories = ["All", ...categories.map(
    c => c.name + " / " + c.sub
  )];

  allCategories.forEach(name => {
    const chip = document.createElement("button");
    chip.className = "chip";
    chip.textContent = name;

    if (name === activeCategory) {
      chip.classList.add("active");
    }

    chip.addEventListener("click", () => {
      activeCategory = name;
      showChips();
      showMaterials();
    });

    chips.appendChild(chip);
  });
}

// Material cards
function showMaterials() {
  materialsGrid.innerHTML = "";

  const searchText = searchInput.value.toLowerCase();

  let filtered = materials.filter(item => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchText);

    const matchesCategory =
      activeCategory === "All" ||
      (item.category + " / " + item.sub) === activeCategory;

    return matchesSearch && matchesCategory;
  });

  if (sortSelect.value === "name") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (sortSelect.value === "newest") {
    filtered.sort((a, b) => b.date - a.date);
  }

  if (sortSelect.value === "downloads") {
    filtered.sort((a, b) => b.downloads - a.downloads);
  }

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "material";

    card.innerHTML = `
      <div class="thumb">
        <img src="${item.image}" alt="${item.title}">
        <span class="type">${item.category}</span>
      </div>
      <div class="material-body">
        <h3>${item.title}</h3>
        <div class="meta">
          <span>${item.sub}</span>
          <span>${item.downloads} Downloads</span>
        </div>
        <a class="download" href="${item.file}" download>
          Download
        </a>
      </div>
    `;

    materialsGrid.appendChild(card);
  });

  emptyState.classList.toggle("hidden", filtered.length !== 0);
}

// Search
searchInput.addEventListener("input", showMaterials);

// Sorting
sortSelect.addEventListener("change", showMaterials);

// Theme toggle
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  themeBtn.textContent =
    document.body.classList.contains("light") ? "☀" : "☾";

  localStorage.setItem(
    "edithub-theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
});

// Remember theme
if (localStorage.getItem("edithub-theme") === "light") {
  document.body.classList.add("light");
  themeBtn.textContent = "☀";
}

// Toast message
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// Footer year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Start website
showCategories();
showChips();
showMaterials();
