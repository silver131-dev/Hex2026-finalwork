import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Link from "next/link";

// 🚨 加上 TypeScript 型別定義，確保傳入的資料不會出錯
type PostMeta = {
  id: number;
  title: string;
  tags: string;
  date: string;
  views: number;
  shares: number;
  imgSrc: string;
  subtitle?: string; // 加上問號代表是選填項目
};

type BlogLayoutProps = {
  children: ReactNode; // React 元件的標準寫法，代表包在裡面的內容
  meta: PostMeta;
  relatedPosts: PostMeta[];
};

export default function BlogLayout({ children, meta, relatedPosts }: BlogLayoutProps) {
  return (
    <main className="min-h-screen w-full bg-primary-50">
      <Navbar />

      {/* ===== Breadcrumbs ===== */}
      <div className="w-full bg-neutral-900 py-3">
        <div className="max-w-[1328px] mx-auto px-4 text-label-xs text-neutral-0/70">
          <Link href="/" className="hover:text-neutral-0 transition-colors">首頁</Link>
          <span className="mx-2">&gt;</span>
          <Link href="/blogs" className="hover:text-neutral-0 transition-colors">部落格</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-neutral-0">{meta.title?.substring(0, 15)}...</span>
        </div>
      </div>

      {/* ===== Article Container (1076px) ===== */}
      <article className="max-w-[1076px] mx-auto px-6 md:px-8 py-12 md:py-24">
        
        {/* Top Section */}
        <header className="mb-8">
          <div className="flex justify-between items-center text-[14px] text-neutral-500 mb-4">
            <span>{meta.tags}</span>
            <span>{meta.date}</span>
          </div>
          <h1 className="text-[32px] md:text-[40px] font-bold text-neutral-900 leading-tight mb-6">
            {meta.title}
          </h1>
          {meta.subtitle && (
            <p className="text-[18px] text-neutral-600 leading-relaxed mb-8">
              {meta.subtitle}
            </p>
          )}
        </header>

       {/*  Body Section (替換回調好的 Tailwind Prose 樣式) 
        <section className="prose max-w-none 
          prose-p:text-[16px] prose-p:font-medium prose-p:text-neutral-700 prose-p:leading-relaxed prose-p:mb-8
          prose-headings:font-bold prose-headings:text-neutral-900
          prose-h2:text-[32px] prose-h2:mt-12 prose-h2:mb-6 prose-h2:leading-snug
          prose-h3:text-[24px] prose-h3:mt-10 prose-h3:mb-4
          prose-strong:text-[16px] prose-strong:font-bold prose-strong:text-neutral-900 prose-strong:block prose-strong:mb-6
          prose-img:w-full prose-img:rounded-lg prose-img:mb-4 prose-img:mt-12
          prose-em:text-[14px] prose-em:text-neutral-500 prose-em:not-italic prose-em:block prose-em:text-center prose-em:mb-12
          prose-blockquote:border-none prose-blockquote:text-center prose-blockquote:py-8 prose-blockquote:my-8 prose-blockquote:border-y prose-blockquote:border-neutral-200 prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:text-neutral-900 prose-blockquote:bg-transparent"
        >*/}
        {/* ========================================================
            Body Section 
            (樣式已經全數抽離至 globals.css 的 .prose-blog 中)
        ======================================================== */}
        <section className="prose-blog">
          {children}
        </section>


        {/* Bottom Section */}
        <footer className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 mt-12 border-t border-neutral-200">
          <div className="flex items-center gap-6 text-[14px] text-neutral-500">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[18px]">visibility</span>
              <span>{meta.views} views</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[18px]">share</span>
              <span>{meta.shares} shares</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-[14px] text-neutral-900 mr-1">分享</span>
            <button className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-neutral-900 hover:text-neutral-0 transition-colors text-neutral-700">
              <span className="material-symbols-outlined text-[18px]">share</span>
            </button>
            <button className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-neutral-900 hover:text-neutral-0 transition-colors text-neutral-700">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-neutral-900 hover:text-neutral-0 transition-colors text-neutral-700 font-bold text-[10px]">
              LINE
            </button>
          </div>
        </footer>
      </article>

      {/* ===== Related Blog Section ===== */}
      <section className="bg-primary-50 py-16 md:py-24 border-t border-neutral-200">
        <div className="max-w-[1328px] mx-auto px-4">
          <p className="text-[14px] text-neutral-900 mb-2">相關文章</p>
          <h2 className="text-[32px] md:text-[40px] font-bold text-neutral-900 mb-12 uppercase tracking-wide">
            RELATED BLOG
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((rPost) => (
              <Link href={`/blogs/${rPost.id}`} key={rPost.id} className="flex flex-col group cursor-pointer">
                <div className="w-full aspect-[4/3] overflow-hidden mb-4 rounded-lg bg-neutral-200">
                  <img src={rPost.imgSrc} alt={rPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-[13px] text-neutral-500 mb-2">{rPost.tags}</p>
                <h3 className="text-[20px] font-bold text-neutral-900 mb-4 group-hover:text-primary-500 transition-colors line-clamp-2">
                  {rPost.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}