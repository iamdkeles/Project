export default function Featuredworks() {
  return (
    <section className="w-full max-w-4xl mt-12 m-auto">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Featured works</h3>
      <div className="grid">
        <div className="justify-between items-center p-6 bg-white shadow">
          <img
            src="/public/images/rectangle 30.png"
            className="float-left me-4"
          ></img>
          <h4 className="font-semibold text-gray-800">Designing Dashboards</h4>
          <p className="text-blue-800">2024</p>
          <p className="text-gray-600 mt-2">Dashboard</p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className="p-6 bg-white shadow">
          <img
            src="/public/images/rectangle 33.png"
            className="float-left me-4"
          ></img>
          <h4 className="font-semibold text-gray-800">
            Vibrant Portraits of 2023
          </h4>
          <p className="">2023</p>
          <p className="text-gray-600 mt-2">Illustration</p>
        </div>
        <div className="p-6 bg-white shadow">
          <img
            src="/public/images/rectangle 34.png"
            className="float-left me-4"
          ></img>
          <h4 className="font-semibold text-gray-800">
            36 Days of Malayalam Type
          </h4>
          <p className="">2022</p>
          <p className="text-gray-600 mt-2">Typography</p>
        </div>
      </div>
    </section>
  );
}
