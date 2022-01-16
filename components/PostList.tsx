import Link from "next/link";
import { formatDate } from "@/lib/formatDate";
import type { MDXFrontMatter } from "@/lib/types";
import { Prose } from "@/components/Prose";
import { cx } from "@/lib/utils";

interface PostListProps {
  posts: Array<MDXFrontMatter>;
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <ul className={cx("divide-y -my-8", "dark:divide-gray-700")}>
      {posts.map((post, index) => {
        return (
          <li className="py-8" key={index}>
            <article>
              <time
                className={cx(
                  "block mb-2",
                  "text-gray-500",
                  "dark:text-gray-400"
                )}
              >
                {formatDate(post.date)}
              </time>
              <h2 className="font-bold text-xl">
                <Link href={`/posts/${post.slug}`}>
                  <a>{post.title}</a>
                </Link>
              </h2>
              {post.description ? (
                <div className="mt-3">
                  <Prose>
                    <p>{post.description}</p>
                  </Prose>
                </div>
              ) : null}
            </article>
          </li>
        );
      })}
    </ul>
  );
};
