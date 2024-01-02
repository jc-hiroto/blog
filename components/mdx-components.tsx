import type { MDXComponents } from "mdx/types";
import { Link } from "@nextui-org/react";
import NextLink from "next/link";
import Image from "next/image";
import ProImage from "components/ProImage";
import CopyrightFooter from "./CopyrightFooter";
import { FaTerminal } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { H1, H2, H3, H4, H5, H6 } from "./mdx/Headings";
import AIAssistBadge from "./AIAssistBadge";
import BilingualBadge from "./BilingualBadge";

export const mdxComponents: MDXComponents = {
  h1: ({ id, ...props }) => <H1 id={id as string} {...props} />,
  h2: ({ id, ...props }) => <H2 id={id as string} {...props} />,
  h3: ({ id, ...props }) => <H3 id={id as string} {...props} />,
  h4: ({ id, ...props }) => <H4 id={id as string} {...props} />,
  h5: ({ id, ...props }) => <H5 id={id as string} {...props} />,
  h6: ({ id, ...props }) => <H6 id={id as string} {...props} />,
  p: ({ children }) => (
    <p className="text-md sm:text-lg font-normal leading-[1.75] sm:leading-[1.75] mt-4 sm:mt-4">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="text-md sm:text-lg font-normal list-disc list-outside text-gray-300 my-2 ml-6 sm:leading-[1.75]">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="text-md sm:text-lg font-normal list-decimal list-outside text-gray-300 my-2 ml-6 sm:leading-[1.75]">
      {children}
    </ol>
  ),
  code: ({ children }) => (
    <code className="text-md sm:text-lg font-mono text-gray-400 bg-gray-800 px-1 py-[0.1rem] rounded-md">
      {children}
    </code>
  ),
  pre: (props) => (
    <pre {...props} className="rounded-lg bg-[#0D1117] p-4 my-4" />
  ),
  img: (props) => (
    <div className="flex flex-col justify-center my-4 sm:my-10">
      <Image
        src={`${props.src}`}
        className="w-full h-full rounded-md sm:rounded-lg unselectable"
        alt={props?.alt ?? ""}
        width={0}
        height={0}
        sizes="100vw"
      />
      <p className="text-xs sm:text-sm font-mono text-gray-400 text-center mt-2">
        {props?.alt ?? ""}
      </p>
    </div>
  ),
  a: ({ children, ...props }) => (
    <Link
      href={props.href}
      isExternal
      showAnchorIcon
      underline="active"
      className="text-md font-normal text-teal-400"
    >
      {children}
    </Link>
  ),
  blockquote: ({ children }) => (
    <blockquote className="text-md font-semibold text-gray-400 border-l-4 border-teal-400 pl-4 my-4">
      {children}
    </blockquote>
  ),
  ProImage: (props) => <ProImage {...props} />,
  Copyright: (props) => <CopyrightFooter {...props} />,
  AIAssistBadge: (props) => <AIAssistBadge {...props} />,
  BilingualBadge: (props) => <BilingualBadge {...props} />,
  DevEndMark: () => <FaTerminal className="text-gray-200 ml-2 inline" />,
  FotoEndMark: () => <BsStars className="text-gray-200 ml-2 text-lg inline" />,
};
