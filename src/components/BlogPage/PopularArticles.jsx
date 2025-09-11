import LoaderLink from "../LoaderLink";

// components/PopularArticles.js
export default function PopularArticles() {
  const articles = {
    big: {
      title: "Guardians of the Pride: The Urgency of Lion Conservation Efforts",
      category: "length",
      image: "/hello.jpg",
    },
    small: [
      {
        title: "Unveiling the Enigmatic World of Giant Pandas",
        desc: "Unveiling the enigmatic world of giant pandas and conservation challenges",
        category: "power",
        image: "/hello.jpg",
      },
      {
        title: "Protecting the unique and threatened seas",
        desc: "Fauna & Flora has been using the collective knowledge and experience to protect nature.",
        category: "tempreture",
        image: "/hello.jpg",
      },
      {
        title: "Exploring the Fascinating Realm of Birds",
        desc: "Exploring the Fascinating Realm of Birds and Their Ecological Significance",
        category: "weight",
        image: "/hello.jpg",
      },
    ],
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
      {/* Big Article */}
      <div className=" overflow-hidden flex flex-col justify-center items-center">
        <img
          src={articles.big.image}
          alt={articles.big.title}
          className="object-cover rounded-2xl w-130 h-100"
        />
        <div className="mt-2 w-130">
          <LoaderLink href={"/blogs/details/unit-converter-guide"}>
            <h2 className="text-[30px] font-semibold mb-2">
              {articles.big.title}
            </h2>
          </LoaderLink>
          <span className="inline-block px-3 py-1 text-sm bg-gray-100 rounded-full">
            {articles.big.category}
          </span>
        </div>
      </div>

      {/* Three small articles */}
      <div className="flex flex-col justify-center items-center gap-4">
        {articles.small.map((article, idx) => (
          <div key={idx} className="flex gap-4 rounded-2xl overflow-hidden ">
            <img
              src={article.image}
              alt={article.title}
              className="w-46 h-42 object-cover rounded-xl"
            />
            <div className="flex flex-col justify-between">
              <LoaderLink href={"/blogs/details/unit-converter-guide"}>
                <h3 className="text-[25px] font-semibold hover:!text-gray-600">
                  {article.title}
                </h3>
              </LoaderLink>
              <p className="text-sm text-gray-600 line-clamp-2">
                {article.desc}
              </p>
              <span className="mt-2 inline px-3 py-1 text-xs bg-gray-100 rounded-full w-fit">
                {article.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
