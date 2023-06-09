import Image from "next/image";
import keluarga from "@/public/assets/keluarga.svg";
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

export default function Keluarga() {
  return (
    <div
      className={`keluarga hero min-h-screen bg-green-700 ${style.bgKeluarga}`}
    >
      <div className="hero-overlay bg-gradient-to-tr from-gray-200/20 to-green-300/20 bg-opacity-10"></div>
      <div className="hero-content grid md:grid-cols-2 text-center items-center text-neutral-content">
        <div className="typography md:order-1 order-2 md:mt-0 mt-20 md:text-start text-center grid gap-5">
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
            Fitri 1444 H. Saya, Hamzan Wahyudi berserta segenap keluarga
            mengucapkan Selamat Hari Raya Idul Fitri 1444 H, Mohon Maaf Lahir
            dan Batin 💖🥰
          </p>
          <Link
            data-aos="fade-up"
            data-aos-duration="3000"
            href={
              "https://wa.me/6283129535479?text=Selamat+Hari+Raya+Idul+Fitri+1444+H+,Hamzan+Wahyudi!!"
            }
            className="btn inline-block md:mx-0 mx-auto px-8 py-3 bg-white border-2 border-green-600 uppercase rounded-full w-max text-green-500"
          >
            balas ucapan
          </Link>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000" className="image">
          <Image src={keluarga} alt="keluarga"></Image>
        </div>
      </div>
    </div>
  );
}
