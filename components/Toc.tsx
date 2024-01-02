import { HeadingsMapEntry } from "app/posts/[slug]/page";

function Toc({ headings }: { headings: HeadingsMapEntry[] }) {
  return(
    <ul className="w-full text-sm text-gray-400 font-mono" style={{ "listStyleType": "\"- \"" }}>
      {headings.map((heading) => (
        <li key={heading.slug} className={`ml-${(heading.level-1) * 4} my-1`}>
          <a href={`#${heading.slug}`} className="hover:text-gray-200">{heading.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default Toc;