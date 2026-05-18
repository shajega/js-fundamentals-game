# JS Quest: Classroom Edition

A browser-based JavaScript fundamentals game for classroom use. The app is organised as **Unit 1 through Unit 10** in the sidebar. Each unit brings the lesson flow together in one place:

1. **Explanation** — a teacher-friendly concept overview.
2. **Sample Code** — a readable example for modelling the concept.
3. **JS Practice** — a low-stakes coding warm-up with runnable output.
4. **Quest** — the guided challenge sequence with XP, hints, and completion tracking.
5. **Lab** — a class activity brief with starter code and a runnable lab workspace.

## Running locally

This project is a static web app. Start any local static server from the repository root, for example:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173` in a browser.

## Customising for a class

- Edit `src/syllabus.js` to change the guided quest sequence.
- Edit `unitLessons` in `src/app.js` to change unit explanations, sample code, JS practice prompts, and lab briefs.
- The sidebar currently presents Unit 1 to Unit 10 using the first ten syllabus weeks.

## Monetization ideas to explore later

Potential premium features could include teacher accounts, custom unit packs, lab libraries, class progress dashboards, downloadable reports, and private cohorts.
