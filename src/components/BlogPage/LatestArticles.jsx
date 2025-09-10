import Image from "next/image";

export default function LatestArticles() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="rounded-2xl h-120 flex items-center justify-center flex-col"
        >
          <img
            src="/hello.jpg"
            alt=""
            className="rounded-2xl h-100 w-100 object-cover"
          />
          <div className="flex flex-col justify-between">
            <h3 className="text-[25px] font-semibold">
              Unveiling the Enigmatic World of Giant Pandas
            </h3>
            <span className="mt-2 inline font-bold px-3 py-2 text-xs border-2 border-gray-300 rounded-full w-fit">
              Thursday, Jan 08 2025
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}
