import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import AllNFTs from "./pages/AllNFTs/AllNFTs";

const Router: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/all-nfts" element={<AllNFTs />} />
        <Route path="*" element={<Navigate to={"/404"} />} />
      </Routes>
    </div>
  );
};

export default Router;
