"use client";

import React from "react";
import Image from "next/image";
import img01 from "../../public/01comp.jpg";
import Link from "next/link";
import tipo1 from "../../public/Imagen D1.png";
import tipo2 from "../../public/Imagen D2.png";
import tipo3 from "../../public/Imagen D3.png";
import tipo4 from "../../public/Imagen D4.png";
import tipo1plano from "../../public/Plano D1.svg";
import tipo2plano from "../../public/Plano D2.svg";
import tipo3plano from "../../public/Plano D3.svg";
import tipo4plano from "../../public/Plano D4.svg";
import pbImage from "../../public/Plano planta baja.svg";
import paImage from "../../public/Plano planta 1 y 2.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LucideChevronDown, Menu, Building } from "lucide-react";
import { Card, Text, Group, Button, rem } from "@mantine/core";
import { Parallax } from "react-scroll-parallax";
import banner from "../../public/02.jpg";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

import DeptoView from "@/components/DeptoView";
import { HeaderMegaMenu } from "@/components/Navbar/Navbar";
import MyGallery from "@/components/MyGallery";
import { CarouselCustomNavigation } from "@/components/Carousel";
import Plantas from "@/components/Plantas";
import DeptoCard from "@/components/DeptoCard";

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const caracteristicas = [
    "Arquitectura moderna",
    "Carpinteria de aluminio DVH",
    "Portero electrico",
    "Portón electrico",
    "Estacionamiento para 10 autos",
    "Materiales de terminación de primera calidad",
    "Baño completo",
  ];

  return (
    <main className="min-h-screen w-[100%]">
      <HeaderMegaMenu />
      {/* Hero */}
      <section className="relative flex justify-center items-center h-screen overflow-x-hidden">
        <div className="absolute z-30 ">
          <div className="flex flex-col justify-end h-screen items-start px-5 pb-[100px] gap-5 mx-auto">
            <h1 className="text-white text-[40px] font-extralight text-left uppercase md:text-8xl w-full">
              Complejo <br /> <span className="font-black">Nuche</span>
            </h1>
            <p className="text-balance text-left text-[16px] font-normal text-white text-sm md:text-[20px] md:w-[55%] leading-7">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi,
              minus aliquid? Quas, dolorum? Iste corrupti consequatur in sequi
              iusto necessitatibus!
            </p>

            <div className="flex flex-col w-[100%] md:flex-row gap-5 justify-center items-stretch md:hidden">
              <Link
                href="#departamentos"
                className="text-black text-center text-sm border bg-white rounded-full py-3 px-5"
                scroll={true}
              >
                Ver departamentos
              </Link>
              <Link
                href="#contacto"
                className="text-white text-center border border-white rounded-full text-sm py-3 px-5"
                scroll={true}
              >
                Contacto
              </Link>
            </div>
            <Link href="#galeria" scroll={true} className="self-center">
              <LucideChevronDown className="mt-10" color="white" size={36} />
            </Link>
          </div>
        </div>

        <div className="w-full h-screen absolute overflow-hidden">
          <div className="bg-black opacity-75 w-full h-full absolute z-20"></div>
          <Image src={img01} alt="imagen" fill className="object-cover" />
        </div>
      </section>

      {/** Galeria */}
      <section id="galeria" className="bg-black py-[25px] md:py-[50px]">
        <div className="container mx-auto px-5">
          <h3 className="text-[20px] font-normal md:text-[64px] text-white">
            Galeria
          </h3>
          <p className="text-[16px] opacity-70 text-white mt-5 md:text-[20px] md:w-[55%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            ratione.
          </p>
          <div className="hidden md:block mt-16">
            <CarouselCustomNavigation />
          </div>
        </div>
        <div className="md:hidden">
          <CarouselCustomNavigation />
        </div>
      </section>

      {/* Plantas generales */}
      <section id="plantas" className="scroll-mt-10 relative">
        {/* <div className="bg-black h-[50%] w-full absolute border border-red-500"></div> */}

        <div className="container mx-auto py-[25px] md:py-[50px] px-5 ">
          <h3 className="text-[20px] text-black font-normal md:text-[64px]">
            Plantas <span className="font-bold text-black">Generales</span>
          </h3>
          <p className="text-[16px] opacity-70 text-black mt-5 md:text-[20px] md:w-[55%]">
            Consectetur adipisicing elit. Quam nesciunt quisquam doloremque
            distinctio aliquam nihil vero doloribus modi hic, ad tempora vitae
            eum officia tempore accusamus maiores iste consequatur suscipit.
          </p>

          <div className="md:hidden">
            <Plantas />
          </div>

          <div className="hidden md:grid md:grid-cols-2 md:gap-5 mt-[50px]">
            <div className="flex flex-col gap-5 justify-center items-center w-full">
              <p className="text-[20px] font-semibold">Planta Baja</p>
              <div className="aspect-square bg-white rounded-md border border-neutral-200 w-full max-h-[650px] relative">
                <Image
                  src={pbImage}
                  alt="planta baja"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center w-full">
              <p className="text-[20px] font-semibold">Plantas 1 y 2</p>
              <div className="aspect-square bg-white rounded-md border border-neutral-200 w-full max-h-[650px] relative">
                <Image
                  src={paImage}
                  alt="planta alta"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/** Departamentos */}
      <section
        id="departamentos"
        className="px-5 pb-10 scroll-mt-10 container mx-auto"
      >
        <h3 className="text-[20px] text-black font-normal md:text-[64px]">
          Departamentos - <span className="font-bold text-black">Tipos</span>
        </h3>
        <p className="text-[16px] opacity-70 text-black mt-5 md:text-[20px] md:w-[55%]">
          Consectetur adipisicing elit. Quam nesciunt quisquam doloremque
          distinctio aliquam nihil vero doloribus modi hic, ad tempora vitae eum
          officia tempore accusamus maiores iste consequatur suscipit.
        </p>

        <div className="gap-4 grid md:grid-cols-2 mt-[25px] md:mt-[50px]">
          <DeptoCard
            imageUrl={tipo1}
            imageUrl2={tipo1plano}
            title={"Departamento Tipo 1"}
            c1={"51 m2"}
            c2={"1 habitacion"}
            c3={"Espacio social integrado"}
            c4={"Baño con ventilacion natural"}
            c5={"Vistas al frente y al interior del complejo"}
            c6={"4 unidades en Planta baja"}
          />

          <DeptoCard
            imageUrl={tipo2}
            imageUrl2={tipo2plano}
            title={"Departamento Tipo 2"}
            c1={"54 m2"}
            c2={"1 habitacion"}
            c3={"Espacio social integrado"}
            c4={"Baño con ventilacion natural"}
            c5={"Vistas al frente con balcon"}
            c6={"2 unidades en Planta alta"}
          />

          <DeptoCard
            imageUrl={tipo3}
            imageUrl2={tipo3plano}
            title={"Departamento Tipo 3"}
            c1={"54 m2"}
            c2={"1 habitacion"}
            c3={"Espacio social integrado"}
            c4={"Baño con ventilacion natural"}
            c5={"Vistas al interior del complejo"}
            c6={"2 unidades en Planta baja"}
          />

          <DeptoCard
            imageUrl={tipo4}
            imageUrl2={tipo4plano}
            title={"Departamento Tipo 4"}
            c1={"50 m2"}
            c2={"1 habitacion"}
            c3={"Espacio social integrado"}
            c4={"Baño con ventilacion natural"}
            c5={"Vistas al frente con balcon"}
            c6={"2 unidades en Planta alta"}
          />
          {/* <DeptoView
            imagen={tipo1}
            plano={tipo1plano}
            titulo="Departamento Tipo 1"
            caracteristica1="51 m2"
            caracteristica2="1 habitacion"
            caracteristica3="Espacio social integrado"
            caracteristica4="Baño con ventilacion natural"
            caracteristica5="Vistas al frente y al interior del complejo"
            caracteristica6="4 unidades en Planta baja"
          />

          <DeptoView
            imagen={tipo2}
            plano={tipo2plano}
            titulo="Departamento Tipo 2"
            caracteristica1="54 m2"
            caracteristica2="1 habitacion"
            caracteristica3="Espacio social integrado"
            caracteristica4="Baño con ventilacion natural"
            caracteristica5="Vistas al frente con balcon"
            caracteristica6="2 unidades en Planta alta"
          />

          <DeptoView
            imagen={tipo3}
            plano={tipo3plano}
            titulo="Departamento Tipo 3"
            caracteristica1="54 m2"
            caracteristica2="1 habitacion"
            caracteristica3="Espacio social integrado"
            caracteristica4="Baño con ventilacion natural"
            caracteristica5="Vistas al interior del complejo"
            caracteristica6="2 unidades en Planta baja"
          />

          <DeptoView
            imagen={tipo4}
            plano={tipo4plano}
            titulo="Departamento Tipo 4"
            caracteristica1="50 m2"
            caracteristica2="1 habitacion"
            caracteristica3="Espacio social integrado"
            caracteristica4="Baño con ventilacion natural"
            caracteristica5="Vistas al frente con balcon"
            caracteristica6="2 unidades en Planta alta"
          /> */}
        </div>
      </section>

      {/** Caracteristicas Generales */}
      <section className="bg-black">
        <div className="px-5 py-[25px] md:py-[50px] container mx-auto">
          <h3 className="text-[20px] text-white font-normal md:text-[64px]">
            Caracteristicas{" "}
            <span className="font-bold text-white">Generales</span>
          </h3>
          <p className="text-[16px] opacity-70 text-white mt-5 md:text-[20px] md:w-[55%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            ratione.
          </p>

          <ul className="mt-5 flex flex-col gap-2 list-disc list-inside text-white py-8 md:hidden">
            {caracteristicas.map((item, index) => (
              <li key={index} className="text-[18px] md:text-[20px]">
                {item}
              </li>
            ))}
          </ul>

          <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-7 lg:grid-rows-1 md:gap-3 mt-[200px]">
            {caracteristicas.map((item, index) => (
              <div
                key={index}
                className="group border-b-4 flex-1 px-2 py-4 hover:bg-white transition-all ease-in-out duration-200"
              >
                <p className="text-white md:text-[16px]  xl:text-[18px] group-hover:text-black transition-all ease-in-out duration-200">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* banner */}
      <section>
        <div className="relative w-full h-[300px] md:h-[500px]">
          <Image src={banner} alt="banner" fill className="object-cover" />
        </div>
      </section>

      {/** Contacto */}
      <section id="contacto" className="py-10">
        <div className="container mx-auto">
          <h3 className="text-[64px] text-black font-normal md:text-[96px]">
            Contacto
          </h3>
          <p className="text-[16px] opacity-70 text-black mt-5 md:text-[20px] md:w-[55%]">
            Consectetur adipisicing elit. Quam nesciunt quisquam doloremque
            distinctio aliquam nihil vero doloribus modi hic, ad tempora vitae
            eum officia tempore accusamus maiores iste consequatur suscipit.
          </p>
        </div>

        <form className="container mx-auto mt-[25px] md:mt-[50px] flex flex-col gap-5 lg:w-[80%]">
          <div className="flex flex-col gap-4">
            <label className="text-[16px] md:text-[20px] font-normal">
              Nombre y apellido
            </label>
            <input
              type="text"
              className="border border-neutral-200 p-4 rounded-md"
              placeholder="Ingrese su nombre completo"
            />
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-[16px] md:text-[20px] font-normal">
              Email
            </label>
            <input
              type="email"
              className="border border-neutral-200 p-4 rounded-md"
              placeholder="Ingrese su email"
            />
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-[16px] md:text-[20px] font-normal">
              Mensaje
            </label>
            <textarea
              rows={5}
              className="border border-neutral-200 p-4 rounded-md"
              placeholder="Escriba su mensaje"
            />
          </div>

          <button className="w-full bg-black p-4 rounded-md">
            <p className="text-white">Enviar</p>
          </button>
        </form>
      </section>
    </main>
  );
}
