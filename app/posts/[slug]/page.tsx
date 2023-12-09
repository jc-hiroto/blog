import path from 'path'
import fs, { promises } from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import { type MDXRemoteSerializeResult } from 'next-mdx-remote';

import remarkUnwrapImages from "remark-unwrap-images";
import remarkGfm from "remark-gfm";
import rehypeHighlight from 'rehype-highlight';
import { MdxContent } from 'components/mdx-content';
import PostIntro from 'components/PostIntro';
import { PostMetadata } from 'types/metadata';
import AboutAuthor from 'components/AboutAuthor';

type Post<TFrontmatter> = {
  serialized: MDXRemoteSerializeResult;
  frontmatter: TFrontmatter;
};

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('posts'))
  const paths = files.map((filename) => ({
    slug: filename.replace('.mdx', '')
  }))
  return paths
}
export const dynamicParams = false

async function getPost({ slug }: { slug: string }): Promise<Post<PostMetadata>> {
  const filepath = path.join('posts', `${slug}.mdx`)
  const raw = await promises.readFile(filepath, 'utf-8');
  const serialized = await serialize(raw, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkUnwrapImages, remarkGfm],
        rehypePlugins: [rehypeHighlight] as any,
    },
  });
  const frontmatter = serialized.frontmatter as PostMetadata;
  frontmatter.date = new Date(frontmatter.date);
  return {
    frontmatter,
    serialized,
  };
}

export default async function Post({ params }: { params: { slug: string }}) {
    const { serialized, frontmatter } = await getPost(params);
    return (
      <article className="w-full min-h-screen flex flex-col items-center bg-black text-white">
        <div className="w-[80%] min-h-[90vh] pt-4">
          <PostIntro metadata={frontmatter} />
          <MdxContent source={serialized} />
          <AboutAuthor />
        </div>
      </article>
    );
}