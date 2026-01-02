# 🚀 Taskly | Minimalist To-Do List

> **Kelola Harimu, Tanpa Gangguan.**
>
> Sebuah aplikasi manajemen tugas sederhana yang fokus pada privasi, kecepatan, dan estetika. Dibangun dengan Vanilla JavaScript murni tanpa framework yang berat.

---

## 📖 Tentang Project

Taskly adalah side project yang saya bangun untuk mendalami konsep **DOM Manipulation** dan **Web Storage (Local Storage)**. Tujuan utamanya adalah membuat alat produktivitas yang:
1.  **Ringan:** Tidak perlu loading lama.
2.  **Privat:** Tidak perlu login/register. Data tersimpan di browser masing-masing.
3.  **Estetik:** Menggunakan gaya desain *Glassmorphism* dan *Dark Mode* agar nyaman dipandang lama.

Project ini sepenuhnya Open Source dan statis (HTML/CSS/JS only).

## ✨ Fitur Utama

Fitur-fitur yang sudah berjalan saat ini:

* **💾 LocalStorage Persistence:** Data tugas tidak hilang meskipun browser di-refresh atau ditutup.
* **✅ CRUD Dasar:** Bisa tambah tugas, tandai selesai (checklist), dan hapus tugas.
* **🎨 Glassmorphism UI:** Tampilan modern dengan efek kaca transparan dan *background gradient*.
* **🌙 Dark Mode Default:** Warna ungu gelap yang elegan dan ramah di mata.
* **📱 Responsif:** Tampilan menyesuaikan rapi di Desktop, Tablet, maupun HP (Mobile Friendly).
* **🔍 Filter Tugas:** Memilah tugas antara "Semua" dan "Selesai".
* **🔔 Custom Alerts:** Notifikasi animasi yang halus saat input kosong (bukan `alert()` bawaan browser yang kaku).

## 🛠️ Teknologi yang Digunakan

Project ini dibuat tanpa library pihak ketiga (No jQuery, No Bootstrap), murni menggunakan standar web modern:

* **HTML5** - Struktur semantik.
* **CSS3** - Custom properties (variables), Flexbox, Grid System, dan Animations.
* **Vanilla JavaScript (ES6+)** - Logika aplikasi, Event Handling, dan LocalStorage logic.
* **Font Awesome** - Ikon antarmuka.

## 🚀 Cara Menjalankan (Instalasi)

Karena ini adalah website statis, Anda tidak perlu menginstall `npm` atau backend apapun.

**Cara 1: Langsung Buka**
1.  Download file ZIP dari repository ini atau clone menggunakan git:
    ```bash
    git clone [https://github.com/NetEnginee/Taskly.git](https://github.com/NetEnginee/Taskly.git)
    ```
2.  Buka file `index.html` langsung di browser Anda (Chrome, Firefox, Edge, dll).

**Cara 2: Live Preview (VS Code)**
1.  Buka folder project di VS Code.
2.  Install ekstensi **Live Server**.
3.  Klik kanan pada `index.html` -> "Open with Live Server".

## 📂 Struktur Folder

```text
Taskly/
├── index.html      # Struktur utama halaman
├── style.css       # Styling (Glassmorphism, Responsiveness, Animations)
├── script.js       # Logic (CRUD, LocalStorage, DOM Events)
└── README.md       # Dokumentasi ini
