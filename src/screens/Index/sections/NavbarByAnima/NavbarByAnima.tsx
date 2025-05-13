import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { AuthDialog } from "../../../../components/auth/AuthDialog";
import { ShoppingCartIcon } from "lucide-react";
import { useCartStore } from "../../../../store/cart";

export const NavbarByAnima = (): JSX.Element => {
  const location = useLocation();
  const { items } = useCartStore();

  return (
    <header className="w-full h-[100px] bg-white">
      <nav className="h-full max-w-[1167px] mx-auto px-4 flex items-center justify-between">
        <Link to="/">
          <img
            className="w-[153.22px] h-[23.3px]"
            alt="Shop CO"
            src="/shop-co.svg"
          />
        </Link>

        <div className="flex items-center gap-[18px]">
          <Link
            to="/"
            className={`[font-family:'Open_Sans',Helvetica] font-semibold ${
              location.pathname === "/" ? "text-blue" : "text-stroke"
            } text-sm`}
          >
            Главная
          </Link>

          <Link
            to="/catalog"
            className={`[font-family:'Open_Sans',Helvetica] font-semibold ${
              location.pathname === "/catalog" ? "text-blue" : "text-stroke"
            } text-sm`}
          >
            Каталог
          </Link>
        </div>

        <div className="flex items-center gap-3.5">
          <AuthDialog />
          <Link to="/cart" className="relative">
            <ShoppingCartIcon className="w-6 h-6" />
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                {items.length}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};