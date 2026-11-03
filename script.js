
const categories = [
  { name: 'AI Edit Prompt', icon: '✨', cls: 'cat1' },
  { name: 'AI Template', icon: '🎨', cls: 'cat2' },
  { name: 'PNG Material', icon: '🖼️', cls: 'cat3' },
  { name: 'VFX Material', icon: '⚡', cls: 'cat4' }
];

function makeCategoryCards(target) {
  const container = document.getElementById(target);
  if (!container) return;

  container.innerHTML = categories.map((category, index) => `
    <div class="category-card ${category.cls}" onclick="openCategory(${index})">
      <div class="category-icon">${category.icon}</div>
      <h3>${category.name}</h3>
    </div>
  `).join('');
}

const materials = [
  {
    name: 'Chaoten Kitty',
    category: 'PNG Material',
    sub: 'Trending',
    file: 'materials/png/chaotenkitty-neon-7440942_1920.png',
    type: 'image'
  },
  {
    name: 'Fantasy Artwork',
    category: 'PNG Material',
    sub: 'Natural',
    file: 'materials/png/geralt-art-7036652_1920.jpg',
    type: 'image'
  },
  {
    name: 'Technology Background',
    category: 'PNG Material',
    sub: 'Gaming',
    file: 'materials/png/tungnguyen0905-technology-6701424_1920.jpg',
    type: 'image'
  }
];

let selectedCategory = '';
let selectedSub = '';
let currentItem = null;

const pages = [
  'home',
  'categories',
  'subcategories',
  'gallery',
  'detail'
];

function showPage(id) {
  pages.forEach(page => {
    const element = document.getElementById(page);
    if (element) element.classList.remove('active');
  });

  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function openCategory(index) {
  if (!categories[index]) return;

  selectedCategory = categories[index].name;

  document.getElementById('categoryHeading').textContent =
    selectedCategory;

  showPage('subcategories');
}

function openGallery(sub) {
  selectedSub = sub;

  document.getElementById('galleryHeading').textContent =
    selectedCategory + ' / ' + sub;

  document.getElementById('searchInput').value = '';

  renderGallery();
  showPage('gallery');
}

function renderGallery() {
  const searchInput = document.getElementById('searchInput');
  const grid = document.getElementById('itemGrid');

  if (!searchInput || !grid) return;

  const query = searchInput.value.toLowerCase();

  const list = materials.filter(item =>
    item.category === selectedCategory &&
    item.sub === selectedSub &&
    item.name.toLowerCase().includes(query)
  );

  grid.innerHTML = '';

  if (list.length === 0) {
    grid.innerHTML =
      '<div class="empty">No materials added here yet.</div>';
    return;
  }

  list.forEach(item => {
    const card = document.createElement('div');
    card.className = 'item';

    const title = document.createElement('h3');
    title.textContent = item.name;

    const description = document.createElement('p');
    description.textContent = item.category + ' • ' + item.sub;

    card.append(title, description);

    if (item.type === 'prompt') {
      const view = document.createElement('button');
      view.className = 'action';
      view.textContent = 'View Prompt';
      view.onclick = () => openDetail(item);
      card.appendChild(view);
    } else {
      const link = document.createElement('a');
      link.className = 'action';
      link.href = item.file;
      link.download = '';
      link.textContent = 'Download';
      card.appendChild(link);

      if (item.type === 'image') {
        const view = document.createElement('button');
        view.className = 'action';
        view.textContent = 'View Details';
        view.onclick = () => openDetail(item);
        card.appendChild(view);
      }
    }

    grid.appendChild(card);
  });
}

function openDetail(item) {
  currentItem = item;

  document.getElementById('detailTitle').textContent = item.name;
  document.getElementById('detailText').textContent =
    item.text || item.file || item.name;

  showPage('detail');
}

function copyCurrent() {
  if (!currentItem) return;

  copyText(currentItem.text || currentItem.name);
}

async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const input = document.createElement('textarea');
      input.value = text;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      input.remove();
    }

    alert('Copied successfully!');
  } catch (error) {
    alert('Copy failed. Please try again.');
  }
}

async function shareCurrent() {
  if (!currentItem) return;

  const text =
    currentItem.name + '\n' +
    (currentItem.text || currentItem.file || '');

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
    // Sharing cancelled by user.
  }
}

// Create category cards when the page is ready.
function initializeWebsite() {
  makeCategoryCards('homeCategories');
  makeCategoryCards('allCategories');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeWebsite);
} else {
  initializeWebsite();
}

// Make functions available to HTML onclick attributes.
window.showPage = showPage;
window.openCategory = openCategory;
window.openGallery = openGallery;
window.renderGallery = renderGallery;
window.openDetail = openDetail;
window.copyCurrent = copyCurrent;
window.shareCurrent = shareCurrent;
