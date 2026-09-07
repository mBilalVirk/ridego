# 🚗 RideGo — Your Ride, Your Way

A modern, responsive ride-booking landing page built with **React, Vite, and Tailwind CSS**.

RideGo provides a clean and modern interface for booking rides, exploring transportation services, viewing ride statistics, reading customer testimonials, and discovering the mobile app experience.

## 🌐 Live Demo

**[Visit RideGo Live Demo](https://rideg.netlify.app/)**

> 🚀 Live Website: `https://rideg.netlify.app/`

---

## 📸 Project Overview

RideGo is a frontend ride-booking website designed with a modern transportation-app aesthetic.

The project was converted from a traditional HTML/CSS/JavaScript website into a reusable **Vite + React application**, with individual website sections organized into separate React components.

### Main Sections

- 🧭 Navigation Bar
- 🚗 Hero / Ride Booking Section
- 🛡️ Trust & Features Section
- 🚘 Ride Services
- 📊 Statistics
- 📍 How It Works
- 📱 Mobile App Promotion
- ⭐ Customer Testimonials
- 📩 Newsletter
- 🔗 Footer

---

## ✨ Features

### 🚗 Ride Booking Interface

Users can enter:

- Pickup location
- Drop-off location
- Ride time
- Number of passengers

The interface provides a clean booking experience with a prominent **Find a Ride** CTA.

### 🚘 Multiple Ride Services

The website showcases different transportation options:

- Go
- Go XL
- Go Comfort
- Go Bike
- Go Parcel

Each service is displayed using a reusable service-card component.

### 📊 Ride Statistics

The statistics section highlights:

- 10M+ Happy Users
- 25M+ Rides Completed
- 150+ Cities Covered
- 4.8★ User Rating

### 📍 How It Works

The booking process is presented through five simple steps:

1. Enter Location
2. Choose a Ride
3. Confirm & Book
4. Track Your Ride
5. Reach & Pay

### 📱 App Promotion

A dedicated mobile-app promotion section includes:

- App Store CTA
- Google Play CTA
- Phone mockup
- Ride visual
- Promotional discount element

### ⭐ Testimonials

The website contains customer testimonial cards with:

- User rating
- Customer feedback
- Profile image
- Customer name
- Location

### 🎨 Responsive Design

The interface is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile

---

# 🛠️ Tech Stack

| Technology   | Purpose                         |
| ------------ | ------------------------------- |
| React        | UI development                  |
| Vite         | Development server & build tool |
| Tailwind CSS | Styling                         |
| JavaScript   | Application logic               |
| HTML5        | Semantic structure              |
| CSS          | Global styling                  |
| Google Fonts | Inter typography                |
| Netlify      | Deployment                      |

---

# 📂 Project Structure

```text
ridego/
│
├── public/
│   └── images/
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Brand.jsx
│   │   │
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   ├── BookingCard.jsx
│   │   │   └── HeroIllustration.jsx
│   │   │
│   │   ├── TrustBar/
│   │   │   ├── TrustBar.jsx
│   │   │   └── TrustItem.jsx
│   │   │
│   │   ├── Services/
│   │   │   ├── Services.jsx
│   │   │   └── ServiceCard.jsx
│   │   │
│   │   ├── Stats/
│   │   │   ├── Stats.jsx
│   │   │   └── StatItem.jsx
│   │   │
│   │   ├── HowItWorks/
│   │   │   ├── HowItWorks.jsx
│   │   │   └── StepCard.jsx
│   │   │
│   │   ├── AppPromo/
│   │   │   ├── AppPromo.jsx
│   │   │   └── StoreButton.jsx
│   │   │
│   │   ├── Testimonials/
│   │   │   ├── Testimonials.jsx
│   │   │   └── TestimonialCard.jsx
│   │   │
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       ├── FooterColumn.jsx
│   │       └── Newsletter.jsx
│   │
│   ├── data/
│   │   ├── services.js
│   │   ├── stats.js
│   │   ├── trustItems.js
│   │   ├── steps.js
│   │   └── testimonials.js
│   │
│   ├── hooks/
│   │   ├── useMouseTilt.js
│   │   └── useScrollReveal.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/ridego.git
```

## 2. Navigate to the Project

```bash
cd ridego
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Start Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

# 🎨 Tailwind CSS

This project uses **Tailwind CSS v4** for styling.

Tailwind is configured through the Vite plugin.

Install the required packages with:

```bash
npm install tailwindcss @tailwindcss/vite
```

The global stylesheet uses:

```css
@import "tailwindcss";
```

---

# 🧩 Component Architecture

The application follows a reusable component-based architecture.

Instead of putting the entire website inside `App.jsx`, each major section is separated into its own component.

```text
App
│
├── Navbar
├── Hero
│   ├── BookingCard
│   └── HeroIllustration
├── TrustBar
│   └── TrustItem
├── Services
│   └── ServiceCard
├── Stats
│   └── StatItem
├── HowItWorks
│   └── StepCard
├── AppPromo
│   └── StoreButton
├── Testimonials
│   └── TestimonialCard
└── Footer
    ├── FooterColumn
    └── Newsletter
```

This structure makes the application easier to:

- Maintain
- Extend
- Debug
- Reuse
- Connect to APIs later
- Scale into a larger ride-booking platform

---

# ⚡ Interactive Features

## 3D Hero Interaction

The hero illustration includes a mouse-based 3D tilt effect.

The effect dynamically responds to the user's mouse position and resets when the pointer leaves the illustration.

The functionality is separated into:

```text
src/hooks/useMouseTilt.js
```

---

## Scroll Reveal Animation

Sections use an `IntersectionObserver`-based reveal animation.

The functionality is separated into:

```text
src/hooks/useScrollReveal.js
```

This avoids unnecessary global DOM manipulation and keeps the animation behavior reusable.

---

# 📱 Responsive Layout

RideGo adapts its layout according to screen size.

### Desktop

```text
Hero:          2 columns
Services:      5 columns
Stats:         4 columns
How It Works:  5 columns
Testimonials:  3 columns
Footer:        5 columns
```

### Tablet

The layouts automatically reduce their number of columns to provide better readability.

### Mobile

Sections transition into:

```text
1–2 column layouts
Stacked content
Mobile-friendly navigation
Responsive cards
Responsive typography
```

---

# 🚀 Production Build

Create a production build using:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

# 🌍 Deployment

The project is deployed on **Netlify**.

### Live Website

**https://rideg.netlify.app/**

The production build can be deployed to Netlify using:

```bash
npm run build
```

and deploying the generated:

```text
dist/
```

directory.

---

# 🔮 Future Improvements

The current project is primarily a frontend implementation. It can be extended into a complete ride-booking application by adding:

- 🔐 User authentication
- 👤 Rider dashboard
- 🚗 Driver dashboard
- 📍 Real-time driver tracking
- 🗺️ Google Maps / Mapbox integration
- 💰 Fare calculation
- 💳 Online payments
- 📦 Ride booking API
- 🔔 Real-time notifications
- ⭐ Driver ratings
- 📱 Mobile application
- 🛠️ Admin dashboard
- 📊 Ride analytics
- 🔄 WebSocket-based ride updates

---

# 👨‍💻 Developer

**Muhammad Bilal Hassan**

Full-Stack Web Developer specializing in:

- PHP
- Laravel
- React
- JavaScript
- Tailwind CSS
- MySQL
- PostgreSQL
- REST APIs

---

# ⭐ Show Your Support

If you like this project, consider giving it a ⭐ on GitHub.

---

## 📄 License

This project is intended for educational and portfolio purposes.

---

## 🔗 Links

🌐 **Live Demo:**
https://rideg.netlify.app/

💻 **GitHub:**
Add your repository URL here.

📁 **Portfolio:**
Add your portfolio URL here.
