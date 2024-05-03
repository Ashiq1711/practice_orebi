import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./component/Layout/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Jurnal from "./pages/Jurnal";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<RootLayout />}>
<Route index element={<Home />}></Route>
<Route path="/shop" element={<Shop />}></Route>
<Route path="/about" element={<About />}></Route>
<Route path="/contact" element={<Contact />}></Route>
<Route path="/jurnal" element={<Jurnal />}></Route>
  </Route>)
);
function App() 
   {
    return <RouterProvider router={router} />;
  
}

export default App;
