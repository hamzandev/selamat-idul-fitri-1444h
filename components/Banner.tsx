import style from "@/app/page.module.css";

import localFont from "@next/font/local";
import Link from "next/link";

const siti = localFont({
  src: [
    {
      path: "../public/fonts/SitiMaesaroh.otf",
      weight: "400",
    },
  ],
  variable: "--font-siti",
});

export default function Banner() {
  return (
    <div className={`banner min-h-screen ${style.bgBanner}`}>
      <div className="container flex min-h-screen gap-3 flex-col md:items-end items-center justify-center">
        <h3
          data-aos="fade-up"
          className="md:text-4xl text-3xl text-white mt-32"
        >
          تَقَبَّلَ اللَّهُ مِنَّا وَ مِنْكُمْ
        </h3>

        <h3
          data-aos="fade-up"
          data-aos-duration="1500"
          className={`${siti.className} md:text-6xl text-4xl md:-mt-5 text-white md:w-7/12 leading-relaxed text-center md:text-end md:px-0 px-3`}
        >
          Selamat Hari Raya Idul Fitri 1444 H
        </h3>

        <p
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-white/90 text-xl md:w-6/12 md:text-end text-center"
        >
          "Idul Fitri membawa harapan baru, pengampunan, dan kebahagiaan. Mari
          merayakan dengan orang terkasih dan memperkuat ikatan kita."
        </p>
        <Link
          data-aos="fade-up"
          data-aos-duration="3000"
          href={
            "https://wa.me/6283129535479?text=Selamat+Hari+Raya+Idul+Fitri+1444+H+,Hamzan+Wahyudi!!"
          }
          className="border-2 border-green-600 btn bg-white/90 text-green-500 px-8 py-3 rounded-full"
        >
          Send WhatsApp
        </Link>
      </div>
    </div>
  );
}
