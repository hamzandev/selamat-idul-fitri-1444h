"use client";

import Image from "next/image";
import keluarga from "@/public/assets/keluarga.svg";
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

export default function Keluarga() {
  const ruter = useSearchParams();

  const name = ruter.get("name")?.split("+").join(" ");
  const image = ruter.get("image");

  return (
    <div
      className={`keluarga hero min-h-screen bg-green-700 ${style.bgKeluarga}`}
    >
      <div className="hero-content flex md:flex-row flex-col justify-center md:gap-10 container mx-auto text-center items-center text-neutral-content">
        <div className="typography md:w-3/5 md:order-1 order-2  md:text-start text-center grid gap-5">
          <h3
            data-aos="fade-up"
            className={`md:text-4xl text-3xl ${siti.className} text-gray-100`}
          >
            Minal Aidzin Walfaidzin
          </h3>
          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            className="leading-relaxed md:w-10/12 text-xl text-gray-300"
          >
            Sabtu, 22 April 2023, sekaligus bertepatan dengan Hari Raya Idul
            Fitri 1444 H. Saya, <b>{name}</b> berserta segenap keluarga
            mengucapkan Selamat Hari Raya Idul Fitri 1444 H, Mohon Maaf Lahir
            dan Batin 💖🥰
          </p>
          <div className="md:mt-0 mt-3">
            <SendWhatsapp>Balas Ucapan</SendWhatsapp>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="image aspect-square md:w-2/5 md:p-10 rounded-full overflow-hidden md:m-20 m-8 border-gray-200 border-4 outline-dotted outline-offset-8 outline-4 outline-gray-100 mx-auto md:mx-0"
        >
          <Image
            src={keluarga}
            alt="keluarga"
            className="w-full h-full object-cover"
          />
          {/* <img src={image as string} alt="user iamg" /> */}
        </div>
      </div>
    </div>
  );
}
