export default function Contact() {
  return (
    <section id="contact" className="w-full bg-primary-900 py-16 md:py-24">
      <div className="max-w-[1328px] mx-auto px-4">
        
        {/* 電腦版分為左右兩欄，手機版上下堆疊 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          
          {/* ================= 左欄：聯絡資訊 ================= */}
          <div className="flex flex-col text-neutral-0">
            <p className="text-label-md mb-2">與我聯絡</p>
            <h2 className="text-[56px] md:text-[72px] font-bold leading-tight mb-6 tracking-wide">
              CONTACT
            </h2>
            
            <p className="text-paragraph-sm opacity-90 mb-12">
              若有數位產品設計和開發相關問題<br />
              歡迎填寫表單 或 直接與我聯絡！
            </p>

            {/* 社群圖示按鈕 (IG, LINE, LinkedIn) */}
            <div className="flex gap-4 mb-10">
              {/* Instagram */}
              <a href="#" className="w-12 h-12 rounded-full border border-neutral-0 flex items-center justify-center hover:bg-neutral-0 hover:text-primary-900 transition-colors group">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* Line */}
              <a href="#" className="w-12 h-12 rounded-full border border-neutral-0 flex items-center justify-center hover:bg-neutral-0 hover:text-primary-900 transition-colors group text-[10px] font-bold">
                LINE
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-12 h-12 rounded-full border border-neutral-0 flex items-center justify-center hover:bg-neutral-0 hover:text-primary-900 transition-colors group font-bold font-serif text-lg">
                in
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 text-neutral-0/80 hover:text-neutral-0 transition-colors mt-auto cursor-pointer">
              <span className="material-symbols-outlined text-[24px]">mail</span>
              <span className="text-label-md">service@hexschool.com</span>
            </div>
          </div>

          {/* ================= 右欄：聯絡表單 ================= */}
          <form className="flex flex-col gap-6">
            
            {/* 第一排：姓名與手機號碼並排 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="姓名" 
                className="w-full bg-transparent border border-neutral-0/50 rounded-full px-6 py-3 text-neutral-0 placeholder:text-neutral-0/70 focus:outline-none focus:border-neutral-0 transition-colors"
                required
              />
              <input 
                type="tel" 
                placeholder="手機號碼" 
                className="w-full bg-transparent border border-neutral-0/50 rounded-full px-6 py-3 text-neutral-0 placeholder:text-neutral-0/70 focus:outline-none focus:border-neutral-0 transition-colors"
              />
            </div>

            {/* 第二排：電子信箱 */}
            <input 
              type="email" 
              placeholder="電子信箱" 
              className="w-full bg-transparent border border-neutral-0/50 rounded-full px-6 py-3 text-neutral-0 placeholder:text-neutral-0/70 focus:outline-none focus:border-neutral-0 transition-colors"
              required
            />

            {/* 第三排：備註 (多行輸入框，圓角設計稍微加大) */}
            <textarea 
              placeholder="備註" 
              rows={4}
              className="w-full bg-transparent border border-neutral-0/50 rounded-[32px] px-6 py-4 text-neutral-0 placeholder:text-neutral-0/70 focus:outline-none focus:border-neutral-0 transition-colors resize-none"
            ></textarea>

            {/* 提交按鈕 */}
            <button 
              type="submit" 
              className="w-full bg-neutral-0 text-primary-900 font-bold py-3 mt-2 rounded-full hover:bg-primary-100 transition-colors shadow-sm"
            >
              送出
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}