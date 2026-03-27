import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import MainLayout from "../MainLayout/MainLayout";
import Error from "../Pages/Error/Error";
import AppList from "../Component/App/AppList";
import ShowAllbtn from "../Component/App/ShowAllBtn/ShowAllbtn";
import AppDetailsPage from "../Pages/AppDetailsPage/AppDetailsPage";
import axios from "axios";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error/>,
    children:[
        { index: true,
          path:"/",
          loader: async ()=>{
            const res = await fetch("/app.json");
            if(!res.ok){
              throw new Error("Failed to load data");
            };
            return res.json();
          },
           Component: Home },
           {
              path:"/apps",
            loader: async ()=>{
            const res = await fetch("/app.json");
            if(!res.ok){
              throw new Error("Failed to load data");
            };
            return res.json();
          },
              Component:AppList
           },
           {
            path:"/apps",
            Component:ShowAllbtn
           },
           {
            path:"/app/:id",
            loader: async ()=>{
              const res = await fetch("/app.json");
              if(!res.ok){
                throw new Error("Fails to load data");
              }
              return res.json();
            },
            Component:AppDetailsPage,
           }
    ]
  },
]);

