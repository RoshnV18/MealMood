import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import Contact from "./components/Contact";
import RestroMenu from "./components/RestroMenu";
import { lazy, Suspense } from "react";
import Shimmer from "./components/Shimmer";

const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer name="Roshan" />
    </div>
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
