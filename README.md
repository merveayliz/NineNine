# 🕵️‍♂️ 99th Precinct: Tactical Case Simulator (Case Files)

![Brooklyn Nine-Nine](https://img.shields.io/badge/Theme-Brooklyn_Nine--Nine-blue?style=for-the-badge&logo=warnerbros)
![JavaScript](https://img.shields.io/badge/Vanilla_JS-ES6+-yellow?style=for-the-badge&logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-Modern_Layouts-orange?style=for-the-badge&logo=css3)

An interactive, browser-based detective simulation game inspired by the hit comedy series **"Brooklyn Nine-Nine"**. Step into the 99th precinct, choose your favorite detective, analyze critical evidence, crack suspect alibis, and utilize the advanced "Interrogation Bank" terminal to solve crimes across multiple difficulty tiers!

---

## 🌍 Language Options / Dil Seçenekleri
* [English](#english-overview)
* [Türkçe Genel Bakış](#türkçe-genel-bakış)

---

## English Overview

### 🚀 Key Features
* **Character Integration:** Play as one of the 7 iconic detectives (from Jake Peralta to Captain Holt), each featuring unique quotes, distinct personalities, and custom UI aesthetics.
* **Tiered Case Difficulty System:**
  * **Easy (Cheddar Case):** Focuses on basic observation skills and visual evidence matching.
  * **Normal (Museum Heist):** Centered on identifying logical fallacies and conflicting suspect statements.
  * **Hard (Manor Murder):** High-stakes investigation utilizing the deep-dive **"SorguBank" Interrogation Terminal**.
* **Interactive Interrogation Terminal:** A custom-built modal interface where users manually type inputs and query database logs to uncover hidden text/clues.
* **Thematic UI/UX Design:** Fully responsive, mobile-first design styled around the famous **"Yellow Folder" / "Crime Folder"** police department aesthetic.

### 🛠️ Technical Stack & Architecture
* **Vanilla JavaScript (ES6+):** Core game loop engine, dynamic rendering, and responsive state management tracking the chosen detective and active case metrics without external frameworks.
* **Advanced CSS3:** Custom responsive properties, CSS Grid/Flexbox layouts, and sophisticated `@keyframes` animations (including typewriter effects and smooth screen transitions).
* **Asynchronous UX:** Smooth, non-blocking phase transitions between the intro splash screen, detective selection dashboard, and the active investigation crime scene.

---

## Türkçe Genel Bakış

### 🚀 Öne Çıkan Özellikler
* **Karakter Entegrasyonu:** Jake Peralta'dan Kaptan Holt'a kadar uzanan 7 farklı ikonik dedektif profili. Her karakter kendine has repliklere, tasarıma ve estetiğe sahiptir.
* **Kademeli Zorluk ve Vaka Sistemi:**
  * **Easy (Cheddar Vakası):** Temel gözlem yeteneği ve görsel delil eşleştirme adımları gerektirir.
  * **Normal (Müze Soygunu):** Şüphelilerin çelişkili ifadelerini ve mantık hatalarını yakalama odaklıdır.
  * **Hard (Malikane Cinayeti):** Derinlemesine analiz için **"SorguBank"** terminalini zorunlu kılan karmaşık vaka örgüsü.
* **İnteraktif Sorgu Terminali:** Kullanıcının manuel veri girişi (input) yaparak suçlu veri tabanı günlüklerinden spesifik ifadelere ve gizli ipuçlarına ulaştığı özel bir modal sistemi.
* **Tematik Arayüz Tasarımı:** Mobil öncelikli (mobile-first) yaklaşımla geliştirilmiş, "Yellow Folder" (Sarı Dosya) polis departmanı konseptini tüm ekranlara yansıtan duyarlı tasarım.

### 🛠️ Teknik Mimari ve Kod Yapısı
* **Vanilla JavaScript:** Harici hiçbir kütüphane veya framework (React, Vue vb.) kullanılmadan, oyun döngüsü ve dinamik DOM yönetimi saf JS nesneleriyle kurgulanmıştır.
* **State Management (Durum Yönetimi):** Seçilen dedektif, vaka verileri ve sorgu terminali girdileri oyun boyunca anlık olarak takip edilir ve işlenir.
* **CSS Keyframes Animasyonları:** Daktilo (typewriter) efektleri, ekranlar arası pürüzsüz panel geçişleri ve tematik animasyonlar saf CSS ile kodlanmıştır.

---

## 📂 Project Structure / Proje Yapısı

```bash
├── img/                # Visual assets (Detectives, Evidence, UI / Görsel Ögeler)
├── index.html          # Main structural entry point / Ana HTML iskeleti
├── style.css           # Custom themes, responsive grids & animations / Stil Dosyası
├── script.js           # Game engine, core logic & case database / Oyun Motoru
└── README.md           # Project documentation / Proje Dokümantasyonu
