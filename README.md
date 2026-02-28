# FleetGuard AI - Frontend

Customer dashboard and reseller recruitment page for FleetGuard fleet management system.

## What's Inside

- **fleetguard.jsx** - Main dashboard (fuel fraud detection, analytics, pricing)
- **reseller_landing.jsx** - Reseller recruitment page (signup form, earnings calculator)

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Locally
```bash
npm start
```

Opens at http://localhost:3000

### Build for Production
```bash
npm run build
```

## Environment Variables

Create a `.env` file in the root folder:
```
REACT_APP_API_URL=https://your-backend-url/api
REACT_APP_PAYSTACK_PUBLIC_KEY=pk_test_xxxxx
```

### Where to Get These Values:
- **REACT_APP_API_URL** - Your backend URL (e.g., `https://fleetguard.up.railway.app/api`)
- **REACT_APP_PAYSTACK_PUBLIC_KEY** - From Paystack dashboard → Settings → API Keys

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to https://vercel.com/new
3. Import this repository
4. Add environment variables above
5. Click Deploy

## Features

✅ Real-time fuel fraud detection
✅ AI-powered analytics
✅ Driver accountability tracking
✅ Paystack payment integration
✅ Reseller commission calculator
✅ WhatsApp integration info

## Tech Stack

- React 18+
- Tailwind CSS
- Lucide React (icons)
- Axios (HTTP client)

## Support

For issues or questions, check the backend documentation or open an issue.
```

4. **Scroll down, click "Commit new file"**

Done! ✅

---

## **WHAT YOUR REPO SHOULD LOOK LIKE NOW**

Go back to your repo main page and you should see:
```
fleetguard-frontend

Code    Issues    Pull requests    ...

README.md         (shows your documentation)
.gitignore        (hidden files list)
fleetguard.jsx    (dashboard)
reseller_landing.jsx (recruitment page)
package.json      (dependencies)
.env.example      (config template)
```

---

## **NEXT STEP: Upload Your Code Files**

Now upload the actual code files:

1. Click **"Add file" → "Upload files"**

2. **Drag and drop these files:**
   - `fleetguard.jsx`
   - `reseller_landing.jsx`
   - `package.json`
   - `.env.example`

3. **Click "Commit changes"**

Done! ✅

---

## **YOUR FRONTEND REPO IS COMPLETE** 🎉

After uploading, your repo will have:
```
✅ .gitignore
✅ README.md
✅ fleetguard.jsx
✅ reseller_landing.jsx
✅ package.json
✅ .env.example
