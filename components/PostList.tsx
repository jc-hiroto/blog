import path from "path";
import { PostData } from "types/metadata";

export function PostList({ posts, prefix }: { posts: PostData[]; prefix: string; }) {
  return (
    <div className="w-full px-8 py-4 flex flex-col items-start justify-start">
      <div className="w-full flex flex-row items-center justify-start mb-4">
        <p className="text-3xl sm:text-4xl font-bold text-gray-300 font-mono">
          {"> "}/{prefix}
        </p>
        <div className="w-4 h-[36px] bg-gray-300 ml-2 blink" />
      </div>
      <div className="w-full flex flex-col items-start justify-start space-y-4">
        {posts.map((post, index) => {
          const coverPath = path.join("/img", post.metadata.cover);
          return (
            <a
              href={`/posts/${post.slug}`}
              key={`dev-post-${index}`}
              className="group flex flex-col w-full border-3 border-gray-400 hover:border-white transition-all duration-50 ease-in-out"
            >
              <div className="w-full h-5 bg-gray-400 group-hover:bg-white transition-all duration-50 ease-in-out">
                <p className="text-xs text-gray-800 font-mono text-center">
                  /{post.metadata.prefix}/{post.slug}
                </p>
              </div>
              <div className="flex flex-row w-full sm:w-auto sm:px-0 sm:py-0 px-4 py-2 flex-wrap sm:flex-nowrap justify-between">
                <div className="sm:w-[80%] lg:w-[70%] xl:w-[75%] flex flex-col justify-center items-start sm:pl-8 sm:py-4">
                  <p className="text-xl sm:text-2xl text-gray-100 font-mono">
                    {post.metadata.title}
                  </p>
                  <p className="text-sm sm:text-lg text-gray-400 font-mono">
                    {post.metadata.description}
                  </p>
                </div>
                <div className="w-full sm:w-fit flex flex-row sm:flex-col sm:justify-self-end sm:justify-center sm:items-end items-center justify-between mt-2 sm:mt-0 mr-0 sm:mr-4">
                  <p className="text-sm sm:text-sm text-gray-300 font-mono">
                    by {post.metadata.author}
                  </p>
                  <p className="text-sm sm:text-sm text-gray-400 font-mono">
                    on {post.metadata.date.toLocaleDateString()}
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
