import { Link, useLoaderData } from "react-router";
import { useState } from "react";
import AppCard from "./AppCard";
import AppError from '../../assets/App-Error.png'

const AppList = () => {
  const data = useLoaderData();

  //  STEP 1: search state
  const [search, setSearch] = useState("");

  //  STEP 2: filter logic
  const filteredApps = data.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>

      {/* ================= TOP SECTION ================= */}
      <div className="flex items-center justify-between mt-10 w-11/12 mx-auto">

        {/* ✅ dynamic length */}
        <h3>{filteredApps.length} Apps Found</h3>

        {/* ✅ search input */}
        <label className="input flex items-center gap-2">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2.5" fill="none" />
            <path d="m21 21-4.3-4.3" stroke="currentColor" strokeWidth="2.5" fill="none" />
          </svg>

          <input
            type="search"
            className="grow"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>

      {/* ================= TITLE ================= */}
      <div className="text-center space-y-4 mt-10">
        <h1 className="text-2xl font-bold">Our All Applications</h1>
        <p className="text-gray-300">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {/* ================= APP GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 w-11/12 mx-auto">

        {
          filteredApps.length > 0 ? (
            filteredApps.map((card) => (
              <AppCard key={card.id} card={card} />
            ))
          ) : (
           <div className="text-center mt-10 col-span-full">
        <div className="w-full flex justify-center items-center mb-4"> <img className="full" src={AppError} /></div>
        <h1 className="font-bold text-2xl">OPPS!! APP NOT FOUND</h1>
        <p >The App you are requesting is not found on our system.  please try another apps</p>
      <Link to="/"> <div  className='flex justify-center items-center mt-8'>
            <button className='btn flex items-center gap-2 px-5 py-2 rounded-lg 
                             bg-gradient-to-r from-[#632EE3] to-[#9F62F2] 
                    text-white font-semibold shadow-md hover:opacity-90 transition'>
                Go Back!
            </button>
        </div>
        </Link>
    </div>
          )
        }

      </div>
    </section>
  );
};

export default AppList;