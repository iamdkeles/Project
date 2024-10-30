export default function Post() {
  return (
    <section className="w-full max-w-4xl mt-12 m-auto mb-3 shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold text-gray-800">Recent posts</h3>
        <a
          href="#view-all"
          className="text-blue-500 font-medium hover:text-blue-700"
        >
          View all
        </a>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-6 bg-white shadow rounded-lg">
          <h4 className="font-semibold text-gray-800">
            Making a design system from scratch
          </h4>
          <p className="text-sm text-gray-500 mb-2">
            12 Feb 2020 | Design, Pattern
          </p>
          <p className="text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h4 className="font-semibold text-gray-800">
            Creating pixel perfect icons in Figma
          </h4>
          <p className="text-sm text-gray-500 mb-2">
            12 Feb 2020 | Figma, Icon Design
          </p>
          <p className="text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
        </div>
      </div>
    </section>
  );
}
