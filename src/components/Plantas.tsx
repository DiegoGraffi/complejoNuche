import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import pbImage from "../../public/Plano planta baja.svg";
import paImage from "../../public/Plano planta 1 y 2.svg";
import Image from "next/image";

export default function Plantas() {
  return (
    <Tabs defaultValue="pb" className="w-full">
      <TabsList className="grid w-full grid-cols-2 my-10 gap-2">
        <TabsTrigger value="pb" className="py-4 border w-full border-black/30">
          Planta Baja
        </TabsTrigger>
        <TabsTrigger value="pa" className="py-4 border w-full border-black/30">
          Planta 1 y 2
        </TabsTrigger>
      </TabsList>
      <TabsContent value="pb">
        <Card>
          <CardHeader>
            <CardTitle>Planta Baja</CardTitle>
            <CardDescription>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
              dolor at reiciendis amet beatae laborum quaerat saepe minus cumque
              ipsum.
            </CardDescription>
          </CardHeader>
          <CardContent className="w-full aspect-square relative">
            <Image
              src={pbImage}
              alt="planta baja"
              fill
              className="object-contain p-2"
            />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="pa">
        <Card>
          <CardHeader>
            <CardTitle>Planta 1 y 2</CardTitle>
            <CardDescription>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam repellendus tempora recusandae labore in ullam.
            </CardDescription>
          </CardHeader>
          <CardContent className="w-full aspect-square relative">
            <Image
              src={paImage}
              alt="planta 1 y 2"
              fill
              className="object-contain p-2"
            />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
