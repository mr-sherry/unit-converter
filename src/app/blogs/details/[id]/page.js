'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import LoaderLink from '@/components/LoaderLink';
import { useBlogs } from '@/context/BlogContext';

export default function Page() {
  const { id } = useParams();
  const { blogs, loading, error } = useBlogs();

  const blogsList = blogs?.data || [];
  const blog = blogsList.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className='p-10 text-center text-neutral-600'>Blog not found.</div>
    );
  }

  return (
    <div className='max-w-6xl mx-auto px-6 py-20'>
      {/* 🔙 Back button */}
      <LoaderLink href='/blogs'>
        <button className='text-sm text-neutral-500 mb-6 hover:text-black transition'>
          ← Back
        </button>
      </LoaderLink>

      {/* 📰 Blog Header */}
      <div className='space-y-3 mb-10 text-center'>
        <span className='inline-block bg-neutral-100 text-neutral-600 px-4 py-1 rounded-full text-sm font-medium'>
          {blog.category}
        </span>
        <h1 className='text-4xl font-extrabold text-black leading-tight'>
          {blog.title}
        </h1>
        <p className='text-sm text-neutral-500'>
          {blog.date} · {blog.time}
        </p>
      </div>

      {/* 🖼️ Hero Image */}
      <div className='mb-14'>
        <Image
          src={`https://converter.miftatech.com/${blog.thumbnail}`}
          alt={blog.title}
          width={1200}
          height={500}
          className='w-full h-[450px] object-cover rounded-2xl shadow-md'
        />
      </div>

      {/* 🧱 Layout */}
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-12'>
        {/* 📑 Sidebar */}
        <aside className='lg:col-span-1 space-y-8 sticky top-20 self-start'>
          <div>
            <h4 className='font-semibold text-lg mb-4 text-black border-b border-neutral-300 pb-2'>
              Related Articles
            </h4>
            <ul className='space-y-5'>
              {blogsList
                .filter((item) => item.id !== blog.id)
                .slice(0, 3)
                .map((related) => (
                  <li
                    key={related.id}
                    className='flex gap-4 group cursor-pointer'
                  >
                    <Image
                      src={`https://converter.miftatech.com/${related.thumbnail}`}
                      alt={related.title}
                      height={60}
                      width={60}
                      className='w-16 h-16 object-cover rounded-lg shadow-sm'
                    />
                    <div className='flex-1'>
                      <a
                        href={`/blogs/details/${related.id}`}
                        className='block font-semibold text-neutral-800 group-hover:text-black transition-colors line-clamp-2'
                      >
                        {related.title}
                      </a>
                      <p className='text-xs text-neutral-500 mt-1 line-clamp-2'>
                        {related.description
                          ?.replace(/<[^>]*>?/gm, '')
                          .slice(0, 60)}
                        ...
                      </p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </aside>

        {/* 📜 Blog Content */}
        <div
          className='lg:col-span-3 prose prose-neutral max-w-none prose-headings:text-black prose-p:text-neutral-700 prose-a:text-black hover:prose-a:text-neutral-800 prose-img:rounded-xl'
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />
      </div>
    </div>
  );
}
