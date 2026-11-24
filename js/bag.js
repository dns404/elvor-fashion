/* Shared shopping bag — the only copy. Kept in localStorage so the bag drawer on every page and
   the full bag page (cart.html) show the same items. Load it with <script src="js/bag.js"></script>;
   it only needs the page's PRODUCTS and slug() to exist by the time loadBag()/saveBag() are called.

   Items are stored by product slug, not by list position, because index.html keeps its own short
   product list. Items a page doesn't know are kept aside and written back untouched on save. */
const BAG_KEY = 'elvor-bag';
/* first visit: a small demo bag (all three are in index.html's list too) */
const BAG_SEED = [
  { s: 'hand-smocked-romper', q: 1, size: '3–6M' },
  { s: 'rouge-tiered-party-dress', q: 1, size: '4–8Y' },
  { s: 'red-panda-embroidered-sweater', q: 2, size: '2–4Y' },
];
let bagUnknown = [];

/* → [{ i: index in PRODUCTS, q: quantity, size }] */
function loadBag() {
  let raw = null;
  try { raw = JSON.parse(localStorage.getItem(BAG_KEY)); } catch (e) { }
  if (!Array.isArray(raw)) raw = BAG_SEED;
  const known = [];
  bagUnknown = [];
  raw.forEach(c => {
    const i = PRODUCTS.findIndex(p => slug(p.n) === c.s);
    i < 0 ? bagUnknown.push(c) : known.push({ i, q: c.q, size: c.size });
  });
  return known;
}

function saveBag(cart) {
  const out = cart.map(c => ({ s: slug(PRODUCTS[c.i].n), q: c.q, size: c.size })).concat(bagUnknown);
  try { localStorage.setItem(BAG_KEY, JSON.stringify(out)); } catch (e) { }
}

/* quantity of items this page can't show (for the header count) */
const bagUnknownCount = () => bagUnknown.reduce((a, c) => a + (c.q || 0), 0);
