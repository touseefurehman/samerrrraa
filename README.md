# samerrrraa — MZ Collection

Website for **MZ Collection**, a shop for handmade crochet gajras, bags and keychains.

## Structure

```
.
├── index.html          # Home page
├── pages/              # Category pages (gajras, bags, keychains)
└── assets/
    ├── css/style.css   # Shared styles
    ├── js/main.js      # Menu, lightbox, scroll animations, order buttons
    └── images/         # Product photos, grouped by category
```

## Running

It's a static site, so there's nothing to build. Open `index.html` in a browser.

## Orders via WhatsApp

Set `WHATSAPP_NUMBER` at the top of `assets/js/main.js` (country code, digits only).
After that, every "Order Now" button opens WhatsApp with the product name already typed in.
