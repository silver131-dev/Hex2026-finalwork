export default function Services() {
  
  const serviceCards = [
    {
      id: 1,
      enTitle: "GRAPHIC",
      zhTitle: "平面設計",
      desc: "從品牌識別到視覺傳達，用專業設計精準傳遞核心價值",
      icon: "format_paint", // Google Material Icon 名稱
    },
    {
      id: 2,
      enTitle: "WEBSITE",
      zhTitle: "網頁設計",
      desc: "美感易用並重，以 Figma 打造符合直覺的數位體驗",
      icon: "monitor",
    },
    {
      id: 3,
      enTitle: "FRONTEND",
      zhTitle: "前端切版",
      desc: "精準轉譯設計稿細節，建構流暢穩定 RWD 響應式網頁",
      icon: "web",
    },
    {
      id: 4,
      enTitle: "BACKEND",
      zhTitle: "後端開發",
      desc: "佈署穩定系統架構，串接 API 並確保數據處理安全",
      icon: "dns",
    },
  ];

  return (
    // 外層深色背景區塊，設定上下 padding
    <section className="w-full bg-primary-900 py-16 md:py-24">
      {/* 限制最大寬度並置中的 Container */}
      <div className="max-w-[1328px] mx-auto px-4">
        
        {/* 上方標題區塊 */}
        <div className="mb-12">
          <p className="text-label-md text-neutral-0 opacity-80 mb-2">服務項目</p>
          <h2 className="text-[40px] md:text-[64px] font-bold text-neutral-0 leading-tight">
            SERVICES
          </h2>
        </div>

        {/* 下方卡片網格 (Grid) 
            - grid-cols-1: 手機版一欄
            - md:grid-cols-2: 平板版兩欄
            - lg:grid-cols-4: 電腦版四欄
            - gap-6: 卡片之間的間距
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCards.map((card) => (
            // 單一卡片
            <div 
              key={card.id} 
              className="bg-primary-50 hover:bg-primary-100 rounded-xl p-6 md:p-8 flex flex-col group hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
            >
              {/* 卡片頂部：英文標題與 Icon */}
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-heading-xs text-neutral-900">{card.enTitle}</h3>
                <span className="material-symbols-outlined text-neutral-500 text-[20px]">
                  {card.icon}
                </span>
              </div>

              {/* 中文標題與描述 */}
              <div className="mb-8 flex-grow">
                <h4 className="text-heading-sm text-neutral-900 mb-4">{card.zhTitle}</h4>
                <p className="text-paragraph-sm text-neutral-700">{card.desc}</p>
              </div>

              {/* 底部圓形箭頭按鈕 */}
              <div className="mt-auto flex justify-start">
                <button className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center text-neutral-0 group-hover:bg-primary-500 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">
                    arrow_outward
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}