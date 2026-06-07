import Link from "next/link";

export default function Projects() {
  const recentProjects = [
    {
      id: 1,
      title: "品牌視覺與電商整合，多肉植物品牌電商建置",
      desc: "從品牌識別設計到 RWD 響應式網站開發，打造療癒系植栽購物體驗",
      date: "Oct 16, 2025",
      tags: ["平面設計", "網頁設計"],
      imgSrc: "/img/projects/project_1.png", 
    },
    {
      id: 2,
      title: "數位產品 UI/UX 設計，個人化財務視覺化軟體",
      desc: "運用數據視覺化邏輯，將複雜的財務數據轉化為直覺的個人化操作介面",
      date: "Oct 16, 2025",
      tags: ["平面設計", "網頁設計", "前端切版"],
      imgSrc: "/img/projects/project_2.png",
    },{
      id: 3,
      title:"品牌識別與包裝設計，法式甜點品牌視覺重塑",
      desc:"以溫暖、輕盈的視覺語言，精準定位高質感甜點市場的品牌形象",
      date: "Oct 16, 2025",
      tags: ["前端切版・後端開發"],
      imgSrc: "/img/projects/project_3.png",
    }

  ];

  return (
    <section className="w-full bg-primary-50 py-16 md:py-24">
      {/* 🚨 這裡的 max-w 也調整為 1076px，與專案頁的寬度完全一致，確保視覺比例相同 */}
      <div className="max-w-[1076px] mx-auto px-4">
        
        {/* ================= 上方標題與探索更多按鈕 ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-label-md text-neutral-900 font-bold mb-2">專案作品</p>
            <h2 className="text-[40px] md:text-[64px] font-bold text-neutral-900 leading-none uppercase tracking-wide">
              PROJECTS
            </h2>
          </div>
          
          <Link 
            href="/projects" 
            className="border border-neutral-900 text-neutral-900 px-6 py-2.5 rounded-full text-label-sm hover:bg-neutral-900 hover:text-neutral-0 transition-colors inline-block text-center font-bold tracking-widest"
          >
            探索更多作品
          </Link>
        </div>

        {/* ================= 專案卡片列表 (完全比照專案頁排版) ================= */}
        <div className="flex flex-col gap-8 md:gap-16">
          {recentProjects.map((project) => (
            /* 🚨 外層使用 Link 包覆，並套用專案頁的 relative w-full h-[360px] md:h-[480px] 滿版結構 */
            <Link 
              href="/projects" 
              key={project.id} 
              className="relative w-full h-[360px] md:h-[480px] group overflow-hidden bg-neutral-100 shadow-sm block"
            >
              
              {/* 底圖 (加入 hover 放大動畫) */}
              <img 
                src={project.imgSrc} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              
              {/* 左側浮動白框 (垂直置中) */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-12 w-[calc(100%-32px)] md:w-[420px] bg-white/95 backdrop-blur-sm p-8 md:p-10 flex flex-col items-center text-center shadow-2xl">
                
                <p className="text-[12px] text-neutral-500 font-bold mb-2">
                  {project.date}
                </p>
                <p className="text-[13px] text-neutral-900 font-bold tracking-widest mb-6">
                  {project.tags.join(" ‧ ")}
                </p>
                <h3 className="text-[20px] md:text-[24px] font-bold text-neutral-900 leading-snug mb-4">
                  {project.title}
                </h3>
                <p className="text-[14px] text-neutral-600 leading-relaxed mb-8">
                  {project.desc}
                </p>
                
                {/* 🚨 這裡把原本的 <button> 換成 <span> 
                  因為 HTML 規定不能在 <a> (Link) 裡面包 <button>。
                  我們用 <span> 畫出按鈕的外觀，加上 group-hover 讓滑鼠移到卡片上時按鈕會跟著變色！
                */}
                <span className="bg-[#2A211D] text-white px-8 py-2.5 rounded-full text-[13px] font-bold tracking-widest group-hover:bg-primary-500 transition-colors inline-block">
                  前往專案
                </span>
                
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}