import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HomeByAnima = (): JSX.Element => {
  return (
    <section className="relative w-full h-[759px] [background:linear-gradient(180deg,rgba(31,31,31,0)_0%,rgba(31,31,31,1)_100%),url(..//home.png)_50%_50%_/_cover] bg-cover bg-center">
      <Card className="border-0 absolute top-[380px] left-[135px] w-[501px] bg-transparent">
        <CardContent className="p-0 flex flex-col items-start gap-[26px]">
          <h1 className="font-['Open_Sans',Helvetica] font-bold text-white text-5xl tracking-[0] leading-normal mt-[-1px]">
            THE LAST OF US PART II REMASTERED
          </h1>

          <div className="flex items-center gap-[29px]">
            <Button className="h-10 px-[15px] py-[5px] bg-blue rounded-[5px] shadow-neon">
              <span className="font-['Open_Sans',Helvetica] font-semibold text-white text-2xl text-center">
                В КОРЗИНУ
              </span>
            </Button>

            <span className="font-['Open_Sans',Helvetica] font-semibold text-white text-2xl text-center">
              $49.99
            </span>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
