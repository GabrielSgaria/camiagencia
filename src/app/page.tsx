'use client'
import { NavBar } from "@/components/nav-bar";
import Image from "next/image";
import methodIcons from '../../public/image/foto-passos.png'
import logoECami from '../../public/image/logoECami.png'
import { useWindowSize } from "react-use";
import { CardPassos } from "@/components/card-steps";
import { texts } from "@/lib/textosCardsPassos";
import { CardPlansDesktop, } from "@/components/card-plans-desktop";
import { CardPlansMobile } from "@/components/card-plans-mobile";
import { useEffect, useRef, useState } from "react";
import { CardComparsion } from "@/components/card-comparsion";
import { CarrouselJobs } from "@/components/carrousel-jobs";
import { Footer } from "@/components/footer";
import { motion, useAnimation, useInView } from "framer-motion";
import { WhatsappLogo } from "@phosphor-icons/react";


export default function Home() {
  const windowSize = useWindowSize();
  const [isClient, setIsClient] = useState(false);
  const [windowSized, setWindowSized] = useState({
    width: 0,
    height: 0
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      console.log(isInView)
      mainControls.start("visible");
    }
  }, [isInView, mainControls])

  const containerUl = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };


  function sendMensage(numeroTelefone: number, mensagemPadrao: string) {
    var linkWhatsApp =
      "https://wa.me/" +
      numeroTelefone +
      "?text=" +
      encodeURIComponent(mensagemPadrao);

    window.open(linkWhatsApp, "_blank");
  }

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
    <div className="h-screen bg-white">
      <NavBar />
      <section className="mx-auto container flex flex-col-reverse sm:flex-row justify-between items-center h-[600px] sm:h-[500px] sm:px-10 sm:gap-2">
        <div className={`sm:h-full w-full items-center sm:items-start justify-center flex flex-col`}>
          <span className="text-lg text-center sm:text-start sm:text-xl text-cinzaCami sm:max-w-[400px] w-full font-normal">Procurando uma Identidade Visual?</span>
          <h2 className="sm:text-4xl text-2xl text-pretoCami sm:w-[500px] font-bold flex flex-col gap-1 items-center sm:items-start">
            <span className="justify-center sm:justify-start flex w-full text-center sm:text-start">Tenha uma marca</span>
            <span className="justify-center sm:justify-start flex w-full text-center sm:text-start">única e exclusiva</span>
            <span className="justify-center sm:justify-start flex w-full text-center sm:text-start">desenhada à <span className="ml-2 text-marromCami">mão livre</span></span>
            <span className="justify-center sm:justify-start flex w-full text-center sm:text-start">e que conte a sua história</span>
          </h2>
          <button
            className="mb-20 sm:mb-0 mt-10 w-full sm:w-10/12 rounded-full py-4 shadow-xl bg-green-500 text-zinc-50 hover:bg-green-400 hover:text-pretoCami transition-all duration-500 text-lg font-bold"
            onClick={() =>
              sendMensage(
                554199769766,
                "Olá! Vim através do site da Cami Agência Criativa."
              )
            }>
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
            <div className="absolute -bottom-6 sm:left-1/2 transform -translate-y-[20px] sm:-translate-y-0 sm:-translate-x-1/2 bg-zinc-50/90 shadow-md px-2 py-2 sm:px-4 sm:py-2 rounded-3xl flex flex-col items-start justify-center ">
              <span className="font-normal w-full text-lg sm:text-2xl text-marromCami">+5 Anos</span>
              <span className="font-normal w-full text-xs sm:text-xs text-center text-cinzaCami">De Experiência</span>
            </div>
            <div className="absolute bottom-0 right-0 bg-zinc-50/90 shadow-md rounded-3xl flex flex-col items-start justify-center px-2 py-2 sm:px-4 sm:py-2">
              <span className="font-normal w-full text-lg sm:text-2xl text-marromCami">+20</span>
              <span className="font-normal w-full text-xs sm:text-xs text-center text-cinzaCami">Países Atendidos</span>
            </div>
            <div className="absolute -top-10 sm:top-0 -right-4 bg-zinc-50/90 shadow-md rounded-3xl flex flex-col items-start justify-center px-2 py-2 sm:px-4 sm:py-2">
              <span className="font-normal w-full text-lg sm:text-2xl text-marromCami" >+1.000 Mil</span>
              <span className="font-normal w-full text-xs sm:text-xs text-center text-cinzaCami" >Projetos Aprovados</span>
            </div>
          </div>
        </div>
      </section>
      <section className="sm:pt-16" id="jobs">
        <div className="container mx-auto flex flex-col text-zinc-50 justify-center items-center gap-8" >

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
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.7 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="w-full sm:w-8/12">

              <Image
                width={900}
                height={900}
                alt="Logo Cami Agência Criativa"
                src={methodIcons}
              />
            </motion.div>

          </div>


          <div ref={ref}>
            <motion.ul
              variants={containerUl}
              initial="hidden"
              whileInView='active'
              transition={{ duration: 0.3 }}
              animate={mainControls}
              exit='hidden'
              className="containerUl grid grid-flow-row grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 gap-y-5 bg-gradient-to-b from-zinc-50 to-zinc-100 py-8 px-1 rounded-2xl shadow-xl">

              {texts.map((texts, index) => (
                <motion.li key={index} className='flex flex-row items-center gap-4' variants={item}>
                  <CardPassos
                    tituloCardPassos={texts.title}
                    textoCardPassos={texts.text}
                  />

                </motion.li>
              ))}

            </motion.ul>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.7 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-10 text-pretoCami w-full sm:w-[500px] h-full rounded-3xl py-3 px-5 border bg-gradient-to-b from-zinc-50 to-zinc-100 border-zinc-300 shadow-xl">
            <h1 className="font-bold text-marromCami text-2xl mb-2 text-center sm:text-start ">
              Cami, e se eu não gostar?
            </h1>
            <p className="w-full h-full">
              Como nosso maior objetivo é que você ame e se identifique com o seu projeto,
              disponibilizamos até 3 alterações no seu projeto. Então pode ficar tranquila que vamos
              chegar há um resultado que te represente!
            </p>
          </motion.div>

        </div>
        <button
          className="container mx-auto flex items-center justify-center mt-10 w-10/12 sm:w-4/12 rounded-full py-4 shadow-xl bg-green-500 text-zinc-50 hover:bg-green-400 hover:text-pretoCami transition-all duration-500 text-lg font-bold"
          onClick={() =>
            sendMensage(
              554199769766,
              "Olá! Vim através do site da Cami Agência Criativa."
            )
          }
        >
          QUERO MAIS INFORMAÇÕES
        </button>
      </section>
      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.7 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-zinc-50">
        {isClient && (windowSize.width <= 768 ? <CardPlansMobile /> : <CardPlansDesktop />)}

        <CardComparsion />
      </motion.div>

      <section className='w-full py-24 bg-white '>
        <div className='container mx-auto flex items-center gap-20 flex-col'>
          <div className="flex flex-col gap-3 items-center">
            <div className="flex flex-col sm:text-2xl text-lg text-pretoCami items-center mb-2">
              <h3 className="w-full text-center">Mais de 1.000 projetos entregues</h3>
            </div>
            <div className="mb-2">
              <p className="text-cinzaCami text-lg w-full text-center">Alguns comentarios reais, tirados de dentro do nosso suporte do whatsapp</p>
            </div>
          </div>
        </div>
        <CarrouselJobs />
      </section>
      <div className="flex fixed bottom-6 right-3 z-50 rounded-full shadow-xl">
        <button
          onClick={() =>
            sendMensage(
              554199769766,
              "Olá! Vim através do site da Cami Agência Criativa."
            )
          }
          className="cursor-pointer p-3 bg-green-500 hover:bg-green-600 transition-all rounded-full shadow-md hover:shadow-2xl"><WhatsappLogo
            className="w-12 h-12 text-zinc-50 " /></button>
      </div>
      <Footer />
    </div>
  );
}
