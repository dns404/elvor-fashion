/* Shared catalogue — the only copy. Loaded after js/menu.js on the collection, product and
   landing pages: <script src="js/products.js"></script>. (index.html keeps its own short list.) */

/* ---------- collections ---------- */
const COLLECTIONS = {
  all: {
    name: 'The Collection', eyebrow: 'Every piece', img: 'images/web/hero-festive-staircase.jpg', pos: '48% 30%',
    desc: 'Every Elvor piece in one place — certified organic cotton, fine merino and hand finishing, crafted in India.',
    edit: { img: 'images/web/gift-art-of-gifting.jpg', eyebrow: 'The art of gifting', title: 'The keepsake case', to: 'gifts' }
  },
  newborn: {
    name: 'New Born', eyebrow: '0 – 24 months', img: 'images/web/newborn-toddlers-playing.jpg', pos: 'center 65%',
    desc: 'Heirloom-soft first wardrobes in certified organic cotton and fine merino — hand-smocked, gently finished and made to be passed down.',
    edit: { img: 'images/web/newborn-smocked-romper.jpg', eyebrow: 'From the atelier', title: 'Hand-smocked heirlooms', to: 'gifts' }
  },
  girl: {
    name: 'Girl', eyebrow: '2 – 14 years', img: 'images/web/girl-velvet-portrait.jpg', pos: '52% 12%',
    desc: 'Velvet, voile and hand-block prints — dresses and ethnic sets for every little celebration, and every day in between.',
    edit: { img: '1578897367107-2828e351c8a8', eyebrow: 'Limited capsule', title: 'Elvor Special Edition', to: 'special' }
  },
  boy: {
    name: 'Boy', eyebrow: '2 – 14 years', img: 'images/web/boy-blue-navy.jpg', pos: 'center 20%',
    desc: 'Oxford shirts, merino knits and silk kurta sets — classic tailoring, cut for running, climbing and celebrating.',
    edit: { img: 'images/web/boy-red-panda-sweater.jpg', eyebrow: 'Limited capsule', title: 'Elvor Special Edition', to: 'special' }
  },
  special: {
    name: 'Elvor Special Edition', eyebrow: '2027 collection', img: 'images/web/hero-festive-staircase.jpg', pos: '48% 30%',
    desc: 'Our limited festive capsule — velvet, silk and hand embroidery, made in small numbers by our artisans.',
    edit: { img: 'images/web/boy-red-panda-sweater.jpg', eyebrow: 'Bestseller', title: 'The red panda sweater', to: 'boy' }
  },
  care: {
    name: 'Care', eyebrow: 'Bath & body', img: 'images/web/care-gift-suitcase.jpg', pos: '35% center',
    desc: 'Gentle, plant-based rituals for delicate skin — massage oils, balms and washes made without parabens or sulphates.',
    edit: { img: 'images/web/gift-art-of-gifting.jpg', eyebrow: 'Ready to give', title: 'Care gift sets', to: 'gifts' }
  },
  accessories: {
    name: 'Accessories', eyebrow: 'Knitwear & essentials', img: 'images/web/accessories-beanie-knitwear.jpg', pos: 'center',
    desc: 'Finishing touches — merino bonnets, heirloom blankets, soft toys and the bags that carry it all.',
    edit: { img: 'images/web/gift-suitcase-set.jpg', eyebrow: 'The art of gifting', title: 'The keepsake case', to: 'gifts' }
  },
  gifts: {
    name: 'Gifts', eyebrow: 'The art of gifting', img: 'images/web/gift-art-of-gifting.jpg', pos: 'center 40%',
    desc: 'Thoughtful presents for births, naming ceremonies and birthdays — wrapped by hand in our signature keepsake boxes.',
    edit: { img: 'images/web/newborn-toddlers-playing.jpg', eyebrow: 'For the little ones', title: 'Shop New Born', to: 'newborn' }
  },

  /* looks-only listings (collection.html?c=looks-girl): every card is a look from LOOKS below */
  'looks-girl': {
    name: 'Girl Looks', eyebrow: 'Complete outfits', img: 'images/web/girl-velvet-portrait.jpg', pos: '52% 12%', looks: true,
    desc: 'Head-to-toe outfits put together by our stylists — shop the whole look, or just the pieces you love.',
    edit: { img: 'images/web/hero-festive-staircase.jpg', eyebrow: 'Limited capsule', title: 'Elvor Special Edition', to: 'special' }
  },
  'looks-boy': {
    name: 'Boy Looks', eyebrow: 'Complete outfits', img: 'images/web/boy-blue-navy.jpg', pos: 'center 20%', looks: true,
    desc: 'Head-to-toe outfits put together by our stylists — shop the whole look, or just the pieces you love.',
    edit: { img: 'images/web/boy-red-panda-sweater.jpg', eyebrow: 'Limited capsule', title: 'Elvor Special Edition', to: 'special' }
  },
};

const COLORS = { Ivory: '#f3efe6', Cream: '#efe3c4', Camel: '#c9a77c', Rose: '#e9cfc6', Coral: '#e0705c', Red: '#a8332f', Mustard: '#e9b949', Sage: '#d8e1d6', Green: '#3a9c7c', Sky: '#a9c4de', Navy: '#1d2a44', Black: '#1a1a1a' };
const SIZES = { newborn: ['0–3M', '3–6M', '6–12M', '12–24M'], girl: ['2–4Y', '4–8Y', '8–12Y', '12–14Y'], boy: ['2–4Y', '4–8Y', '8–12Y', '12–14Y'] };
const PRICES = [['0-1499', 'Under ₹1,500'], ['1500-2999', '₹1,500 – ₹2,999'], ['3000-4999', '₹3,000 – ₹4,999'], ['5000-', '₹5,000 & above']];

/* n name · c collection · s sub-category · m material · p price · sw colours · t extra collections · g gift occasion
   (the first 8 match the landing page's New In rail) */
const PRODUCTS = [
  { n: 'Hand-Smocked Romper', c: 'newborn', s: 'Bodysuits & Rompers', m: 'Cotton batiste · 6–24M', p: 2890, img: 'images/web/newborn-smocked-romper.jpg', alt: '1617331140180-e8262094733a', b: 'New', sw: ['Sky', 'Ivory', 'Rose'], t: ['gifts'], g: 'Birth Gifts' },
  { n: 'Polka Dot Smock Blouse', c: 'girl', s: 'Tops & Blouses', m: 'Cotton voile · 2–8Y', p: 2290, img: '1518831959646-742c3a14ebf7', alt: '1503454537195-1dcabb73ffb9', b: 'Bestseller', sw: ['Ivory', 'Navy'] },
  { n: 'Red Panda Embroidered Sweater', c: 'boy', s: 'Knitwear', m: 'Merino wool · 2–10Y', p: 3990, img: 'images/web/boy-red-panda-sweater.jpg', alt: '1519238263530-99bdd11df2ea', b: 'Bestseller', sw: ['Cream', 'Navy'], t: ['special'] },
  { n: 'Rouge Tiered Party Dress', c: 'girl', s: 'Dresses & Frocks', m: 'Silk-cotton · 3–10Y', p: 4290, img: '1578897367107-2828e351c8a8', alt: '1518831959646-742c3a14ebf7', b: 'Festive', red: true, sw: ['Red', 'Rose'], t: ['special'] },
  { n: 'Muslin Swaddle Trio', c: 'newborn', s: 'Muslin Swaddles', m: 'Set of 3 · 120 × 120 cm', p: 2190, img: '1544126592-807ade215a0b', alt: '1555252333-9f8e92e65df9', sw: ['Ivory', 'Sage'], t: ['gifts'], g: 'Birth Gifts' },
  { n: 'Piqué Polo Set', c: 'boy', s: 'T-shirts & Polos', m: 'Organic piqué · 4–12Y', p: 1890, img: '1586363104862-3a5e2ab60d99', alt: '1566454544259-f4b94c3d758c', b: 'New', sw: ['Coral', 'Green', 'Sky'] },
  { n: 'The Keepsake Gift Case', c: 'newborn', s: 'Outfit Sets', m: 'Knitwear, muslins & eau de soin', p: 8990, img: 'images/web/gift-suitcase-set.jpg', alt: '1622290291468-a28f7a7dc6a8', b: 'Gift', sw: ['Cream'], t: ['gifts'], g: 'Luxury Hampers' },
  { n: 'Printed Cotton Frock', c: 'girl', s: 'Dresses & Frocks', m: 'Hand-block print · 1–6Y', p: 1990, img: '1560506840-ec148e82a604', alt: '1503454537195-1dcabb73ffb9', sw: ['Mustard', 'Coral'], t: ['gifts'], g: 'Birthday' },

  /* New Born */
  { n: 'Organic Cotton Sleepsuit', c: 'newborn', s: 'Sleepsuits', m: 'Organic interlock · 0–12M', p: 1490, img: '1555252333-9f8e92e65df9', alt: '1544126592-807ade215a0b', sw: ['Ivory', 'Sky'] },
  { n: 'Embroidered Muslin Jhabla', c: 'newborn', s: 'Jhablas & Kurtas', m: 'Cotton muslin · 0–12M', p: 1290, img: '1617331140180-e8262094733a', alt: 'images/web/newborn-smocked-romper.jpg', b: 'New', sw: ['Ivory', 'Rose'], t: ['gifts'], g: 'Naming Ceremony' },
  { n: 'Cable-Knit Cardigan', c: 'newborn', s: 'Knitwear', m: 'Fine merino · 3–24M', p: 2490, img: '1519238263530-99bdd11df2ea', alt: '1555252333-9f8e92e65df9', sw: ['Ivory', 'Camel'] },
  { n: 'Pointelle Bodysuit Pair', c: 'newborn', s: 'Bodysuits & Rompers', m: 'Organic pointelle · 0–12M', p: 1690, img: '1544126592-807ade215a0b', alt: '1617331140180-e8262094733a', sw: ['Rose', 'Ivory'] },
  { n: 'Merino Bonnet & Booties', c: 'newborn', s: 'Mittens & Booties', m: 'Hand-knitted merino · 0–6M', p: 1890, img: 'images/web/accessories-beanie-knitwear.jpg', alt: '1622290291468-a28f7a7dc6a8', sw: ['Camel', 'Ivory'], t: ['accessories', 'gifts'], g: 'Birth Gifts' },
  { n: 'Cellular Cotton Blanket', c: 'newborn', s: 'Blankets', m: 'Organic cotton · 70 × 90 cm', p: 2390, img: '1555252333-9f8e92e65df9', alt: '1544126592-807ade215a0b', sw: ['Sage', 'Ivory'] },
  { n: 'Smocked Bib Trio', c: 'newborn', s: 'Bibs & Burp Cloths', m: 'Cotton batiste · Set of 3', p: 990, img: 'images/web/newborn-smocked-romper.jpg', alt: '1544126592-807ade215a0b', sw: ['Sky', 'Rose'] },

  /* Girl */
  { n: 'Velvet Lace-Collar Dress', c: 'girl', s: 'Dresses & Frocks', m: 'Cotton velvet · 2–10Y', p: 4590, img: 'images/web/girl-velvet-portrait.jpg', alt: '1578897367107-2828e351c8a8', b: 'Festive', red: true, sw: ['Black', 'Navy'], t: ['special'] },
  { n: 'Gota Patti Lehenga Set', c: 'girl', s: 'Lehengas & Ethnic', m: 'Silk-chanderi · 2–12Y', p: 5490, img: '1578897367107-2828e351c8a8', alt: '1560506840-ec148e82a604', b: 'Festive', red: true, sw: ['Red', 'Mustard'], t: ['special'] },
  { n: 'Chikankari Kurta Set', c: 'girl', s: 'Lehengas & Ethnic', m: 'Hand-embroidered mul · 2–12Y', p: 3290, img: '1503454537195-1dcabb73ffb9', alt: '1518831959646-742c3a14ebf7', sw: ['Ivory', 'Rose'] },
  { n: 'Broderie Anglaise Blouse', c: 'girl', s: 'Tops & Blouses', m: 'Organic cotton · 2–10Y', p: 1890, img: '1518831959646-742c3a14ebf7', alt: '1503454537195-1dcabb73ffb9', sw: ['Ivory'] },
  { n: 'Linen Pleated Skirt', c: 'girl', s: 'Skirts & Shorts', m: 'Washed linen · 2–12Y', p: 1790, img: '1560506840-ec148e82a604', alt: '1578897367107-2828e351c8a8', sw: ['Camel', 'Navy'] },
  { n: 'Floral Co-ord Set', c: 'girl', s: 'Co-ord Sets', m: 'Cotton poplin · 2–8Y', p: 2590, img: '1503454537195-1dcabb73ffb9', alt: '1560506840-ec148e82a604', b: 'New', sw: ['Rose', 'Sage'] },
  { n: 'Smocked Nightdress', c: 'girl', s: 'Nightwear', m: 'Cotton lawn · 2–10Y', p: 1590, img: '1518831959646-742c3a14ebf7', alt: '1560506840-ec148e82a604', sw: ['Sky', 'Ivory'] },

  /* Boy */
  { n: 'Oxford Shirt & Cord Set', c: 'boy', s: 'Shirts', m: 'Oxford cotton & corduroy · 2–10Y', p: 3490, img: 'images/web/boy-blue-navy.jpg', alt: '1566454544259-f4b94c3d758c', b: 'New', sw: ['Sky', 'Navy'] },
  { n: 'Linen Mandarin Shirt', c: 'boy', s: 'Shirts', m: 'Washed linen · 2–12Y', p: 1990, img: '1566454544259-f4b94c3d758c', alt: '1586363104862-3a5e2ab60d99', sw: ['Ivory', 'Sky'] },
  { n: 'Silk Bandhgala Kurta Set', c: 'boy', s: 'Kurta Sets', m: 'Silk blend · 2–12Y', p: 4890, img: '1519238263530-99bdd11df2ea', alt: 'images/web/boy-blue-navy.jpg', b: 'Festive', red: true, sw: ['Ivory', 'Navy'], t: ['special'] },
  { n: 'Cotton Chino Shorts', c: 'boy', s: 'Shorts & Trousers', m: 'Organic twill · 2–12Y', p: 1490, img: '1586363104862-3a5e2ab60d99', alt: '1566454544259-f4b94c3d758c', sw: ['Camel', 'Navy'] },
  { n: 'Corduroy Trousers', c: 'boy', s: 'Shorts & Trousers', m: 'Baby-wale cord · 2–12Y', p: 1990, img: 'images/web/boy-blue-navy.jpg', alt: '1519238263530-99bdd11df2ea', sw: ['Navy', 'Camel'] },
  { n: 'Striped Breton Tee', c: 'boy', s: 'T-shirts & Polos', m: 'Organic jersey · 2–12Y', p: 1190, img: '1566454544259-f4b94c3d758c', alt: '1586363104862-3a5e2ab60d99', sw: ['Navy', 'Ivory'] },
  { n: 'Cable Crew-Neck Sweater', c: 'boy', s: 'Knitwear', m: 'Merino wool · 2–12Y', p: 2790, img: '1519238263530-99bdd11df2ea', alt: 'images/web/boy-red-panda-sweater.jpg', sw: ['Ivory', 'Navy'] },

  /* Care */
  { n: 'Ayurvedic Baby Massage Oil', c: 'care', s: 'Massage Oils', m: 'Cold-pressed sesame & almond · 100 ml', p: 890, img: 'images/web/care-gift-suitcase.jpg', alt: '1533483595632-c5f0e57a1936', b: 'Bestseller', sw: [] },
  { n: 'Calendula Body Lotion', c: 'care', s: 'Lotions & Balms', m: 'Calendula & shea · 200 ml', p: 790, img: '1533483595632-c5f0e57a1936', alt: 'images/web/care-gift-suitcase.jpg', sw: [] },
  { n: 'Gentle Top-to-Toe Wash', c: 'care', s: 'Wash & Shampoo', m: 'Tear-free · 250 ml', p: 690, img: '1533483595632-c5f0e57a1936', alt: 'images/web/care-gift-suitcase.jpg', sw: [] },
  { n: 'Zinc Nappy Balm', c: 'care', s: 'Nappy Care', m: 'Zinc & beeswax · 75 g', p: 590, img: 'images/web/care-gift-suitcase.jpg', alt: '1533483595632-c5f0e57a1936', sw: [] },
  { n: 'Eau de Soin', c: 'care', s: 'Eau de Soin', m: 'Alcohol-free scented water · 100 ml', p: 1890, img: '1533483595632-c5f0e57a1936', alt: 'images/web/care-gift-suitcase.jpg', b: 'New', sw: [] },
  { n: 'The Care Case', c: 'care', s: 'Care Gift Sets', m: 'Oil, lotion, wash, brush & towel', p: 4990, img: 'images/web/care-gift-suitcase.jpg', alt: 'images/web/gift-art-of-gifting.jpg', b: 'Gift', sw: [], t: ['gifts'], g: 'Luxury Hampers' },

  /* Accessories */
  { n: 'Merino Pom Beanie', c: 'accessories', s: 'Hats & Bonnets', m: 'Fine merino · 6M–6Y', p: 1290, img: 'images/web/accessories-beanie-knitwear.jpg', alt: '1622290291468-a28f7a7dc6a8', sw: ['Camel', 'Ivory'] },
  { n: 'Knitted Mittens & Socks', c: 'accessories', s: 'Socks & Tights', m: 'Merino blend · 0–24M', p: 990, img: 'images/web/accessories-beanie-knitwear.jpg', alt: '1622290291468-a28f7a7dc6a8', sw: ['Cream', 'Sage'] },
  { n: 'Heirloom Knit Blanket', c: 'accessories', s: 'Blankets', m: 'Cable-knit merino · 80 × 100 cm', p: 3490, img: '1622290291468-a28f7a7dc6a8', alt: 'images/web/accessories-beanie-knitwear.jpg', sw: ['Ivory', 'Camel'], t: ['gifts'], g: 'Birth Gifts' },
  { n: 'Knitted Bunny', c: 'accessories', s: 'Soft Toys', m: 'Organic cotton knit · 30 cm', p: 1490, img: '1622290291468-a28f7a7dc6a8', alt: 'images/web/care-gift-suitcase.jpg', b: 'New', sw: ['Cream'], t: ['gifts'], g: 'Birthday' },
  { n: 'Quilted Diaper Bag', c: 'accessories', s: 'Diaper Bags', m: 'Quilted cotton & vegan leather', p: 4290, img: 'images/web/gift-suitcase-set.jpg', alt: '1622290291468-a28f7a7dc6a8', sw: ['Navy', 'Camel'] },
  { n: 'Liberty Hair Bow Pair', c: 'accessories', s: 'Hair Accessories', m: 'Printed cotton · One size', p: 590, img: '1622290291468-a28f7a7dc6a8', alt: 'images/web/accessories-beanie-knitwear.jpg', sw: ['Rose', 'Sky'] },

  /* Gift-only */
  { n: 'Festive Diwali Hamper', c: 'gifts', s: 'Diwali Hampers', m: 'Kurta set, diya & sweets box', p: 6490, img: 'images/web/gift-art-of-gifting.jpg', alt: 'images/web/gift-suitcase-set.jpg', b: 'Festive', red: true, sw: [], g: 'Diwali Hampers' },
];

const inr = n => '₹' + n.toLocaleString('en-IN');
const slug = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const PDP = p => 'product.html?p=' + slug(p.n);

/* age bands a product covers, read from its "2–8Y" / "0–12M" range */
function sizesOf(p) {
  const bands = SIZES[p.c]; if (!bands) return [];
  const r = p.m.match(/(\d+)–(\d+)[MY]/); if (!r) return bands;
  const lo = +r[1], hi = +r[2];
  return bands.filter(b => { const [a, z] = b.match(/\d+/g).map(Number); return a < hi && z > lo; });
}

/* ---------- looks ----------
   A look is a styled outfit made of existing products; it has no price or stock of its own.
   n      name (its URL is product.html?look=<slug of n>)
   c / t  collections it appears in, the same as products (e.g. 'looks-girl' plus 'girl')
   at     optional: in a normal listing (not a looks-only one), the look's position in the grid,
          counting from 0. Without it the look only shows in looks-only listings.
   img    the outfit photo · alt: optional second photo shown on hover
   b      optional badge
   items  the products in the look, as product slugs (the same keys as product.html?p=…) */
const LOOKS = [
  {
    n: 'The Velvet Celebration', c: 'looks-girl', t: ['girl', 'special'], at: 2, b: 'Festive', red: true,
    img: 'images/web/girl-velvet-portrait.jpg', alt: 'images/web/hero-festive-staircase.jpg',
    items: ['velvet-lace-collar-dress', 'liberty-hair-bow-pair', 'knitted-bunny']
  },
  {
    n: 'Summer Garden Party', c: 'looks-girl', t: ['girl'], at: 7,
    img: '1503454537195-1dcabb73ffb9', alt: '1518831959646-742c3a14ebf7',
    items: ['broderie-anglaise-blouse', 'linen-pleated-skirt', 'merino-pom-beanie']
  },
  {
    n: 'Rouge Party Look', c: 'looks-girl',
    img: '1578897367107-2828e351c8a8', alt: '1560506840-ec148e82a604',
    items: ['rouge-tiered-party-dress', 'liberty-hair-bow-pair', 'knitted-mittens-socks']
  },
  {
    n: 'The Little Gentleman', c: 'looks-boy', t: ['boy'], at: 2,
    img: 'images/web/boy-blue-navy.jpg', alt: '1566454544259-f4b94c3d758c',
    items: ['oxford-shirt-cord-set', 'cable-crew-neck-sweater', 'merino-pom-beanie']
  },
  {
    n: 'Red Panda Weekend', c: 'looks-boy', t: ['boy', 'special'], at: 7, b: 'Bestseller',
    img: 'images/web/boy-red-panda-sweater.jpg', alt: '1519238263530-99bdd11df2ea',
    items: ['red-panda-embroidered-sweater', 'corduroy-trousers', 'knitted-mittens-socks']
  },
];

const LOOK_URL = L => 'product.html?look=' + slug(L.n);
/* the look's products, in order (unknown slugs are skipped) */
const lookPieces = L => L.items.map(s => PRODUCTS.find(p => slug(p.n) === s)).filter(Boolean);
const lookPrice = L => lookPieces(L).reduce((a, p) => a + p.p, 0);
/* does a product or look belong to collection `key`? */
const inCollection = (x, key) => x.c === key || (x.t || []).includes(key);
