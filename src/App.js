import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import Contact from "./components/Contact";
import RestroMenu from "./components/RestroMenu";
import { lazy, Suspense, useEffect, useState } from "react";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const data = {
      name: "Roshan",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName }}>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <Outlet />
        </main>

        <Footer name="Roshan" />
      </div>
    </UserContext.Provider>
  );
};

const router = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Body />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="grocery"
          element={
            <Suspense fallback={<Shimmer />}>
              <Grocery />
            </Suspense>
          }
        />
        <Route path="/restraunt/:resId" element={<RestroMenu />} />
      </Route>
      <Route path="/*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(router);
