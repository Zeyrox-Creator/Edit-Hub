
// EDIT BY ZEYROX - script.js

const categories = [
  { name: "AI Edit Prompt", icon: "✨", cls: "cat1" },
  { name: "AI Template", icon: "🎨", cls: "cat2" },
  { name: "PNG Material", icon: "🖼️", cls: "cat3" },
  { name: "VFX Material", icon: "⚡", cls: "cat4" }
];

const subCategories = [
  { name: "Trending", icon: "🔥" },
  { name: "Gaming", icon: "🎮" },
  { name: "Natural", icon: "🌿" },
  { name: "Logo", icon: "💠" }
];

const materials = [
  {
    name: "Chaoten Kitty",
    category: "PNG Material",
    sub: "Trending",
    file: "materials/png/chaotenkitty-neon-7440942_1920.png",
    type: "image",
    text: "Neon Editing Material"
  },
  {
    name: "Fantasy Artwork",
    category: "PNG Material",
    sub: "Natural",
    file: "materials/png/geralt-art-7036652_1920.jpg",
    type: "image",
    text: "Fantasy Editing Material"
  },
  {
    name: "Technology Background",
    category: "PNG Material",
    sub: "Gaming",
    file: "materials/png/tungnguyen0905-technology-6701424_1920.jpg",
    type: "image",
    text: "Technology Editing Material"
  }
];

let selectedCategory = "";
let selectedSub = "";
let currentItem = null;
let previousPage = "gallery";

const pages = ["home", "categories", "subcategories", "gallery", "detail"];

function showPage(page) {
  pages.forEach(id => {
    const section = document.getElementById(id);
    if (section) section.classList.toggle("active", id === page);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function makeCategoryCards(target) {
  const container = document.getElementById(target);
  if (!container) return;

  container.innerHTML = categories.map((cat, index) => `
    <div class="category-card ${cat.cls}" onclick="openCategory(${index})">
      <div class="category-icon">${cat.icon}</div>
      <h3>${cat.name}</h3>
    </div>
  `).join("");
}

function openCategory(index) {
  const category = categories[index];
  if (!category) return;

  selectedCategory = category.name;

  const heading = document.getElementById("categoryHeading");
  if (heading) heading.textContent = category.name;

  const container = document.getElementById("subcategories");
  if (container) {
    const grid = container.querySelector(".subcategory-grid") ||
                 container.querySelector(".subcategories-grid") ||
                 container.querySelector(".card-grid");

    if (grid) {
      grid.innerHTML = subCategories.map(sub => `
        <div class="subcategory-card" onclick="openGallery('${sub.name}')">
          <div class="category-icon">${sub.icon}</div>
          <h3>${sub.name}</h3>
        </div>
      `).join("");
    }
  }

  showPage("subcategories");
}

function openGallery(sub) {
  selectedSub = sub;

  const heading = document.getElementById("galleryHeading");
  if (heading) heading.textContent = selectedCategory + " / " + selectedSub;

  const search = document.getElementById("searchInput");
  if (search) search.value = "";

  renderGallery();
  showPage("gallery");
}

function renderGallery() {
  const grid = document.getElementById("itemGrid");
  if (!grid) return;

  const searchInput = document.getElementById("searchInput");
  const query = searchInput ? searchInput.value.toLowerCase().trim() : "";

  const filtered = materials.filter(item =>
    item.category === selectedCategory &&
    item.sub === selectedSub &&
    item.name.toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    grid.innerHTML = `<p class="empty-message">No materials added here yet.</p>`;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const index = materials.indexOf(item);

    return `
      <div class="material-card">
        <img src="${item.file}" alt="${item.name}" loading="lazy">
        <h3>${item.name}</h3>
        <p>${item.text || ""}</p>
        <a class="download-btn" href="${item.file}" download>
          Download
        </a>
        <button onclick="openDetail(${index})">View Details</button>
      </div>
    `;
  }).join("");
}

function openDetail(index) {
  const item = materials[index];
  if (!item) return;

  currentItem = item;
  previousPage = "gallery";

  const title = document.getElementById("detailTitle");
  const text = document.getElementById("detailText");

  if (title) title.textContent = item.name;
  if (text) text.textContent = item.text || item.file || item.name;

  showPage("detail");
}

function copyCurrent() {
  if (!currentItem) return;
  copyText(currentItem.text || currentItem.file || currentItem.name);
}

function copyText(text) {
  if (!text) return;

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text)
      .then(() => alert("Copied successfully!"))
      .catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const area = document.createElement("textarea");
  area.value = text;
  document.body.appendChild(area);
  area.select();

  try {
    document.execCommand("copy");
    alert("Copied successfully!");
  } catch (error) {
    alert("Copy failed. Please copy manually.");
  }

  area.remove();
}

function shareCurrent() {
  if (!currentItem) return;

  const shareData = {
    title: currentItem.name,
    text: currentItem.text || currentItem.name,
    url: window.location.href
  };

  if (navigator.share) {
    navigator.share(shareData).catch(() => {});
  } else {
    copyText(shareData.url);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  makeCategoryCards("homeCategories");
  makeCategoryCards("allCategories");

  const search = document.getElementById("searchInput");
  if (search) search.addEventListener("input", renderGallery);
});
