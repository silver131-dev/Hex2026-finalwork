import Link from "next/link"; // 🚨 步驟一：在檔案最上方引入 Link
import { blogPosts } from "../data/posts";

export default function Blogs() {
  // 只抓取最新的 3 篇文章顯示在首頁
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="w-full bg-primary-50 py-16 md:py-24">
      <div className="max-w-[1328px] mx-auto px-4">
        
        {/* 上方標題與按鈕區塊 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-label-md text-neutral-900 font-bold mb-2">部落格</p>
            <h2 className="text-[40px] md:text-[64px] font-bold text-neutral-900 leading-none">
              BLOGS
            </h2>
          </div>
          {/* 🚨 步驟二：把 button 改成 Link，並加上 href="/blogs" */}
          <Link 
            href="/blogs" 
            className="border border-neutral-900 text-neutral-900 px-6 py-2.5 rounded-full text-label-sm hover:bg-neutral-900 hover:text-neutral-0 transition-colors inline-block text-center"
          >
            探索更多
          </Link>
        </div>
        {/* 下方的文章卡片列表 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 🚨 透過迴圈跑出前 3 篇文章，並用 Link 包起來指向動態網址 */}
          {recentPosts.map((post) => (
            <Link href={`/blogs/${post.id}`} key={post.id} className="flex flex-col group cursor-pointer">
              
              <div className="w-full aspect-[4/3] overflow-hidden mb-4 rounded-lg bg-neutral-200">
                <img 
                  src={post.imgSrc} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              
              <p className="text-[13px] text-neutral-500 mb-2">{post.tags}</p>
              
              <h3 className="text-[20px] font-bold text-neutral-900 mb-4 group-hover:text-primary-500 transition-colors line-clamp-2">
                {post.title}
              </h3>
              
              <div className="mt-auto flex items-center justify-between text-[13px] text-neutral-500 pt-4 border-t border-neutral-200">
                <span>{post.date}</span>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">visibility</span>
                  <span>{post.views} views</span>
                </div>
              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}