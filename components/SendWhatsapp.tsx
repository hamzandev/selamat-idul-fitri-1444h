"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const SendWhatsapp = ({ children }: { children: React.ReactNode }) => {
  const ruter = useSearchParams();
  const name = ruter.get("name")?.split(" ").join("+");
  const whatsapp = ruter.get("whatsapp");

  return (
    <Link
      data-aos="fade-up"
      data-aos-duration="3000"
      href={`https://wa.me/${whatsapp}?text=Selamat+Hari+Raya+Idul+Fitri+1444+H+,${name}`}
      className="border-2 w-max border-green-600 btn bg-white/90 text-green-500 px-8 py-3 rounded-full"
    >
      {children}
    </Link>
  );
};

export default SendWhatsapp;
