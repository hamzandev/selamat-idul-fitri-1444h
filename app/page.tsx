import Footer from "@/components/Footer";
import SelamatHariRaya from "@/components/SelamatHariRaya";
import Keluarga from "@/components/Keluarga";
import Takbir from "@/components/Takbir";
import Banner from "@/components/Banner";
import InitAOS from "@/components/InitAOS";

export default function Home() {
  return (
    <>
      <InitAOS>
        <Banner />
        <Takbir />
        <Keluarga />
        <SelamatHariRaya />
        <Footer />
      </InitAOS>
    </>
  );
}
