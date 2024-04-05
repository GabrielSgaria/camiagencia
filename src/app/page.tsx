'use client'
import { NavBar } from "@/components/nav-bar";
import Image from "next/image";
import methodIcons from '../../public/image/icons.png'
import logoECami from '../../public/image/logoECami.png'
import { useWindowSize } from "react-use";
import { motion } from 'framer-motion';
import { CardPassos } from "@/components/card-steps";
import { texts } from "@/lib/textosCardsPassos";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ArrowUDownLeft } from "@phosphor-icons/react";
import { CardPlansDesktop, } from "@/components/card-plans-desktop";
import { CardPlansMobile } from "@/components/card-plans-mobile";
import { useEffect, useState } from "react";

export default function Home() {
  const windowSize = useWindowSize();
  const [isClient, setIsClient] = useState(false);
  const [windowSized, setWindowSized] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    setIsClient(true);

    function handleResize() {
      setWindowSized({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    if (typeof window !== 'undefined') {
      // Adicionando event listener apenas se window estiver definido (no navegador)
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className="h-screen bg-zinc-50">
      <NavBar />
      <section className="mx-auto container flex flex-col-reverse sm:flex-row justify-between items-center h-[600px] sm:h-[500px] sm:px-10 sm:gap-2">
        <div className={`gap-4 ${windowSize.width < 768 ? 'container mx-auto items-center' : 'flex flex-col items-start '} `}>
          <span className="text-lg text-center sm:text-start sm:text-xl text-cinzaCami sm:max-w-[400px] w-full font-normal">Procurando uma Identidade Visual?</span>
          <h2 className="sm:text-4xl text-3xl text-pretoCami sm:w-[500px] font-bold flex flex-col gap-1 items-center sm:items-start">
            <span>Tenha uma marca</span>
            <span>única e exclusiva</span>
            <span>desenhada a mão livre</span>
            <span>e que conte a sua história</span>
          </h2>
          <button className="mb-10 sm:mb-0 mt-10 w-full sm:w-10/12 rounded-full py-4 shadow-xl bg-green-500 text-zinc-50 hover:bg-marromCami hover:text-pretoCami transition-all duration-500 text-lg font-bold">QUERO MAIS INFORMAÇÕES</button>
        </div>
        <div className="relative w-full top-32 sm:top-0 sm:right-0 flex justify-end items-center">
          <motion.div
            initial={{ opacity: 0, y: -200, scale: 0.7 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute">
            <Image
              width={900}
              height={900}
              alt="Logo Cami Agência Criativa"
              src={logoECami}
            />
            <div className="absolute -bottom-6 sm:left-1/2 transform -translate-y-[204px] sm:-translate-y-0 sm:-translate-x-1/2 bg-zinc-50/90 shadow-md px-2 py-2 sm:px-4 sm:py-2 rounded-3xl flex flex-col items-start justify-center ">
              <span className="font-sans w-full text-lg sm:text-2xl text-marromCami">+5 Anos</span>
              <span className="font-sans w-full text-xs sm:text-xs text-center text-cinzaCami">De Experiência</span>
            </div>
            <div className="absolute bottom-0 right-0 bg-zinc-50/90 shadow-md rounded-3xl flex flex-col items-start justify-center px-2 py-2 sm:px-4 sm:py-2">
              <span className="font-sans w-full text-lg sm:text-2xl text-marromCami">+20</span>
              <span className="font-sans w-full text-xs sm:text-xs text-center text-cinzaCami">Paises Atendidos</span>
            </div>
            <div className="absolute -top-10 sm:top-0 -right-4 bg-zinc-50/90 shadow-md rounded-3xl flex flex-col items-start justify-center px-2 py-2 sm:px-4 sm:py-2">
              <span className="font-sans w-full text-lg sm:text-2xl text-marromCami">+1.000 Mil</span>
              <span className="font-sans w-full text-xs sm:text-xs text-center text-cinzaCami">Projetos Aprovados</span>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto flex flex-col text-zinc-50 justify-center items-center gap-8">

          <div className="flex flex-col gap-3 items-center">
            <div className="flex flex-col text-2xl text-pretoCami items-center mb-2">
              <h3>Utilizamos uma metodologia de 7 passos</h3>
              <h3>clara e objetiva, onde o cliente participa de todo o processo</h3>
            </div>
            <div className="mb-2">
              <p className="text-cinzaCami text-xl">A criação de marca é uma via de mão dupla</p>
            </div>
            <div>
              <p className="text-cinzaCami text-2xl">Método Cami</p>
            </div>
            <div className="w-8/12">
              <Image
                width={900}
                height={900}
                alt="Logo Cami Agência Criativa"
                src={methodIcons}
              />
            </div>
          </div>


          <div className="grid grid-flow-row grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 gap-y-16 bg-gradient-to-b from-zinc-50 to-zinc-100 p-8 rounded-2xl shadow-xl">

            {texts.map((texts, index) => (
              <div key={index} className={`flex flex-row items-center gap-4 `}>
                <CardPassos
                  tituloCardPassos={texts.title}
                  textoCardPassos={texts.text}
                />
                {/* {index == 2 || index === 5 ? (
                  <ArrowUDownLeft className="reverse size-8 text-cinzaCami " />) :
                  <ArrowRightIcon className={`${index == 2 || index == 5 ? 'hidden' : 'size-8 text-cinzaCami '} `} />} */}

              </div>
            ))}

          </div>
          <div className="mt-10 text-pretoCami w-full sm:w-[500px] h-full rounded-3xl py-3 px-5 border bg-gradient-to-b from-zinc-50 to-zinc-100 border-zinc-300 shadow-xl">
            <h1 className="font-bold text-red-600 text-2xl mb-2">
              Cami, e se eu não gostar?
            </h1>
            <p className="w-full h-full">
              Como nosso maior objetivo é que você ame e se identifique com o seu projeto,
              disponibilizamos até 3 alterações no seu projeto. Então pode ficar tranquila que vamos
              chegar há um resultado que te represente!
            </p>
          </div>


        </div>
      </section>
      <div>
        {isClient && (windowSize.width <= 768 ? <CardPlansMobile /> : <CardPlansDesktop />)}
      </div>

    </div>
  );
}
