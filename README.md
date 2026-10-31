# Morrow Studio · Angular invitation storefront

A responsive, warm-editorial storefront for a custom digital invitation studio. Built with Angular standalone components, SCSS and Angular Router. The visual invitation designs are made from original CSS/SVG illustrations, so the project does not depend on stock-image URLs or an image API.

## What's included

- Responsive storefront: hero, occasion entry points, searchable/filterable design gallery, product details, process, packages, FAQ and CTA.
- Six invitation concepts across weddings, birthdays, baby showers, housewarmings and work events.
- Playable preview routes at `/preview/:slug`: live headline and date editing, five colour palettes, cover/details toggle, simulated RSVP controls and copy-link interaction.
- Enquiry route at `/start`: validation and package/design/occasion preselection from query parameters.
- WeddingOS case study at `/our-work/wedding-os`: a dedicated portfolio page with an interactive invitation, event timeline and RSVP concept preview.
- Homepage featured-work section that links into the WeddingOS case study, plus header and footer portfolio links.
- Mobile navigation, reduced-motion support, keyboard focus styles and custom 404 screen.
- Angular storefront. The `/start` enquiry form calls the Spring Boot API at `http://localhost:8080/api/v1` by default; invitation previews remain demo-only unless connected to the published-invitation endpoints.

## Requirements

- Node.js 20.19+ or a supported Node.js 22 release
- npm

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:4200`.

Create a production build:

```bash
npm run build
```

The build output is written to `dist/morrow-studio/browser`.

## Before publishing

1. **Choose your real brand name.** `Morrow Studio` is a working name in the UI. Search/replace it throughout `src/` and update the page title and metadata in `src/index.html`.
2. **Configure the API URL.** Update `src/app/config/api-config.ts` to point at your deployed API before publishing. The `/start` form sends enquiries to the API; it does not open a mailto draft.
3. **Add your live WeddingOS link (optional).** Set `weddingOsDemoUrl` in `src/app/config/brand-config.ts` to the deployed public URL for your actual WeddingOS project. The case-study page then shows a link to open it. Until you add it, the page uses an interactive visual concept preview and does not invent a live URL.
4. **Update package prices and design samples.** Edit `src/app/data/invitations.ts` for sample designs and `src/app/pages/home-page.component.html` for package pricing/features.
5. **Replace any sample event wording and dates** before using demos in sales material. The designs currently use fictional sample content.
6. **Complete production setup before taking live orders.** Run the included backend and Supabase SQL migration. Add request rate limits/bot protection, an authenticated admin workflow and privacy/retention messaging before collecting real guest RSVP data at scale.
7. **Configure hosting fallback for Angular routes.** Your static host should serve `index.html` for routes such as `/preview/the-garden-party` and `/start`. For Netlify, a simple `_redirects` rule can be added: `/* /index.html 200`. Follow the equivalent rewrite rule for your chosen host.
8. **Fonts.** The project loads DM Sans and Playfair Display from Google Fonts. It falls back to system serif/sans fonts if that request is blocked. If you prefer full self-hosting, replace the Google Fonts import/link with local font files you are licensed to use.

## Routes

- `/` - storefront
- `/preview/the-garden-party`
- `/preview/a-little-more-sunshine`
- `/preview/little-wildflower`
- `/preview/the-open-door`
- `/preview/good-people-good-work`
- `/preview/golden-hour`
- `/our-work/wedding-os` - WeddingOS featured case study
- `/start` - enquiry brief

## Project structure

```text
src/
  app/
    components/
      invite-art.component.*
      site-header.component.*
      site-footer.component.*
    config/
      brand-config.ts
      api-config.ts
    services/
      inquiry-api.service.ts
    data/
      invitations.ts
    models/
      invitation.model.ts
    pages/
      home-page.component.*
      preview-page.component.*
      start-order-page.component.*
      wedding-os-page.component.*
      not-found-page.component.ts
    app.component.*
    app.routes.ts
  styles.scss
  main.ts
public/
  favicon.svg
```

## Notes

- Prices shown are launch-price placeholders and should be reviewed before publishing.
- RSVP controls in the preview are demos only. Their responses are not saved or transmitted.
- The `/start` form requires the Spring Boot backend to be running. It shows an error when the API is unreachable.
- Payment processing, email notifications and an authenticated admin dashboard are not included yet.
