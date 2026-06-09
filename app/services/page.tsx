"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Link from "next/link";

export default function ServicesPage() {
  // === 1. Tab 狀態管理：預設啟用 'graphic' (平面設計) ===
  const [activeTab, setActiveTab] = useState("graphic");

  // === 2. FAQ 狀態管理 ===
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(2); 
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // ================= 區塊資料 =================
  /*這個雖然不符合設計稿，但這個功能好像很有趣，先保留*/
  const serviceCards = [
    { id: "graphic", icon: "draw", en: "GRAPHIC", zh: "平面設計" },
    { id: "website", icon: "desktop_windows", en: "WEBSITE", zh: "網頁設計" },
    { id: "frontend", icon: "web", en: "FRONTEND", zh: "前端切版" },
    { id: "backend", icon: "dns", en: "BACKEND", zh: "後端開發" },
  ];

  const serviceStepsData: Record<string, { num: number; title: string; desc: string }[]> = {
    graphic: [
      { num: 1, title: "需求訪談與視覺定位", desc: "深度溝通品牌核心價值，確認目標受眾與視覺風格，制定符合商業邏輯的設計藍圖。" },
      { num: 2, title: "概念發展與方案提案", desc: "將抽象概念具象化，提供多層次的設計提案，確保視覺語言精準傳遞品牌特點。" },
      { num: 3, title: "匠心編排與細節校正", desc: "針對初稿進行多輪細緻微調，優化排版層次與色彩表現，追求美學與易讀性的完美平衡。" },
      { num: 4, title: "專業檔案交付結案", desc: "提供完整原始碼與多樣格式輸出，並附上使用規範建議，確保品牌形象在各處始終如一。" },
    ],
    website: [
      { num: 1, title: "網站架構與企劃規劃", desc: "分析競品與使用者輪廓，繪製 Sitemap 與 Wireframe，確保網站動線符合邏輯。" },
      { num: 2, title: "UI/UX 介面視覺設計", desc: "依照品牌規範延伸數位介面設計，著重跨裝置的響應式 (RWD) 視覺體驗。" },
      { num: 3, title: "動態原型與易用性測試", desc: "製作可互動的 Prototype，模擬真實操作情境，並進行內部測試以優化流程。" },
      { num: 4, title: "設計規範與交付開發", desc: "整理完整的 Design System 與切圖標註，確保前端工程師能無縫接軌開發。" },
    ],
    frontend: [
      { num: 1, title: "設計稿檢視與技術評估", desc: "與設計師對焦互動細節，評估前端技術選型與效能優化策略。" },
      { num: 2, title: "RWD 切版與組件開發", desc: "使用 React/Next.js 等現代框架建構模組化組件，實現像素級還原 (Pixel Perfect)。" },
      { num: 3, title: "API 串接與狀態管理", desc: "與後端對接資料規格，串接 API 並處理各種非同步狀態與錯誤防呆機制。" },
      { num: 4, title: "效能優化與上線測試", desc: "進行跨瀏覽器相容性測試、Lighthouse 效能跑分優化，確保順暢的使用者體驗。" },
    ],
    backend: [
      { num: 1, title: "系統架構與資料庫設計", desc: "根據業務需求規劃關聯式/非關聯式資料庫結構，制定高擴充性的系統架構。" },
      { num: 2, title: "API 介面設計與開發", desc: "遵循 RESTful 或 GraphQL 規範，開發穩定、安全且高效率的後端 API。" },
      { num: 3, title: "第三方服務串接", desc: "整合金流、物流、電子發票或社群登入等外部服務，完善系統功能。" },
      { num: 4, title: "伺服器部署與資安檢測", desc: "配置雲端主機 (AWS/GCP)，建立 CI/CD 自動化部署流程，並進行基礎資安防護。" },
    ]
  };

  // 取得目前選中 Tab 的對應流程資料
  const currentSteps = serviceStepsData[activeTab];

  const userCases = [
    {
      id: 1,
      img: "/Hex2026-finalwork/img/services/service_case_1.png", 
      tags: "平面設計 ‧ 網頁設計",
      date: "Oct 16, 2022",
      title: "品牌視覺與電商整合，多肉植物品牌電商建置",
      desc: "從品牌識別設計到 RWD 響應式網站開發，打造療癒系植栽購物體驗",
    },
    {
      id: 2,
      img: "/Hex2026-finalwork/img/services/service_case_2.png", 
      tags: "平面設計 ‧ 網頁設計 ‧ 前端切版",
      date: "Oct 16, 2022",
      title: "數位產品 UI/UX 設計，個人化財務視覺化軟體",
      desc: "運用數據視覺化邏輯，將複雜的財務數據轉化為直覺的個人化操作介面",
    },
  ];

  const faqs = [
    { num: "01", question: "設計提案後包含幾次修改機會？", answer: "通常我們會在合約中明訂 2 至 3 次的大幅修改機會。在設計初期確認風格後，後續多為細節微調，確保能順利且高效率地完成您的專案。" },
    { num: "02", question: "結案時我會收到哪些格式的檔案？", answer: "根據專案性質，您將會收到原始設計檔（如 Figma, AI 檔）、網頁切版原始碼（HTML/CSS/JS 或 React 元件），以及各種尺寸的輸出圖檔（PNG, SVG, WebP）。" },
    { num: "03", question: "平面設計的成果，未來能直接應用在網頁嗎？", answer: "沒問題。由於我兼具 UI/UX 設計與前端工程背景，在執行平面設計時會預先考量數位載體的適配性。這意味著您的品牌識別能無縫轉譯至網頁介面，不僅節省後續開發的重複溝通，更能確保品牌在不同平台上的視覺品質。" },
    { num: "04", question: "完成一套完整的設計流程需要多久？", answer: "視專案複雜度而定，一般約需 10 到 14 個工作日。透過嚴格執行的「四步驟流程」，我們能確保每個階段都有明確的進度產出，有效避免時程延宕。若有特定的上線期限，歡迎在訪談階段提出，我會為您評估最合適的排程。" },
  ];

  return (
    <main className="min-h-screen w-full bg-white">
      <Navbar />

      {/* ================= Hero 區塊 (包含標題與浮動卡片) ================= */}
      <section 
        className="relative w-full py-16 md:py-24 bg-cover bg-center flex flex-col items-center justify-center text-neutral-0"
        style={{ backgroundImage: "url('/Hex2026-finalwork/img/services/service_banner.png')" }}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        
        <div className="relative z-10 text-center mb-12 md:mb-16">
          <h1 className="text-[40px] md:text-[64px] font-bold tracking-wider mb-2 uppercase">SERVICES</h1>
          <p className="text-[20px] md:text-[24px] font-bold tracking-widest">服務項目</p>
        </div>

        {/* 服務卡片群組 (Tabs) 單純浮在圖片上 */}
        <div className="relative z-10 w-full max-w-[1076px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {serviceCards.map((card) => {
              const isActive = activeTab === card.id;

              return (
                <div 
                  key={card.id} 
                  onClick={() => setActiveTab(card.id)} 
                  className={`flex flex-col items-center justify-center aspect-square md:aspect-[4/3] p-6 transition-colors duration-300 cursor-pointer shadow-xl ${
                    isActive 
                      ? "bg-[#2A211D] text-neutral-0" 
                      : "bg-white text-[#2A211D] hover:bg-neutral-100" 
                       }`}
                       >

                  <span className="material-symbols-outlined text-[32px] md:text-[40px] mb-4">
                   {card.icon}
                  </span>
                  <p className="text-[12px] md:text-[14px] tracking-widest font-bold mb-1">{card.en}</p>
                  <h3 className="text-[18px] md:text-[20px] font-bold">{card.zh}</h3>
                </div>
              );
              })}
          </div>
        </div>
       </section>
    

      {/* ================= 下半部深色背景：服務流程 Service Steps ================= */}
      <section className="bg-[#2A211D] relative w-full pt-16 md:pt-24 pb-12 md:pb-24 text-neutral-0">
        <div className="max-w-[1328px] mx-auto px-10">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="w-full md:w-1/3">
              <p className="text-[14px] text-neutral-0/60 mb-2 uppercase tracking-widest font-bold">SERVICE STEPS</p>
              <h2 className="text-[32px] md:text-[40px] font-bold tracking-wider">服務流程</h2>
            </div>
            
            <div className="w-full md:w-2/3 relative">
              <div className="absolute left-[15px] md:left-[19px] top-[16px] bottom-[16px] w-[2px] bg-neutral-0/20 z-0"></div>
              
              <div className="flex flex-col gap-12 relative z-10">
                {currentSteps.map((step) => (
                  <div key={step.num} className="flex gap-6 md:gap-8 animate-fade-in-down">
                    <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full bg-white text-[#2A211D] flex items-center justify-center font-bold text-[16px] md:text-[18px] shadow-lg z-10">
                      {step.num}
                    </div>
                    <div className="pt-1 md:pt-2">
                      <h3 className="text-[20px] md:text-[24px] font-bold mb-3 tracking-wide">{step.title}</h3>
                      <p className="text-[15px] md:text-[16px] text-neutral-0/70 leading-relaxed font-medium">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 下半部白底區塊：客戶案例 USER CASE ================= */}
      <section className="w-full max-w-[1920px] mx-auto bg-white py-20 px-10">
        <div className="max-w-[1328px] mx-auto">
          <div className="mb-12">
            <p className="text-[14px] text-neutral-500 font-bold tracking-widest mb-2 uppercase">USER CASE</p>
            <h2 className="text-[32px] md:text-[40px] font-bold text-neutral-900 tracking-wider">客戶案例</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {userCases.map((item) => (
              <div key={item.id} className="flex flex-col group cursor-pointer">
                <div className="w-full aspect-[16/10] bg-neutral-200 overflow-hidden mb-6">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex justify-between items-center text-[13px] font-bold text-neutral-500 mb-4">
                  <span>{item.tags}</span>
                  <span>{item.date}</span>
                </div>
                <h3 className="text-[22px] md:text-[24px] font-bold text-neutral-900 mb-4 group-hover:text-primary-500 transition-colors">
                  {item.title}
                </h3>
                <div className="flex justify-between items-start gap-6 mt-auto">
                  <p className="text-[16px] text-neutral-600 leading-relaxed pr-4">
                    {item.desc}
                  </p>
                  <button className="w-12 h-12 shrink-0 rounded-full bg-[#3D3A38] text-white flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">arrow_outward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 淺色背景區塊：常見問題 FAQ ================= */}
      <section className="w-full max-w-[1920px] mx-auto bg-primary-50 py-20 px-10">
        <div className="max-w-[1328px] mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
          
          <div className="w-full md:w-1/3">
            <p className="text-[14px] text-neutral-500 font-bold tracking-widest mb-2 uppercase">FAQ</p>
            <h2 className="text-[32px] md:text-[40px] font-bold text-neutral-900 tracking-wider">常見問題</h2>
          </div>

          <div className="w-full md:w-2/3 border-t border-neutral-300">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={faq.num} className="border-b border-neutral-300">
                  <div 
                    className="flex justify-between items-center py-6 cursor-pointer hover:text-primary-500 transition-colors group"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-[18px] md:text-[20px] font-bold text-neutral-900 group-hover:text-primary-500">{faq.num}</span>
                      <h3 className="text-[18px] md:text-[20px] font-bold text-neutral-900 group-hover:text-primary-500">{faq.question}</h3>
                    </div>
                    <span className="material-symbols-outlined text-neutral-500 text-[24px]">
                      {isOpen ? "expand_less" : "expand_more"}
                    </span>
                  </div>

                  {isOpen && (
                    <div className="pb-8 pl-[46px] pr-4 md:pr-12 text-[15px] md:text-[16px] text-neutral-700 leading-relaxed font-medium animate-fade-in-down">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}