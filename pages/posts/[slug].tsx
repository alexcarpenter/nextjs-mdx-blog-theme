import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypePrism from "rehype-prism-plus";
import { getAllMdx, getMdx } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { Page } from "@/components/Page";
import { components } from "@/components/MDX";
import { Prose } from "@/components/Prose";

interface ContextProps extends ParsedUrlQuery {
  slug: string;
}

interface PostProps {
  frontMatter: MDXFrontMatter;
  mdx: any;
}

const Post: NextPage<PostProps> = ({ frontMatter, mdx }) => {
  return (
    <>
      <Page {...frontMatter}>
        <Prose>
          <MDXRemote {...mdx} components={components} />
        </Prose>
      </Page>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const mdxFiles = getAllMdx();
  return {
    paths: mdxFiles.map((file) => ({
      params: { slug: file.frontMatter.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as ContextProps;
  const { frontMatter, content } = getMdx(`${slug}.mdx`);
  const mdxContent = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypePrism],
    },
    scope: frontMatter,
  });
  return {
    props: {
      frontMatter,
      mdx: mdxContent,
    },
  };
};

export default Post;
