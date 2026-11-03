// EDIT BY ZEYROX - script.js
// Compatible with the index.html shared in this chat.

const categories = [
  { name: "AI Edit Prompt", icon: "✨", cls: "cat1" },
  { name: "AI Template", icon: "🎨", cls: "cat2" },
  { name: "PNG Material", icon: "🖼️", cls: "cat3" },
  { name: "VFX Material", icon: "⚡", cls: "cat4" }
];

const materials = [
  {
    name: "ZAI TREND A01",
    searchName: "A01",
    category: "AI Edit Prompt",
    sub: "Trending",
    file: "materials/ai-prompts/trending/ZAI-Trend-A01.jpg",
    type: "prompt",
    description: "Cinematic Crimson Red Portrait Edit",
    text: `Use the uploaded image as the main subject and transform it into a professional cinematic photo edit, matching the exact editing style and composition of my previously provided reference image.

Create a vertical 9:16 poster with a deep crimson-red textured background, a huge dramatic close-up of the subject's eyes at the top, five different black-and-white portrait panels of the same subject arranged vertically in the middle with thin white borders, and one large realistic full-colour portrait of the same subject sitting confidently in the foreground, wearing a black formal suit with one hand near the chin.

Preserve the uploaded person's original facial identity and recognizable features as accurately as possible. Add dramatic red cinematic lighting, realistic skin texture, sharp details, deep shadows, professional Photoshop manipulation and high contrast.

Keep the same layered portrait arrangement, proportions, framing and overall visual style as the reference. Do not add any person's name or text. No watermark.`
  },

  {
    name: "ZAI TREND A02",
    searchName: "A02",
    category: "AI Edit Prompt",
    sub: "Trending",
    file: "materials/ai-prompts/trending/ZAI-Trend-A02.jpg",
    type: "prompt",
    description: "Cinematic Three Panel Balcony Portrait",
    text: `Use my uploaded photo as the ONLY identity reference. Create a highly realistic cinematic 3-panel vertical photo collage in a 9:16 aspect ratio.

Top Panel: Show the same person standing near a beautiful outdoor balcony railing, photographed from behind at a three-quarter angle, one hand gently touching the back of the head, looking down to the side. Wear a light pink striped shirt with sleeves rolled up and black trousers.

Middle Panel: Create a close-up cinematic portrait of the same person, showing the face from a side angle, looking thoughtfully towards the left. Keep realistic facial details, natural hairstyle and soft expressions.

Bottom Panel: Show the same person in a medium full-body shot, standing confidently near the same balcony railing, looking towards the left, wearing the same pink striped shirt and black trousers.

Background & Style: Beautiful green garden, blurred trees, modern balcony, warm golden wall lights, subtle blue evening lighting, cinematic depth of field, natural skin texture, professional DSLR photography, soft bokeh and premium Instagram aesthetic.

IMPORTANT: All three panels must feature the exact same person from my uploaded photo. Preserve their original facial identity, face shape and recognizable features. Maintain consistent clothing and hairstyle across all three panels. Make it look like three real photographs taken during the same photoshoot.

No text, no watermark, no logo, no social media interface, ultra-realistic, high detail, professional photography, 4K quality.`
  },

  {
    name: "Trending DP Style for Boys & Girls (ZAI TREND A03)",
    searchName: "A03",
    category: "AI Edit Prompt",
    sub: "Trending",
    file: "materials/ai-prompts/trending/ZAI-Trend-A03.jpg",
    type: "prompt",
    description: "Professional Night Flash DP Portrait",
    text: `Transform my uploaded photo into a realistic professional night-flash portrait while preserving my exact facial identity and recognizable features.

Pose & Composition: Show me standing in a stylish natural pose, with my upper body slightly turned sideways and my face looking back towards the camera. One hand raised gently near my forehead, creating a fashionable pose. Capture a vertical full-body portrait in a 9:16 aspect ratio.

Outfit: Keep my original outfit from the uploaded photo, unless I specifically request a change.

Lighting: Create a powerful warm camera-flash effect from behind and slightly to the side, producing beautiful golden rim lighting around my hair, face, shoulders and body. Add soft front flash illumination on the face, realistic highlights and natural shadows.

Background: Dark nighttime outdoor background with subtle texture, deep black tones and a cinematic atmosphere. Keep the background uncluttered.

Photography Style: Premium Instagram night-flash photography, realistic skin texture, sharp facial details, natural colors, DSLR quality, dramatic contrast, subtle film grain and professional photo editing.

IMPORTANT: Use only the person in my uploaded photo. Preserve the original face, facial structure and identity. Do not replace the person with another model. Keep the result photorealistic.

No text, no watermark, no logo, no social media interface. Ultra-realistic, high-quality 4K portrait.`
  },

  {
    name: "ZAI TREND A04",
    searchName: "A04",
    category: "AI Edit Prompt",
    sub: "Trending",
    file: "materials/ai-prompts/trending/ZAI-Trend-A04.jpg",
    type: "prompt",
    description: "Pinterest Style Scrapbook Saree Collage",
    text: `Create a beautiful aesthetic Pinterest-style scrapbook photo collage using my uploaded photo as the ONLY identity reference.

Layout: Create a vertical 9:16 collage containing 8–9 photographs of the same person, arranged in different sizes with one large central close-up portrait and multiple smaller portraits surrounding it.

Outfit: A beautiful elegant black saree with a detailed golden embroidered border, matching blouse, delicate necklace, earrings and traditional accessories.

Photo Poses: Include different natural poses:
1. Full-body standing portrait.
2. Side-profile portrait looking down.
3. Sitting elegantly with one hand near the face.
4. Close-up portrait looking directly at the camera.
5. Smiling portrait with eyes gently closed.
6. Standing portrait holding the saree gracefully.
7. A candid thoughtful pose.

Scrapbook Design: Use an off-white vintage paper background with a subtle grid pattern. Add torn-paper photo borders, overlapping paper layers, small black bows, delicate butterflies, dried flowers, vintage paper textures and elegant scrapbook decorations.

Create a premium Pinterest-style scrapbook aesthetic with balanced photo arrangements and beautiful decorative details.

Keep all photographs of the same person, with consistent identity, outfit and hairstyle.

No watermark, ultra-realistic details, premium Pinterest-style design.`
  },

  {
    name: "Make Your Friends Birthday in Style (ZAI TREND A05)",
    searchName: "A05",
    category: "AI Edit Prompt",
    sub: "Trending",
    file: "materials/ai-prompts/trending/ZAI-Trend-A05.jpg",
    type: "prompt",
    description: "Royal Purple Birthday Poster",
    text: `Create a premium, ultra-realistic Indian birthday poster using the uploaded photo as the ONLY identity reference.

IMPORTANT: Preserve the person's exact facial identity, facial features, skin tone, hairstyle and natural appearance. Do not change the face or create a different person.

Poster Design & Composition:
- Create a beautiful vertical 9:16 birthday poster.
- Use a large close-up portrait of the person on the upper-left side, wearing stylish dark purple sunglasses.
- Add a second full-body portrait on the right side, wearing an elegant, heavily embroidered royal purple Indian traditional outfit (purple lehenga or saree).
- Keep both portraits of the SAME person with consistent facial identity.
- Add elegant golden earrings and subtle jewellery.
- Use a rich purple and lavender watercolor splash background with white areas and artistic paint splashes.
- Create a premium Photoshop-style photo manipulation with realistic lighting, professional retouching and smooth blending.

Typography:
- Write "Happy" in elegant black handwritten calligraphy.
- Write "Birthday" in large, beautiful purple cursive typography.
- Below it add this birthday message:
"May your special day be as beautiful as your smile and as bright as your spirit. Here's to a year filled with happiness, love, and unforgettable memories."
- Add a small purple heart decoration at the bottom.

Final Quality: Professional birthday poster, photorealistic portraits, premium graphic design, detailed fabric texture, beautiful purple color grading, sharp facial details, 4K quality.

Do not crop important parts of the person. Keep the composition elegant and similar to the reference design.`
  },

  {
    name: "Make Your Friends Birthday in Style (ZAI TREND A06)",
    searchName: "A06",
    category: "AI Edit Prompt",
    sub: "Trending",
    file: "materials/ai-prompts/trending/ZAI-Trend-A06.jpg",
    type: "prompt",
    description: "Black and Gold Birthday Poster",
    text: `Use my uploaded photo as the main identity reference and create a premium, ultra-realistic birthday poster in exactly the same editing style as the reference image.

Main Portrait:
Create a large, beautiful, soft-focus portrait of the same person on the LEFT side. Preserve the original face, facial features, skin tone, hairstyle and identity accurately.

Full Body Portrait:
On the RIGHT side, create a realistic full-body version of the same person wearing a stylish elegant black outfit, black sunglasses and black boots. Give a confident fashion-model pose.

Background & Design:
- Clean ivory-white background.
- Black and golden watercolor splashes.
- Beautiful black floral illustrations with golden outlines.
- Soft golden paint textures around the portrait.
- Small decorative pink flower near the headline.
- Premium artistic birthday poster composition.

Typography:
Add large elegant black serif typography at the top right:
"HAPPY BIRTHDAY"

Below it write:
"Celebrating your unique style & light"

Quality:
Ultra-realistic 4K quality, sharp facial details, realistic skin texture, elegant typography, balanced composition, professional Photoshop editing and premium birthday poster design.

No extra text, no watermark, no logo.`
  },

  // Existing PNG materials
  {
    name: "Chaoten Kitty",
    category: "PNG Material",
    sub: "Trending",
    file: "materials/png/chaotenkitty-neon-7440942_1920.png",
    type: "image"
  },

  {
    name: "Fantasy Artwork",
    category: "PNG Material",
    sub: "Natural",
    file: "materials/png/geralt-art-7036652_1920.jpg",
    type: "image"
  },

  {
    name: "Technology Background",
    category: "PNG Material",
    sub: "Gaming",
    file: "materials/png/tungnguyen0905-technology-6701424_1920.jpg",
    type: "image"
  }
];

let selectedCategory = "";
let selectedSub = "";
let currentItem = null;

const pageIds = [
  "home",
  "categories",
  "subcategories",
  "gallery",
  "detail"
];

function showPage(id) {
  pageIds.forEach(pageId => {
    const page = document.getElementById(pageId);

    if (page) {
      page.classList.toggle("active", pageId === id);
    }
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function makeCategoryCards(targetId) {
  const target = document.getElementById(targetId);

  if (!target) return;

  target.innerHTML = "";

  categories.forEach(category => {
    const card = document.createElement("div");

    card.className = `category-card ${category.cls}`;

    card.innerHTML = `
      <div class="category-icon">${category.icon}</div>
      <h3>${category.name}</h3>
    `;

    card.addEventListener("click", () => {
      openCategory(category.name);
    });

    target.appendChild(card);
  });
}

function openCategory(name) {
  selectedCategory = name;

  const heading = document.getElementById("categoryHeading");

  if (heading) {
    heading.textContent = name;
  }

  showPage("subcategories");
}

function openGallery(sub) {
  selectedSub = sub;

  const heading = document.getElementById("galleryHeading");
  const search = document.getElementById("searchInput");

  if (heading) {
    heading.textContent = `${selectedCategory} / ${sub}`;
  }

  if (search) {
    search.value = "";
  }

  renderGallery();
  showPage("gallery");
}

function renderGallery() {
  const grid = document.getElementById("itemGrid");
  const search = document.getElementById("searchInput");

  if (!grid || !search) return;

  const query = search.value.toLowerCase().trim();

  const results = materials.filter(item => {
    const searchable = [
      item.name || "",
      item.searchName || "",
      item.description || "",
      item.category || "",
      item.sub || ""
    ].join(" ").toLowerCase();

    return (
      item.category === selectedCategory &&
      item.sub === selectedSub &&
      searchable.includes(query)
    );
  });

  grid.innerHTML = "";

  if (results.length === 0) {
    grid.innerHTML = `
      <div class="empty">
        No materials added here yet.
      </div>
    `;
    return;
  }

  results.forEach(item => {
    const card = document.createElement("div");
    card.className = "item";

    const title = document.createElement("h3");
    title.textContent = item.name;
    card.appendChild(title);

    const description = document.createElement("p");
    description.textContent =
      item.description || `${item.category} • ${item.sub}`;

    card.appendChild(description);

    if (item.type === "prompt") {
      const view = document.createElement("button");

      view.className = "action";
      view.type = "button";
      view.textContent = "👁 View Prompt";

      view.addEventListener("click", () => {
        openDetail(item);
      });

      card.appendChild(view);

      const copy = document.createElement("button");

      copy.className = "action";
      copy.type = "button";
      copy.textContent = "📋 Copy Prompt";

      copy.addEventListener("click", () => {
        copyText(item.text);
      });

      card.appendChild(copy);

    } else {
      const download = document.createElement("a");

      download.className = "action";
      download.href = item.file;
      download.download = "";
      download.textContent = "⬇ Download";

      card.appendChild(download);

      const view = document.createElement("button");

      view.className = "action";
      view.type = "button";
      view.textContent = "View Details";

      view.addEventListener("click", () => {
        openDetail(item);
      });

      card.appendChild(view);
    }

    grid.appendChild(card);
  });
}

function openDetail(item) {
  currentItem = item;

  document.getElementById("detailTitle").textContent =
    item.name;

  document.getElementById("detailText").textContent =
    item.text || item.file || item.name;

  showPage("detail");
}

async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);

    } else {
      const textarea = document.createElement("textarea");

      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";

      document.body.appendChild(textarea);
      textarea.select();

      const success = document.execCommand("copy");

      textarea.remove();

      if (!success) {
        throw new Error("Copy failed");
      }
    }

    alert("Copied successfully!");

  } catch (error) {
    alert("Copy failed. Please try again.");
  }
}

function copyCurrent() {
  if (currentItem) {
    copyText(currentItem.text || currentItem.name);
  }
}

async function shareCurrent() {
  if (!currentItem) return;

  const text = `${currentItem.name}\n${currentItem.text || currentItem.file || ""}`;

  try {
    if (navigator.share) {
      await navigator.share({
        title: currentItem.name,
        text: text
      });

    } else {
      await copyText(text);
    }

  } catch (error) {
    // User cancelled sharing.
  }
}

// Build homepage and categories page cards
makeCategoryCards("homeCategories");
makeCategoryCards("allCategories");

// Make inline HTML onclick handlers available
window.showPage = showPage;
window.openCategory = openCategory;
window.openGallery = openGallery;
window.renderGallery = renderGallery;
window.copyCurrent = copyCurrent;
window.shareCurrent = shareCurrent;

// Start on homepage
showPage("home");
