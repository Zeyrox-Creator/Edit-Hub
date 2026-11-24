const categories = [
  { name: 'AI Edit Prompt', icon: '✨', cls: 'cat1' },
  { name: 'AI Template', icon: '🎨', cls: 'cat2' },
  { name: 'PNG Material', icon: '🖼️', cls: 'cat3' },
  { name: 'VFX Material', icon: '⚡', cls: 'cat4' }
];

function makeCategoryCards(target) {
  document.getElementById(target).innerHTML = categories.map((c, i) => `
    <div class="category-card ${c.cls}" onclick="openCategory(${i})">
      <div class="category-icon">${c.icon}</div>
      <h3>${c.name}</h3>
    </div>
  `).join('');
}

makeCategoryCards('homeCategories');
makeCategoryCards('allCategories');

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

/*
ADD YOUR OWN CONTENT HERE.

Prompt example:
{
  name: 'My Prompt',
  category: 'AI Edit Prompt',
  sub: 'Trending',
  text: 'Write your complete prompt here.',
  type: 'prompt'
}

Template example:
{
  name: 'My Template',
  category: 'AI Template',
  sub: 'Trending',
  file: 'materials/templates/my-template.jpg',
  type: 'image'
}

VFX example:
{
  name: 'My VFX',
  category: 'VFX Material',
  sub: 'Gaming',
  file: 'materials/vfx/my-vfx.mp4',
  type: 'file'
}
*/

let selectedCategory = '';
let selectedSub = '';
let currentItem = null;
let previousPage = 'gallery';

const pages = [
  'home',
  'categories',
  'subcategories',
  'gallery',
  'detail'
];

function showPage(id) {
  pages.forEach(p => {
    document.getElementById(p).classList.remove('active');
  });

  document.getElementById(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openCategory(index) {
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
  const query = document.getElementById('searchInput').value.toLowerCase();
  const grid = document.getElementById('itemGrid');

  const list = materials.filter(x =>
    x.category === selectedCategory &&
    x.sub === selectedSub &&
    x.name.toLowerCase().includes(query)
  );

  grid.innerHTML = '';

  if (!list.length) {
    grid.innerHTML =
      '<div class="empty">No materials added here yet.</div>';
    return;
  }

  list.forEach(item => {
    const card = document.createElement('div');
    card.className = 'item';

    const title = document.createElement('h3');
    title.textContent = item.name;

    const desc = document.createElement('p');
    desc.textContent = item.category + ' • ' + item.sub;

    card.append(title, desc);

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
  previousPage = 'gallery';

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
  } catch (e) {
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
  } catch (e) {}
}
