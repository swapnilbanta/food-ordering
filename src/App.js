import React, { useEffect, useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import UserContext from "./utils/UserContext";
import { Header } from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import { createRoot } from 'react-dom/client';


const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  // Authentication
  useEffect(() => {
    const data = {
      name: "swapnil banta",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/about" element={<Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/grocery" element={<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>} />
            <Route path="/restaurants/:resId" element={<Suspense fallback={<h1>Loading...</h1>}><RestaurantMenu /></Suspense>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<AppLayout />
</BrowserRouter>,
);
export default AppLayout;
