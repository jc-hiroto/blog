import createMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";
import remarkUnwrapImages from "remark-unwrap-images";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

export default nextConfig;
