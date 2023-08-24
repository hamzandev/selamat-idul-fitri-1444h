import Footer from "@/components/Footer";
import SelamatHariRaya from "@/components/SelamatHariRaya";
import Keluarga from "@/components/Keluarga";
import Takbir from "@/components/Takbir";
import Banner from "@/components/Banner";
import InitAOS from "@/components/InitAOS";
import MyForm from "@/components/Form";

interface Props {
  searchParams?: {
    name?: string;
    whatsapp?: string | number;
    message?: string;
  };
}

// searchParams?: { [key: string]: string | string[] | undefined };
export default function Home({ searchParams }: Props) {
  return (
    <>
      <InitAOS>
        {/* <div>{JSON.stringify(searchParams)}</div> */}
        <div>
  {
    if(searchParams?.name) {
      if(searchParams?.whatsapp) {
           if(searchParams?.message) {
            <>
              <Banner />
              <Takbir />
              <Keluarga />
              <SelamatHariRaya />
              <Footer />
            </>
         } 
      }
      } else { 
         <MyForm />
      }
          }
        </div>
      </InitAOS>
    </>
  );
}
