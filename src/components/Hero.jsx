export default function Hero() {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-4xl bg-white p-8 mt-20 m-auto shadow-md">
      <div className="md:w-2/3 text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-800">Hi, I am Oladele,</h1>
        <h2 className="text-2xl font-semibold text-gray-700">
          Creative Technologist
        </h2>
        <p className="text-gray-600 mt-4">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.{" "}
        </p>
        <button
          className="mt-6 bg-red-500 text-white font-semibold
            px-6 py-2 rounded-lg hover:bg-red-400"
        >
          Download Resume
        </button>
      </div>
      <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
        <img
          src="/public/images/Oladele.jpg"
          alt="Profile"
          className="rounded-full border-4 border-gray-100 shadow-lg"
        />
      </div>
    </header>
  );
}
