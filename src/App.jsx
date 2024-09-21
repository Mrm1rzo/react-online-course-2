import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import RootLayout from "./layouts/RootLayout.jsx";

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
};

export default App;
