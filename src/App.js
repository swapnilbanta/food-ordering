import React from "react";
import ReactDom from "react-dom/client";
import { Header } from "./components/Header";

import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import RestaurantMenu from "./components/RestaurantMenu";   


const AppLayout = ()=>{

    return (
        <div className="app">
<Header />
      <Routes>
        <Route path="/" element={<Body />}  />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
        <Route path="*" element={<Error />} />
      </Routes>

</div>
        )

};
// const foodRoute = createBrowserRouter([
//         {
//         path:"/",
//         element:<AppLayout/>,
//         children
//         :[  {
//                 path:"/",
//                 element:<Body/>
//         },
//         {
//                 path:"/about",
//                 element:<About/>
//             },
//             {
//                  path:"/contact",
//                  element:<Contact/>
//                      },{
//                         path:"/restaurants/:resId",
//                         element:<RestaurantMenu/>
//                      }
//                 ],
//         errorElement:<Error/>
//         },
      

// ]);



const root = ReactDom.createRoot(document.getElementById("root"));
root.render( <BrowserRouter>
        <AppLayout />
      </BrowserRouter>);
export default AppLayout;