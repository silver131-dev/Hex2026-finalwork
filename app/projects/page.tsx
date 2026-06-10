"use client";

// 🚨 1. 修正：合併重複的 import
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

// 擴充型別：加入 isReady 來判斷該專案是否已經可以點擊
type Project = {
  id: number;
  title: string;
  desc: string;
  date: string;
  tags: string[];
  imgSrc: string;
  isReady: boolean;
  fullDesc?: string;     
  details?: string;      
  mockupImg?: string;    
};

export default function ProjectsPage() {
  const categories = ["全部", "平面設計", "網頁設計", "前端切版", "後端開發"];
  const [activeCategory, setActiveCategory] = useState("全部");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // ==========================================
  // 🚨 2. 左右滑動控制邏輯 (這裡用 HTMLDivElement 因為下面包覆的是 div)
  // ==========================================
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 2; 
      
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

  const projects: Project[] = [
    {
      id: 1,
      title: "品牌視覺與電商整合，多肉植物品牌電商建置",
      desc: "從品牌識別設計到 RWD 響應式網站開發，打造療癒系植栽購物體驗",
      date: "Oct 16, 2025",
      tags: ["平面設計", "網頁設計"],
      imgSrc: "/Hex2026-finalwork/img/projects/project_1.png", 
      isReady: true,
      fullDesc: "我們將大自然的平靜感轉化為數位圖像，透過揉合大地色系與極簡排版，為「PLANTIQUE LIFE」建構出專屬的視覺語彙。在開發過程中，我們更時刻審視動態的極致追求，確保從品牌 Logo 到每一個組件的轉場，皆能散發柔和的純淨。",
      details: "設計原則：純粹極簡、日系風格、體驗視覺\n開發方式：Bootstrap, Javascript",
      mockupImg: "/Hex2026-finalwork/img/projects/project_1_mockup.png", 
    },
    {
      id: 2,
      title: "數位產品 UI/UX 設計，個人化財務視覺化軟體",
      desc: "運用數據視覺化邏輯，將複雜的財務數據轉化為直覺的個人化操作介面",
      date: "Oct 16, 2025",
      tags: ["平面設計", "網頁設計", "前端切版"],
      imgSrc: "/Hex2026-finalwork/img/projects/project_2.png",
      isReady: false,
    },
    {
      id: 3,
      title: "品牌識別與包裝設計，法式甜點品牌視覺重塑",
      desc: "以優雅、輕盈的視覺語言，精準定位高質感甜點市場的品牌形象",
      date: "Oct 16, 2025",
      tags: ["前端切版", "後端開發"],
      imgSrc: "/Hex2026-finalwork/img/projects/project_3.png", 
      isReady: false,
    },
    {
      id: 4,
      title: "金融科技系統設計，Open Bank API 數據整合平台",
      desc: "串接第三方 API 並構建穩定的後端架構，確保安全的資產管理後台",
      date: "Oct 16, 2025",
      tags: ["網頁設計", "前端切版", "後端開發"],
      imgSrc: "/Hex2026-finalwork/img/projects/project_4.png",
      isReady: false,
    },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "全部") return true;
    return project.tags.includes(activeCategory);
  });

  return (
    <main className="min-h-screen w-full bg-white relative">
      <Navbar />

      {/* ================= Hero 區塊 ================= */}
      <section 
        className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center flex flex-col items-center justify-center text-neutral-0"
        style={{ backgroundImage: "url('/Hex2026-finalwork/img/projects/project_banner.png')" }}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-[40px] md:text-[64px] font-bold tracking-wider mb-2 uppercase">PROJECTS</h1>
          <p className="text-[20px] md:text-[24px] font-bold tracking-widest">專案作品</p>
        </div>
      </section>

      {/* ================= 分類篩選列 (加入左右滑動與三角形) ================= */}
      <section className="w-full max-w-[1076px] mx-auto px-4 py-8 md:py-12">
        <div className="relative border-b border-neutral-200 pb-4 md:pb-8">

          {/* === 手機版：左側三角形按鈕 === */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white md:hidden shadow-[10px_0_15px_10px_rgba(255,255,255,1)]"
          >
            <span className="material-symbols-outlined text-[32px] text-neutral-900">arrow_left</span>
          </button>

          {/* === 滾動軌道容器 === */}
          <div
            ref={scrollRef} // 綁定 ref
            className="flex flex-nowrap md:flex-wrap items-center md:justify-center gap-2 md:gap-8 overflow-x-auto scroll-smooth px-8 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                // 🚨 加上 shrink-0 防止手機版按鈕被擠壓變形
                className={`shrink-0 px-5 md:px-8 py-2 md:py-3 text-[14px] md:text-[16px] font-bold tracking-wider transition-colors duration-300 ${
                  activeCategory === cat ? "bg-[#2A211D] text-white" : "bg-transparent text-neutral-500 hover:text-neutral-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* === 手機版：右側三角形按鈕 === */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white md:hidden shadow-[-10px_0_15px_10px_rgba(255,255,255,1)]"
          >
            <span className="material-symbols-outlined text-[32px] text-neutral-900">arrow_right</span>
          </button>

        </div>
      </section>

         {/* ================= 專案列表 ================= */}
      <section className="w-full max-w-[1076px] mx-auto px-4 pb-12 md:pb-24 flex flex-col gap-8 md:gap-16">
        {filteredProjects.map((project) => (
          <div key={project.id} className="relative w-full h-[360px] md:h-[480px] group overflow-hidden bg-neutral-100">
            <img src={project.imgSrc} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-12 w-[calc(100%-32px)] md:w-[420px] bg-white/95 backdrop-blur-sm p-8 md:p-10 flex flex-col items-center text-center shadow-2xl">
              <p className="text-[12px] text-neutral-500 font-bold mb-2">{project.date}</p>
              <p className="text-[13px] text-neutral-900 font-bold tracking-widest mb-6">{project.tags.join("・")}</p>
              <h3 className="text-[20px] md:text-[24px] font-bold text-neutral-900 leading-snug mb-4">{project.title}</h3>
              <p className="text-[14px] text-neutral-600 leading-relaxed mb-8">{project.desc}</p>
              
              {project.isReady ? (
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="bg-[#2A211D] text-white px-8 py-2.5 rounded-full text-[13px] font-bold tracking-widest hover:bg-primary-500 transition-colors"
                >
                  前往專案
                </button>
              ) : (
                <button 
                  disabled
                  className="bg-neutral-200 text-neutral-400 px-8 py-2.5 rounded-full text-[13px] font-bold tracking-widest cursor-not-allowed"
                >
                  專案建置中
                </button>
              )}
            </div>
          </div>
        ))}
      </section>

      <Contact />

      {/* ================= 燈箱 Modal 區塊 ================= */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] bg-black/70 flex items-start justify-center overflow-y-auto pt-10 pb-10 px-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)} 
        >
          <div 
            className="relative w-full max-w-[800px] bg-[#FDFCFB] shadow-2xl mt-4 md:mt-10"
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>

            <div className="w-full h-[250px] md:h-[400px]">
              <img 
                src={selectedProject.imgSrc} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 md:p-12">
              <div className="flex justify-between items-center text-[13px] font-bold text-neutral-500 mb-6">
                <span>{selectedProject.tags.join(" ‧ ")}</span>
                <span>{selectedProject.date}</span>
              </div>
              
              <h2 className="text-[28px] md:text-[36px] font-bold text-neutral-900 leading-tight mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-[16px] md:text-[18px] text-neutral-700 font-bold mb-8">
                {selectedProject.desc}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 border-t border-neutral-200 pt-8">
                <div className="md:col-span-2">
                  <p className="text-[15px] text-neutral-600 leading-loose">
                    {selectedProject.fullDesc}
                  </p>
                </div>
                <div className="md:col-span-1">
                  <p className="text-[14px] text-neutral-500 leading-loose whitespace-pre-line">
                    {selectedProject.details}
                  </p>
                </div>
              </div>

              {selectedProject.mockupImg && (
                <div className="w-full bg-neutral-100">
                  <img 
                    src={selectedProject.mockupImg} 
                    alt={`${selectedProject.title} 設計展示`} 
                    className="w-full h-auto"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}