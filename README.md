# 🏥 Sarvdev Ayurvedic Medical College & Maha Mrityunjay Hospital

Official website of **Sarvdev Ayurvedic Medical College & Maha Mrityunjay Hospital**, built to provide transparent academic, hospital, and regulatory information in compliance with **NCISM / Ministry of AYUSH** guidelines.

🔗 **Live Website**: https://sarvdev-medical-college.vercel.app

---

## 📌 Project Overview

This is a modern, responsive, SEO-optimized web application developed using **React + Vite + Tailwind CSS**, designed for:

- Students
- Faculty
- Patients
- Regulatory authorities
- General public

The website includes all mandatory disclosures, dynamic pages, and user-friendly navigation.

---

## 🚀 Tech Stack

- **Frontend Framework**: React (Vite)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Form Integration**: External JS-based admission form
- **SEO**: Semantic HTML, optimized metadata, lazy loading

---

## 📂 Project Structure

# 🏥 Sarvdev Ayurvedic Medical College & Maha Mrityunjay Hospital

Official website of **Sarvdev Ayurvedic Medical College & Maha Mrityunjay Hospital**, built to provide transparent academic, hospital, and regulatory information in compliance with **NCISM / Ministry of AYUSH** guidelines.

🔗 **Live Website**: https://sarvdev-medical-college.vercel.app

---

## 📌 Project Overview

This is a modern, responsive, SEO-optimized web application developed using **React + Vite + Tailwind CSS**, designed for:

- Students
- Faculty
- Patients
- Regulatory authorities
- General public

The website includes all mandatory disclosures, dynamic pages, and user-friendly navigation.

---

## 🚀 Tech Stack

- **Frontend Framework**: React (Vite)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Form Integration**: External JS-based admission form
- **SEO**: Semantic HTML, optimized metadata, lazy loading

---

## 📂 Project Structure
sarvdev-medical-college/
│
├── public/
│ ├── logo.webp
│ ├── _redirects
│ └── assets/
│
├── src/
│ ├── components/
│ │ ├── shared/
│ │ │ ├── Banner.jsx
│ │ │ ├── PDFViewer.jsx
│ │ │ └── ContactSticky.jsx
│ │ └── layout/
│ │ ├── Navbar.jsx
│ │ ├── TopBar.jsx
│ │ └── Footer.jsx
│ │
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Admissions.jsx
│ │ ├── NCISM.jsx
│ │ ├── Gallery.jsx
│ │ ├── Testimonials.jsx
│ │ ├── Notices.jsx
│ │ ├── Results.jsx
│ │ └── Careers.jsx
│ │
│ ├── data/
│ │ ├── testimonials.js
│ │ ├── notices.js
│ │ └── galleryPage.js
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── index.html
├── package.json
└── README.md


---

## 🌟 Key Features

### 🏫 Academic & Regulatory
- NCISM approval documents
- University affiliation details
- Permission letters (PDF/Image viewer)
- Student results (PDF-based)

### 🧑‍🎓 Student-Centric
- Admission enquiry form
- Results page
- Notices & announcements
- Testimonials with pagination

### 🏥 Hospital Section
- OPD/IPD information
- Panchakarma facilities
- Patient testimonials

### 🖼️ Gallery
- Filterable image gallery
- Lightbox viewer with navigation

### 📢 Notices
- Category-based filtering
- Important notices highlighted
- Table-based layout

### 💼 Careers
- Job openings
- Application instructions
- Institutional values

### 📞 UX Enhancements
- Sticky “Apply Now” button
- Click-to-call & WhatsApp
- Global image lazy loading
- Custom scrollbar styling

---

## 🔍 SEO & Performance Optimizations

- Semantic HTML (`header`, `section`, `article`, `footer`)
- Optimized headings (H1–H3 hierarchy)
- Lazy-loaded images
- Clean URLs
- Accessible labels & alt texts
- Internal linking
- Fast Vite build

> ⚠️ Note: React Helmet is intentionally avoided due to React 19 compatibility issues.

---

## 🛠️ Local Development Setup

### 1️⃣ Clone the Repository

git clone https://github.com/your-username/sarvdev-medical-college.git
cd sarvdev-medical-college

---

🌐 Deployment (Vercel)

The project is deployed on Vercel with SPA routing support.

---

🧩 Known Issues & Solutions
❌ 404 on Page Refresh (Vercel)

✅ Fixed using rewrite configuration (SPA routing)

❌ react-helmet-async install error

✅ Avoided due to React 19 peer dependency conflict
