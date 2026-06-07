/**
 * Home Page (Landing Page)
 * - 對應 Figma：首頁（Hero → Services → Projects → Blogs → Subscription → Contact）
 * - 此頁面負責組合所有首頁區塊，不處理邏輯，只做 layout 排列
 */

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import Subscription from "../components/Subscription";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-primary-50">
      
      {/* ====== Navigation Bar ====== */}
      <Navbar />

      {/* ====== Hero Section（首頁主視覺） ====== */}
      <Hero />

      {/* ====== Services Section（服務項目） ====== */}
      <Services />

      {/* ====== Projects Section（作品集） ====== */}
      <Projects />

      {/* ====== Blogs Section（最新文章） ====== */}
      <Blogs />

      {/* ====== Subscription Section（訂閱 CTA） ====== */}
      <Subscription />

      {/* ====== Contact Section（頁尾聯絡區） ====== */}
      <Contact />
    </main>
  );
}
