import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import Image, { StaticImageData } from "next/image";

type DeptoProps = {
  imagen: StaticImageData;
  plano: StaticImageData;
  titulo: string;
  caracteristica1: string;
  caracteristica2: string;
  caracteristica3: string;
  caracteristica4: string;
  caracteristica5: string;
  caracteristica6: string;
};

/**@ts-ignore */

const DeptoView: React.FC<DeptoProps> = ({
  imagen,
  plano,
  titulo,
  caracteristica1,
  caracteristica2,
  caracteristica3,
  caracteristica4,
  caracteristica5,
  caracteristica6,
}) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="border border-neutral-300 rounded-xl mt-5 gap-2 w-[100%] h-[100%] flex basis-1 flex-col md:basis-1/2">
      <h3 className="font-bold rounded-lg p-4">{titulo}</h3>
      <Separator />

      <div className="w-full h-full flex flex-col justify-center items-start p-4 ">
        <ul className="grid grid-cols-2 gap-2 w-[100%]">
          <li className="p-2 bg-neutral-100 rounded-md border border-opacity-50">
            {caracteristica1}
          </li>
          <li className="p-2 bg-neutral-100 rounded-md border border-opacity-50">
            {caracteristica2}
          </li>
          <li className="p-2 bg-neutral-100 rounded-md border border-opacity-50">
            {caracteristica3}
          </li>
          <li className="p-2 bg-neutral-100 rounded-md border border-opacity-50">
            {caracteristica4}
          </li>
          <li className="p-2 bg-neutral-100 rounded-md border border-opacity-50">
            {caracteristica5}
          </li>
          <li className="p-2 bg-neutral-100 rounded-md border border-opacity-50">
            {caracteristica6}
          </li>
        </ul>
      </div>
      <Separator />

      <div className="px-14 py-5">
        <Carousel setApi={setApi}>
          <CarouselContent>
            <CarouselItem className="h-[600px] relative">
              <Image
                src={imagen}
                alt="imagen"
                fill
                className="object-contain p-2"
              />
            </CarouselItem>

            <CarouselItem className="h-[600px] relative">
              <Image
                src={plano}
                alt="imagen"
                fill
                className="object-contain p-2"
              />
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Imagen {current} de {count}
      </div>
    </div>
  );
};

export default DeptoView;
