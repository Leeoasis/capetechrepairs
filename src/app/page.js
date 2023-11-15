import Link from "next/link";
// import Slider from "../app/components/Slider";
import ContactForm from "../app/components/contactForm";
import Maps from "./components/map";
function Home() {
  return (
    <div className="container">
      <h2 className="text-3xl font-bold mt-4 mb-8">Home</h2>
      <div className="container relative bg-custom-image mb-4">
        <div className="absolute inset-0 bg-overlay z-10"></div>
        <h1 className="z-20 relative font-extrabold bg-customBlue text-customDarkGreen text-3xl ml-2 mr-2 mb-8 mt-8 text-center">Laptop, Phone, TV, Desktop, Console, Monitor, Gaming PCs/Laptops & more</h1>
        <div className="grid grid-cols-2 gap-12 ml-4 z-20 relative">
          <div className="bg-customBlue mr-2 p-4 shadow-md rounded-md">
            <h2 className="text-white font-bold">QUALITY REPAIRS (warranty !!!!)</h2>
          </div>
          <div className="bg-customBlue p-4 mr-2 shadow-md rounded-md">
            <h2 className="text-white font-bold">UPGRADES & UPDATES (trade ins)</h2>
          </div>
          <div className="bg-customBlue p-4 shadow-md rounded-md">
            <ul className="text-white">
              <li className="mb-4">We have professional technicians guaranteed to repair you devices properly and reliably.</li>
              <li className="mb-4">Our Crew is equipped with proper and adequate tools and equipment to ensure repairs are done without compromise.</li>
              <li>Experienced technicians guarantee less waiting time while maintaining quality of the repair.</li>
            </ul>
          </div>
          <div className="bg-customBlue mr-2 p-4 shadow-md rounded-md">
            <ul className="text-white">
              <li className="mb-4">Feel free to get a free quote on what is best for your system between update and upgrade.</li>
              <li className="mb-4">We have options to trade in devices to help lower the cost of upgrades.</li>
              <li className="mb-4">Most relevant updates are offered so as to maintain system performance.</li>
            </ul>
          </div>
          <div className="mb-4">
            <Link href="/quote" legacyBehavior>
              <a className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded z-20 relative">
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
          <h2 className="font-bold text-customDarkGreen text-2xl mb-8 bg-customBlue ">Visit Our store (Bellville, Capetown) or Courier in your device and we will fix your problem.</h2>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 ml-6">
        <div className="bg-customPurple p-4 mt-4 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 ">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>

        </div>
        <div className="bg-customPurple p-4 mt-4 mb-4"> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"className="w-12 h-12 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
</svg>

        </div>
        <div className="bg-customPurple p-4 mt-4 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"className="w-12 h-12 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
</svg>
</div>
        <div className="bg-customPurple p-4 mt-4 mb-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"className="w-12 h-12 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
</svg>
</div>
        <div className="mb-4">
          <h2 className="font-bold">Tools & Parts</h2>
        </div>
        <div>
          <h2 className="font-bold">Motherboard Repairs</h2>
        </div>
        <div>
          <h2 className="font-bold">Gaming Setups</h2>
        </div>
        <div>
        <h2 className="font-bold">Courier/Mail in your Device</h2>
        </div>
        <div>
          <p>We sell Tried, Approved and  Recommended tools and parts for all your repairs tech-related</p>
        </div>
        <div>
        <p>Technicians can bring or mail in motherboards for repair and refurbishment at affordable prices</p>
        </div>
        <div>
        <p>We build custom made gaming setups as well as upgrade and maintenance of your systems</p>
        </div>
        <div>
        <p>Our Delivery System will ensure that you get your problems fixed at the comfort of your house without having to worry about travel times and costs</p>
        </div>
        <div className="mb-8">
        <Link href="/quote" legacyBehavior>
              <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-20 relative">
                Parts
              </a>
            </Link>
        </div>
        <div>
        <Link href="/quote" legacyBehavior>
              <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-20 relative">
                Tech Support
              </a>
            </Link>
        </div>
        <div>
        <Link href="/quote" legacyBehavior>
              <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-20 relative">
                Gamers
              </a>
            </Link>
        </div>
        <div>
        <Link href="/quote" legacyBehavior>
              <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-20 relative">
                Mail-In
              </a>
            </Link>
        </div>
      </div>
      <div className="bg-customPurple mt-4">
        <h2 className="font-bold text-center">
          Store
        </h2>
      </div>
      <div className="bg-customPurple mt-4 mb-8">
        <h2 className="font-bold text-center">
          Contact Us
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="shadow-md p-4 bg-customBlue">
            <p>Call or Visit Us</p>
            <ul>
              <li>0648188737</li>
              <li>147 Voortrekker RD Bellville, Cape-town </li>
              <li>Sunday-Friday – 9 AM to 6 PM</li>
            </ul>
            <Maps />
          </div>
          <div className="shadow-md p-4 bg-customBlue">
            <p>Get in touch with us via Email,
              Call, Whatsapp, Facebook or
              walk into Our store.
              We would love to hear from you</p>
              <ContactForm />
          </div>
      </div>
    </div>
  );
}

export default Home;
