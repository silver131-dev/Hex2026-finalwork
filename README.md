# Nelson Personal Portfolio | 個人品牌網站

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

> 🚀 **六角學院 2026 年 30 天軟體工程師體驗營 ── 最終任務實作成品**

這是一個展示個人品牌、專業服務與專案作品的現代化靜態網站。以設計師與前端工程師的雙重視角出發，強調節點切換的流暢度與響應式排版的極致細節，傳遞「像素級還原 (Pixel Perfect)」的專業態度。

🔗 **[點此觀看 Live Demo](https://silver131-dev.github.io/Hex2026-finalwork)**

---

## ✨ 核心特色 (Features)

- **📱 完美響應式設計 (RWD)：** 從手機、平板到桌機，針對不同斷點精心打磨版面細節，包含客製化的手機版橫向滑動選單與滿版卡片交疊排版。
- **⚡ 動態狀態管理 (State Management)：** 大量運用 React `useState` 實作 Tab 切換功能，連動下方服務流程與內容的即時渲染。
- **🎬 流暢的微互動 (Micro-interactions)：** 引入 Tailwind CSS 動畫與 CSS Transitions，包含圖片縮放、透明度漸變與平滑滾動 (Smooth Scrolling)，提升整體 UX 體驗。
- **🔍 搜尋引擎友善 (SEO & GEO)：** 完整配置 Next.js `metadata`，包含 Open Graph 社交媒體預覽卡片與 Local SEO 地理位置標籤。
- **🧩 模組化元件 (Component-Based)：** 嚴格遵循 React 職責分離原則，將 Navbar, Contact 等區塊拆分為獨立元件，維持乾淨的程式碼架構。

---

## 🛠️ 技術堆疊 (Tech Stack)

- **框架：** Next.js (App Router)
- **核心：** React, TypeScript
- **樣式：** Tailwind CSS
- **部署：** GitHub Pages / Vercel
- **圖示：** Google Material Symbols

---

## 📂 專案架構 (Folder Structure)

```text
📦 my-portfolio
 ┣ 📂 app               # Next.js App Router 頁面路由
 ┃ ┣ 📂 blogs           # 部落格列表與內頁
 ┃ ┣ 📂 projects        # 專案作品集頁面
 ┃ ┣ 📂 services        # 服務項目頁面
 ┃ ┣ 📜 layout.tsx      # 全域佈局與 SEO 設定檔
 ┃ ┗ 📜 page.tsx        # 首頁元件入口
 ┣ 📂 components        # 共用 UI 元件 (Navbar, Contact, etc.)
 ┣ 📂 public            # 靜態資源 (圖片、Icon)
 ┗ 📜 tailwind.config.ts # Tailwind 樣式設定
