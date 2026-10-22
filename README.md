# Moments — editorial site

The revised site deliberately follows the HTML/CSS reference you supplied: white background, Newsreader serif typography, plain black copy and links, sparse navigation, and deliberately off-grid image placement. No numbered sections, cards, button styling, or arrow embellishments. The supplied red wordmark is the only coloured text/graphic element.

## Add your ImageKit photos

Open **`images.js`**. Replace the URLs beside the named photo positions with your own complete ImageKit URLs, for example:

```js
heroTable: "https://ik.imagekit.io/YOUR_ACCOUNT/dinner-table.jpg",
```

There are 16 unique image keys. Some keys appear in more than one place (for example the guests photograph in the hero and beliefs), which is intentional. If you prefer a different photograph there, add a new key to `images.js` and update the corresponding `data-photo` in `index.html`.

Sample Unsplash URLs are **visual placeholders only** and are not photographs of your dinners. If the external URLs are blocked, the photo regions remain visible with small labels so you can see exactly where to add photography. Replace the sample pictures before publishing.

## Publish

Upload `index.html`, `styles.css`, `script.js`, `images.js` and the `assets/` folder to a static hosting provider such as Netlify, Cloudflare Pages, Vercel or GitHub Pages. The site has no build step or external JavaScript dependencies.

## Contacts and next supper club

- Booking and contact links compose emails to `Solal.haimovici@gmail.com`.
- `Join the list` also composes an email. It is **not** yet a connected newsletter signup. A mailing-list service can be connected later.
- The Kind words section leaves room for real guest quotes; none have been fabricated.
- Instagram URLs point to `@mmmoments.fr` and `@solalhaimovici`.

## Mobile behaviour

Unlike the reference's original fixed-height mobile sections, these sections expand to fit all copy. Pictures remain asymmetrical and bleed toward the edges without obscuring paragraphs or calls to action.
