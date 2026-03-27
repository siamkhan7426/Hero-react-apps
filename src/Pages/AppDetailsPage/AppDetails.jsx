import { useLoaderData, useParams } from 'react-router';
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

 const AppDetails = ()=> {
  const  id  = useParams();

  const appData = useLoaderData();

    const app = appData.find(apps=>apps.id === parseInt(id.id) )
    console.log(app)

  const [installed, setInstalled] = useState(false);

  const handleInstall = () => {
    setInstalled(true);
    toast.success("App Installed Successfully ✅");
  };

  if (!app) {
    return <h2 className="text-center mt-10">App Not Found</h2>;
  }

  const colors = ["#f97316", "#fb923c", "#fdba74", "#fed7aa", "#ffedd5"];

  return (
    <div className="w-10/12 mx-auto mt-10">

      {/* ================= HEADER ================= */}
      <div className="flex gap-6 border-b pb-6">

        {/* Image */}
        <img
          src={app.image}
          alt={app.title}
          className="w-44 h-44 rounded-xl shadow"
        />
         
        {/* Info */}
        <div>
          <h1 className="text-xl font-bold">{app.title}</h1>
          <p className="text-gray-400 text-sm">{app.companyName}</p>

          {/* Stats */}
          <div className="flex gap-10 mt-4 text-center">

            <div>
              <p className="text-green-500 text-xl">⬇</p>
              <span>

                    {new Intl.NumberFormat("en-US",{
                      notation: "compact"
                    }).format(app.downloads)}
                    </span>
              <p className="text-xs text-gray-400">Downloads</p>
            </div>

            <div>
              <p className="text-yellow-500 text-xl">⭐</p>
              <p className="font-semibold">{app.ratingAvg}</p>
              <p className="text-xs text-gray-400">Rating</p>
            </div>

            <div>
              <p className="text-purple-500 text-xl">💬</p>
              <p className="font-semibold">
                {(app.reviews / 1000).toFixed(0)}K
              </p>
              <p className="text-xs text-gray-400">Reviews</p>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={handleInstall}
            disabled={installed}
            className={`mt-5 px-6 py-2 rounded-lg text-white font-medium transition ${
              installed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {installed ? "Installed" : "Install"}
          </button>
          <ToastContainer />
        </div>
      </div>

      {/* ================= CHART ================= */}
      <div className="mt-10">
        <h2 className="font-semibold mb-4">Ratings</h2>

        <div className="w-full h-72 bg-white p-4 rounded-xl shadow">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={app.ratings.slice().reverse()}
              layout="vertical"
            >
              <YAxis dataKey="name" type="category" />
              <XAxis type="number" hide />
              <Tooltip />

              <Bar dataKey="count" radius={[0, 10, 10, 0]}>
                {app.ratings.map((_, index) => (
                  <Cell
                    key={index}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ================= DESCRIPTION ================= */}
      <div className="mt-10 bg-white p-6 rounded-xl shadow">
        <h2 className="font-semibold mb-3">Description</h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          {app.description}
        </p>
      </div>

    </div>
  );
}



export default AppDetails;