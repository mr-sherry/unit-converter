"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import blogs from "@/lib/blogs";

export default function Page() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (!blog) return;

    const handleScroll = () => {
      let current = "";
      blog.toc.forEach((section) => {
        const sectionId = section.toLowerCase().replace(/\s+/g, "-");
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          if (rect.top < viewportHeight - 150 && rect.bottom > 150) {
            current = sectionId;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [blog]);

  if (!blog) {
    return <div className="p-10 text-center">Blog not found.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 mt-14">
      {/* Back button */}
      <button className="text-sm text-gray-600 mb-4 hover:underline">
        ← Back
      </button>

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
          src={blog.image}
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
            <h4 className="font-semibold mb-3">On this page</h4>
            <ul className="space-y-2 text-sm">
              {blog.toc.map((item, idx) => {
                const sectionId = item.toLowerCase().replace(/\s+/g, "-");
                return (
                  <li key={idx}>
                    <a
                      href={`#${sectionId}`}
                      className={`block transition-colors ${
                        activeSection === sectionId
                          ? "!text-black font-semibold"
                          : "text-gray-600 hover:text-black"
                      }`}
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Share Article</h4>
            <div className="flex space-x-4 text-gray-600">
              <a href="#" className="hover:text-black">
                🌐
              </a>
              <a href="#" className="hover:text-black">
                🐦
              </a>
              <a href="#" className="hover:text-black">
                📸
              </a>
              <a href="#" className="hover:text-black">
                💼
              </a>
            </div>
          </div>
        </aside>

        {/* Blog Content */}
        <div
          className="lg:col-span-3 prose prose-gray max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </div>
  );
}
