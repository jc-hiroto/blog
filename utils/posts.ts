import { PostData } from "types/metadata";

export function processRecentPosts(posts: PostData[]) {
  const res = posts.filter((post) => post.metadata.published);
  res.sort((a, b) => b.metadata.date.getTime() - a.metadata.date.getTime());
  return res;
}

export function filterPosts(posts: PostData[], prefix: string) {
  const res = posts.filter(
    (post) => post.metadata.prefix === prefix && post.metadata.published
  );
  res.sort((a, b) => b.metadata.date.getTime() - a.metadata.date.getTime());
  return res;
}
