import React from "react";
import { Button } from "../../../../components/ui/button";

export const AdByAnima = (): JSX.Element => {
  return (
    <section className="relative w-full h-[424px] my-6">
      <div className="relative h-full">
        <div className="w-full h-[400px] mt-6 bg-black bg-[url(/mask.png)] bg-[100%_100%]" />

        <img
          className="absolute w-[286px] h-[424px] top-0 right-[355px] object-cover"
          alt="Game"
          src="/game.png"
        />

        <div className="absolute w-[335px] h-[181px] top-[152px] left-[332px]">
          <img className="w-full h-[51px]" alt="Shop CO" src="/shop-co.svg" />

          <div className="flex flex-col w-[269px] items-center gap-8 mt-[27px] mx-auto">
            <p className="font-['Open_Sans',Helvetica] font-bold text-light-grey text-sm text-center">
              <span className="text-[#e4e4e4]">
                В поисках скидок? Тогда заходи вводи промокод{" "}
              </span>
              <span className="underline">ZXC321</span>
            </p>

            <Button className="h-[35px] px-3 py-[5px] bg-dark-grey rounded-sm border border-solid border-[#0072ce] font-['Open_Sans',Helvetica] font-bold text-white text-base">
              ПЕРЕЙТИ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
