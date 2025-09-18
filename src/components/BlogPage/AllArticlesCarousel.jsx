"use client";
import { useState } from "react";
import LoaderLink from "../LoaderLink";
import { useBlogs } from "@/context/BlogContext";

export default function AllArticlesCarousel() {
  const { blogs, loading, error } = useBlogs();

  const blogsList = blogs?.data || [];

  const [active, setActive] = useState();

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex md:flex-row flex-col justify-between items-center mb-10">
        <h1 className="md:w-120 text-center md:text-left md:text-[40px] text-[30px] font-bold">
          Discover More Articles Like Above Mentioned.
        </h1>
        <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
          See More
        </button>
      </div>

      {/* Carousel */}
      <section className="flex lg:flex-row gap-5 flex-col md:space-x-6 space-y-6 md:space-y-0 overflow-x-auto pb-4 justify-center">
        {blogsList.slice(0, 3).map((article, i) => {
          // Detect if small screen: always "active"
          const isActive =
            active === i ||
            (typeof window !== "undefined" && window.innerWidth < 968);

          return (
            <div
              key={i}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className={`relative rounded-2xl overflow-hidden shadow-md flex-shrink-0 transition-all duration-500 ease-in-out
                ${isActive ? "lg:w-[450px] w-full" : "lg:w-[330px] w-full"}
                h-[350px]
              `}
              style={{
                backgroundImage: `url(https://converter.miftatech.com/${article.thumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <LoaderLink
                href={"/blogs/details/" + article.id}
                className="h-full w-full"
              >
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 transition-all">
                  <p className="text-xs text-gray-200 mb-2">{article.date}</p>
                  <h3 className="font-semibold text-lg !text-white ">
                    {article.title}
                  </h3>

                  {/* Show extra details */}
                  {isActive && (
                    <>
                      <button className="mt-4 px-4 py-2 w-fit bg-white text-black rounded-full hover:bg-gray-200 transition">
                        Read More →
                      </button>
                    </>
                  )}
                </div>
              </LoaderLink>
            </div>
          );
        })}
      </section>
    </div>
  );
}
