"use client";
import { useBlogs } from "@/context/BlogContext";
import LoaderLink from "../LoaderLink";
import { use, useEffect, useState } from "react";

const stripHtml = (html) => {
  if (!html) return "";
  return html.replace(/<[^>]*>?/gm, "").slice(0, 100);
};

export default function PopularArticles() {
  const { blogs, loading, error } = useBlogs();
  let [bigArticle, setBigArticle] = useState(null);
  let [smallArticles, setSmallArticles] = useState([]);

  const blogsList = blogs?.data || [];
  useEffect(() => {
    if (!loading && blogsList.length > 0) {
      setBigArticle(blogsList[0]);
      console.log(bigArticle);
      setSmallArticles(blogsList?.slice(1, 4));
    }
  }, [loading, blogsList]);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
      <div className="overflow-hidden flex flex-col justify-center items-center">
        {loading ? (
          <div className="animate-pulse w-130">
            <div className="h-64 bg-gray-200 rounded-2xl mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          </div>
        ) : bigArticle ? (
          <>
            <img
              src={`https://converter.miftatech.com/${bigArticle.thumbnail}`}
              alt={bigArticle.title}
              className="object-cover rounded-2xl w-130 h-100"
            />
            <div className="mt-2 w-130">
              <LoaderLink href={`/blogs/details/${bigArticle.id}`}>
                <h2 className="text-[30px] font-semibold mb-2">
                  {bigArticle.title}
                </h2>
              </LoaderLink>
              <span className="inline-block px-3 py-1 text-sm bg-gray-100 rounded-full">
                Featured
              </span>
            </div>
          </>
        ) : (
          <p className="text-gray-500">No featured article found.</p>
        )}
      </div>

      <div className="flex flex-col justify-center items-center gap-4 w-full">
        {loading ? (
          Array.from({ length: 3 }).map((_, idx) => (
            <div
              key={idx}
              className="flex gap-4 rounded-2xl overflow-hidden w-full animate-pulse"
            >
              <div className="w-46 h-42 bg-gray-200 rounded-xl"></div>
              <div className="flex flex-col justify-between w-full">
                <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          ))
        ) : smallArticles.length > 0 ? (
          smallArticles.map((article, idx) => (
            <div
              key={idx}
              className="flex gap-4 rounded-2xl overflow-hidden w-full"
            >
              <img
                src={`https://converter.miftatech.com/${article.thumbnail}`}
                alt={article.title}
                className="w-46 h-42 object-cover rounded-xl"
              />
              <div className="flex flex-col justify-between">
                <LoaderLink href={`/blogs/details/${article.id}`}>
                  <h3 className="text-[25px] font-semibold hover:!text-gray-600">
                    {article.title}
                  </h3>
                </LoaderLink>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {stripHtml(article.description)}
                </p>
                <span className="mt-2 inline px-3 py-1 text-xs bg-gray-100 rounded-full w-fit">
                  Blog
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No other articles found.</p>
        )}
      </div>
    </section>
  );
}
