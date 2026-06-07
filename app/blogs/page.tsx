"use client";

import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Subscription from "@/components/Subscription";
import Contact from "@/components/Contact";
import Link from "next/link";

// 🚨 這是列表頁，只要往上跳兩層
import { blogPosts } from "../../data/posts"; 

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const categories = ["全部", "品牌設計", "平面設計", "UI/UX 設計", "網頁設計", "設計規範", "前端技術", "後端架構", "AI 趨勢應用"];
  
  const filteredPosts = selectedCategory === "全部" 
    ? blogPosts 
    : blogPosts.filter(post => post.tags.includes(selectedCategory));

    // ==========================================
  // 🚨 2. 新增這段：用來控制左右滑動的邏輯
  // ==========================================
  const scrollRef = useRef<HTMLUListElement>(null);
  
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      // 取得目前的捲動位置與容器寬度
      const { scrollLeft, clientWidth } = scrollRef.current;
      // 設定每次點擊滑動「半個螢幕」的寬度
      const scrollAmount = clientWidth / 2; 
      
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth", // 加入平滑捲動效果
      });
    }
  };

  return (
    <main className="min-h-screen w-full bg-primary-50">
      <Navbar />

      <section 
        className="relative w-full h-[300px] md:h-[400px] bg-neutral-900 bg-cover bg-center flex flex-col items-center justify-center text-neutral-0"
        style={{ backgroundImage: "url('/Hex2026-finalwork/img/blogs/blog_banner.png')" }}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div> 
        <div className="relative z-10 text-center">
          <h1 className="text-[40px] md:text-[64px] font-bold tracking-wider mb-2">BLOGS</h1>
          <p className="text-label-md md:text-heading-xs font-medium">部落格</p>
        </div>
      </section>

      <section className="max-w-[1328px] mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          
          {/* 🚨 加入 relative，讓左右按鈕可以絕對定位 */}
          <aside className="relative w-full md:w-48 flex-shrink-0">
            
            {/* === 手機版：左側三角形按鈕 === */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-primary-50 md:hidden"
            >
              <span className="material-symbols-outlined text-[28px] text-neutral-900">arrow_left</span>
            </button>

            {/* === 滾動軌道容器 (綁定 ref) === */}
            <ul 
              ref={scrollRef} // 🚨 關鍵：把 useRef 綁定在這裡
              /* 加入 flex-nowrap 防止換行，並加上 px-8 讓出左右按鈕的空間 */
              className="flex md:flex-col flex-nowrap gap-2 md:gap-4 overflow-x-auto scroll-smooth hide-scrollbar pb-4 md:pb-0 px-8 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {categories.map((category, index) => (
                <li key={index} className="flex-shrink-0">
                  <button 
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-6 py-3 text-label-md font-bold transition-colors ${
                      selectedCategory === category
                        ? "bg-neutral-900 text-neutral-0" 
                        : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200"
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>

            {/* === 手機版：右側三角形按鈕 === */}
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-primary-50 md:hidden"
            >
              <span className="material-symbols-outlined text-[28px] text-neutral-900">arrow_right</span>
            </button>

          </aside>

          <div className="flex-1 flex flex-col gap-8 md:gap-12">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <Link href={`/blogs/${post.id}`} key={post.id} className="flex flex-col md:flex-row gap-6 group cursor-pointer">
                  <div className="w-full md:w-1/3 aspect-[4/3] md:aspect-[3/2] overflow-hidden bg-neutral-200 flex-shrink-0">
                    <img src={post.imgSrc} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-center flex-1">
                    <p className="text-label-xs text-neutral-500 mb-2">{post.tags}</p>
                    <h3 className="text-heading-xs md:text-heading-sm text-neutral-900 mb-4 group-hover:text-primary-500 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <div className="mt-auto flex items-center justify-between text-label-xs text-neutral-500 pt-4 border-t border-neutral-200 md:border-none">
                      <span>{post.date}</span>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">visibility</span>
                          <span>{post.views} views</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">share</span>
                          <span>{post.shares} shares</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="w-full py-12 text-center text-neutral-500">目前此分類還沒有文章喔！</div>
            )}
          </div>
        </div>
      </section>

      <Subscription />
      <Contact />
    </main>
  );
}