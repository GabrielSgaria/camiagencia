import { CheckIcon, Cross2Icon, DotFilledIcon } from "@radix-ui/react-icons";


export function CardComparsion() {
  return (
    <section className="container mx-auto flex mt-10 sm:mt-0">
      <div className="w-full h-full px-2 sm:px-8 py-7 rounded-2xl flex flex-col border border-zinc-300 shadow-xl bg-gradient-to-b to-zinc-50 from-zinc-100">
        <div className="flex flex-col">
          <div className="flex flex-row items-center h-[80px]">
            <div className="w-[60%] sm:w-[80%] md:w-[60%] flex items-center text-lg font-bold">
              Compare você mesmo
            </div>
            <div className="w-[14%] sm:w-[10%] md:w-[14%] h-full flex justify-center items-center bg-zinc-200 text-zinc-500 text-center sm:py-1 text-[10px] sm:text-base ">
              <p className="w-full">Prestador de serviço</p>
            </div>
            <div className="w-[14%] sm:w-[10%] md:w-[14%] h-full flex justify-center items-center bg-zinc-500 text-zinc-50 text-center sm:py-1 text-[10px] sm:text-base whitespace-normal">
              <p className="w-full">Outras agências</p>
            </div>
            <div className="w-[14%] sm:w-[10%] md:w-[14%] h-full flex justify-center items-center bg-zinc-100 text-zinc-950 text-center sm:py-1 text-[10px] sm:text-base whitespace-normal">
              <p className="w-full">Cami agência</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex flex-row items-center h-full">
            <div className="w-[60%] sm:w-[80%] md:w-[60%] flex items-center text-base sm:text-lg">
              <DotFilledIcon className="text-red-600 mr-2 size-3 max-w-4" /> <p className="text-sm sm:text-xl w-full">Atendimento durante todo o preocesso de criação</p>
            </div>
            <div className="w-[14%] sm:w-[10%]  md:w-[14%] flex justify-center items-center bg-zinc-200 ">
              <CheckIcon className="size-8 text-lime-500" />
            </div>
            <div className="w-[14%] sm:w-[10%]  md:w-[14%] flex justify-center items-center bg-zinc-500">
              <CheckIcon className="size-8 text-lime-500" />
            </div>
            <div className="w-[14%] sm:w-[10%]  md:w-[14%] flex justify-center items-center bg-zinc-100">
              <CheckIcon className="size-8 text-lime-500" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-row items-center">
            <div className="w-[60%] sm:w-[80%] md:w-[60%] flex items-center text-lg">
              <DotFilledIcon className="text-red-600 mr-2 size-3 max-w-4" /> <p className="text-sm sm:text-xl w-full">Equipe criativa</p>
            </div>
            <div className="w-[14%] sm:w-[10%]  md:w-[14%] flex justify-center items-center bg-zinc-200">
              <Cross2Icon className="size-8 text-red-600" />
            </div>
            <div className="w-[14%] sm:w-[10%]  md:w-[14%] h-[32px] flex justify-center items-center bg-zinc-500">
              <p className="font-bold text-zinc-300 items-center sm:text-base text-xs text-center">ás vezes</p>
            </div>
            <div className="w-[14%] sm:w-[10%]  md:w-[14%] h-[32px] flex justify-center items-center bg-zinc-100">
              <CheckIcon className="size-8 text-lime-500" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-row items-center">
            <div className="w-[60%] sm:w-[80%] md:w-[60%] flex items-center text-lg">
              <DotFilledIcon className="text-red-600 mr-2 size-3 max-w-4" /><p className="text-sm sm:text-xl w-full"> Reunião ilimitada com especialistas </p>
            </div>
            <div className="w-[14%] sm:w-[10%]  md:w-[14%] flex justify-center items-center bg-zinc-200">
              <Cross2Icon className="size-8 text-red-600" />
            </div>
            <div className="w-[14%] sm:w-[10%]  md:w-[14%] flex justify-center items-center bg-zinc-500">
              <Cross2Icon className="size-8 text-red-600" />
            </div>
            <div className="w-[14%] sm:w-[10%]  md:w-[14%] flex justify-center items-center bg-zinc-100">
              <CheckIcon className="size-8 text-lime-500" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-row items-center">
            <div className="w-[60%] sm:w-[80%] md:w-[60%]  flex items-center text-lg">
              <DotFilledIcon className="text-red-600 mr-2 size-3 max-w-4" /> <p className="text-sm sm:text-xl w-full">Desenhos feitos a mão livre</p>
            </div>
            <div className="w-[14%] sm:w-[10%]  md:w-[14%] flex justify-center items-center bg-zinc-200">
              <Cross2Icon className="size-8 text-red-600" />
            </div>
            <div className="w-[14%] sm:w-[10%]  md:w-[14%] flex justify-center items-center bg-zinc-500">
              <Cross2Icon className="size-8 text-red-600" />
            </div>
            <div className="w-[14%] sm:w-[10%]  md:w-[14%] flex justify-center items-center bg-zinc-100">
              <CheckIcon className="size-8 text-lime-500" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-row items-center">
            <div className="w-[60%] sm:w-[80%] md:w-[60%]  flex items-center text-lg">
              <DotFilledIcon className="text-red-600 mr-2 size-3 max-w-4" /> <p className="text-sm sm:text-xl w-full">Especialistas em criação de marca profissionais da saúde</p>
            </div>
            <div className="w-[14%] sm:w-[10%]  md:w-[14%] flex justify-center items-center bg-zinc-200">
              <Cross2Icon className="size-8 text-red-600" />
            </div>
            <div className="w-[14%] sm:w-[10%]  md:w-[14%] flex justify-center items-center bg-zinc-500">
              <Cross2Icon className="size-8 text-red-600" />
            </div>
            <div className="w-[14%] sm:w-[10%]  md:w-[14%] flex justify-center items-center bg-zinc-100">
              <CheckIcon className="size-8 text-lime-500" />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="w-[60%] sm:w-[80%] md:w-[60%]  flex items-center text-lg">
              <DotFilledIcon className="text-red-600 mr-2 size-3 max-w-4" /><p className="text-sm sm:text-xl w-full"> Mais de 1.000 projetos aprovados </p>
            </div>
            <div className="w-[14%] sm:w-[10%]  md:w-[14%] flex justify-center items-center bg-zinc-200">
              <Cross2Icon className="size-8 text-red-600" />
            </div>
            <div className="w-[14%] sm:w-[10%]  md:w-[14%] flex justify-center items-center bg-zinc-500">
              <Cross2Icon className="size-8 text-red-600" />
            </div>
            <div className="w-[14%] sm:w-[10%]  md:w-[14%] flex justify-center items-center bg-zinc-100">
              <CheckIcon className="size-8 text-lime-500" />
            </div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <div className="w-[60%] sm:w-[80%] md:w-[60%] flex items-center text-lg ">
              <DotFilledIcon className="text-red-600 mr-2 size-3 max-w-4" /> <p className="text-sm sm:text-xl w-full">Metodologia de criação comprovada</p>
            </div>
            <div className="w-[14%] sm:w-[10%]  md:w-[14%]  flex justify-center items-center bg-zinc-200">
              <Cross2Icon className="size-8 text-red-600" />
            </div>
            <div className="w-[14%] sm:w-[10%]  md:w-[14%] flex justify-center items-center bg-zinc-500">
              <Cross2Icon className="size-8 text-red-600" />
            </div>
            <div className="w-[14%] sm:w-[10%]  md:w-[14%] flex justify-center items-center bg-zinc-100">
              <CheckIcon className="size-8 text-lime-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}