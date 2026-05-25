# 🎭 MangaVault - Premium Manga Reading Platform

**Your manga, your world.** An income-generating manga reading platform with premium subscriptions, ad integration, and exclusive content.

## ✨ Features

### Core Features
- 📖 Browse and read premium manga
- 🔖 Bookmarks and reading history
- 🔍 Advanced search and filtering
- 🎨 Beautiful, responsive dark UI
- 📱 Mobile-friendly design

### 💰 Monetization Ready
- 📊 Google AdSense integration
- 💎 Premium subscription ($4.99/mo)
- ☕ Ko-fi donations
- 🤝 Affiliate marketing support
- 💳 Stripe payment processing
- 📈 Google Analytics tracking

## 📁 Project Structure

```
mangavault/
├── public/
│   ├── index.html
│   ├── css/
│   │   ├── styles.css
│   │   └── monetization.css
│   └── js/
│       ├── config.js
│       ├── api.js
│       ├── monetization.js
│       └── app.jsx
├── server.js
├── package.json
├── .env.example
└── README.md
```

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Visit `http://localhost:3000`

### Production
```bash
npm start
```

## ⚙️ Configuration

### 1. Google AdSense
1. Create account: https://adsense.google.com
2. Get Publisher ID
3. Update `public/js/config.js`:
   ```javascript
   ADSENSE_ID: 'ca-pub-xxxxxxxxxxxxxxxx',
   ```

### 2. Google Analytics
1. Create property: https://analytics.google.com
2. Get Measurement ID
3. Update `public/js/config.js`:
   ```javascript
   GOOGLE_ANALYTICS_ID: 'G-XXXXXXXXXX',
   ```

### 3. Ko-fi
1. Sign up: https://ko-fi.com
2. Get your Ko-fi ID
3. Update `public/js/config.js`:
   ```javascript
   KOFI_ID: 'your-kofi-id',
   ```

## 💰 Revenue Model

| Source | Potential | Setup |
|--------|-----------|-------|
| Ad Revenue | $0.50-$5 per 1K views | 1 hour |
| Premium | $4.99/mo (5-10% conversion) | 2 hours |
| Donations | $200-$500/mo | 30 mins |
| Affiliates | $50-$200/mo | 1 hour |
| **TOTAL** | **$300-$750/mo** | - |

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
Connect GitHub repo → Deploy

### Heroku
```bash
heroku create mangavault
git push heroku main
```

## 📜 License
MIT License

---
**Made with ❤️ by MangaVault Team**
