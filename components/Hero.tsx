/**
 * Hero Section
 * - 對應 Figma：首頁 Hero（Hello / I'm Nelson）
 * - 左右兩側為 50/50 區塊，並保持等高
 * - 裝飾物（花花、色塊、虛線）依照 Figma 精準定位
 */

export default function Hero() {
  return (
   <section className="relative w-full min-h-[80vh] overflow-hidden bg-primary-50 pt-20 pb-28 md:pt-32 md:pb-40">
 
 {/* ====== 主要內容容器 ====== */}
  <div className="max-w-[1200px] mx-auto px-8 flex flex-col-reverse md:flex-row items-stretch justify-between gap-10 relative z-10">

        {/* =========================================
            左側：文字區塊
        ========================================== */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left relative">

          {/* 🌸 裝飾：左上花花 */}
          <img
            src="/Hex2026-finalwork/img/index/index_decora_3.png"
            alt=""
            className="absolute -top-10 -left-10 w-[120px] animate-spin-slow opacity-80 z-0"
          />

          {/* 🌸 裝飾：左上虛線 */}
          <img
            src="/Hex2026-finalwork/img/index/index_decora_5.png"
            alt=""
            className="absolute -top-12 left-12 w-[120px] opacity-80 z-0"
          />

          {/* ====== 主標題 ====== */}
          <h1 className="font-bold text-neutral-900 leading-tight mb-6 relative z-10">
            <span className="block text-[40px] md:text-[64px] mb-2">Hello</span>
            <span className="block text-[40px] md:text-[64px]">I'm Nelson</span>
          </h1>

          {/* ====== 副標 ====== */}
          <p className="text-paragraph-md text-neutral-700 max-w-[420px] mx-auto md:mx-0 mb-10 relative z-10">
            我是一個擁有 10 年經驗的 UI/UX 設計師 和 前端工程師，喜歡把美學和程式結合，打造一個又一個精美的網頁設計！
          </p>

          {/* ====== 按鈕組 ====== */}
          <div className="flex gap-4 justify-center md:justify-start relative z-10">
            <button className="bg-neutral-900 text-neutral-0 px-8 py-3 rounded-full text-label-md hover:bg-neutral-700 transition-colors shadow-lg">
              與我聯絡
            </button>
            <button className="border border-neutral-900 text-neutral-900 px-8 py-3 rounded-full text-label-md hover:bg-neutral-900 hover:text-neutral-0 transition-colors">
              我的履歷
            </button>
          </div>

          {/* 🌸 裝飾：左下花花 */}
          <img
            src="/Hex2026-finalwork/img/index/index_decora_3.png"
            alt=""
            className="absolute -bottom-16 left-24 w-[120px] animate-spin-slow opacity-80 z-0"
          />

          {/* 🌸 裝飾：左下虛線 */}
          <img
            src="/Hex2026-finalwork/img/index/index_decora_5.png"
            alt=""
            className="hidden md:block absolute -bottom-14 left-52 w-32"
          />
        </div>

        {/* =========================================
            右側：人物照片區塊
        ========================================== */}
        {/* ================= 右側：照片區塊 ================= */}
        <div className="flex-[1.2] w-full max-w-[600px] flex items-center justify-center md:justify-end relative mt-10 md:mt-0">
  
         {/* 裝飾：左上橘色塊 */}
          <img
           src="/Hex2026-finalwork/img/index/index_decora_1.png"
           alt=""
           className="absolute -top-16 -left-16 w-[140px] md:w-56 animate-float z-20"
         />

          {/* 人物照片 */}
          <img
           src="/Hex2026-finalwork/img/index/index_person.png"
           alt="Nelson"
           className="w-full h-auto object-cover max-w-[600px] shadow-[0_8px_24px_rgba(0,0,0,0.15)] relative z-10"
          />

          {/* 裝飾：右側花花 */}
          <img
           src="/Hex2026-finalwork/img/index/index_decora_3.png"
           alt=""
           className="absolute top-1/2 -right-10 md:-right-16 animate-spin-slow opacity-80 -translate-y-1/2"
          />

         {/* 裝飾：右下橘色塊 */}
         <img
         src="/Hex2026-finalwork/img/index/index_decora_2.png"
         alt=""
         className="absolute -bottom-6 right-0 w-[140px] animate-float z-20"
         />
        </div>

      </div>
    </section>
  );
}
