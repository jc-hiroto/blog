import createMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";
import remarkUnwrapImages from "remark-unwrap-images";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  output: "export",
  images: {
    unoptimized: true,
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkUnwrapImages],
    rehypePlugins: [rehypeHighlight],
  },
});

export default withMDX(nextConfig);
