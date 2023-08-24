"use client";

import style from "@/app/page.module.css";

import localFont from "@next/font/local";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import SendWhatsapp from "./SendWhatsapp";

const siti = localFont({
  src: [
    {
      path: "../public/fonts/SitiMaesaroh.otf",
      weight: "400",
    },
  ],
  variable: "--font-siti",
});

const selamet = localFont({
  src: [
    {
      path: "../public/fonts/SelametLebaran.otf",
      weight: "400",
    },
  ],
  variable: "--font-selamet",
});

export default function SelamatHariRaya() {
  const ruter = useSearchParams();

  const message = ruter.get("message")?.split("+").join(" ");
  const name = ruter.get("name")?.split("+").join(" ");

  return (
    <div
      className={`selamat-hari-raya hero items-start min-h-screen ${style.bgSelamat}`}
    >
      <div className="hero-overlay bg-gradient-to-tr from-gray-200/20 to-green-300/20 bg-opacity-10"></div>
      <div className="hero-content flex flex-col text-center text-neutral-content">
        <h1
          data-aos="fade-up"
          className={`mb-5 md:text-5xl text-4xl text-green-600 mt-20 font-bold ${selamet.className}`}
        >
          Selamat Hari Raya Idul Fitri
        </h1>
        <div className="grid gap-5 mx-auto text-lg text-gray-600 md:w-6/12">
          <p data-aos="fade-up" data-aos-duration="1500" className="mb-5">
            {message}
          </p>
          <p data-aos="fade-up" data-aos-duration="2500" className="text-sm">
            Oleh : {name} dan segenap keluarga
          </p>

          <center className="mt-10">
            <SendWhatsapp>Ucapkan via WhatsApp</SendWhatsapp>
          </center>
        </div>
      </div>
    </div>
  );
}
