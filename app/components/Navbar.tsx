export default function Navbar() {
  return (
    <nav className="w-full py-4 border-b border-neutral-100 bg-primary-50">
      {/* 這裡使用了 Tailwind 來模擬你設定的 container 行為 */}
      <div className="max-w-[1328px] mx-auto px-4 flex justify-between items-center">
        
        {/* 左側 Logo / 名字 */}
        <div className="text-heading-sm text-neutral-900">
          Nelson
        </div>

        {/* 右側選單 (這裡我先假設幾個常見的選單項目，你可以根據實際設計稿調整) */}
        <ul className="hidden md:flex gap-6 items-center text-label-md text-neutral-700">
          <li className="hover:text-primary-500 cursor-pointer transition-colors">SERVICES</li>
          <li className="hover:text-primary-500 cursor-pointer transition-colors">PROJECTS</li>
          <li className="hover:text-primary-500 cursor-pointer transition-colors">BLOGS</li>
          <li className="hover:text-primary-500 cursor-pointer transition-colors">CONTACT</li>
        </ul>
        
        {/* 手機版漢堡選單 Icon (隱藏在桌面版) */}
        <div className="md:hidden">
          <span className="material-symbols-outlined cursor-pointer">menu</span>
        </div>

      </div>
    </nav>
  );
}