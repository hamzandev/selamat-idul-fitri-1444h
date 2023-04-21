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
            Perkataan tajam sering terlontar menyakiti hati. Perbuatan buruk
            seing terjadi tanpa disadari. Di hari yang Fitri ini, izinkan kami
            sekeluarga memohon maaf sebesar-besarnya atas semua kesalahan yang
            terjadi. Semoga Allah SWT menerima semua amal Ibadah kita di bulan
            Ramadhan ini.
          </p>
          <p data-aos="fade-up" data-aos-duration="2500" className="text-sm">
            Oleh : Hamzan Wahyudi dan segenap keluarga
          </p>

          <Link
            data-aos="fade-up"
            data-aos-duration="3000"
            href={
              "https://wa.me/6283129535479?text=Selamat+Hari+Raya+Idul+Fitri+1444+H+,Hamzan+Wahyudi!!"
            }
            className="btn px-8 py-3 uppercase rounded-full bg-green-600 text-white w-max inline-block mx-auto border-2 border-green-400"
          >
            Ucapkan via WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
}
