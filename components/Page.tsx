import Head from "next/head";
import { onlyText } from "react-children-utilities";
import { formatDate } from "@/lib/formatDate";
import siteConfig from "@/data/siteConfig";
import { Prose } from "@/components/Prose";
import { cx } from "@/lib/utils";

interface PageProps {
  date?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
}

export const Page: React.FC<PageProps> = ({
  date,
  title,
  description,
  children,
}) => {
  const metaTitle = onlyText(title);
  const metaDescription = description
    ? onlyText(description)
    : siteConfig.siteDescription;
  return (
    <>
      <Head>
        <title>
          {metaTitle} - {siteConfig.siteName}
        </title>
        <meta property="og:title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <meta name="og:description" content={metaDescription} />
      </Head>
      <header
        className={cx(
          "mb-8 pb-8 border-b",
          "border-gray-200",
          "dark:border-gray-700"
        )}
      >
        {date ? (
          <time
            className={cx("block mb-2", "text-gray-500", "dark:text-gray-400")}
          >
            {formatDate(date)}
          </time>
        ) : null}
        <h1 className="font-bold text-3xl">{title}</h1>
        {description ? (
          <div className="mt-4">
            <Prose>
              {typeof description === "string" ? (
                <p>{description}</p>
              ) : (
                description
              )}
            </Prose>
          </div>
        ) : null}
      </header>
      {children}
    </>
  );
};
