import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { filterPosts } from "utils/posts";
import { PostData } from "types/metadata";
import { PostList } from "components/PostList";

function getPosts() {
  const postsDirectory = path.join("posts");
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .map((fileName) => {
      if (!fileName.endsWith(".mdx")) return;
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);
      return {
        slug: fileName.replace(/\.mdx$/, ""),
        metadata: matterResult.data,
      };
    })
    .filter((post) => post !== undefined);
  return posts;
}

export default function Page() {
  const posts = getPosts();
  const devPosts = filterPosts(posts as PostData[], "dev");
  const fotoPosts = filterPosts(posts as PostData[], "foto");
  return (
    <div className="min-h-[calc(100vh-128px)] flex flex-col lg:flex-row">
      <PostList posts={devPosts} prefix="dev" />
      <PostList posts={fotoPosts} prefix="foto" />
    </div>
  );
}
