"use client";

import { mdxComponents } from "components/mdx-components";
import { MDXRemote } from "next-mdx-remote";
import { type MDXRemoteSerializeResult } from "next-mdx-remote";

type MdxContentProps = {
  source: MDXRemoteSerializeResult;
};

export function MdxContent({ source }: MdxContentProps) {
  return <MDXRemote {...source} components={mdxComponents} />;
}
