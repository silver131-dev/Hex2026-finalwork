"use client"; // 🚨 只要用到 useState，第一行一定要加這個！

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  // 控制手機版選單開關的狀態
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 切換選單的函式
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault(); // 阻止任何預設跳轉行為
    
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      // 呼叫瀏覽器原生 API 進行平滑滾動
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    
    // 如果是手機版，點擊後自動關閉選單
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full bg-primary-50 py-4 px-6 md:px-12 flex justify-between items-center z-50 relative">
      
      {/* ================= 左側 Logo ================= */}
      <Link href="/" className="text-heading-sm font-bold text-neutral-900 tracking-wider">
        Nelson
      </Link>

      {/* ================= 右側 電腦版選單 (Desktop) ================= */}
      <div className="hidden md:flex items-center gap-8 text-label-sm font-bold text-neutral-500">
        <Link href="/services" className="hover:text-neutral-900 transition-colors uppercase">
          服務項目
        </Link>
        <Link href="/projects" className="hover:text-neutral-900 transition-colors uppercase">
          專案作品
        </Link>
        <Link href="/blogs" className="hover:text-neutral-900 transition-colors uppercase">
          部落格
        </Link>
      {/* 🚨 1. 把 Link 換成 button，並綁定 handleScrollToContact */}
        <button 
          onClick={handleScrollToContact} 
          className="hover:text-neutral-900 transition-colors uppercase cursor-pointer"
        >
          Contact
        </button>
      </div>

      {/* ================= 手機版 漢堡按鈕 (Mobile Button) ================= */}
      <button 
        className="md:hidden text-neutral-900 flex items-center justify-center"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <span className="material-symbols-outlined text-[32px]">
          {isMenuOpen ? "close" : "menu"} {/* 開啟時顯示 X，關閉時顯示三條線 */}
        </span>
      </button>

      {/* ================= 手機版 下拉選單 (Mobile Dropdown) ================= */}
      {isMenuOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-primary-50 shadow-lg flex flex-col items-center py-6 gap-6 md:hidden z-40 border-t border-neutral-200">
          {/* 🚨 注意這裡的 onClick：點擊連結跳轉後，要自動把選單關起來！ */}
          <Link href="/services" onClick={() => setIsMenuOpen(false)} className="text-label-md font-bold text-neutral-900 uppercase">
            服務項目
          </Link>
          <Link href="/projects" onClick={() => setIsMenuOpen(false)} className="text-label-md font-bold text-neutral-900 uppercase">
            專案作品
          </Link>
          <Link href="/blogs" onClick={() => setIsMenuOpen(false)} className="text-label-md font-bold text-neutral-900 uppercase">
            部落格
          </Link>
        {/* 🚨 2. 把 Link 換成 button，並綁定 handleScrollToContact */}
          <button 
            onClick={handleScrollToContact} 
            className="text-label-md font-bold text-neutral-900 uppercase cursor-pointer"
          >
            Contact
          </button>
        </div>
      )}

    </nav>
  );
}