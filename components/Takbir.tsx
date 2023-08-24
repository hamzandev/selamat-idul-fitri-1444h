import style from "@/app/page.module.css";

export default function Takbir() {
  return (
    <div className={`takbir hero min-h-screen ${style.bgTakbir}`}>
      <div className="hero-overlay bg-gradient-to-tr from-gray-200/20 to-green-300/20 bg-opacity-10"></div>
      <div className="hero-content flex flex-col text-center text-neutral-content pt-20">
        <h1
          data-aos="fade-up"
          className="mb-5 md:text-5xl text-3xl text-green-600 font-bold"
        >
          … اللهُ أَكْبَرُ ,اللهُ أَكْبَرُ ,اللهُ أَكْبَرُ
        </h1>
        <div className="grid gap-10 mx-auto text-lg text-gray-600 md:px-4">
          <p data-aos="fade-up" data-aos-duration="1500" className="mb-5">
            Gaung kebesaran-Mu berkumandang <br /> Alunan nada spiritual sambut
            kemenangan <br /> Mestinya hati gembira ria <br /> Namun duka yang
            kerap menerpa
          </p>
          <p data-aos="fade-up" data-aos-duration="2000">
            Bila Takbir sudah berkumandang <br /> Tanda hari raya telah datang
            <br />
            Hati senang sambut hari kemenangan <br /> Diatas duka selesainya
            bulan suci Ramadhan
          </p>
        </div>
      </div>
    </div>
  );
}
