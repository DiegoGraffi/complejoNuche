"use client";

import "photoswipe/dist/photoswipe.css";
import img01 from "../../public/01.jpg";
import img02 from "../../public/02.jpg";
import img03 from "../../public/03.jpg";
import img04 from "../../public/04.jpg";
import img05 from "../../public/05.jpg";
import img06 from "../../public/06.jpg";
import img07 from "../../public/07.jpg";
import img08 from "../../public/08.jpg";
import img09 from "../../public/09.jpg";
import { Gallery, Item } from "react-photoswipe-gallery";
import Image from "next/image";

const options = {
  bgOpacity: 0.9,
  padding: { top: 20, bottom: 20, left: 20, right: 20 },
};

export default function MyGallery() {
  return (
    <Gallery withDownloadButton options={options}>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-[12px]  mx-auto mt-5">
        <div className="relative w-full h-[150px] md:h-[300px]">
          <Item
            original={img01.src}
            thumbnail={img01.src}
            width="4000"
            height="2250"
          >
            {({ ref, open }) => (
              <Image
                ref={ref}
                onClick={open}
                src={img01.src}
                fill
                className="object-cover rounded-md border border-[rgba(0,0,0,.3)]"
                alt="render"
              />
            )}
          </Item>
        </div>

        <div className="relative w-full h-[150px] md:h-[300px]">
          <Item
            original={img02.src}
            thumbnail={img02.src}
            width="4000"
            height="2250"
          >
            {({ ref, open }) => (
              <Image
                ref={ref}
                onClick={open}
                src={img02.src}
                fill
                className="object-cover rounded-md border border-[rgba(0,0,0,.3)]"
                alt="render2"
              />
            )}
          </Item>
        </div>

        <div className="relative w-full h-[150px] md:h-[300px]">
          <Item
            original={img03.src}
            thumbnail={img03.src}
            width="4000"
            height="2250"
          >
            {({ ref, open }) => (
              <Image
                ref={ref}
                onClick={open}
                src={img03.src}
                fill
                className="object-cover rounded-md border border-[rgba(0,0,0,.3)]"
                alt="render3"
              />
            )}
          </Item>
        </div>

        <div className="relative w-full h-[150px] md:h-[300px]">
          <Item
            original={img04.src}
            thumbnail={img04.src}
            width="4000"
            height="2250"
          >
            {({ ref, open }) => (
              <Image
                ref={ref}
                onClick={open}
                src={img04.src}
                fill
                className="object-cover rounded-md border border-[rgba(0,0,0,.3)]"
                alt="render4"
              />
            )}
          </Item>
        </div>

        <div className="relative w-full h-[150px] md:h-[300px]">
          <Item
            original={img05.src}
            thumbnail={img05.src}
            width="4000"
            height="2250"
          >
            {({ ref, open }) => (
              <Image
                ref={ref}
                onClick={open}
                src={img05.src}
                fill
                className="object-cover rounded-md border border-[rgba(0,0,0,.3)]"
                alt="render5"
              />
            )}
          </Item>
        </div>

        <div className="relative w-full h-[150px] md:h-[300px]">
          <Item
            original={img06.src}
            thumbnail={img06.src}
            width="4000"
            height="2250"
          >
            {({ ref, open }) => (
              <Image
                ref={ref}
                onClick={open}
                src={img06.src}
                fill
                className="object-cover rounded-md border border-[rgba(0,0,0,.3)]"
                alt="render6"
              />
            )}
          </Item>
        </div>

        <div className="relative w-full h-[150px] md:h-[300px]">
          <Item
            original={img09.src}
            thumbnail={img09.src}
            width="4000"
            height="2250"
          >
            {({ ref, open }) => (
              <Image
                ref={ref}
                onClick={open}
                src={img09.src}
                fill
                className="object-cover rounded-md border border-[rgba(0,0,0,.3)]"
                alt="render7"
              />
            )}
          </Item>
        </div>

        <div className="relative w-full h-[150px] md:h-[300px]">
          <Item
            original={img07.src}
            thumbnail={img07.src}
            width="4000"
            height="2250"
          >
            {({ ref, open }) => (
              <Image
                ref={ref}
                onClick={open}
                src={img07.src}
                fill
                className="object-cover rounded-md border border-[rgba(0,0,0,.3)]"
                alt="render8"
              />
            )}
          </Item>
        </div>

        <div className="relative w-full h-[150px] md:h-[300px]">
          <Item
            original={img08.src}
            thumbnail={img08.src}
            width="4000"
            height="4000"
          >
            {({ ref, open }) => (
              <Image
                ref={ref}
                onClick={open}
                src={img08.src}
                fill
                className="object-cover rounded-md border border-[rgba(0,0,0,.3)]"
                alt="render9"
              />
            )}
          </Item>
        </div>
      </div>
    </Gallery>
  );
}
