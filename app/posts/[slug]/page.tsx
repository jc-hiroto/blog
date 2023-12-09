import path from 'path'
import fs, { promises } from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import { type MDXRemoteSerializeResult } from 'next-mdx-remote';
import remarkUnwrapImages from "remark-unwrap-images";
import remarkGfm from "remark-gfm";
import rehypeHighlight from 'rehype-highlight';
import type { Metadata, ResolvingMetadata } from 'next';

import { PostMetadata } from 'types/metadata';
import { MdxContent } from 'components/mdx-content';
import PostIntro from 'components/PostIntro';
import AboutAuthor from 'components/AboutAuthor';

type Post<TFrontmatter> = {
  serialized: MDXRemoteSerializeResult;
  frontmatter: TFrontmatter;
};

type Params = {
  slug: string;
}

type Props = {
  params: Params;
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('posts'))
  const paths = files.map((filename) => ({
    slug: filename.replace('.mdx', '')
  }))
  return paths
}
export const dynamicParams = false

async function getPost({ slug }: Params): Promise<Post<PostMetadata>> {
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

export async function generateMetadata( { params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const { frontmatter } = await getPost(params);
  const ogImage = `https://blog.jchiroto.dev/api/og?title=${encodeURIComponent(frontmatter.title)}&description=${encodeURIComponent(frontmatter.description)}&cover=${encodeURIComponent(frontmatter.cover)}&slug=${encodeURIComponent(params.slug)}`
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      title: `${frontmatter.title} | Blog by jc-hiroto`,
      description: frontmatter.description,
      url: `https://blog.jchiroto.dev/posts/${params.slug}`,
      locale: frontmatter.language === "en" ? "en_US" : "zh_TW",
      type: "article",
      publishedTime: frontmatter.date.toISOString(),
      authors: ["jc-hiroto"],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        }
      ]
    },
  }

}

export default async function Post({ params }: Props) {
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