import { Feed } from "feed";
import siteConfig from "@/data/siteConfig";
import { getAllMdx } from "./mdx";

export const buildFeed = async () => {
  const feed = new Feed({
    title: siteConfig.siteName,
    description: siteConfig.siteDescription,
    id: siteConfig.siteUrl,
    link: siteConfig.siteUrl,
    language: "en",
    copyright: new Date().getFullYear() + " " + siteConfig.siteName,
  });

  const posts = await getAllMdx();

  posts.map((post) => {
    const { slug, date, title, description } = post.frontMatter;
    feed.addItem({
      title: title,
      id: slug,
      link: `${siteConfig.siteUrl}/posts/${slug}`,
      description: description,
      date: new Date(date),
    });
  });

  return feed;
};
