import React, { useEffect, useState } from "react";
import ReactDom from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";   
import { lazy ,Suspense} from "react";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux"
import appStore from "./utils/appStore"
import cart from "./components/Cart";
import Cart from "./components/Cart";

const Grocery = lazy(()=> import("./components/Grocery"));
const About  = lazy(()=> import ("./components/About"));
const AppLayout = ()=>{
        const[userName, setUserName] =useState();
//Authentication
useEffect(()=>{
const data = {
        name:"swapnil banta",
}
setUserName(data.name);
},[])

    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <div className="app">
<Header />
      <Routes>
        <Route path="/" element={<Body />}  />
        <Route path="/about" element={<Suspense fallback="<h1>Loading...</h1>"><About/></Suspense>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/grocery" element={<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>} />
        <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
       
      </Routes>

</div>
</UserContext.Provider>
</Provider>

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