import github from "@/public/assets/icons8-github.svg";
import facebook from "@/public/assets/icons8-facebook.svg";
import instagram from "@/public/assets/icons8-instagram.svg";
import twitter from "@/public/assets/icons8-twitter.svg";
import Image from "next/image";
import Link from "next/link";

import localFont from "@next/font/local";

const siti = localFont({
  src: [
    {
      path: "../public/fonts/SitiMaesaroh.otf",
      weight: "400",
    },
  ],
  variable: "--font-siti",
});

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r py-12 md:px-0 px-5 from-teal-800 to-green-700">
      <div className="container mx-auto grid md:grid-cols-2 mb-10">
        <div className="flex flex-col md:text-start text-center gap-5">
          <h4
            data-aos="fade-up"
            className={`text-2xl ${siti.className} text-white`}
          >
            Hamzan Wahyudi
          </h4>
          <div className="grid text-white gap-3 md:mb-0 mb-10">
            <span data-aos="fade-up" data-aos-duration="1500">
              Social Media :
            </span>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="flex space-x-10 items-center md:justify-start justify-center"
            >
              <Link href="https://github.com/hamzandev">
                <Image src={github} alt="github" />
              </Link>
              <Link href="https://twitter.com/hamzandev">
                <Image src={twitter} alt="twitter" />
              </Link>
              <Link href="https://facebook.com/hamzanwahyu.me">
                <Image src={facebook} alt="facebook" />
              </Link>
              <Link href="https://instagram.com/hamzanwahyu.me">
                <Image src={instagram} alt="instagram" />
              </Link>
            </div>
            <p
              data-aos="fade-up"
              data-aos-duration="2500"
              className="mt-5 text-lg md:w-8/12"
            >
              Website ini dibuat saat sehari mejelang Hari Raya Idul Fitri 1444
              H
            </p>
          </div>
          <Link
            href={"/"}
            className="px-6 py-2 animate-bounce fixed right-10 top-10 text-sm rounded-full bg-white w-max border-2 border-green-500 text-green-600"
          >
            Buat Kartu Ucapanmu disini!
          </Link>
        </div>
        <div className="flex md:text-end text-center text-white flex-col md:items-end items-center justify-between">
          <span data-aos="fade-up" className="md:text-lg font-semoibold">
            Dibuat dengan 💖 By Hamzan Wahyudi.
          </span>
          <div className="flex justify-end md:mt-0 mt-10 flex-col md:items-end text-center gap-3">
            <span data-aos="fade-up" data-aos-duration="2000">
              Alamat :
            </span>
            <p
              data-aos="fade-up"
              data-aos-duration="1500"
              className="md:w-8/12 md:text-end text-center"
            >
              Dusun Kabuyit Barat, Desa Langam Kecamatan Lopok, Kabupaten
              Sumbawa, NTB
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
