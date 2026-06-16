# Favicon Setup Instructions

## Required Files

To complete the favicon setup, please add the following files to the `/public` directory:

### 1. favicon.png (32x32 or 64x64 pixels)
- A PNG version of the JOOF Foundation logo
- Recommended size: 32x32px or 64x64px
- Should use the foundation's brand colors (teal #14b8a6)

### 2. og-image.jpg (1200x630 pixels)
- Open Graph image for social media sharing
- Recommended size: 1200x630px (Facebook/Twitter standard)
- Should feature the foundation logo, tagline, or key visual
- File format: JPG or PNG

## How to Create These Files

### Option 1: Using the JOOF Logo
1. Export the foundation logo at the required sizes
2. For favicon.png: Use 32x32px or 64x64px
3. For og-image.jpg: Create a 1200x630px banner with logo and tagline

### Option 2: Quick Generation Tools
- **Favicon Generator**: https://realfavicongenerator.net/
- **OG Image Generator**: https://www.canva.com/

## After Adding Files

The favicon is already referenced in `index.html`:
```html
<link rel="icon" type="image/png" href="/favicon.png" />
```

The OG image is referenced for social sharing:
```html
<meta property="og:image" content="https://joofoundation.org/og-image.jpg" />
```

Once you add these files to the `/public` directory, they will be automatically served and the setup will be complete.
