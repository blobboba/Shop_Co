import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdByAnima } from "./sections/AdByAnima";
import { CatalogByAnima } from "./sections/CatalogByAnima";
import { FooterByAnima } from "./sections/FooterByAnima";
import { HomeByAnima } from "./sections/HomeByAnima";
import { NavbarByAnima } from "./sections/NavbarByAnima";
import { PremByAnima } from "./sections/PremByAnima";
import { CatalogPage } from "./pages/CatalogPage";
import { CartPage } from "./pages/CartPage";

export const Index = (): JSX.Element => {
  return (
    <Router>
      <div className="bg-dark-bg flex flex-col items-center w-full min-h-screen">
        <div className="bg-dark-bg w-full max-w-[1440px] flex flex-col">
          <NavbarByAnima />
          <Routes>
            <Route
              path="/"
              element={
                <main className="flex flex-col">
                  <HomeByAnima />
                  <PremByAnima />
                  <CatalogByAnima />
                  <AdByAnima />
                </main>
              }
            />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <FooterByAnima />
        </div>
      </div>
    </Router>
  );
};