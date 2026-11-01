
// EDIT BY ZEYROX - Category Upgrade

const mainCategories = [
  { name: "AI Edit Prompt", icon: "✨" },
  { name: "AI Template", icon: "🎨" },
  { name: "PNG Material", icon: "🖼️" },
  { name: "VFX Material", icon: "⚡" }
];

const subCategories = [
  { name: "Trending", icon: "🔥" },
  { name: "Gaming", icon: "🎮" },
  { name: "Natural", icon: "🌿" },
  { name: "Logo", icon: "💠" }
];

const materials = [];

let selectedMain = null;
let activeCategory = "All";

const categoryGrid = document.getElementById("categoryGrid");
const materialsGrid = document.getElementById("materialsGrid");
const chips = document.getElementById("chips");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const emptyState = document.getElementById("emptyState");
const themeBtn = document.getElementById("themeBtn");

// Show 4 Main Categories
function showMainCategories() {
  selectedMain = null;
  categoryGrid.innerHTML = "";

  mainCategories.forEach(category => {
    const card = document.createElement("div");
    card.className = "category";

    card.innerHTML = `
      <div class="cat-icon">${category.icon}</div>
      <h3>${category.name}</h3>
      <p>Explore ${category.name}</p>
    `;

    card.addEventListener("click", () => {
      selectedMain = category.name;
      showSubCategories();
    });

    categoryGrid.appendChild(card);
  });
}

// Show 4 Subcategories
function showSubCategories() {
  categoryGrid.innerHTML = "";

  const back = document.createElement("button");
  back.className = "category category-back";
  back.textContent = "← Back to Categories";
  back.addEventListener("click", showMainCategories);
  categoryGrid.appendChild(back);

  subCategories.forEach(category => {
    const card = document.createElement("div");
    card.className = "category";

    card.innerHTML = `
      <div class="cat-icon">${category.icon}</div>
      <h3>${category.name}</h3>
      <p>${selectedMain}</p>
    `;

    card.addEventListener("click", () => {
      activeCategory = selectedMain + " / " + category.name;
      showChips();
      showMaterials();

      document.getElementById("materials").scrollIntoView({
        behavior: "smooth"
      });
    });

    categoryGrid.appendChild(card);
  });
}

// Category Filters
function showChips() {
  chips.innerHTML = "";

  const allCategories = [
    "All",
    ...mainCategories.flatMap(main =>
      subCategories.map(sub => main.name + " / " + sub.name)
    )
  ];

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

// Show Materials
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

// Theme Toggle
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  themeBtn.textContent =
    document.body.classList.contains("light") ? "☀" : "☾";

  localStorage.setItem(
    "edithub-theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
});

// Remember Theme
if (localStorage.getItem("edithub-theme") === "light") {
  document.body.classList.add("light");
  themeBtn.textContent = "☀";
}

// Footer Year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Start
showMainCategories();
showChips();
showMaterials();
                         
