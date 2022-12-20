import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Blogs from "../pages/Blogs";
import Conference from "../pages/Conference";
import Landing from "../pages/Landing";
import OurWork from "../pages/OurWork";
import SayHi from "../pages/SayHi";
import ShceduleDetails from "../pages/ShceduleDetails";
import WhatWeDo from "../pages/WhatWeDo";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/schedule/:item" element={<ShceduleDetails />}></Route>
        <Route path="/about" element={<Conference />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/ourwork" element={<OurWork />}></Route>
        <Route path="whatwedo" element={<WhatWeDo />}></Route>
        <Route path="sayhi" element={<SayHi />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
