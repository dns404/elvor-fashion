/* Shared header menu — the only copy. Loaded on every page (before the page's own script)
   with <script src="js/menu.js"></script>. It defines IMG, MENU and menuLink as globals and
   builds the desktop mega menu (#nav) and the mobile menu (#mnav).

   Landing pages: a menu item with a `landing` object gets its own landing page
   (landing.html?c=<k>) that lists its sub-collections as image tiles, the way Bonpoint's
   "Cadeaux" does. Items without it go straight to the product listing (collection.html?c=<k>).
     landing: {
       eyebrow: 'Small line above the title',            (optional)
       desc:    'Intro text under the title',             (optional)
       groups:  ['Column heading', ...]                   (optional: which menu columns to show as
                                                           tile sections; default is every column)
       tiles:   { 'Sub-collection name': 'image path' }   (optional, falls back to the item's img)
     }
   To give another item a landing page, add a `landing` object to it. Nothing else changes. */

const IMG = (id, w = 800) => id.includes("/") ? id : `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

const MENU = [
  {
    k: 'newborn', name: 'New Born', img: 'images/web/newborn-smocked-romper.jpg', feat: 'Hand-smocked heirlooms', cols: [
      ['Clothing', ['Bodysuits & Rompers', 'Sleepsuits', 'Jhablas & Kurtas', 'Knitwear', 'Outfit Sets']],
      ['Essentials', ['Muslin Swaddles', 'Blankets', 'Bibs & Burp Cloths', 'Mittens & Booties']],
      ['By age', ['0 – 3 months', '3 – 6 months', '6 – 12 months', '12 – 24 months']]]
  },
  {
    k: 'girl', name: 'Girl', img: '1578897367107-2828e351c8a8', feat: 'Festive dresses', cols: [
      ['Clothing', ['Dresses & Frocks', 'Lehengas & Ethnic', 'Tops & Blouses', 'Skirts & Shorts', 'Co-ord Sets', 'Nightwear']],
      ['Collections', ['The Festive Edit', 'Girl Looks', 'Summer Muslins', 'Party Wear', 'Everyday Essentials']],
      ['By age', ['2 – 4 years', '4 – 8 years', '8 – 12 years', '12 – 14 years']]]
  },
  {
    k: 'boy', name: 'Boy', img: 'images/web/boy-red-panda-sweater.jpg', feat: 'The red panda sweater', cols: [
      ['Clothing', ['Shirts', 'T-shirts & Polos', 'Kurta Sets', 'Shorts & Trousers', 'Knitwear', 'Nightwear']],
      ['Collections', ['The Festive Edit', 'Boy Looks', 'Summer Linens', 'Occasion Wear', 'Everyday Essentials']],
      ['By age', ['2 – 4 years', '4 – 8 years', '8 – 12 years', '12 – 14 years']]]
  },
  {
    k: 'care', name: 'Care', img: '1533483595632-c5f0e57a1936', feat: 'Gentle rituals', cols: [
      ['Bath & Body', ['Massage Oils', 'Lotions & Balms', 'Wash & Shampoo', 'Nappy Care']],
      ['Fragrance', ['Eau de Soin', 'Scented Mist', 'Home Fragrance']],
      ['Sets', ['Care Gift Sets', 'Travel Minis', 'New Mother Kit']]]
  },
  {
    k: 'accessories', name: 'Accessories', img: '1622290291468-a28f7a7dc6a8', feat: 'Finishing touches', cols: [
      ['Wear', ['Hats & Bonnets', 'Hair Accessories', 'Socks & Tights', 'Footwear']],
      ['Carry', ['Diaper Bags', 'Backpacks', 'Pouches']],
      ['Play & Sleep', ['Soft Toys', 'Blankets', 'Keepsakes']]]
  },
  {
    k: 'gifts', name: 'Gifts', gift: true, img: 'images/web/gift-suitcase-set.jpg', feat: 'The keepsake case',
    landing: {
      eyebrow: 'The art of gifting',
      desc: 'Thoughtful presents for births, naming ceremonies and birthdays — wrapped by hand in our signature keepsake boxes.',
      groups: ['Occasions'],
      tiles: {
        'Birth Gifts': 'images/web/newborn-smocked-romper.jpg',
        'Naming Ceremony': 'images/web/newborn-toddlers-playing.jpg',
        'Birthday': 'images/web/girl-velvet-portrait.jpg',
        'Diwali Hampers': 'images/web/hero-festive-staircase.jpg'
      }
    },
    cols: [
      ['Occasions', ['Birth Gifts', 'Naming Ceremony', 'Birthday', 'Diwali Hampers']],
      ['By price', ['Under ₹1,999', '₹2,000 – ₹3,999', '₹4,000 – ₹5,999', 'Luxury Hampers']],
      ['Services', ['E-Gift Cards', 'Gift Wrapping', 'Personalisation']]]
  },
];

/* menu item → URL. Top level: the landing page if the item has one, otherwise the listing.
   Sub-items (sub-category, age band, price band or edit) always go to the filtered listing. */
/* menu items that open a whole listing of their own instead of a filter */
const MENU_COLLECTION = { 'The Festive Edit': 'special', 'Girl Looks': 'looks-girl', 'Boy Looks': 'looks-boy' };
const MENU_PRICE = { 'Under ₹1,999': '0-1999', '₹2,000 – ₹3,999': '2000-3999', '₹4,000 – ₹5,999': '4000-5999', 'Luxury Hampers': '6000-' };
const menuItem = k => MENU.find(m => m.k === k);
function menuLink(k, item, group) {
  if (!item) { const m = menuItem(k); return m && m.landing ? 'landing.html?c=' + k : 'collection.html?c=' + k; }
  const u = new URLSearchParams({ c: k });
  if (MENU_COLLECTION[item]) return 'collection.html?c=' + MENU_COLLECTION[item];
  if (group === 'By age') u.set('size', item.replace(' – ', '–').replace(' years', 'Y').replace(' months', 'M'));
  else if (group === 'By price') u.set('price', MENU_PRICE[item] || '');
  else u.set('sub', item);
  return 'collection.html?' + u;
}

/* ---------- header nav + mega menu ---------- */
(() => {
  const nav = document.getElementById('nav'), mnav = document.getElementById('mnav');
  if (!nav || !mnav) return;
  MENU.forEach(m => {
    const cols = m.cols.map(([h, items]) => `<div><h4>${h}</h4><ul>${items.map(i => `<li><a href="${menuLink(m.k, i, h)}">${i}</a></li>`).join('')}</ul></div>`).join('');
    nav.insertAdjacentHTML('beforeend', `<li><a href="${menuLink(m.k)}" class="nav-link${m.gift ? ' gift' : ''}">${m.name}</a>
    <div class="mega"><div class="mega-inner">${cols}<a href="${menuLink(m.k)}" class="mega-feature"><img loading="lazy" src="${IMG(m.img, 700)}" alt=""><span>${m.feat}</span></a></div></div></li>`);
    const sub = m.cols.map(([h, items]) => `<h5>${h}</h5><ul>${items.map(i => `<li><a href="${menuLink(m.k, i, h)}">${i}</a></li>`).join('')}</ul>`).join('');
    mnav.insertAdjacentHTML('beforeend', `<li><button class="${m.gift ? 'gift' : ''}" aria-expanded="false">${m.name}<svg><use href="#i-right"/></svg></button>
    <div class="m-sub"><div>${sub}<a href="${menuLink(m.k)}" class="m-all">${m.landing ? 'Explore' : 'Shop all'} ${m.name}</a></div></div></li>`);
  });
  mnav.addEventListener('click', e => {
    const b = e.target.closest('li > button'); if (!b) return;
    const li = b.parentElement, open = !li.classList.contains('open');
    mnav.querySelectorAll(':scope > li.open').forEach(x => { x.classList.remove('open'); x.firstElementChild.setAttribute('aria-expanded', 'false'); });
    if (open) { li.classList.add('open'); b.setAttribute('aria-expanded', 'true'); }
  });
})();
