// ==========================================
// EDIT BY ZEYROX - FINAL WEBSITE SCRIPT
// Compatible with your original index.html
// ==========================================

"use strict";

// MAIN CATEGORIES
const categories = [
  { name: "AI Edit Prompt", icon: "✨", cls: "cat1" },
  { name: "AI Template", icon: "🎨", cls: "cat2" },
  { name: "PNG Material", icon: "🖼️", cls: "cat3" },
  { name: "VFX Material", icon: "⚡", cls: "cat4" }
];

// MATERIALS
const materials = [

  // AI PROMPT A01
  {
    name: "ZAI TREND A01",
    category: "AI Edit Prompt",
    sub: "Trending",
    type: "prompt",
    description: "Cinematic Crimson Red Portrait Edit",
    text: `Use my uploaded photo as the main identity reference.

Create a vertical 9:16 cinematic red portrait poster.

Composition:
A dramatic close-up of the person's eyes at the top, five black-and-white portrait panels arranged vertically in the middle, and one large full-colour portrait in the foreground.

Style:
Deep crimson-red textured background, black formal outfit, dramatic red cinematic lighting, realistic skin texture, deep shadows, high contrast and professional Photoshop manipulation.

Preserve the original facial identity, hairstyle and recognizable features accurately.

No extra text. No watermark. Ultra-realistic 4K quality.`
  },

  // AI PROMPT A02
  {
    name: "ZAI TREND A02",
    category: "AI Edit Prompt",
    sub: "Trending",
    type: "prompt",
    description: "Cinematic Three Panel Balcony Portrait",
    text: `Use my uploaded photo as the ONLY identity reference.

Create a realistic cinematic 3-panel vertical photo collage in 9:16 format.

TOP PANEL:
Show the person standing near a beautiful outdoor balcony railing, photographed from behind at a three-quarter angle.

MIDDLE PANEL:
Create a close-up cinematic portrait of the same person looking thoughtfully towards the side.

BOTTOM PANEL:
Show the same person standing confidently near the balcony railing.

Outfit:
Light pink striped shirt and black trousers.

Background:
Beautiful green garden, modern balcony, warm golden wall lights and cinematic evening lighting.

All three panels must feature the same person. Preserve original facial identity, hairstyle and recognizable features.

Professional DSLR photography, natural skin texture, beautiful bokeh, ultra-realistic 4K.

No text or watermark.`
  },

  // AI PROMPT A03
  {
    name: "ZAI TREND A03",
    category: "AI Edit Prompt",
    sub: "Trending",
    type: "prompt",
    description: "Professional Night Flash DP Portrait",
    text: `Transform my uploaded photo into a professional night-flash portrait.

Pose:
Show the person standing in a stylish natural pose, upper body slightly turned sideways and face looking back towards the camera. One hand raised gently near the forehead.

Lighting:
Warm camera flash effect, golden rim lighting around the hair and shoulders, soft front illumination and realistic shadows.

Background:
Dark nighttime outdoor background with subtle texture and cinematic atmosphere.

Style:
Premium Instagram night photography, realistic skin texture, sharp facial details, DSLR quality, dramatic contrast and subtle film grain.

Preserve the exact original facial identity and hairstyle.

No text, no watermark. Ultra-realistic 4K portrait.`
  },

  // AI PROMPT A04
  {
    name: "ZAI TREND A04",
    category: "AI Edit Prompt",
    sub: "Trending",
    type: "prompt",
    description: "Pinterest Style Scrapbook Saree Collage",
    text: `Create a beautiful Pinterest-style scrapbook collage using my uploaded photo as the ONLY identity reference.

Layout:
Create a vertical 9:16 collage with 8–9 photographs of the same person. Include one large central close-up portrait and multiple smaller portraits surrounding it.

Outfit:
Elegant black saree with a detailed golden embroidered border, matching blouse, delicate necklace and traditional accessories.

Include different natural poses:
Full-body standing portrait, side-profile portrait, sitting portrait, close-up portrait, smiling portrait and candid poses.

Scrapbook Design:
Off-white vintage paper background, torn-paper photo borders, overlapping paper layers, small black bows, delicate butterflies, dried flowers and elegant scrapbook decorations.

Keep all photographs of the same person with consistent facial identity, outfit and hairstyle.

Premium Pinterest aesthetic, realistic details, beautiful composition.

No watermark.`
  },

  // AI PROMPT A05
  {
    name: "ZAI TREND A05",
    category: "AI Edit Prompt",
    sub: "Trending",
    type: "prompt",
    description: "Royal Purple Birthday Poster",
    text: `Create a premium vertical 9:16 birthday poster using my uploaded photo as the ONLY identity reference.

Main Portrait:
A large close-up portrait of the person wearing stylish dark purple sunglasses.

Full Body Portrait:
A second full-body portrait of the same person wearing an elegant royal purple traditional outfit with beautiful embroidery and delicate jewellery.

Background:
Rich purple and lavender watercolor splashes, white areas and elegant golden decorative details.

Typography:
Write "Happy" in elegant black handwritten calligraphy.

Write "Birthday" in large beautiful purple cursive typography.

Add:
"May your special day be as beautiful as your smile and as bright as your spirit. Here's to a year filled with happiness, love, and unforgettable memories."

Preserve the original facial identity and recognizable features.

Professional birthday poster, realistic portraits, premium graphic design, 4K quality.

No watermark.`
  },

  // AI PROMPT A06
  {
    name: "ZAI TREND A06",
    category: "AI Edit Prompt",
    sub: "Trending",
    type: "prompt",
    description: "Black and Gold Birthday Poster",
    text: `Use my uploaded photo as the main identity reference.

Create a premium vertical birthday poster.

Main Portrait:
A large beautiful soft-focus portrait of the same person on the LEFT side.

Full Body Portrait:
On the RIGHT side, create a realistic full-body portrait wearing a stylish black outfit, black sunglasses and black boots.

Background:
Clean ivory-white background, black and golden watercolor splashes, beautiful black floral illustrations with golden outlines and a small decorative pink flower.

Typography:
Add large elegant black serif typography:

"HAPPY BIRTHDAY"

Below it write:

"Celebrating your unique style & light"

Preserve the original face, facial features, hairstyle and identity accurately.

Professional Photoshop editing, elegant typography, premium birthday poster design, realistic 4K quality.

No extra text, no watermark.`
  },

  // EXISTING PNG MATERIALS
  {
    name: "Chaoten Kitty",
    category: "PNG Material",
    sub: "Trending",
    type: "image",
    file: "materials/png/chaotenkitty-neon-7440942_1920.png"
  },

  {
    name: "Fantasy Artwork",
    category: "PNG Material",
    sub: "Natural",
    type: "image",
    file: "materials/png/geralt-art-7036652_1920.jpg"
  },

  {
    name: "Technology Background",
    category: "PNG Material",
    sub: "Gaming",
    type: "image",
    file: "materials/png/tungnguyen0905-technology-6701424_1920.jpg"
  }
];

// CURRENT SELECTION
let selectedCategory = "";
let selectedSub = "";
let currentItem = null;

// PAGE ELEMENTS
const pages = [
  "home",
  "categories",
  "subcategories",
  "gallery",
  "detail"
];

// ==========================================
// PAGE NAVIGATION
// ==========================================

function showPage(id) {
  pages.forEach(pageId => {
    const page = document.getElementById(pageId);
    if (page) page.classList.remove("active");
  });

  const selectedPage = document.getElementById(id);

  if (selectedPage) {
    selectedPage.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// ==========================================
// CATEGORY CARDS
// ==========================================

function makeCategoryCards(targetId) {
  const container = document.getElementById(targetId);

  if (!container) return;

  container.innerHTML = "";

  categories.forEach((category, index) => {
    const card = document.createElement("div");

    card.className = `category-card ${category.cls}`;

    card.innerHTML = `
      <div class="category-icon">${category.icon}</div>
      <h3>${category.name}</h3>
    `;

    card.addEventListener("click", () => {
      openCategory(index);
    });

    container.appendChild(card);
  });
}

// ==========================================
// OPEN CATEGORY
// ==========================================

function openCategory(index) {
  const category = categories[index];

  if (!category) return;

  selectedCategory = category.name;

  document.getElementById("categoryHeading").textContent =
    category.name;

  showPage("subcategories");
}

// ==========================================
// OPEN SUBCATEGORY GALLERY
// ==========================================

function openGallery(sub) {
  selectedSub = sub;

  document.getElementById("galleryHeading").textContent =
    selectedCategory + " / " + selectedSub;

  document.getElementById("searchInput").value = "";

  renderGallery();

  showPage("gallery");
}

// ==========================================
// MATERIAL GALLERY
// ==========================================

function renderGallery() {
  const grid = document.getElementById("itemGrid");

  if (!grid) return;

  const query = document
    .getElementById("searchInput")
    .value.toLowerCase()
    .trim();

  const filtered = materials.filter(item => {
    const matchesCategory =
      item.category === selectedCategory &&
      item.sub === selectedSub;

    const searchableText =
      (
        item.name + " " +
        (item.description || "") + " " +
        (item.text || "")
      ).toLowerCase();

    return matchesCategory && searchableText.includes(query);
  });

  grid.innerHTML = "";

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty">
        No materials added here yet.
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement("div");

    card.className = "item";

    const title = document.createElement("h3");
    title.textContent = item.name;

    const description = document.createElement("p");
    description.textContent =
      item.description || item.category + " • " + item.sub;

    card.append(title, description);

    if (item.type === "prompt") {
      const viewButton = document.createElement("button");

      viewButton.className = "action";
      viewButton.textContent = "View Prompt";

      viewButton.addEventListener("click", () => {
        openDetail(item);
      });

      const copyButton = document.createElement("button");

      copyButton.className = "action";
      copyButton.textContent = "Copy Prompt";

      copyButton.addEventListener("click", () => {
        copyText(item.text);
      });

      card.append(viewButton, copyButton);

    } else {
      const downloadLink = document.createElement("a");

      downloadLink.className = "action";
      downloadLink.href = item.file;
      downloadLink.download = "";
      downloadLink.textContent = "Download";

      card.appendChild(downloadLink);

      const viewButton = document.createElement("button");

      viewButton.className = "action";
      viewButton.textContent = "View Details";

      viewButton.addEventListener("click", () => {
        openDetail(item);
      });

      card.appendChild(viewButton);
    }

    grid.appendChild(card);
  });
}

// ==========================================
// DETAIL PAGE
// ==========================================

function openDetail(item) {
  currentItem = item;

  document.getElementById("detailTitle").textContent =
    item.name;

  document.getElementById("detailText").textContent =
    item.text || item.file || item.name;

  showPage("detail");
}

// ==========================================
// COPY PROMPT
// ==========================================

async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const input = document.createElement("textarea");

      input.value = text;
      document.body.appendChild(input);
      input.select();

      const success = document.execCommand("copy");

      input.remove();

      if (!success) throw new Error("Copy failed");
    }

    alert("Copied successfully!");

  } catch (error) {
    alert("Copy failed. Please try again.");
  }
}

function copyCurrent() {
  if (!currentItem) return;

  copyText(currentItem.text || currentItem.name);
}

// ==========================================
// SHARE
// ==========================================

async function shareCurrent() {
  if (!currentItem) return;

  const shareText =
    currentItem.name + "\n" +
    (currentItem.text || currentItem.file || "");

  try {
    if (navigator.share) {
      await navigator.share({
        title: currentItem.name,
        text: shareText
      });
    } else {
      await copyText(shareText);
    }
  } catch (error) {
    // Sharing cancelled by user.
  }
}

// ==========================================
// INITIALIZE WEBSITE
// ==========================================

function initializeWebsite() {
  makeCategoryCards("homeCategories");
  makeCategoryCards("allCategories");

  const searchInput = document.getElementById("searchInput");

  if (searchInput) {
    searchInput.addEventListener("input", renderGallery);
  }

  showPage("home");
}

// Support both normal and deferred script loading
if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initializeWebsite
  );
} else {
  initializeWebsite();
}

// Make functions available to HTML buttons
window.showPage = showPage;
window.openCategory = openCategory;
window.openGallery = openGallery;
window.renderGallery = renderGallery;
window.openDetail = openDetail;
window.copyCurrent = copyCurrent;
window.shareCurrent = shareCurrent;
window.copyText = copyText;
