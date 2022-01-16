import Head from "next/head";
import { onlyText } from "react-children-utilities";
import { formatDate } from "@/lib/formatDate";
import siteConfig from "@/data/siteConfig";
import { Prose } from "@/components/Prose";
import { cx } from "@/lib/utils";

interface PageProps {
  date?: string;
  title: string;
  description?: string | React.ReactNode;
}

export const Page: React.FC<PageProps> = ({
  date,
  title,
  description,
  children,
}) => {
  const descriptionText = onlyText(description);
  return (
    <>
      <Head>
        <title>
          {title} - {siteConfig.siteName}
        </title>
        <meta property="og:title" content={title} />
        <meta name="description" content={descriptionText} />
        <meta name="og:description" content={descriptionText} />
      </Head>
      <header className={cx("mb-8 pb-8 border-b", "dark:border-gray-700")}>
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
