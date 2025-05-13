import React from "react";
import { Card, CardContent } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { useCartStore } from "../../../store/cart";

const games = [
  {
    id: 1,
    title: "Cyberpunk 2077",
    publisher: "WB Games / CD Project Red",
    platform: "STEAM",
    price: "$59.99",
    image: "/game-image.png",
  },
  {
    id: 2,
    title: "Far Cry 6",
    publisher: "Ubisoft",
    platform: "STEAM",
    price: "$49.99",
    image: "/game-image-1.png",
  },
  {
    id: 3,
    title: "Hitman III",
    publisher: "IO Interactive",
    platform: "PS",
    price: "$19.99",
    image: "/game-image-2.png",
  },
  {
    id: 4,
    title: "Call of Duty®: Black Ops",
    publisher: "Activision",
    platform: "STEAM",
    price: "$56.99",
    image: "/game-image-3.png",
  },
  {
    id: 5,
    title: "Ghostrunner",
    publisher: "505 Games / One More Level",
    platform: "STEAM",
    price: "$52.99",
    image: "/game-image-4.png",
  },
  {
    id: 6,
    title: "Watch Dogs Legion",
    publisher: "Ubisoft",
    platform: "STEAM",
    price: "$59.99",
    image: "/game-image-5.png",
  },
  {
    id: 7,
    title: "The Pathless",
    publisher: "Annapurna / Giant Squid",
    platform: "STEAM",
    price: "$59.99",
    image: "/game-image-6.png",
  },
  {
    id: 8,
    title: "NBA 2K21",
    publisher: "2K Sports / Visual Concepts",
    platform: "PS",
    price: "$12.99",
    image: "/game-image-7.png",
  },
  {
    id: 9,
    title: "Cloudpunk",
    publisher: "Maple Whispering / Ion Lands",
    platform: "STEAM",
    price: "$60.99",
    image: "/game-image-8.png",
  },
  {
    id: 10,
    title: "Demon's Souls",
    publisher: "SIE / Bluepoint",
    platform: "STEAM",
    price: "$32.99",
    image: "/game-image-9.png",
  },
  {
    id: 11,
    title: "Godfall",
    publisher: "Gearbox / Counterplay Games",
    platform: "STEAM",
    price: "$54.99",
    image: "/game-image-10.png",
  },
  {
    id: 12,
    title: "ASTRO's PLAYROOM",
    publisher: "SIE / Japan Studio",
    platform: "STEAM",
    price: "$59.99",
    image: "/game-image-11.png",
  },
];

export const CatalogPage = () => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-white mb-8">Каталог игр</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[30px]">
        {games.map((game) => (
          <Card
            key={game.id}
            className="w-full h-[283px] bg-dark-bg rounded-[10px] border border-solid border-[#383838] overflow-hidden"
          >
            <div className="relative">
              <img
                className="w-full h-[170px] object-cover"
                alt="Game image"
                src={game.image}
              />
            </div>

            <CardContent className="p-[5px] flex flex-col gap-[11px]">
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col gap-px">
                  <h3 className="text-xs font-extrabold text-white font-['Open_Sans',Helvetica]">
                    {game.title}
                  </h3>
                  <p className="text-[10px] font-semibold text-grey font-['Open_Sans',Helvetica]">
                    {game.publisher}
                  </p>
                </div>

                <Badge
                  variant="outline"
                  className="w-fit h-[17px] px-[5px] py-0 bg-app-background rounded border border-solid border-[#383838] text-grey text-xs font-normal font-['Open_Sans',Helvetica]"
                >
                  {game.platform}
                </Badge>
              </div>

              <Button
                onClick={() => addItem(game)}
                className="h-[26px] w-full bg-blue rounded-[10px] shadow-neon px-[60px] py-[5px] text-xs font-bold text-white font-['Open_Sans',Helvetica]"
              >
                {game.price}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};