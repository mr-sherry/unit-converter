"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import blogs from "@/lib/blogs";
import LoaderLink from "@/components/LoaderLink";
import { useBlogs } from "@/context/BlogContext";

export default function Page() {
  const { id } = useParams();

  const { blogs, loading, error } = useBlogs();

  const blogsList = blogs?.data || [];
  console.log("blogsList", blogsList);
  console.log("found", Number(id));

  const blog = blogsList.find((b) => {
    console.log("b.id", b.id);
    return b.id === Number(id);
  });
  console.log("blog", blog);

  const [activeSection, setActiveSection] = useState("");

  // useEffect(() => {
  //   if (!blog) return;

  //   // const handleScroll = () => {
  //   //   let current = "";
  //   //   blog.toc.forEach((section) => {
  //   //     const sectionId = section.toLowerCase().replace(/\s+/g, "-");
  //   //     const element = document.getElementById(sectionId);
  //   //     if (element) {
  //   //       const rect = element.getBoundingClientRect();
  //   //       const viewportHeight = window.innerHeight;
  //   //       if (rect.top < viewportHeight - 150 && rect.bottom > 150) {
  //   //         current = sectionId;
  //   //       }
  //   //     }
  //   //   });
  //   //   setActiveSection(current);
  //   // };

  //   // window.addEventListener("scroll", handleScroll, { passive: true });
  //   // handleScroll();

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [blog]);

  if (!blog) {
    return <div className="p-10 text-center">Blog not found.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 mt-14">
      {/* Back button */}
      <LoaderLink href={"/blogs"}>
        <button className="text-sm text-gray-600 mb-4 cursor-pointer">
          ← Back
        </button>
      </LoaderLink>

      {/* Blog Header */}
      <div className="space-y-2 mb-6 flex flex-col justify-center items-center">
        <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
          {blog.category}
        </span>
        <h1 className="text-3xl font-bold w-130 text-center">{blog.title}</h1>
        <p className="text-sm text-gray-500">
          {blog.date} · {blog.time}
        </p>
      </div>

      {/* Hero Image */}
      <div className="mb-10">
        <Image
          src={`https://converter.miftatech.com/${blog.thumbnail}`}
          alt={blog.title}
          width={1200}
          height={500}
          className="w-full h-[450px] object-cover rounded-lg"
        />
      </div>

      {/* Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-8 sticky top-20 h-fit self-start">
          <div>
            <h4 className="font-semibold mb-3">Related Articles</h4>
            <ul className="space-y-4 text-sm">
              {blogsList
                // exclude the current article by ID
                .filter((item) => item.id !== blog.id)
                // show only 3 related posts
                .slice(0, 3)
                .map((related, idx) => (
                  <li key={idx} className="flex gap-3">
                    <Image
                      src={`https://converter.miftatech.com/${related.thumbnail}`}
                      alt={related.title}
                      height={56}
                      width={56}
                      className="w-14 h-14 object-cover rounded-md flex-shrink-0"
                    />
                    <div>
                      <a
                        href={`/blogs/details/${related.id}`}
                        className="block font-medium hover:text-black transition-colors text-gray-700"
                      >
                        {related.title}
                      </a>
                      <p className="text-xs text-gray-500 line-clamp-2">
                        {related.description
                          ?.replace(/<[^>]*>?/gm, "")
                          .slice(0, 60)}
                        ...
                      </p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </aside>

        {/* Blog Content */}
        <div
          className="lg:col-span-3 prose prose-gray max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />
      </div>
    </div>
  );
}
