import { Carousel } from "@material-tailwind/react";
import img01 from "../../public/01.jpg";
import img02 from "../../public/02.jpg";
import img03 from "../../public/03.jpg";
import img04 from "../../public/04.jpg";
import img05 from "../../public/05.jpg";
import img06 from "../../public/06.jpg";
import img07 from "../../public/07.jpg";
import img08 from "../../public/08.jpg";
import img09 from "../../public/09.jpg";
import Image from "next/image";

export function CarouselCustomNavigation() {
  return (
    <Carousel
      className="mt-5 md:mt-0"
      loop
      draggable
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <Image src={img01} alt="image 1" className="h-full w-full object-cover" />
      <Image src={img02} alt="image 2" className="h-full w-full object-cover" />
      <Image src={img03} alt="image 3" className="h-full w-full object-cover" />
      <Image src={img04} alt="image 4" className="h-full w-full object-cover" />
      <Image src={img05} alt="image 5" className="h-full w-full object-cover" />
      <Image src={img06} alt="image 6" className="h-full w-full object-cover" />
      <Image src={img07} alt="image 7" className="h-full w-full object-cover" />
      {/* <Image src={img08} alt="image 8" className="h-full w-full object-cover" /> */}
      <Image src={img09} alt="image 9" className="h-full w-full object-cover" />
    </Carousel>
  );
}
