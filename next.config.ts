import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //輸出純靜態檔案
  output: "export",
  
  // GitHub 專案名稱 
  basePath: "/Hex2026-finalwork",
  
  // 預設的圖片優化，讓靜態圖片可以直接顯示
  images: {
    unoptimized: true,
  },
};

export default nextConfig;