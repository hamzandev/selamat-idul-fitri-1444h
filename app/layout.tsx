import "./globals.css";
import { Poppins } from "next/font/google";
import localFont from "@next/font/local";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

const poppinsLocal = localFont({
  src: [
    {
      path: "../public/fonts/Poppins.ttf",
      weight: "400",
    },
  ],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Ied Mubarak | Hamzan Wahyudi",
  description: "Ucapan Selamat Hari Raya Idul Fitri 1444 H",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`bg-white ${poppinsLocal.className}`}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
