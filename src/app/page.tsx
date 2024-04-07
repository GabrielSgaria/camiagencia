'use client'
import { NavBar } from "@/components/nav-bar";
import Image from "next/image";
import methodIcons from '../../public/image/icons.png'
import logoECami from '../../public/image/logoECami.png'
import { useWindowSize } from "react-use";
import { CardPassos } from "@/components/card-steps";
import { texts } from "@/lib/textosCardsPassos";
import { CardPlansDesktop, } from "@/components/card-plans-desktop";
import { CardPlansMobile } from "@/components/card-plans-mobile";
import { useEffect, useState } from "react";
import { CheckIcon, Cross2Icon, DotFilledIcon } from "@radix-ui/react-icons";

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
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className="h-screen bg-zinc-50">
      <NavBar />
      <section className="mx-auto container flex flex-col-reverse sm:flex-row justify-between items-center h-[600px] sm:h-[500px] sm:px-10 sm:gap-2">
        <div className={`sm:h-full w-full items-center sm:items-start justify-center flex flex-col`}>
          <span className="text-lg text-center sm:text-start sm:text-xl text-cinzaCami sm:max-w-[400px] w-full font-normal">Procurando uma Identidade Visual?</span>
          <h2 className="sm:text-4xl text-2xl text-pretoCami sm:w-[500px] font-bold flex flex-col gap-1 items-center sm:items-start">
            <span className="justify-center sm:justify-start flex w-full">Tenha uma marca</span>
            <span className="justify-center sm:justify-start flex w-full">única e exclusiva</span>
            <span className="justify-center sm:justify-start flex w-full">desenhada a mão livre</span>
            <span className="justify-center sm:justify-start flex w-full">e que conte a sua história</span>
          </h2>
          <button className="mb-20 sm:mb-0 mt-10 w-full sm:w-10/12 rounded-full py-4 shadow-xl bg-green-500 text-zinc-50 hover:bg-marromCami hover:text-pretoCami transition-all duration-500 text-lg font-bold">
            QUERO MAIS INFORMAÇÕES
          </button>
        </div>
        <div className="relative w-full top-32 sm:top-0 sm:right-0 flex justify-end items-center">
          <div

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
          </div>
        </div>
      </section>
      <section className="pt-16">
        <div className="container mx-auto flex flex-col text-zinc-50 justify-center items-center gap-8">

          <div className="flex flex-col gap-3 items-center">
            <div className="flex flex-col sm:text-2xl text-lg text-pretoCami items-center mb-2">
              <h3 className="w-full text-center">Utilizamos uma metodologia de 7 passos</h3>
              <h3 className="w-full text-center">clara e objetiva, onde o cliente participa de todo o processo</h3>
            </div>
            <div className="mb-2">
              <p className="text-cinzaCami text-lg w-full text-center">A criação de marca é uma via de mão dupla</p>
            </div>
            <div>
              <p className="text-cinzaCami text-lg sm:text-2xl">Método Cami</p>
            </div>
            <div className="w-full sm:w-8/12">
              <Image
                width={900}
                height={900}
                alt="Logo Cami Agência Criativa"
                src={methodIcons}
              />
            </div>
          </div>


          <div className="grid grid-flow-row grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 gap-y-5 bg-gradient-to-b from-zinc-50 to-zinc-100 py-8 px-1 rounded-2xl shadow-xl">

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
            <h1 className="font-bold text-red-600 text-2xl mb-2 text-center sm:text-start ">
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

      {isClient && (windowSize.width <= 768 ? <CardPlansMobile /> : <CardPlansDesktop />)}

      <section className="container mx-auto flex mt-10 sm:mt-0">
        <div className="w-full h-full px-3 rounded-2xl flex flex-col border border-zinc-300 shadow-xl bg-gradient-to-b to-zinc-50 from-zinc-100">
          <div className="flex flex-col">
            <div className="flex flex-row items-center h-[80px] ">
              <div className="w-[50%] sm:w-[80%] flex items-center text-lg font-bold">
                 Compare Você mesmo
              </div>
              <div className="w-[20%] sm:w-[10%] h-full flex justify-center items-center bg-zinc-200 text-zinc-500 text-center sm:py-1">
                <p>Pretador de <br /> serviço</p>
              </div>
              <div className="w-[20%] sm:w-[10%] h-full flex justify-center items-center bg-zinc-500 text-zinc-50 text-center sm:py-1">
                <p>Outras<br /> agências</p>
              </div>
              <div className="w-[20%] sm:w-[10%] h-full flex justify-center items-center bg-zinc-100 text-zinc-950 text-center py-1">
                <p>Cami<br /> agência</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-row items-center h-[80px] ">
              <div className="w-[60%] sm:w-[80%] flex items-center text-base sm:text-lg ">
                <DotFilledIcon className="text-red-600 mr-2 size-3" /> Atendimento durante todo o preocesso de criação
              </div>
              <div className="w-[14%] sm:w-[10%] flex justify-center items-center bg-zinc-200">
                <CheckIcon className="size-8 text-lime-500" />
              </div>
              <div className="w-[14%] sm:w-[10%] flex justify-center items-center bg-zinc-500">
                <CheckIcon className="size-8 text-lime-500" />
              </div>
              <div className="w-[14%] sm:w-[10%] flex justify-center items-center bg-zinc-100">
                <CheckIcon className="size-8 text-lime-500" />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-row items-center">
              <div className="w-[60%] sm:w-[80%] flex items-center text-lg">
                <DotFilledIcon className="text-red-600 mr-2 size-3" /> Equipe criativa
              </div>
              <div className="w-[14%] sm:w-[10%] flex justify-center items-center bg-zinc-200">
                <Cross2Icon className="size-8 text-red-600" />
              </div>
              <div className="w-[14%] sm:w-[10%] h-[32px] flex justify-center items-center bg-zinc-500">
                <p className="font-bold text-zinc-300 items-center text-base">ás vezes</p>
              </div>
              <div className="w-[14%] sm:w-[10%] flex justify-center items-center bg-zinc-100">
                <CheckIcon className="size-8 text-lime-500" />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-row items-center">
              <div className="w-[60%] sm:w-[80%] flex items-center text-lg">
                <DotFilledIcon className="text-red-600 mr-2 size-3" /> Reunião ilimitada com especialistas
              </div>
              <div className="w-[14%] sm:w-[10%] flex justify-center items-center bg-zinc-200">
                <Cross2Icon className="size-8 text-red-600" />
              </div>
              <div className="w-[14%] sm:w-[10%] flex justify-center items-center bg-zinc-500">
                <Cross2Icon className="size-8 text-red-600" />
              </div>
              <div className="w-[14%] sm:w-[10%] flex justify-center items-center bg-zinc-100">
                <CheckIcon className="size-8 text-lime-500" />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-row items-center">
              <div className="w-[60%] sm:w-[80%]  flex items-center text-lg">
                <DotFilledIcon className="text-red-600 mr-2 size-3" /> Desenhos feitos a mão livre
              </div>
              <div className="w-[14%] sm:w-[10%] flex justify-center items-center bg-zinc-200">
                <Cross2Icon className="size-8 text-red-600" />
              </div>
              <div className="w-[14%] sm:w-[10%] flex justify-center items-center bg-zinc-500">
                <Cross2Icon className="size-8 text-red-600" />
              </div>
              <div className="w-[14%] sm:w-[10%] flex justify-center items-center bg-zinc-100">
                <CheckIcon className="size-8 text-lime-500" />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-row items-center">
              <div className="w-[60%] sm:w-[80%]  flex items-center text-lg">
                <DotFilledIcon className="text-red-600 mr-2 size-3" /> Especialistas em criação de marca profissionais da saúde
              </div>
              <div className="w-[14%] sm:w-[10%] flex justify-center items-center bg-zinc-200">
                <Cross2Icon className="size-8 text-red-600" />
              </div>
              <div className="w-[14%] sm:w-[10%] flex justify-center items-center bg-zinc-500">
                <Cross2Icon className="size-8 text-red-600" />
              </div>
              <div className="w-[14%] sm:w-[10%] flex justify-center items-center bg-zinc-100">
                <CheckIcon className="size-8 text-lime-500" />
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="w-[60%] sm:w-[80%]  flex items-center text-lg">
                <DotFilledIcon className="text-red-600 mr-2 size-3" /> Mais de 1.000 projetos aprovados
              </div>
              <div className="w-[14%] sm:w-[10%] flex justify-center items-center bg-zinc-200">
                <Cross2Icon className="size-8 text-red-600" />
              </div>
              <div className="w-[14%] sm:w-[10%] flex justify-center items-center bg-zinc-500">
                <Cross2Icon className="size-8 text-red-600" />
              </div>
              <div className="w-[14%] sm:w-[10%] flex justify-center items-center bg-zinc-100">
                <CheckIcon className="size-8 text-lime-500" />
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="w-[60%] sm:w-[80%]  flex items-center text-lg">
                <DotFilledIcon className="text-red-600 mr-2 size-3" /> Metodologia de criação comprovada
              </div>
              <div className="w-[14%] sm:w-[10%] flex justify-center items-center bg-zinc-200">
                <Cross2Icon className="size-8 text-red-600" />
              </div>
              <div className="w-[14%] sm:w-[10%] flex justify-center items-center bg-zinc-500">
                <Cross2Icon className="size-8 text-red-600" />
              </div>
              <div className="w-[14%] sm:w-[10%] flex justify-center items-center bg-zinc-100">
                <CheckIcon className="size-8 text-lime-500" />
              </div>
            </div>
          </div>


        </div>

      </section>

    </div>
  );
}
