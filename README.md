# Muhammad Ibrahim Portfolio Website

This is a static portfolio website for GitHub Pages.

## Files

- `index.html`
- `styles.css`
- `script.js`
- `assets/Muhammad-Ibrahim-CV.pdf`

## How to run locally

Open `index.html` in your browser.

For a better local preview, run this inside the folder:

```powershell
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## How to use in your folder

Copy all files from this package into:

```text
E:\Masters\website
```

## How to publish on GitHub Pages

Your GitHub Pages repository should be:

```text
mibrahim76112.github.io
```

Then from `E:\Masters\website`:

```powershell
git init
git add .
git commit -m "Create portfolio website"
git branch -M main
git remote add origin https://github.com/mibrahim76112/mibrahim76112.github.io.git
git push -u origin main
```

If the remote already exists:

```powershell
git remote set-url origin https://github.com/mibrahim76112/mibrahim76112.github.io.git
git push -u origin main
```

Your website should be available at:

```text
https://mibrahim76112.github.io
```

## Important edits

Update these links in `index.html` when you have exact URLs:

- LinkedIn
- Google Scholar

You can also update project details in `script.js`.
