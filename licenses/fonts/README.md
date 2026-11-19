# Font licences

Every web font on the site is licensed under the **SIL Open Font License 1.1** (OFL). The fonts
are served by Google Fonts (see `src/layouts/MainLayout.astro`); none are bundled in this repo.
The licence files below are kept so each font's copyright notice and licence travel with the
project, as the OFL requires for any copy that is redistributed.

| Font | Used for | Copyright | Licence file |
| --- | --- | --- | --- |
| Fira Sans (400/500/600/700) | All English text | © 2012-2015 The Mozilla Foundation and Telefonica S.A. | [OFL-firasans.txt](OFL-firasans.txt) |
| Fira Sans Extra Condensed (700) | Condensed titles: process steps, FAQ title, footer wordmark | © 2012-2015 The Mozilla Foundation and Telefonica S.A. | [OFL-firasansextracondensed.txt](OFL-firasansextracondensed.txt) |
| Noto Sans Tamil (400/500/600/700) | Tamil text | © 2022 The Noto Project Authors | [OFL-notosanstamil.txt](OFL-notosanstamil.txt) |
| Noto Sans Sinhala (400/500/600/700) | Sinhala text | © 2022 The Noto Project Authors | [OFL-notosanssinhala.txt](OFL-notosanssinhala.txt) |

Source of the licence texts: `OFL-firasans.txt` is the file supplied with the client's Fira Sans download (newer edition linking to openfontlicense.org); the others come from the official Google Fonts repository (`google/fonts`, `ofl/<family>/OFL.txt`). The licence terms are the same in both editions.

## Rules

- Add a licence file here whenever a new font family is added.
- If fonts are ever self-hosted (e.g. copied into `public/fonts/`), ship the matching OFL file
  alongside them. The OFL forbids selling the fonts on their own and renaming modified versions
  with a Reserved Font Name.
- System fallbacks referenced in CSS but not loaded or distributed by the site (`Comic Sans MS`,
  `Bradley Hand`, `Inter`, `Roboto`, `Arial`, etc. in `landing.css`, `Construction.astro`,
  `Welcome.astro`) are the visitor's own installed fonts and need no licence file here.
