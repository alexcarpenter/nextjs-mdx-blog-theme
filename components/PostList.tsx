import Link from "next/link";
import { formatDate } from "@/lib/formatDate";
import type { MDXFrontMatter } from "@/lib/types";
import { Prose } from "@/components/Prose";
import { cx, slugify } from "@/lib/utils";
import { Tag } from "./Tag";

interface PostListProps {
  posts: Array<MDXFrontMatter>;
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <ul
      className={cx(
        "divide-y -my-8",
        "divide-gray-200",
        "dark:divide-gray-700"
      )}
    >
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
                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              </h2>
              {post.description ? (
                <div className="mt-3">
                  <Prose>
                    <p>{post.description}</p>
                  </Prose>
                </div>
              ) : null}
              {post.tags ? (
                <ul className="mt-4 flex flex-wrap space-x-2">
                  {post.tags.map((tag, index) => {
                    return (
                      <li key={index}>
                        <Tag href={`/posts/tagged/${slugify(tag)}`}>{tag}</Tag>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </article>
          </li>
        );
      })}
    </ul>
  );
};
