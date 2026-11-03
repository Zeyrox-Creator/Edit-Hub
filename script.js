// ========================================
// EDIT BY ZEYROX - WEBSITE SYSTEM
// ========================================

// MAIN CATEGORIES
const categories = [
  { name: "AI Edit Prompt", icon: "✨" },
  { name: "AI Template", icon: "🎨" },
  { name: "PNG Material", icon: "🖼️" },
  { name: "VFX Material", icon: "⚡" }
];

// SUBCATEGORIES
const subCategories = [
  { name: "Trending", icon: "🔥" },
  { name: "Gaming", icon: "🎮" },
  { name: "Natural", icon: "🌿" },
  { name: "Logo", icon: "💠" }
];

// MATERIALS
const materials = [
  {
    name: "ZAI TREND A01",
    main: "AI Edit Prompt",
    sub: "Trending",
    description: "Cinematic Crimson Red Portrait Edit",
    image: "materials/ai-prompts/trending/ZAI-Trend-A01.jpg",
    type: "prompt",
    prompt: `Use the uploaded image as the main subject and transform it into a professional cinematic photo edit.

Create a vertical 9:16 poster with a deep crimson-red textured background, a dramatic close-up of the subject's eyes at the top, five black-and-white portrait panels in the middle and one large full-colour portrait in the foreground.

Preserve the original facial identity, hairstyle and recognizable features. Add dramatic red lighting, realistic skin texture, deep shadows and professional cinematic editing.

No watermark.`
  },
  {
    name: "ZAI TREND A02",
    main: "AI Edit Prompt",
    sub: "Trending",
    description: "Cinematic Three Panel Balcony Portrait",
    image: "materials/ai-prompts/trending/ZAI-Trend-A02.jpg",
    type: "prompt",
    prompt: `Create a realistic cinematic 3-panel vertical photo collage using my uploaded photo as the ONLY identity reference.

Top panel: Person standing near a balcony railing, photographed from behind.

Middle panel: Cinematic close-up portrait looking thoughtfully to the side.

Bottom panel: Medium full-body portrait near the same balcony.

Use a pink striped shirt, black trousers, green garden background, warm lights, blue evening lighting, realistic skin texture and DSLR depth of field.

All panels must show the same person. Preserve facial identity. No text or watermark.`
  },
  {
    name: "ZAI TREND A03",
    main: "AI Edit Prompt",
    sub: "Trending",
    description: "Professional Night Flash DP Portrait",
    image: "materials/ai-prompts/trending/ZAI-Trend-A03.jpg",
    type: "prompt",
    prompt: `Transform my uploaded photo into a realistic professional night-flash portrait.

Show the person standing in a stylish natural pose, upper body slightly turned sideways and face looking back towards the camera.

Create warm camera-flash lighting, golden rim lighting, dark nighttime outdoor background, realistic skin texture, sharp facial details and premium Instagram photography style.

Preserve the original facial identity, hairstyle and appearance. No watermark.`
  },
  {
    name: "ZAI TREND A04",
    main: "AI Edit Prompt",
    sub: "Trending",
    description: "Pinterest Style Scrapbook Saree Collage",
    image: "materials/ai-prompts/trending/ZAI-Trend-A04.jpg",
    type: "prompt",
    prompt: `Create a beautiful Pinterest-style scrapbook collage using my uploaded photo as the ONLY identity reference.

Create a vertical 9:16 layout with 8–9 photographs of the same person, including one large central portrait and smaller surrounding portraits.

Outfit: Elegant black saree with golden embroidered border, matching blouse and delicate jewellery.

Use an off-white vintage paper background, torn-paper photo borders, overlapping paper layers, black bows, butterflies, dried flowers and scrapbook decorations.

Keep the same facial identity, outfit and hairstyle in every photo. Premium Pinterest aesthetic. No watermark.`
  },
  {
    name: "ZAI TREND A05",
    main: "AI Edit Prompt",
    sub: "Trending",
    description: "Royal Purple Birthday Poster",
    image: "materials/ai-prompts/trending/ZAI-Trend-A05.jpg",
    type: "prompt",
    prompt: `Create a premium vertical 9:16 birthday poster using my uploaded photo as the ONLY identity reference.

Show a large close-up portrait wearing stylish purple sunglasses and a second full-body portrait in an elegant royal purple traditional outfit.

Use a purple and lavender watercolor background, golden decorative details and premium Photoshop-style editing.

Add the text:
Happy Birthday

May your special day be as beautiful as your smile and as bright as your spirit.

Preserve the person's exact facial identity. No watermark.`
  },
  {
    name: "ZAI TREND A06",
    main: "AI Edit Prompt",
    sub: "Trending",
    description: "Black and Gold Birthday Poster",
    image: "materials/ai-prompts/trending/ZAI-Trend-A06.jpg",
    type: "prompt",
    prompt: `Create a premium birthday poster using my uploaded photo as the main identity reference.

Place a large soft-focus portrait on the left and a full-body portrait on the right wearing a stylish black outfit and sunglasses.

Use an ivory-white background, black and golden watercolor splashes, black floral illustrations and a small pink flower.

Add the headline:
HAPPY BIRTHDAY

Add the subtitle:
Celebrating your unique style & light

Preserve the original face and identity. Ultra-realistic professional poster. No watermark.`
  },
  {
    name: "Chaoten Kitty",
    main: "PNG Material",
    sub: "Trending",
    description: "Neon Material",
    image: "materials/png/chaotenkitty-neon-7440942_1920.png",
    type: "image"
  },
  {
    name: "Fantasy Artwork",
    main: "PNG Material",
    sub: "Natural",
    description: "Fantasy Editing Material",
    image: "materials/png/geralt-art-7036652_1920.jpg",
    type: "image"
  },
  {
    name: "Technology Background",
    main: "PNG Material",
    sub: "Gaming",
    description: "Technology Editing Material",
    image: "materials/png/tungnguyen0905-technology-6701424_1920.jpg",
    type: "image"
  }
];

let selectedMain = "";
let selectedSub = "";
let currentMaterial = null;

// ========================================
// PAGE NAVIGATION
// ========================================

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const page = document.getElementById(pageId);

  if (page) {
    page.classList.add("active");
  }

  window.scrollTo(0, 0);
}

// ========================================
// CATEGORY CARDS
// ========================================

function renderCategories(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  categories.forEach(category => {
    const card = document.createElement("div");
    card.className = "category-card";

    card.innerHTML = `
      <div class="category-icon">${category.icon}</div>
      <h3>${category.name}</h3>
    `;

    card.addEventListener("click", () => {
      openCategory(category.name);
    });

    container.appendChild(card);
  });
}

// ========================================
// OPEN CATEGORY
// ========================================

function openCategory(name) {
  selectedMain = name;

  const heading = document.getElementById("categoryHeading");

  if (heading) {
    heading.textContent = name;
  }

  showPage("subcategories");
}

// ========================================
// OPEN MATERIAL GALLERY
// ========================================

function openGallery(sub) {
  selectedSub = sub;

  const heading = document.getElementById("galleryHeading");

  if (heading) {
    heading.textContent = selectedMain + " / " + sub;
  }

  const search = document.getElementById("searchInput");

  if (search) {
    search.value = "";
  }

  renderGallery();
  showPage("gallery");
}

// ========================================
// DISPLAY MATERIALS
// ========================================

function renderGallery() {
  const grid = document.getElementById("itemGrid");
  if (!grid) return;

  const search = document.getElementById("searchInput");
  const query = search ? search.value.toLowerCase() : "";

  const filtered = materials.filter(item =>
    item.main === selectedMain &&
    item.sub === selectedSub &&
    (
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    )
  );

  grid.innerHTML = "";

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty">No materials available yet.</div>`;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "item";

    const title = document.createElement("h3");
    title.textContent = item.name;

    const description = document.createElement("p");
    description.textContent = item.description;

    card.append(title, description);

    if (item.type === "prompt") {
      const view = document.createElement("button");
      view.className = "action";
      view.textContent = "View Prompt";
      view.onclick = () => openDetail(item);

      const copy = document.createElement("button");
      copy.className = "action";
      copy.textContent = "Copy Prompt";
      copy.onclick = () => copyText(item.prompt);

      card.append(view, copy);
    } else {
      const download = document.createElement("a");
      download.className = "action";
      download.href = item.image;
      download.download = "";
      download.textContent = "Download";

      card.appendChild(download);
    }

    grid.appendChild(card);
  });
}

// ========================================
// MATERIAL DETAILS
// ========================================

function openDetail(item) {
  currentMaterial = item;

  const title = document.getElementById("detailTitle");
  const text = document.getElementById("detailText");

  if (title) title.textContent = item.name;
  if (text) text.textContent = item.prompt || item.description;

  showPage("detail");
}

// ========================================
// COPY PROMPT
// ========================================

async function copyText(value) {
  try {
    await navigator.clipboard.writeText(value);
    alert("Copied successfully!");
  } catch (error) {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Copied successfully!");
  }
}

function copyCurrent() {
  if (currentMaterial) {
    copyText(currentMaterial.prompt || currentMaterial.description);
  }
}

// ========================================
// SHARE MATERIAL
// ========================================

async function shareCurrent() {
  if (!currentMaterial) return;

  const content = currentMaterial.prompt || currentMaterial.description;

  if (navigator.share) {
    try {
      await navigator.share({
        title: currentMaterial.name,
        text: content
      });
    } catch (error) {}
  } else {
    copyText(content);
  }
}

// ========================================
// SEARCH
// ========================================

function setupSearch() {
  const search = document.getElementById("searchInput");

  if (search) {
    search.addEventListener("input", renderGallery);
  }
}

// ========================================
// START WEBSITE
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  renderCategories("homeCategories");
  renderCategories("allCategories");
  setupSearch();

  showPage("home");
});

// HTML onclick support
window.showPage = showPage;
window.openCategory = openCategory;
window.openGallery = openGallery;
window.renderGallery = renderGallery;
window.openDetail = openDetail;
window.copyCurrent = copyCurrent;
window.shareCurrent = shareCurrent;
window.copyText = copyText;
