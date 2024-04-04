import { NavBar } from "@/components/nav-bar";
import Image from "next/image";
import logoECami from '../../public/image/logoECami.png'

export default function Home() {
  return (
    <div className="h-screen bg-zinc-50">
      <NavBar />
      <section className="mx-auto container flex flex-row justify-between items-center h-[500px] px-10 gap-2">
        <div className="flex flex-col gap-4">
          <span className="text-xl text-cinzaCami max-w-[400px] w-full font-normal">Procurando uma Identidade Visual?</span>
          <h2 className="text-4xl text-pretoCami w-[500px]  font-bold flex flex-col gap-1">
            <span>Tenha uma marca</span>
            <span>única e exclusiva</span>
            <span>desenhada a mão livre</span>
            <span>e que conte a sua história</span>
          </h2>
          <button className="mt-10 w-10/12 rounded-full py-4 shadow-xl bg-green-500 text-zinc-50 hover:bg-marromCami hover:text-pretoCami transition-all duration-500 text-lg font-bold">QUERO MAIS INFORMAÇÕES</button>
        </div>
        <div className="relative w-full right-0 flex justify-end items-center ">
          <div className="absolute">
            <Image
              width={900}
              height={900}
              alt="Logo Cami Agência Criativa"
              src={logoECami}
            />
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-zinc-50/90 shadow-md px-4 py-2 rounded-3xl flex flex-col items-start justify-center ">
              <span className="font-sans w-full text-2xl text-marromCami">+5 Anos</span>
              <span className="font-sans w-full text-xs text-center text-cinzaCami">De Experiência</span>
            </div>
            <div className="absolute bottom-0 right-0 bg-zinc-50/90 shadow-md px-4 py-2 rounded-3xl flex flex-col items-start justify-center">
              <span className="font-sans w-full text-2xl text-marromCami">+20</span>
              <span className="font-sans w-full text-xs text-center text-cinzaCami">Paises Atendidos</span>
            </div>
            <div className="absolute top-0 -right-4 bg-zinc-50/90 shadow-md px-4 py-2 rounded-3xl flex flex-col items-start justify-center">
              <span className="font-sans w-full text-2xl text-marromCami">+1.000 Mil</span>
              <span className="font-sans w-full text-xs text-center text-cinzaCami">Projetos Aprovados</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
