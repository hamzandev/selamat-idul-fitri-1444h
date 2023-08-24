"use client";

import Footer from "@/components/Footer";
import SelamatHariRaya from "@/components/SelamatHariRaya";
import Keluarga from "@/components/Keluarga";
import Takbir from "@/components/Takbir";
import Banner from "@/components/Banner";
import InitAOS from "@/components/InitAOS";
import MyForm from "@/components/Form";
import { useSearchParams } from "next/navigation";

interface Props {
  searchParams?: {
    name?: string;
    whatsapp?: string | number;
    message?: string;
  };
}

// searchParams?: { [key: string]: string | string[] | undefined };
export default function Home() {
  const ruter = useSearchParams();
  const name = ruter.get("name");
  const whatsapp = ruter.get("whatsapp");
  const message = ruter.get("message");
  console.log({ name, message, whatsapp });

  return (
    <>
      <InitAOS>
        {/* <div>{JSON.stringify(searchParams)}</div> */}
        <div>
          {!name || !whatsapp || !message ? (
            <MyForm />
          ) : (
            <>
              <Banner />
              <Takbir />
              <Keluarga />
              <SelamatHariRaya />
              <Footer />
            </>
          )}
        </div>
      </InitAOS>
    </>
  );
}
