export default function Hero() {
  return (
    <section className="relative h-96 flex flex-col justify-center items-center bg-cover bg-center rounded-2xl text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our Blog</h1>
      <div className="flex w-full max-w-md bg-white rounded-full overflow-hidden shadow">
        <input
          type="text"
          placeholder="Search blog..."
          className="flex-grow px-4 py-2 text-black outline-none"
        />
        <button className="px-6 py-2 bg-blue-600 text-white font-medium cursor-pointer">
          Search
        </button>
      </div>
    </section>
  );
}
