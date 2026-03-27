import { useLoaderData } from "react-router";
import AppCard from "./AppCard";

const AppList = () => {
    const data = useLoaderData();
    return (
        <section>
             <div className='flex items-center justify-between mt-10 w-11/12 mx-auto'>
                    <h3> Apps Found</h3>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" className="grow" placeholder="Search" />
                    </label>
                </div>
            <div className='text-center space-y-4 mt-10'>
                    <h1 className='text-2xl font-bold'>Our All Applications</h1>
                    <p className='text-gray-300'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                
            <div className='grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 w-11/12 mx-auto'>
                {
                    data.map((card)=><AppCard key={card.id} card={card}></AppCard>)
                }
            </div>
        </section>
    );
};

export default AppList;