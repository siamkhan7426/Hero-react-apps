import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import Hero from '../../assets/hero.png'
import { Link } from "react-router";

const Banner = () => {
  return (
    <section>
        <div className="bg-gray-100 pt-16">

      {/* Top Section */}
      <div className="text-center max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          We Build <br /> <span className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Productive</span> <span>Apps</span>
        </h2>
        <p className="mt-4 text-gray-500 text-sm md:text-base">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler,
          smarter, and more exciting.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button className=" btn flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow">
           <FaGooglePlay />
            <a href="https://play.google.com/store/games?hl=en" target="_blank">Google Play</a>
            
          </button>

          <button className="btn flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow">
            <FaAppStoreIos />
             <a href="https://www.apple.com/app-store/" target="_blank"> App Store</a>
           
          </button>
        </div>
      </div>

      {/* Phone Image */}
      <div className="flex justify-center mt-10">
        <img
          src={Hero}
          alt="app"
          className="w-[260px] md:w-[320px]"
        />
      </div>

      {/* Bottom Gradient Section */}
      <div className=" bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-10 text-center">

        <h3 className="text-xl md:text-2xl font-semibold mb-6">
          Trusted By Millions, Built For You
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">

          <div>
            <h2 className="text-3xl font-bold">29.6M</h2>
            <p className="text-sm opacity-80">Total Downloads</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">906K</h2>
            <p className="text-sm opacity-80">Active Users</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">132+</h2>
            <p className="text-sm opacity-80">Apps Launched</p>
          </div>

        </div>
      </div>
    </div>
    </section>
  );
};

export default Banner;