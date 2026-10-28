# Eidos Edge home site

Source of the GitHub user site (repo `jack-hardsurface.github.io`), served at the custom domain **`eidosedgestudio.com`**: the Eidos Edge home page, linking to the three product pages.

| Page | URL | Repo |
|---|---|---|
| **Home** (this repo) | `https://eidosedgestudio.com/` | `jack-hardsurface.github.io` |
| MatricX PRO | `https://eidosedgestudio.com/MatricX-Pro-Page/` | `MatricX-Pro-Page`, **unchanged**; Blender Market uses it |
| MatricX Bake | `https://eidosedgestudio.com/MatricX-Bake-Page/` | `MatricX-Bake-Page` (1.7.8 page, self-contained) |
| MatricX Bundle | `https://eidosedgestudio.com/MatricX-Bundle-Page/` | `MatricX-Bundle-Page` |

GitHub serves a user site and project sites side by side, so this repo never changes the product pages. The custom domain is set by the `CNAME` file in this repo; the project pages inherit it (they must not have their own `CNAME`). Old `jack-hardsurface.github.io` addresses redirect to the domain automatically.

## Files

- `index.html`: the home page.
- `assets/site.css`: styles; the same design language as the MatricX PRO page.
- `assets/logo.png`, `assets/pro-card.jpg`: copied from the MatricX PRO site. The Bake and Bundle card images load from their own pages.
- `.nojekyll`: serve files as they are.
- `CNAME`: the custom domain, `eidosedgestudio.com`.

## Prices shown

- MatricX PRO and MatricX Bake: $49 launch price, regular $79.
- MatricX Bundle: "From $67.58" launch price, regular $109 (Creator tier, as on the Blender Market listing).

Update these lines in `index.html` when prices change.
