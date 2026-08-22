# Nanxi Li's Homepage

Source of [https://andylinx.github.io](https://andylinx.github.io), built with [Academic-Homepage-Template](https://github.com/Ronchy2000/Academic-Homepage-Template) (Next.js + Tailwind).

## Edit content

All site content lives in `content/`:

| File | Controls |
| --- | --- |
| `content/profile.json` | Name, affiliation, social links, avatar, CV |
| `content/pages/home.json` | Homepage intro and section titles |
| `content/research.json` | Research interests and experience cards |
| `content/publications.json` | Publication entries |
| `content/projects.json` | Project entries |
| `content/timeline.json` | Education and internship timeline (CV page) |
| `content/awards.json` | Honors & awards |
| `content/updates.json` | Recent updates feed on the homepage |
| `content/blog/{en,zh}` | Blog posts (`.mdx`) |

Add a new blog post with `npm run new:post`.

## Local preview

```bash
npm ci
npm run dev     # http://localhost:3000
```

## Deployment

GitHub Actions builds a static export (`STATIC_EXPORT=1`) on every push to `master` and deploys to GitHub Pages via `.github/workflows/deploy.yml`.

Repository setting required once: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
