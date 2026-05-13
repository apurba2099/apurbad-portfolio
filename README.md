# 🌐 Apurba Dutta — Personal Portfolio

[![Live](https://img.shields.io/badge/Live-apurbadutta.lol-8b5cf6?style=flat-square&logo=vercel)](https://apurbadutta.lol)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Firebase](https://img.shields.io/badge/Firebase-v9-FFCA28?style=flat-square&logo=firebase)](https://firebase.google.com)

Welcome to my **Personal Portfolio Website** — a showcase of my skills, projects, and professional journey. This portfolio is a fully custom-built React application with an AMOLED dark theme, a live Guestbook, and clean modular page architecture.

---

## 🚀 Features

- **🏠 Home** — Hero section, about me, tech stack grid, recent projects, and social links.
- **🔧 Projects** — Full project showcase with live demo links and tech tags.
- **📬 Contact** — Contact form powered by Web3Forms, social links, and resume download.
- **🗃️ Archive** — Photo archive / gallery section.
- **📖 Guestbook** — Visitors can sign in with Google and leave a message. Real-time feed powered by Firebase Firestore.
- **🌗 Dark / Light Theme** — System-aware AMOLED dark mode with one-click toggle (persisted via context).
- **📱 Fully Responsive** — Optimized for desktop, tablet, and mobile with a floating bottom navigation.

---

## 📖 Guestbook — How It Works

The Guestbook page (`/guestbook`) is a live, interactive comment section for visitors to leave messages.

### Flow
1. Visitor opens `/guestbook`
2. Clicks **"Continue with Google"** → Firebase Google OAuth popup
3. Types a message (max 280 characters) and hits **Post** or `Ctrl+Enter`
4. Message is written to **Cloud Firestore** collection `guestbook` in real time
5. All messages appear instantly via `onSnapshot` listener — no page refresh needed
6. Visitor clicks **Sign out** to end session

### Data stored per message
```json
{
  "uid":       "firebase-user-uid",
  "name":      "Display Name",
  "photoURL":  "https://...",
  "message":   "Hello Apurba!",
  "createdAt": "<Firestore server timestamp>"
}
```

### Own-message highlighting
Messages posted by the currently signed-in user show a purple left-border accent and a **"you"** badge — no edit/delete exposed to keep it simple.

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Frontend** | React 19, React Router v7, Vite (rolldown-vite) |
| **Styling** | Vanilla CSS — one `.css` file per page, CSS custom properties for theming |
| **Icons** | React Icons, Font Awesome CDN |
| **Auth** | Firebase Auth — Google Sign-In (OAuth popup) |
| **Database** | Cloud Firestore (real-time `onSnapshot`) |
| **Notifications** | React Toastify |
| **Deployment** | Vercel (production) + GoDaddy (domain `apurbadutta.lol`) |
| **Version Control** | Git & GitHub |

---

## 📁 Project Structure

```
src/
├── assets/
│   └── images/          # Project screenshots, profile photo
├── components/
│   └── Navigation/      # Floating bottom nav bar
├── context/
│   └── ThemeContext.jsx  # Dark/light theme provider
├── pages/
│   ├── Home/            # Home.jsx + Home.css
│   ├── Project/         # Project.jsx + Project.css
│   ├── Contact/         # Contact.jsx + Contact.css
│   ├── Archive/         # Archive.jsx + Archive.css
│   └── Guestbook/       # Guestbook.jsx + Guestbook.css + image/
├── firebase.js          # Firebase v9 SDK init (auth, db)
├── App.jsx              # Routes
└── index.css            # Global CSS variables + reset
```

---

## 🔥 Firebase Setup (for contributors / self-hosting)

1. Create a project at [console.firebase.google.com](https://console.firebase.google.com)
2. **Authentication → Sign-in method** → Enable **Google**
3. **Firestore Database** → Create in **Test mode**
4. **Project Settings → Web app** → copy `firebaseConfig`
5. Paste into `src/firebase.js`
6. **Authentication → Settings → Authorized domains** → add your domain + `localhost`

### Recommended Firestore security rules (production)
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /guestbook/{doc} {
      allow read: if true;
      allow create: if request.auth != null
        && request.resource.data.message.size() <= 280;
    }
  }
}
```

---

## 🧑‍💻 Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

Runs at `http://localhost:5173` by default.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

> Built with ❤️ by **Apurba Dutta** — [apurbadutta.lol](https://apurbadutta.lol)
