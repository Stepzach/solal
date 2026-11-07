# Moments — editorial site

A static site for Solal Haimovici's private dinners and supper clubs. The white background, Newsreader typography, red wordmark and asymmetrical photography are intentional. There is no build step or external JavaScript dependency.

## Preview and publish

Run `python3 -m http.server 4173` in this directory and open `http://localhost:4173`.

Upload `index.html`, `styles.css`, `script.js` and `assets/` to a static host. The page loads `script.js` for navigation; keep that file alongside the HTML.

## Photography and content

Photo URLs and alternative text are in `index.html`. Edit the corresponding `<img>` there to change a photograph. `images.js` is a legacy configuration file and is not loaded by the page.

The next supper club currently says its location and date will be announced. Confirm those details with Solal before announcing bookings. Gallery captions use general wording where event names have not been supplied.

Booking, contact and “Join the list” links open an email to `Solal.haimovici@gmail.com`; the list is not a connected newsletter signup. Instagram links point to `@mmmoments.fr` and `@solalhaimovici`.

## Responsive navigation

- Desktop keeps the original full-screen spreads and scroll snapping.
- At 960px and below, sections have a minimum height of 760px so short phones can scroll through the same composition without shrinking copy or hiding extra photographs. The conflicting tiny-screen overrides have been removed.
- The mobile menu fades and slides in and out, with gently staggered links. Reduced-motion preferences disable transitions and smooth scrolling.
- The visible section's link is bold in both menus and has `aria-current="location"`. “How it works” belongs to Experiences; the home spread has no selected section link.
- Escape closes the menu and restores focus. Tab stays within an open menu, background content is inert, and choosing a section moves focus to that section without adding a URL fragment.

## Review checks

Check portrait phones (320 × 568, 375 × 667, 390 × 844), landscape (844 × 390), tablet (768 × 1024), the 960/961px breakpoint, and desktop (1440 × 900). Verify section highlighting while scrolling in both directions, repeated menu toggles, Escape/Tab, resizing an open menu, and all section links. Run `node --check script.js` and `git diff --check` before committing.
