import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <p className="text-5xl font-bold text-white">{children}</p>
    ),
    h2: ({ children }) => (
      <p className="text-4xl font-bold text-white">{children}</p>
    ),
    h3: ({ children }) => (
      <p className="text-3xl font-bold text-white">{children}</p>
    ),
    h4: ({ children }) => (
      <p className="text-2xl font-bold text-white">{children}</p>
    ),
    h5: ({ children }) => (
      <p className="text-xl font-bold text-white">{children}</p>
    ),
    h6: ({ children }) => (
      <p className="text-lg font-bold text-white">{children}</p>
    ),
    p: ({ children }) => (
      <p className="text-md font-normal text-white">{children}</p>
    ),
    ...components,
  };
}
