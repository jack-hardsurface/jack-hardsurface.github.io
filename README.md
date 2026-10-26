# Eidos Edge home site

Source of the GitHub user site **`jack-hardsurface.github.io`**: the Eidos Edge home page, linking to the three product pages.

| Page | URL | Repo |
|---|---|---|
| **Home** (this repo) | `https://jack-hardsurface.github.io/` | `jack-hardsurface.github.io` |
| MatricX PRO | `https://jack-hardsurface.github.io/MatricX-Pro-Page/` | `MatricX-Pro-Page`, **unchanged**; Blender Market uses it |
| MatricX Bake | `https://jack-hardsurface.github.io/MatricX-Bake-Page/` | `MatricX-Bake-Page` (1.7.8 page, self-contained) |
| MatricX Bundle | `https://jack-hardsurface.github.io/MatricX-Bundle-Page/` | `MatricX-Bundle-Page` |

GitHub serves a user site and project sites side by side, so this repo never changes the product pages.

## Files

- `index.html`: the home page.
- `assets/site.css`: styles; the same design language as the MatricX PRO page.
- `assets/logo.png`, `assets/pro-card.jpg`: copied from the MatricX PRO site. The Bake and Bundle card images load from their own pages.
- `.nojekyll`: serve files as they are.

## Prices shown

- MatricX PRO and MatricX Bake: $49 launch price, regular $79.
- MatricX Bundle: "From $67.58" launch price, regular $109 (Creator tier, as on the Blender Market listing).

Update these lines in `index.html` when prices change.
