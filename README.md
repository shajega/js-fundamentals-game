# JS Quest: Classroom Edition

A browser-based JavaScript fundamentals game for classroom use. Students can now move between three learning modes:

- **Practice JS** — low-stakes drills with a free-form code runner for warm-ups and revision.
- **Quest Path** — the original gamified sequence with XP, locked levels, hints, and achievements.
- **Class Lab** — teacher-guided lab briefs with starter code, lab steps, and success criteria.

## Running locally

This project is a static web app. Start any local static server from the repository root, for example:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173` in a browser.

## Customising for a class

- Edit `src/syllabus.js` to change the guided quest sequence.
- Edit `practicePrompts` in `src/app.js` to add short starter drills.
- Edit `classLabs` in `src/app.js` to add lab briefs, starter code, and success criteria.

## Monetization ideas to explore later

Potential premium features could include teacher accounts, custom lab packs, class progress dashboards, downloadable reports, and private cohorts.
