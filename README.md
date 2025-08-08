# 🌟 Lumina – Commission-Free Mentorship Booking Platform

**Lumina** is a next-generation mentorship platform designed to empower mentors and learners to connect seamlessly — without any hidden charges. Unlike traditional platforms that deduct fees from mentors, Lumina ensures **100% direct payment** to mentors via integrated UPI or global payment methods.

---

## 🚀 Features

- 💸 **Zero Commission Model** – Mentors receive full session payments directly.
- 🧑‍🏫 **Mentor Profiles** – Set expertise, rates, availability, and more.
- 📅 **Session Booking** – Real-time slot booking with calendar integration.
- 🔒 **Authentication** – Secure login and registration using Firebase Auth.
- 💬 **Live Chat & Notifications** – Built with Firebase Realtime Database.
- 📹 **Video Meeting Integration** – Google Meet or Jitsi for live sessions.
- 📍 **Direct Payouts** – Razorpay for Indian users and Stripe Connect globally.
- ⭐ **Reviews & Ratings** – Learners can rate sessions to build credibility.
- 📱 **Responsive UI** – Mobile-first design with smooth UX.

---

## 🛠️ Tech Stack

| Layer       | Technology                                    |
|------------|-----------------------------------------------|
| Frontend   | Next.js + TypeScript + Tailwind CSS           |
| Backend    | Node.js + Express + TypeScript                |
| Database   | MongoDB Atlas                                 |
| Auth       | Firebase Authentication                       |
| Realtime   | Firebase Realtime Database / Firestore        |
| Payments   | Razorpay (India), Stripe Connect (Global)     |
| Video      | Google Meet / Jitsi Integration               |
| Hosting    | Vercel (Frontend), Render / Railway (Backend) |

---

## 🔧 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/lumina.git
cd lumina
````

### 2. Setup Firebase

* Go to [Firebase Console](https://console.firebase.google.com/)
* Create a new project called `Lumina`
* Enable:

  * Firebase Authentication (Email/Password or Google)
  * Firestore / Realtime DB
  * Firebase Cloud Messaging (optional)
* Get Firebase config from project settings.

### 3. Setup environment variables

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
MONGODB_URI=your_mongodb_connection
RAZORPAY_KEY=your_key
STRIPE_SECRET=your_stripe_secret
```

### 4. Install dependencies

```bash
npm install
# or
yarn
```

### 5. Start development server

```bash
npm run dev
# or
yarn dev
```

---

## 📁 Folder Structure (example)

```
lumina/
├── components/
├── pages/
│   ├── index.tsx
│   ├── dashboard.tsx
│   └── mentor/
├── lib/
│   └── firebase.ts
├── styles/
├── utils/
├── public/
└── .env.local
```

---

## 📌 Roadmap

* [x] Firebase Auth Integration
* [x] Razorpay/Stripe direct payouts
* [x] Mentor profile management
* [x] Booking and scheduling system
* [x] Video call integration
* [ ] AI-based mentor recommendations
* [ ] Multi-language support
* [ ] Mobile App (React Native or Flutter)

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!
Feel free to open a pull request or raise an issue.

---

## 📜 License

This project is licensed under the MIT License.

---

## 🧠 Inspiration

Built with the vision of making mentorship more accessible, **Lumina** removes unnecessary intermediaries and ensures mentors are fairly compensated for their time — instantly and fully.

---

## 📬 Contact

* 💼 Project: [Lumina](https://yourwebsite.com)
* 📧 Email: [your.email@example.com](mailto:your.email@example.com)
* 🐙 GitHub: [@your-username](https://github.com/your-username)

---

```

Let me know if you'd like:
- A version with badges (build, license, tech used)
- A separate `firebase.ts` boilerplate setup file
- Tailored deployment instructions for **Vercel + Firebase**
- GitHub Actions for CI/CD  
```
