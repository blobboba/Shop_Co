import { ShoppingCartIcon } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

export const FooterByAnima = (): JSX.Element => {
  const location = useLocation();
  const legalLinks = [
    "Соглашение",
    "Конфиденциальность",
    "Возвраты",
    "Правовая информация",
  ];

  const navLinks = [
    { name: "Главная", path: "/" },
    { name: "Каталог", path: "/catalog" },
    { name: "Корзина", path: "/cart" },
  ];

  return (
    <footer className="w-full bg-transparent">
      <div className="w-full bg-white">
        <div className="container py-[18px] flex items-center justify-between">
          <Link to="/">
            <img
              className="w-[153.22px] h-[23.3px]"
              alt="Shop CO"
              src="/shop-co.svg"
            />
          </Link>

          <div className="flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`[font-family:'Open_Sans',Helvetica] font-semibold text-xs ${
                  location.pathname === link.path ? "text-blue" : "text-stroke"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3.5">
            <Button
              variant="outline"
              className="h-auto px-2.5 py-1.5 rounded-[5px] border-[#0072ce] bg-white"
            >
              <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-stroke text-xs">
                Войти
              </span>
            </Button>
            <Link to="/cart">
              <ShoppingCartIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full h-[38px] bg-[#000000]">
        <div className="container h-full flex items-center justify-between">
          {legalLinks.map((link) => (
            <div
              key={link}
              className="[font-family:'Montserrat',Helvetica] font-normal text-[#ffffff] text-[13px] leading-[16.9px]"
            >
              {link}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};