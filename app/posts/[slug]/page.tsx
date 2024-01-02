import path from "path";
import fs, { promises } from "fs";
import { serialize } from "next-mdx-remote/serialize";
import { type MDXRemoteSerializeResult } from "next-mdx-remote";
import remarkUnwrapImages from "remark-unwrap-images";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import type { Metadata, ResolvingMetadata } from "next";
import Slugger from "github-slugger";

import { PostMetadata } from "types/metadata";
import { MdxContent } from "components/mdx-content";
import PostIntro from "components/PostIntro";
import AboutAuthor from "components/AboutAuthor";
import CopyrightFooter from "components/CopyrightFooter";
import Toc from "components/Toc";

export type HeadingsMapEntry = {
  level: number;
  title: string;
  slug: string;
};

type Post<TFrontmatter> = {
  serialized: MDXRemoteSerializeResult;
  frontmatter: TFrontmatter;
  headings: HeadingsMapEntry[];
};

type Params = {
  slug: string;
};

type Props = {
  params: Params;
};

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
  return paths;
}
export const dynamicParams = false;

function parseHeadings(raw: string): HeadingsMapEntry[] {
  // parse # (h1) and ## (h2) headings
  const slugger = new Slugger();
  const lines = raw.split("\n").filter((line) => line.match(/^##?\s/));
  const headings = lines.map((line) => {
    const match = line.match(/^(#{1,2})\s(.*)/);
    if (!match) return null;
    const [, level, title] = match;
    const slug = slugger.slug(title);
    return {
      level: level.length,
      title,
      slug,
    };
  });
  return headings as HeadingsMapEntry[];
}

async function getPost({ slug }: Params): Promise<Post<PostMetadata>> {
  const filepath = path.join("posts", `${slug}.mdx`);
  const raw = await promises.readFile(filepath, "utf-8");
  const serialized = await serialize(raw, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkUnwrapImages, remarkGfm],
      rehypePlugins: [rehypeHighlight, rehypeSlug] as any,
    },
  });
  const frontmatter = serialized.frontmatter as PostMetadata;
  frontmatter.slug = slug;
  frontmatter.date = new Date(frontmatter.date);
  const headings = parseHeadings(raw);
  return {
    frontmatter,
    serialized,
    headings,
  };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { frontmatter } = await getPost(params);
  const ogImage = `https://blog.jchiroto.dev/api/og?title=${encodeURIComponent(
    frontmatter.title
  )}&description=${encodeURIComponent(
    frontmatter.description
  )}&cover=${encodeURIComponent(frontmatter.cover)}&slug=${encodeURIComponent(
    params.slug
  )}`;
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
        },
      ],
    },
  };
}

export default async function Post({ params }: Props) {
  const { serialized, frontmatter, headings } = await getPost(params);
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-black text-white">
      <div className="w-full min-h-[90vh] pt-4">
        <div className="w-full flex flex-row items-start justify-center xl:justify-start">
          <div className="hidden xl:flex w-[20%] sticky self-start top-[7.5rem] justify-center">
            {headings.length !== 0 && (
              <div className="px-3 max-w-[80%]">
                <p className="text-md font-mono text-gray-200 -ml-5 mb-2">
                  {frontmatter.language === "zh_tw"
                    ? "目錄"
                    : "Table of Contents"}
                </p>
                <Toc headings={headings} />
              </div>
            )}
          </div>
          <article className="w-[85%] sm:w-[80%] xl:w-[60%] xl:mr-[20%] xl:ml-auto">
            <PostIntro metadata={frontmatter} />
            <MdxContent source={serialized} />
            <CopyrightFooter />
            <AboutAuthor />
          </article>
        </div>
      </div>
    </div>
  );
}
