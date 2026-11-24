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
  },
  {
    name: 'Smoke Effect 01',
    category: 'PNG Material',
    sub: 'Trending',
    file: 'materials/png/image_search_1795503162928.jpg',
    type: 'image'
  },
  {
    name: 'Smoke Effect 02',
    category: 'PNG Material',
    sub: 'Trending',
    file: 'materials/png/image_search_1795503171981.png',
    type: 'image'
  },
  {
    name: 'Smoke Effect 03',
    category: 'PNG Material',
    sub: 'Trending',
    file: 'materials/png/image_search_1795503174866.jpg',
    type: 'image'
  },
  {
    name: 'Smoke Effect 04',
    category: 'PNG Material',
    sub: 'Trending',
    file: 'materials/png/image_search_1795503177342.png',
    type: 'image'
  },
  {
    name: 'Smoke Effect 05',
    category: 'PNG Material',
    sub: 'Trending',
    file: 'materials/png/image_search_1795503182122.png',
    type: 'image'
  },
  {
    name: 'Smoke Effect 06',
    category: 'PNG Material',
    sub: 'Trending',
    file: 'materials/png/image_search_1795503187724.jpg',
    type: 'image'
  },
  {
    name: 'Smoke Effect 07',
    category: 'PNG Material',
    sub: 'Trending',
    file: 'materials/png/image_search_1795503195595.jpg',
    type: 'image'
  },
  {
    name: 'Smoke Effect 08',
    category: 'PNG Material',
    sub: 'Trending',
    file: 'materials/png/image_search_1795503198235.png',
    type: 'image'
  },
  {
    name: 'Smoke Effect 09',
    category: 'PNG Material',
    sub: 'Trending',
    file: 'materials/png/image_search_1795503203220.jpg',
    type: 'image'
  },
  {
    name: 'Smoke Effect 10',
    category: 'PNG Material',
    sub: 'Trending',
    file: 'materials/png/image_search_1795503206185.jpg',
    type: 'image'
  },
  {
    name: 'Smoke Effect 11',
    category: 'PNG Material',
    sub: 'Trending',
    file: 'materials/png/image_search_1795503208487.jpg',
    type: 'image'
  },
  {
    name: 'Smoke Effect 12',
    category: 'PNG Material',
    sub: 'Trending',
    file: 'materials/png/image_search_1795503210713.jpg',
    type: 'image'
  },
  {
    name: 'Smoke Effect 13',
    category: 'PNG Material',
    sub: 'Trending',
    file: 'materials/png/image_search_1795503219465.png',
    type: 'image'
  },
  {
    name: 'Smoke Effect 14',
    category: 'PNG Material',
    sub: 'Trending',
    file: 'materials/png/image_search_1795503225480.jpg',
    type: 'image'
  },
  {
    name: 'Smoke Effect 15',
    category: 'PNG Material',
    sub: 'Trending',
    file: 'materials/png/image_search_1795503229780.webp',
    type: 'image'
  },
  {
    name: 'Smoke Effect 16',
    category: 'PNG Material',
    sub: 'Trending',
    file: 'materials/png/image_search_1795503235944.jpg',
    type: 'image'
  },
  {
    name: 'Smoke Effect 17',
    category: 'PNG Material',
    sub: 'Trending',
    file: 'materials/png/image_search_1795503241827.jpg',
    type: 'image'
  },
  {
    name: 'Smoke Effect 18',
    category: 'PNG Material',
    sub: 'Trending',
    file: 'materials/png/image_search_1795503246816.png',
    type: 'image'
  },
  {
    name: 'Smoke Effect 19',
    category: 'PNG Material',
    sub: 'Trending',
    file: 'materials/png/image_search_1795503266438.jpg',
    type: 'image'
  },
  {
    name: 'Smoke Effect 20',
    category: 'PNG Material',
    sub: 'Trending',
    file: 'materials/png/image_search_1795503279213.png',
    type: 'image'
  },
  {
    name: 'Smoke Effect 21',
    category: 'PNG Material',
    sub: 'Trending',
    file: 'materials/png/image_search_1795503282712.jpg',
    type: 'image'
  },
  {
    name: 'Smoke Effect 22',
    category: 'PNG Material',
    sub: 'Trending',
    file: 'materials/png/image_search_1795503288980.jpg',
    type: 'image'
  },
  {
    name: 'Smoke Effect 23',
    category: 'PNG Material',
    sub: 'Trending',
    file: 'materials/png/image_search_1795503291121.png',
    type: 'image'
  },
  {
    name: 'Smoke Effect 24',
    category: 'PNG Material',
    sub: 'Trending',
    file: 'materials/png/image_search_1795503293985.jpg',
    type: 'image'
  },
  {
    name: 'Smoke Effect 25',
    category: 'PNG Material',
    sub: 'Trending',
    file: 'materials/png/image_search_1795503305142.png',
    type: 'image'
  },
  {
    name: 'Smoke Effect 26',
    category: 'PNG Material',
    sub: 'Trending',
    file: 'materials/png/image_search_1795503307419.png',
    type: 'image'
  },
  {
    name: 'Smoke Effect 27',
    category: 'PNG Material',
    sub: 'Trending',
    file: 'materials/png/image_search_1795503311943.jpg',
    type: 'image'
  },
  {
    name: 'Smoke Effect 28',
    category: 'PNG Material',
    sub: 'Trending',
    file: 'materials/png/image_search_1795503374852.jpg',
    type: 'image'
  },
  {
    name: 'Smoke Effect 29',
    category: 'PNG Material',
    sub: 'Trending',
    file: 'materials/png/image_search_1795503380800.jpg',
    type: 'image'
  },
  {
    name: 'Smoke Effect 30',
    category: 'PNG Material',
    sub: 'Trending',
    file: 'materials/png/image_search_1795503383527.jpg',
    type: 'image'
  },
  {
    name: 'Smoke Effect 31',
    category: 'PNG Material',
    sub: 'Trending',
    file: 'materials/png/image_search_1795503385996.png',
    type: 'image'
  },
  {
    name: 'Smoke Effect 32',
    category: 'PNG Material',
    sub: 'Trending',
    file: 'materials/png/image_search_1795503400799.jpg',
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
