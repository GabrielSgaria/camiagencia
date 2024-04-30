'use client'
import { NavBar } from "@/components/nav-bar";
import Image from "next/image";
import logoECami from '../../public/image/logoECami.png';
import iconStar from '../../public/image/8.png'
import iconEntrega from '../../public/image/icons/7.png'
import { useWindowSize } from "react-use";
import { CardPassos } from "@/components/card-steps";
import { texts } from "@/lib/textosCardsPassos";
import { CardPlansDesktop, } from "@/components/card-plans-desktop";
import { CardPlansMobile } from "@/components/card-plans-mobile";
import { useEffect, useRef, useState } from "react";
import { CardComparsion } from "@/components/card-comparsion";
import { Footer } from "@/components/footer";
import { motion, useAnimation, useInView } from "framer-motion";
import { ButtonWhatsAppFixed } from "@/components/button-whatsapp-fixed";
import { AccordionQuestions } from "@/components/accordion-questions";
import { imageDepositions } from "@/lib/depositions";
import { VideoPlayer } from "@/components/vdo";


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
      <section className="flex flex-col mx-auto container pb-20">
        <div className="flex flex-col-reverse lg:flex-row items-center h-[430px] sm:h-[650px] lg:h-[400px] sm:gap-2 justify-between">
          <div className="sm:h-full w-full items-center sm:items-start justify-center flex flex-col sm:mt-96 lg:mt-0">
            <div className="flex flex-col relative pb-6">
              <span className="text-xl sm:text-3xl text-center sm:text-start  text-emerald-800 sm:max-w-[500px] w-full font-semibold">
                Quer atrair mais paciente e
                melhorar seu posicionamento?
              </span>
              <div className="absolute w-[600px] h-1 bg-emerald-800 -left-96 bottom-0 z-40 rounded-full" />
            </div>
            <h2 className="sm:text-3xl text-xl text-marromCami sm:w-[500px] font-bold flex flex-col gap-1 items-center sm:items-start pt-4">
              <span className="justify-center sm:justify-start flex w-full text-center sm:text-start">
                Tenha uma identidade visual
                exclusiva desenhada à mão
                livre e que conte a sua história</span>
            </h2>
          </div>
          <div className="relative w-full top-28 sm:top-48 lg:top-0 sm:right-0 flex justify-end items-center">
            <div className="absolute">
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
        </div>
        <div className="relative">
          <Image
            width={900}
            height={900}
            alt="Icone estrela Ag.Cami"
            src={iconStar}
            className="w-20 lg:w-48 z-10"
          />
          <div className="w-[250px] h-[120px] lg:h-[100px] lg:w-[700px] bg-marromCami absolute z-20 top-7 left-7 lg:top-12 lg:left-20 rounded-3xl">
            <p className="py-2 px-1 lg:px-5 lg:py-4 text-base lg:text-2xl font-bold text-zinc-200 text-center">
              1º Agência do Brasil especialziada em criação de marca,
              desenhada a mão livre, para profissionais da saúde!
            </p>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center h-[250px] sm:h-[400px] lg:h-[600px] w-full mt-10" id="about">
        <VideoPlayer src="https://media.graphassets.com/Gbe1sMPdSKiEm1NG8TSP" />
      </section>

      <section className="pt-16" id="services">
        <div className="container mx-auto flex flex-col text-brancoCami justify-center items-center gap-8" >
          <button
            onClick={() =>
              sendMensage(
                554199769766,
                "Olá! Vim através do site da Cami Agência Criativa."
              )
            }
            className="sm:py-5 sm:px-10 px-3 py-2 rounded-2xl bg-verdeCami hover:bg-verdeCami/90 font-bold text-base sm:text-3xl text-brancoCami transition-all justify-center text-center">
            Quero fazer minha identidade visual
          </button>
          <div className="flex flex-col gap-0 justify-center items-center my-4">
            <h1 className="font-bold text-marromCami sm:text-3xl text-base text-center">Criamos a sua marca através de um metódo compravado de 7 passos.</h1>
            <h1 className="font-bold text-marromCami sm:text-3xl text-base text-center">Onde você participa de todo o processo.</h1>

          </div>

          <div ref={ref}>
            <motion.ul
              variants={containerUl}
              initial="hidden"
              whileInView='active'
              transition={{ duration: 0.3 }}
              animate={mainControls}
              exit='hidden'
              className="containerUl flex flex-col sm:grid sm:grid-flow-row gap-3 sm:grid-cols-2 sm:gap-4 gap-y-5 sm:py-8 sm:px-1 ">

              {texts.map((texts, index) => (
                <motion.li key={index} className='flex flex-col sm:flex-row items-center gap-4' variants={item}>
                  <CardPassos
                    srcIcon={texts.srcIcon}
                    altIcon={texts.altIcon}
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
            className="text-pretoCami w-full sm:w-11/12 h-full rounded-3xl py-3 sm:px-5 text-center sm:text-start flex sm:flex-row flex-col items-center">
            <div className="w-11/12 sm:min-w-72 sm:max-w-72 sm:mr-10">
              <Image
                width={900}
                height={900}
                src={iconEntrega}
                alt='Icon 7 entrega'
              />
            </div>
            <div >

              <h1 className="font-bold text-azulCami text-xl sm:text-xl">
                7.Entrega
              </h1>
              <p className="font-bold text-azulCami text-base sm:text-lg">
                Nosso maior objetivo é que ao final você amee se identifique com a sua marca. Ah! e é claro, use muitooooooooo!
              </p>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col">
          <div className="relative py-20">
            <div className="w-[150px] sm:w-[350px] lg:w-[550px] h-16 bg-marromCami rounded-r-full absolute left-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-base sm:text-2xl lg:text-3xl font-bold text-brancoCami text-start pl-2">
                  Cami, e se eu não gostar?
                </p>
              </div>
            </div>
            <div className="w-[150px] sm:w-[350px] lg:w-[550px] h-16 bg-marromCami rounded-l-full absolute right-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-base sm:text-2xl lg:text-3xl font-bold text-brancoCami text-end pr-2">
                  Tenho pressa, e agora?
                </p>
              </div>
            </div>
          </div>
          <div className="container mx-auto flex flex-row justify-between sm:gap-10 lg:gap-0 px-1 gap-10 mt-5 items-start">
            <div className="w-full sm:w-[350px] lg:w-[450px] text-base pl-2 sm:pl-0 sm:text-2xl lg:text-3xl font-bold text-verdeCami space-y-9">
              Sem problemas, é normal!
              Alteramos até 3x para que você tenha uma marca única e que se identifique!
            </div>
            <div className="w-full sm:w-[350px] lg:w-[450px] text-base pr-2 sm:pr-0 sm:text-2xl lg:text-3xl font-bold text-verdeCami text-end">
              Calma, temos a modalidade express.
              Onde, mesmo com as alterações enviamos seu projeto em até 2 semanas.
            </div>
          </div>
        </div>

      </section>
      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.7 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white">
        {isClient && (windowSize.width <= 768 ? <CardPlansMobile /> : <CardPlansDesktop />)}
        <div className="container mx-auto flex justify-center mt-10 ">


          <button
            onClick={() =>
              sendMensage(
                554199769766,
                "Olá! Vim através do site da Cami Agência Criativa."
              )
            }
            className="sm:py-5 sm:px-10 px-3 py-2 rounded-2xl bg-verdeCami hover:bg-verdeCami/90 font-bold text-base sm:text-3xl text-brancoCami transition-all">
            Quero fazer minha identidade visual
          </button>
        </div>

        <section className='w-full py-24 bg-white' id="portfolio">
          <div className='container mx-auto flex px-1 sm:px-8 items-center justify-center'>
            <div className="flex flex-col gap-3 items-center mb-10">
              <h3 className="w-full text-center font-bold text-3xl sm:text-4xl ">Conheça o nosso portfólio</h3>
              <p className="text-cinzaCami text-xl sm:text-2xl w-full text-center mb-10">Com mais de 1000 projetos entregues</p>

              <div className="grid grid-flow-row grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-3 ">
                <iframe src="https://www.behance.net/embed/project/195815305?ilo0=1" allow="clipboard-write" className="h-[250px] w-[160px] md:h-[250px] md:w-[380px]"></iframe>
                <iframe src="https://www.behance.net/embed/project/195768507?ilo0=1" allow="clipboard-write" className="h-[250px] w-[160px] md:h-[250px] md:w-[380px]"></iframe>
                <iframe src="https://www.behance.net/embed/project/195767913?ilo0=1" allow="clipboard-write" className="h-[250px] w-[160px] md:h-[250px] md:w-[380px]"></iframe>
                <iframe src="https://www.behance.net/embed/project/195766743?ilo0=1" allow="clipboard-write" className="h-[250px] w-[160px] md:h-[250px] md:w-[380px]"></iframe>
                <iframe src="https://www.behance.net/embed/project/195765751?ilo0=1" allow="clipboard-write" className="h-[250px] w-[160px] md:h-[250px] md:w-[380px]"></iframe>
                <iframe src="https://www.behance.net/embed/project/195765303?ilo0=1" allow="clipboard-write" className="h-[250px] w-[160px] md:h-[250px] md:w-[380px]"></iframe>
                <iframe src="https://www.behance.net/embed/project/195764189?ilo0=1" allow="clipboard-write" className="hidden sm:flex sm:h-[250px] sm:w-[380px]"></iframe>
                <iframe src="https://www.behance.net/embed/project/195736415?ilo0=1" allow="clipboard-write" className="hidden sm:flex sm:h-[250px] sm:w-[380px]"></iframe>
                <iframe src="https://www.behance.net/embed/project/195766299?ilo0=1" allow="clipboard-write" className="hidden sm:flex sm:h-[250px] sm:w-[380px]"></iframe>
              </div>
            </div>
          </div>

        </section>
        <section className="container mx-auto flex items-center justify-center">
          <div className="w-full items-center justify-center">
            <Image
              width={900}
              height={900}
              src='/image/comparsion.png'
              alt="image comparsion"
              className="w-full"
              
            />
          </div>
        </section>
      </motion.div>
      <section className="py-24 bg-white">
        <div className="container mx-auto flex justify-center ">
          <Image width={900} height={900} src='/image/prancheta1.png' alt="Foto" className="shadow-2xl rounded-b-[40px]" />
        </div>
      </section>
      <section className="bg-white pb-10">
        <div className="container mx-auto flex flex-col">
          <div className="items-center flex flex-col">
            <h1 className="font-bold text-base sm:text-3xl text-pretoCami text-center sm:text-start" >A praticidade é o nosso lema.</h1>
            <p className="font-normal text-lg sm:text-2xl text-pretoCami text-center sm:text-start" >E não somos nós que estamos falando...</p>
          </div>
          <div className="columns-2  md:columns-4 mdgap-6 mt-10">
            {imageDepositions.map((imageDepositions, index) => (
              <div key={index} className="rounded-2xl overflow-hidden w-full my-3">
                <Image
                  width={900}
                  height={900}
                  src={imageDepositions.src}
                  alt={imageDepositions.alt}
                />
              </div>
            ))}

          </div>
        </div>
      </section>
      <section className="py-24 bg-azulCami">
        <div className="container mx-auto flex justify-center">
          <div className="items-center flex flex-col">
            <h1 className="font-bold text-4xl text-brancoCami text-center sm:text-start" >Conheça os idealizadores</h1>
            <p className="font-normal text-3xl text-brancoCami text-center sm:text-start" >da Agência Criativa</p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-20 lg:justify-around items-center justify-center mt-10 sm:mt-0">
          <div className="h-[533px] lg:w-[600px] lg:h-[250px] flex items-center sm:mt-10 relative shadow-2xl">
            <div className="max-w-[253px] h-full">
              <Image width={900} height={900} src='/image/prancheta4.png' alt="Image Igor" className="sm:rounded-l-2xl overflow-hidden" />
            </div>
            <div className="bg-pretoCami/85 lg:w-[347px] lg:h-[203.5px] p-5 absolute sm:right-0 bottom-0 rounded-br-2xl">
              <h1 className="text-brancoCami font-bold text-xl">
                Igor Bittencourt
              </h1>
              <p className="text-brancoCami/90 font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, quaerat non deleniti pariatur aperiam numquam voluptate saepe adipisci!
                Eius quos modi corrupti fugit consectetur reiciendis harum atque id necessitatibus ipsam.
              </p>
            </div>
          </div>
          <div className="h-[533px] lg:w-[600px] lg:h-[250px] flex items-center sm:mt-10 relative shadow-2xl">
            <div className="max-w-[253px] h-full">
              <Image width={900} height={900} src='/image/prancheta5.png' alt="Image Igor" className="sm:rounded-l-2xl overflow-hidden" />
            </div>
            <div className="bg-pretoCami/85 lg:w-[347px] lg:h-[203.5px] p-5 absolute right-0 bottom-0 rounded-br-2xl">
              <h1 className="text-brancoCami font-bold text-xl">
                Igor Bittencourt
              </h1>
              <p className="text-brancoCami/90 font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, quaerat non deleniti pariatur aperiam numquam voluptate saepe adipisci!
                Eius quos modi corrupti fugit consectetur reiciendis harum atque id necessitatibus ipsam.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white" id="questions">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 sm:justify-between px-0">
          <div className="w-80 flex flex-col gap-5 sm:gap-10">
            <div className="text-pretoCami font-bold text-3xl sm:text-4xl text-center sm:text-start">
              <h1>Perguntas</h1>
              <h1>Frequentes</h1>
            </div>
            <p className="text-pretoCami/80 text-justify sm:text-start">
              Se tiver qualquer outra pergunta,
              por favor, entre em contato através do WhatsApp:
            </p>
            <button className="shadow-xl rounded-2xl border-2 border-azulCami py-5 px-3 text-azulCami font-bold text-xl hover:bg-azulCami transition-all hover:text-brancoCami">
              Falar no WhatsApp
            </button>
          </div>
          <AccordionQuestions />
        </div>
      </section>

      <ButtonWhatsAppFixed />
      <Footer />
    </div>
  );
}
