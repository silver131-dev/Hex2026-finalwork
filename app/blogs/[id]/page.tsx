import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from"remark-gfm"; // 記得保留這個，讓 Markdown 看懂表格
import Link from "next/link";
import BlogLayout from "@/components/BlogLayout"; // 🚨 引入剛做好的 Layout
import { blogPosts } from "../../../data/posts";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ArticlePage(props: Props) {
  const params = await props.params;
  const id = params.id;

  const filePath = path.join(process.cwd(), "content", `${id}.md`);

  if (!fs.existsSync(filePath)) {
    return (
      <main className="min-h-screen w-full bg-primary-50 flex flex-col items-center justify-center">
        <h1 className="text-heading-md mb-4 text-neutral-900">找不到此文章</h1>
        <Link href="/blogs" className="text-primary-500 underline">返回部落格列表</Link>
      </main>
    );
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data: post, content } = matter(fileContent);

  const relatedPosts = blogPosts.filter((p) => p.id !== Number(id)).slice(0, 3);

  // 🚨 這裡變得超級乾淨！只要把資料傳給 BlogLayout，並把 Markdown 塞進去當 children 就好了
  return (
    <BlogLayout meta={post as any} relatedPosts={relatedPosts}>
      <div className="overflow-x-auto">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </BlogLayout>
  );
}