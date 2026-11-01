
// EDIT BY ZEYROX - Website Navigation System

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

// Add new materials here when ready.
const materials = [];

let selectedMain = "";
let selectedSub = "";

const homePage = document.getElementById("homePage");
const subcategoryPage = document.getElementById("subcategoryPage");
const materialsPage = document.getElementById("materialsPage");

const categoryGrid = document.getElementById("categoryGrid");
const subcategoryGrid = document.getElementById("subcategoryGrid");
const materialsGrid = document.getElementById("materialsGrid");

const subcategoryTitle = document.getElementById("subcategoryTitle");
const materialsTitle = document.getElementById("materialsTitle");

const materialSearch = document.getElementById("materialSearch");
const sortSelect = document.getElementById("sortSelect");
const emptyState = document.getElementById("emptyState");

const themeBtn = document.getElementById("themeBtn");

// SHOW HOME PAGE
function showHome() {
  homePage.classList.remove("hidden");
  subcategoryPage.classList.add("hidden");
  materialsPage.classList.add("hidden");

  selectedMain = "";
  selectedSub = "";

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// SHOW MAIN CATEGORIES
function showMainCategories() {
  categoryGrid.innerHTML = "";

  mainCategories.forEach(category => {
    const card = document.createElement("button");
    card.className = "category-card";

    card.innerHTML = `
      <span class="category-icon">${category.icon}</span>
      <h3>${category.name}</h3>
      <p>Explore ${category.name} resources</p>
    `;

    card.addEventListener("click", () => {
      openSubcategories(category.name);
    });

    categoryGrid.appendChild(card);
  });
}

// OPEN SUBCATEGORIES PAGE
function openSubcategories(mainName) {
  selectedMain = mainName;

  homePage.classList.add("hidden");
  materialsPage.classList.add("hidden");
  subcategoryPage.classList.remove("hidden");

  subcategoryTitle.textContent = mainName;
  subcategoryGrid.innerHTML = "";

  subCategories.forEach(category => {
    const card = document.createElement("button");
    card.className = "category-card";

    card.innerHTML = `
      <span class="category-icon">${category.icon}</span>
      <h3>${category.name}</h3>
      <p>Explore ${category.name} materials</p>
    `;

    card.addEventListener("click", () => {
      openMaterials(category.name);
    });

    subcategoryGrid.appendChild(card);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// OPEN MATERIALS PAGE
function openMaterials(subName) {
  selectedSub = subName;

  homePage.classList.add("hidden");
  subcategoryPage.classList.add("hidden");
  materialsPage.classList.remove("hidden");

  materialsTitle.textContent = selectedMain + " / " + selectedSub;

  materialSearch.value = "";
  sortSelect.value = "newest";

  showMaterials();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// DISPLAY MATERIALS
function showMaterials() {
  materialsGrid.innerHTML = "";

  const searchText = materialSearch.value.toLowerCase();

  let filtered = materials.filter(item => {
    return (
      item.main === selectedMain &&
      item.sub === selectedSub &&
      (
        item.name.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText)
      )
    );
  });

  if (sortSelect.value === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortSelect.value === "downloads") {
    filtered.sort((a, b) => b.downloads - a.downloads);
  }

  if (sortSelect.value === "newest") {
    filtered.sort((a, b) => b.date - a.date);
  }

  if (filtered.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "material-card";

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <a href="${item.download}" download>⬇ Download</a>
    `;

    materialsGrid.appendChild(card);
  });
}

// BACK BUTTONS
document.getElementById("backHome").addEventListener("click", showHome);

document.getElementById("backSubcategory").addEventListener("click", () => {
  materialsPage.classList.add("hidden");
  subcategoryPage.classList.remove("hidden");

  window.scrollTo({ top: 0, behavior: "smooth" });
});

// HOME NAVIGATION
document.getElementById("homeLogo").addEventListener("click", event => {
  event.preventDefault();
  showHome();
});

document.getElementById("navHome").addEventListener("click", event => {
  event.preventDefault();
  showHome();
});

// SEARCH MATERIALS
materialSearch.addEventListener("input", showMaterials);
sortSelect.addEventListener("change", showMaterials);

// HOME SEARCH
document.getElementById("searchInput").addEventListener("input", event => {
  const query = event.target.value.toLowerCase();

  categoryGrid.querySelectorAll(".category-card").forEach(card => {
    card.style.display = card.textContent.toLowerCase().includes(query)
      ? ""
      : "none";
  });
});

// THEME TOGGLE
function applyTheme() {
  const savedTheme = localStorage.getItem("edithub-theme");

  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    themeBtn.textContent = "☀";
  } else {
    document.body.classList.remove("light-theme");
    themeBtn.textContent = "☾";
  }
}

themeBtn.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light-theme");

  localStorage.setItem("edithub-theme", isLight ? "light" : "dark");
  themeBtn.textContent = isLight ? "☀" : "☾";
});

// FOOTER YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// INITIALIZE WEBSITE
showMainCategories();
applyTheme();
showHome();
