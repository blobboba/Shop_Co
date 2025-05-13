import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const PremByAnima = (): JSX.Element => {
  const advantages = [
    {
      id: 1,
      title: "Скидки круглый год",
      backgroundImage: "/image.png",
    },
    {
      id: 2,
      title: "Оперативная поддержка",
      backgroundImage: "/image-1.png",
    },
    {
      id: 3,
      title: "Любовь к играм",
      backgroundImage: "/image-2.png",
    },
  ];

  return (
    <section className="flex flex-col w-full max-w-[1170px] items-start gap-6 mx-auto">
      <h2 className="font-section-titles font-[number:var(--section-titles-font-weight)] text-white text-[length:var(--section-titles-font-size)] tracking-[var(--section-titles-letter-spacing)] leading-[var(--section-titles-line-height)] whitespace-nowrap [font-style:var(--section-titles-font-style)]">
        Преимущества
      </h2>

      <div className="flex items-center justify-between gap-[30px] w-full">
        {advantages.map((advantage) => (
          <Card
            key={advantage.id}
            className="w-full max-w-[370px] h-32 rounded-[10px] overflow-hidden"
            style={{
              backgroundImage: `url(${advantage.backgroundImage})`,
              backgroundSize: "100% 100%",
            }}
          >
            <CardContent className="p-0 h-full bg-transparent shadow-[inset_0px_-40px_55px_35px_#29262e] flex items-center justify-center">
              <div className="[text-shadow:0px_0px_20px_#00000059] text-base text-center leading-[25px] whitespace-nowrap [font-family:'Open_Sans',Helvetica] font-extrabold text-white tracking-[0]">
                {advantage.title}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
