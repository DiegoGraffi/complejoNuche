import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Carousel,
  IconButton,
} from "@material-tailwind/react";
import Image from "next/image";

export default function DeptoCard({
  imageUrl,
  imageUrl2,
  title,
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
}) {
  return (
    <Card
      className="max-w-[24rem] overflow-hidden border border-neutral-200"
      shadow={false}
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <Carousel
          className="rounded-t-xl border-b border-neutral-200"
          loop
          draggable
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="black"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="black"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 right-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
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
          <div className="relative aspect-square w-full ">
            <Image
              src={imageUrl}
              alt="Imagen"
              className="h-full w-full object-contain p-6"
              fill
            />
          </div>
          <div className="relative aspect-square w-full">
            <Image
              src={imageUrl2}
              alt="ImagenPlano"
              className="h-full w-full object-contain p-6"
              fill
            />
          </div>
        </Carousel>
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {title}
        </Typography>

        <div className="grid grid-cols-2 gap-2 mt-5">
          <div className="border rounded-md border-gray-400 font-medium p-3">
            {c1}
          </div>
          <div className="border rounded-md border-gray-400 font-medium p-3">
            {c2}
          </div>
          <div className="border rounded-md border-gray-400 font-medium p-3">
            {c3}
          </div>
          <div className="border rounded-md border-gray-400 font-medium p-3">
            {c4}
          </div>
          <div className="border rounded-md border-gray-400 font-medium p-3">
            {c5}
          </div>
          <div className="border rounded-md border-gray-400 font-medium p-3">
            {c6}
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
