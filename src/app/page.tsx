"use client";

import React from "react";
import Image from "next/image";
import img01 from "../../public/01.jpg";
import Link from "next/link";
import tipo1 from "../../public/Imagen D1.png";
import tipo2 from "../../public/Imagen D2.png";
import tipo3 from "../../public/Imagen D3.png";
import tipo4 from "../../public/Imagen D4.png";
import tipo1plano from "../../public/Plano D1.svg";
import tipo2plano from "../../public/Plano D2.svg";
import tipo3plano from "../../public/Plano D3.svg";
import tipo4plano from "../../public/Plano D4.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
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

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

import MyGallery from "@/components/MyGallery";
import DeptoView from "@/components/DeptoView";

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

  return (
    <main className="min-h-screen w-screen">
      <section className="relative flex justify-center items-center h-screen">
        <div className="absolute z-30 flex flex-col justify-center items-center px-5 gap-7">
          <h1 className="text-white text-4xl font-black text-center uppercase">
            Complejo Nuche
          </h1>
          <p className="text-center text-white text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi,
            minus aliquid? Quas, dolorum? Iste corrupti consequatur in sequi
            iusto necessitatibus!
          </p>

          <div className="flex gap-5 justify-center items-center">
            <a
              href="#"
              className="text-black text-sm border bg-white rounded-full py-3 px-5"
            >
              Ver departamentos
            </a>
            <a
              href="#"
              className="text-white border border-white rounded-full text-sm py-3 px-5"
            >
              Contacto
            </a>
          </div>
        </div>

        <div className="w-full h-screen absolute">
          <div className="bg-black opacity-75 w-full h-full absolute z-20"></div>
          <Image src={img01} alt="imagen" fill className="object-cover" />
        </div>
      </section>

      {/** Galeria */}
      <section className="px-5 py-10">
        <h3 className="text-2xl font-black">Galeria</h3>
        <p className="text-sm opacity-70 mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
          ratione.
        </p>

        <MyGallery />
      </section>

      {/** Departamentos */}
      <section className="px-5 pb-10">
        <h3 className="text-2xl font-black">Departamentos</h3>
        <p className="text-sm opacity-70 mt-5">
          Consectetur adipisicing elit. Quam nesciunt quisquam doloremque
          distinctio aliquam nihil vero doloribus modi hic, ad tempora vitae eum
          officia tempore accusamus maiores iste consequatur suscipit.
        </p>

        <div className="gap-4 grid md:grid-cols-2">
          <DeptoView
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
          />
        </div>
      </section>

      {/** Caracteristicas Generales */}
      <section className="px-5 py-10">
        <h3 className="text-2xl font-black">Caracteristicas Generales</h3>
        <p className="text-sm opacity-70 mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
          ratione.
        </p>

        <ul className="mt-5 flex flex-col gap-2 list-disc list-inside">
          <li className="p-2 bg-neutral-100 rounded-md border border-opacity-50">
            Arquitectura moderna
          </li>
          <li className="p-2 bg-neutral-100 rounded-md border border-opacity-50">
            Carpinteria de aluminio DVH
          </li>
          <li className="p-2 bg-neutral-100 rounded-md border border-opacity-50">
            Portero electrico
          </li>
          <li className="p-2 bg-neutral-100 rounded-md border border-opacity-50">
            Porton electrico
          </li>
          <li className="p-2 bg-neutral-100 rounded-md border border-opacity-50">
            Estacionamiento para 10 autos
          </li>
          <li className="p-2 bg-neutral-100 rounded-md border border-opacity-50">
            Materiales de terminacion de primera calidad
          </li>
          <li className="p-2 bg-neutral-100 rounded-md border border-opacity-50">
            Baño completo
          </li>
        </ul>
      </section>

      {/** Contacto */}
      <section className="px-5 p-10 bg-black">
        <h3 className="text-2xl font-black text-white">Contacto</h3>
        <p className="text-sm opacity-70 mt-5 text-white">
          Consectetur adipisicing elit. Quam nesciunt quisquam doloremque
          distinctio aliquam nihil vero doloribus modi hic, ad tempora vitae eum
          officia tempore accusamus maiores iste consequatur suscipit.
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5 mt-10"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel className="text-white">
                      Nombre Completo
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nombre y apellido"
                        className="text-white"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Ingresa tu nombre y apellido
                    </FormDescription>
                    <FormMessage />
                  </FormItem>

                  <FormItem>
                    <FormLabel className="text-white">Mensaje</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Nombre y apellido"
                        className="text-white"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Ingresa tu nombre y apellido
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <Button type="submit">Enviar</Button>
          </form>
        </Form>
      </section>
    </main>
  );
}
