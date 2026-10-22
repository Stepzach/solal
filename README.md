# Moments — website

A responsive, single-page website for Solal / Moments, modelled closely on the supplied editorial reference: white canvas, elegant serif typography, subtle sans-serif navigation, deep red logo and asymmetrical photo arrangements.

## Preview

Open `index.html` in a browser, or upload this whole folder to Netlify, Vercel, GitHub Pages or your web host. No build step or framework is needed. Google Fonts and example photos require an internet connection.

## Put your own ImageKit photos in

Open **`images.js`**. It contains **16 named image slots**, each with a temporary Unsplash URL:

```js
heroTable: "https://images.unsplash.com/...",
```

Replace the URL with your ImageKit image address:

```js
heroTable: "https://ik.imagekit.io/YOUR_IMAGEKIT_ID/your-dinner.jpg",
```

Do the same for the other slots. You do not need to edit HTML or CSS. If you set a URL to an empty string (`""`), the website displays a tasteful labelled placeholder instead. Actual image labels and sizes auto-adjust responsively. Sample photos are illustrative and are **not from real Moments events**; please replace these before launch.

## Content and links

- `index.html` contains all site text and section links.
- `styles.css` contains the design, desktop/tablet/mobile layouts and colour theme.
- `script.js` handles responsive navigation, image loading and active navigation states.
- `assets/moments-logo.png` is a carefully cropped, transparent version of your exact uploaded red wordmark.
- `assets/favicon.svg` is the site's small red “m” icon.
- “Book a dinner”, “Get in touch” and the service enquiry links **open pre-addressed emails** to `Solal.haimovici@gmail.com`.
- “Join the list” also opens a pre-addressed email (there is **no mailing-list backend** yet). When you have a signup provider, replace that `mailto:` link with the provider's form URL.
- Instagram links lead to `@mmmoments.fr` and `@solalhaimovici`.
- “Kind words” uses genuine first-person narrative **instead of fabricated guest testimonials**. Insert real permissioned quotes when you have them.
- Gallery captions other than the first are intentionally generic until you supply the matching photos. Update captions to reflect your real images.
- The “this winter” supper-club message should be updated if the date changes.

## Design / content safeguards

The original reference had `100vh` sections, `overflow: hidden`, and mandatory scroll-snap, all of which can cause text to be cut off. This recreation preserves the overall style but uses content-sized sections with accessible natural scrolling. On mobile, every text block, service, gallery photo and contact link stays visible. The menu can be closed by its button, an item click, clicking outside, or Escape.

## Deploy

Upload the contents of this folder, preserving paths. If deploying to a static host, set `index.html` as the landing page. The website works without third-party JavaScript services.

The original uploaded wordmark is also preserved unmodified as `assets/moments-logo-original.png`; the website uses a web-friendly transparent crop of that artwork.
