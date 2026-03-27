
import { useLoaderData, useParams } from 'react-router';


const AppDetailsPage = () => {
    const id = useParams();
    const appData = useLoaderData();
     const app = appData.find((apps)=>apps.id === parseInt(id.id));
    console.log(app)
     

  return (
    <div className="w-10/12 mx-auto mt-10">

      
      </div>
 )     
}

export default AppDetailsPage;