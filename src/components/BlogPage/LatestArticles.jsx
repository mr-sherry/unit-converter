"use client";

import Image from "next/image";
import blogs from "@/lib/blogs";
import LoaderLink from "../LoaderLink";
import { useBlogs } from "@/context/BlogContext";

export default function LatestArticles() {
  const { blogs, loading, error } = useBlogs();

  const blogsList = blogs?.data || [];

  console.log(blogsList);

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {blogsList.slice(0, 6).map(
        (blog) => (
          console.log(blog),
          (
            <div
              key={blog.id}
              className="rounded-2xl h-120 flex  justify-between flex-col"
            >
              <div>
                <Image
                  src={`https://converter.miftatech.com/${blog.thumbnail}`}
                  alt={blog.title}
                  width={400}
                  height={250}
                  className="rounded-2xl h-80 w-100 object-cover"
                />
                <LoaderLink href={`/blogs/details/${blog.id}`}>
                  <h3 className="text-[22px] font-semibold hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h3>
                </LoaderLink>
              </div>

              <div className="mt-2 inline font-bold px-3 py-2 text-xs border-2 border-gray-300 rounded-full w-fit">
                {new Date(blog.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </div>
            </div>
          )
        )
      )}
    </section>
  );
}
