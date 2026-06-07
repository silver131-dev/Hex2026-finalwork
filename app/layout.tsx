import type { Metadata } from "next";
import "./globals.css";

// ==========================================
// 🚀 SEO 與 GEO Meta Tags 設定區塊
// ==========================================
export const metadata: Metadata = {
  // 1. 基礎 SEO 設定
  title: "Nelson (鄧小傳) | 個人品牌網站 - 六角學院 2026 軟體工程師體驗營",
  description: "這是六角學院 2026 年 30 天軟體工程師體驗營的最終任務實作成品。展示 Nelson 的個人品牌、網頁設計、前端切版與後端開發等專業服務與專案作品。",
  keywords: ["前端工程師", "網頁設計", "平面設計", "個人品牌網站", "六角學院", "30天軟體工程師體驗營", "鄧小傳", "Nelson", "Next.js", "React", "Tailwind CSS"],
  authors: [{ name: "鄧小傳 (Nelson)" }],
  creator: "鄧小傳 (Nelson)",
  
  // 2. Open Graph (FB/LINE 分享卡片設定)
  openGraph: {
    title: "Nelson | 個人品牌網站 - 六角學院最終任務",
    description: "六角學院 2026 軟體工程師體驗營的最終任務實作成品。快來看看我的作品集！",
    // 🚨 記得把下方網址替換成你實際的 Github Pages 網址
    url: "https://silver131-dev.github.io/Hex2026-finalwork", 
    siteName: "Nelson Personal Portfolio",
    images: [
      {
        // 分享縮圖
        url: "/img/30day.png", 
        width: 1200,
        height: 630,
        alt: "Nelson 個人品牌網站縮圖",
      },
    ],
    locale: "zh_TW",
    type: "website",
  },

  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="scroll-smooth">
      <body>
        {children}
      </body>
    </html>
  );
}
