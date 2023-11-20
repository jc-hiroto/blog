import type { MDXComponents } from 'mdx/types'
import Heading from './components/mdx/Heading'


export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <Heading level={"h1"} size="5xl" weight="700">{children}</Heading>,
    h2: ({ children }) => <Heading level={"h2"} size="4xl" weight="700">{children}</Heading>,
    h3: ({ children }) => <Heading level={"h3"} size="3xl" weight="700">{children}</Heading>,
    h4: ({ children }) => <Heading level={"h4"} size="2xl" weight="700">{children}</Heading>,
    h5: ({ children }) => <Heading level={"h5"} size="xl" weight="700">{children}</Heading>,
    h6: ({ children }) => <Heading level={"h6"} size="lg" weight="700">{children}</Heading>,
    p: ({ children }) => <Heading level={"p"} size="md" weight="400" family="sans-serif">{children}</Heading>,
    ...components,
  }
}