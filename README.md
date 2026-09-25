# feedia-website
Corporate website for Feedia LLC

Static HTML/CSS website exported from Feedia's Sites version 6 on September 24, 2026.

## Files

- `index.html`: homepage
- `contact/index.html`: contact form
- `contact/thank-you/index.html`: confirmation page
- `assets/site.css`: responsive site styles
- `assets/feedia-logo.png`: Feedia logo

## Local preview

From this repository's root, start a static server:

```sh
python3 -m http.server 8000
```

On Windows, use `python -m http.server 8000` if needed. Open `http://localhost:8000` in your browser. No build step or package installation is required.

## Hosting and contact form

Publish this repository's root as a static website. Links and assets use paths relative to the domain root. Hosting under a subdirectory requires updating those paths.

The contact form posts to `https://formsubmit.co/contactus@feedia.llc`. The export's `_next` return URL is `https://feedia.llc/contact/thank-you/`. Update it in `contact/index.html` if deploying to another domain. Email delivery and the recipient's FormSubmit activation status were not verified during export.

The Sites hosting configuration is omitted from this portable copy. This repository export does not configure hosting, DNS, or automatic synchronization with Sites.
