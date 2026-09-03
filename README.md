# House of God Fire and Glory Ministry — Website

The official one-page website for House of God Fire and Glory Ministry (HGFGM), built with plain HTML, CSS, and JavaScript — no frameworks, no build step.

**Live site:** _add your live URL here once deployed_

## Features

- Single-page layout with anchor navigation (Home, About, Sermons, Events, Leadership, Books, Photos, Contact)
- Embedded YouTube sermon player and sermon archive list
- Event cards with date/time, pastor, and location
- Leadership section featuring the Lead Pastor and First Lady
- Book carousel showcasing books by the Lead Pastor
- Photo gallery with click-to-enlarge lightbox
- Contact form and embedded Google Map
- Fully responsive (mobile nav menu, adaptive grids)

## Tech stack

- HTML5
- CSS3 (custom properties / CSS variables, no framework)
- Vanilla JavaScript (no dependencies)
- Google Fonts (Fraunces, Work Sans)

## File structure

```
├── index.html      # All page sections (single-page site)
├── style.css       # All styling, including responsive rules
├── script.js       # Mobile nav toggle, book slider, photo lightbox, contact form handling
└── images/         # Logo, photos, book covers, and generated placeholder art
```

## Running locally

No build tools or installation required. Either:

1. Open `index.html` directly in a browser, or
2. Serve it locally for a closer-to-production experience (recommended, since some browsers restrict local file access for things like the map/video embeds):

   ```bash
   # Python 3
   python -m http.server 5500

   # or with the VS Code "Live Server" extension
   ```

   Then visit `http://localhost:5500`.

## Deploying with GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, select the `main` branch and `/ (root)` folder.
4. Save — GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/`.

## Customizing content

- **Sermon video:** update the `src` in the `<iframe>` inside the `#sermons` section with your own YouTube embed link (YouTube → Share → Embed).
- **Events, service times, address:** edit directly in `index.html`.
- **Leadership photos/bios:** replace the images in `images/` and update the text in the `#leadership` section.
- **Books:** add/remove `.book-card` blocks inside the `#books` section and swap in cover images.
- **Photos:** add/remove `<img>` tags inside the `#photos` gallery grid.
- **Map:** replace the Google Maps `<iframe>` `src` in the `#contact` section (Google Maps → Share → Embed a map).

## Notes

- Filenames are case-sensitive on most web hosts (including GitHub Pages) even though they aren't on Windows. Keep image filenames in `index.html` matching the actual file casing exactly to avoid broken images after deployment.
- All colors and fonts are defined as CSS variables at the top of `style.css`, so the palette can be adjusted from one place.

## Licensing

- **Site Code:** Licensed under the [MIT License](LICENSE-CODE).
- **Site Content & Articles:** Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
