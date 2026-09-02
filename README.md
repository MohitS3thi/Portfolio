# Manvendra Sethi Portfolio

A simple, responsive personal portfolio website built with plain HTML, CSS, and JavaScript.

## Tech Stack
- HTML5
- CSS3
- Vanilla JavaScript

## Project Structure
- `index.html` - main page content
- `styles.css` - styling and responsive layout
- `script.js` - stamps the current year in the footer
- `assets/` - `portrait-stipple.png`
- `Manvendra-Sethi-Resume.pdf` 

## Run Locally
You can open `index.html` directly in the browser, or run a local server.


## Deployment
This is a static site, so it can be deployed to GitHub Pages, S3 + CloudFront, or any other static host.

### Deploy to GitHub Pages
1. Push this folder to a GitHub repository.
2. Go to repository `Settings` -> `Pages`.
3. Under `Build and deployment`, choose:
   - Source: `Deploy from a branch`
   - Branch: `main` (or your default branch), folder: `/ (root)`
4. Save and wait for deployment.

## Deployment — AWS S3 + CloudFront

### 1. S3 Bucket Setup
- Created an S3 bucket 
- Enabled **Static website hosting** on the bucket, with `index.html` as the index document
- Uploaded `index.html`, `styles.css`, `script.js`, `Manvendra-Sethi-Resume.pdf` and the `assets/` folder to the bucket root (keep the `assets/` prefix — the hero image is referenced as `assets/portrait-stipple.png`)

### 2. CloudFront Distribution (for HTTPS)
- Created a CloudFront distribution with the S3 bucket's **REST API endpoint** as the origin (not the S3 website endpoint)
- Enabled **Origin Access Control (OAC)** so the bucket stays private and is only readable by CloudFront
- Set **Viewer protocol policy** to *Redirect HTTP to HTTPS*
- Set **Default root object** to `index.html` (required — without it, requests to `/` fail since S3 can't resolve an empty object key)
- Used CloudFront's default `*.cloudfront.net` domain with its built-in free HTTPS certificate (no custom domain/ACM cert needed for this)

### 3. Bucket Policy
- Restricted the bucket policy to allow `s3:GetObject` only from the specific CloudFront distribution (via `AWS:SourceArn` condition), replacing the earlier public-read policy used during initial S3-website-only testing
- Enabled **Block all public access** on the bucket, since CloudFront (via OAC) is now the only authorized reader


### Live URL
🔗 https://d16puh3ennxkbt.cloudfront.net/




