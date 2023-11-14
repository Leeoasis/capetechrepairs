import Link from "next/link";

function Home() {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold">Home</h1>
      <div className="container relative bg-custom-image">
        <div className="absolute inset-0 bg-overlay z-10"></div>
        <h2 className="z-20 relative font-bold text-white">Laptop, Phone, TV, Desktop, Console, Monitor, Gaming PCs/Laptops & more</h2>
        <div className="grid grid-cols-2 gap-4 ml-4 z-20 relative">
          <div className="bg-overlay mr-2 p-4 shadow-md rounded-md">
            <h2 className="text-customGreen font-bold">QUALITY REPAIRS (warranty !!!!)</h2>
          </div>
          <div className="bg-overlay p-4 mr-2 shadow-md rounded-md">
            <h2 className="text-customGreen font-bold">UPGRADES & UPDATES (trade ins)</h2>
          </div>
          <div className="bg-overlay p-4 shadow-md rounded-md">
            <ul className="text-customGreen">
              <li className="mb-4">We have professional technicians guaranteed to repair you devices properly and reliably.</li>
              <li className="mb-4">Our Crew is equipped with proper and adequate tools and equipment to ensure repairs are done without compromise.</li>
              <li>Experienced technicians guarantee less waiting time while maintaining quality of the repair.</li>
            </ul>
          </div>
          <div className="bg-overlay mr-2 p-4 shadow-md rounded-md">
            <ul className="text-customGreen">
              <li className="mb-4">Feel free to get a free quote on what is best for your system between update and upgrade.</li>
              <li className="mb-4">We have options to trade in devices to help lower the cost of upgrades.</li>
              <li className="mb-4">Most relevant updates are offered so as to maintain system performance.</li>
            </ul>
          </div>
          <div className="mb-4">
            <Link href="/quote" legacyBehavior>
              <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-20 relative">
                Get a Free Quote
              </a>
            </Link>
          </div>
          <div>
            <Link href="/contact" legacyBehavior>
              <a className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded z-20 relative">
                Get in Touch
              </a>
            </Link>
          </div>
          <h2 className="font-bold text-white">Visit Our store (Bellville, Capetown) or Courier in your device and we will fix your problem.</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
