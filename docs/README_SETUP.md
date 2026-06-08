# AMARÉ Storefront — Local Setup

## 1. Create the project
Open PowerShell or the VS Code terminal and run:

```powershell
cd C:\Projects
npx create-next-app@latest amare-storefront --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd amare-storefront
```

When the command asks about optional features not covered by the flags, keep the stable recommended defaults.

## 2. Install the first dependencies

```powershell
npm install lucide-react clsx tailwind-merge motion
```

## 3. Add the project instructions
Copy these downloaded files into the new project:

```text
amare-storefront/
├── AGENTS.md
└── docs/
    └── AMARE_MASTER_BUILD_BRIEF.md
```

Create the `docs` folder if it does not exist.

## 4. Open in VS Code

```powershell
code .
```

## 5. Run the untouched starter once

```powershell
npm run dev
```

Open `http://localhost:3000` and confirm the default Next.js page loads before asking Codex to modify the project.

## 6. First Codex task
Use the first Codex prompt supplied in the accompanying ChatGPT response. Allow Codex to inspect `AGENTS.md` and `docs/AMARE_MASTER_BUILD_BRIEF.md` before it edits files.

## 7. Test after Codex completes

```powershell
npm run lint
npm run build
npm run dev
```

Check the homepage at common widths:
- 390px mobile
- 768px tablet
- 1440px desktop
