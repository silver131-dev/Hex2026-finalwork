export default function Subscription() {
  return (
    // 🌟 在這裡加上 style 載入幾何底圖
    <section 
      className="relative bg-primary-900 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/img/subscription/subscription_bg.png')" }} 
    >
      
      {/* 黑色半透明遮罩：疊在底圖上方，讓底圖變暗 */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 內容容器：包含筆電圖片與右側表單 */}
      <div className="relative z-10 mx-auto flex max-w-[1328px] flex-col gap-0 md:flex-row md:gap-6">
        
        {/* 左側圖片 */}
        <img 
          src="/img/subscription/subscription.png" 
          alt="訂閱 CTA 裝飾圖片" 
          className="flex-1 w-full h-64 md:h-auto object-cover md:max-w-[526px]" 
        />

        {/* 右側文字與表單 */}
        <div className="flex flex-col justify-center px-4 py-10 text-neutral-0 w-full md:max-w-[746px] lg:px-10 lg:py-20">
          <p className="text-label-md mb-2">電子報訂閱</p>
          <h2 className="text-[40px] md:text-[64px] font-bold leading-tight mb-6 break-all">
            SUBSCRIPTION
          </h2>
          
          <p className="text-paragraph-sm md:text-paragraph-md opacity-90 mb-8 leading-relaxed">
            你也在追求設計美感與技術落地的完美平衡嗎？作為資深設計師兼工程師，我深知跨領域協作的痛點。訂閱電子報，我將分享如何利用 AI 工具提升產能！
          </p>

          <form className="flex w-full max-w-[500px] border border-neutral-0/50 rounded-full bg-black/40 p-1.5 backdrop-blur-sm focus-within:border-neutral-0 transition-colors">
            <input 
              type="email" 
              placeholder="電子信箱" 
              className="flex-1 bg-transparent px-6 text-neutral-0 placeholder:text-neutral-0/70 focus:outline-none"
              required
            />
            <button 
              type="submit" 
              className="bg-neutral-0 text-neutral-900 px-8 py-2.5 rounded-full text-label-md font-bold hover:bg-primary-100 transition-colors shadow-sm"
            >
              送出
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}