/* eslint-disable react/no-unescaped-entities */
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export function AccordionQuestions() {
    return (


        <Accordion.Root
            className="rounded-md w-full sm:mx-1 bg-[#09524C] text-neutral-100 shadow-2xl text-center"
            type="single"
            collapsible
        >
            <Accordion.Item value="item-1">
                <Accordion.Trigger className="AccordionTrigger flex flex-row justify-between w-full items-center p-4 border-y rounded-md border-solid border-[#09524C]">
                    <span className="font-black text-lg sm:text-xl w-full text-start">
                        Todas as logos são exclusivas, como funciona para realizar o registro de marca?
                    </span>
                    <ChevronDownIcon
                        className="AccordionChevron size-8"
                        aria-hidden
                    />
                </Accordion.Trigger>
                <Accordion.Content className="AccordionContent py-4 px-3 saira text-xl text-neutral-100 bg-[#09524C]">
                    <p>
                        Sim, nossas logos são 100% desenhadas a mão livre, do zero, baseadas em sua história,
                        personalidade e área de atuação.
                        O processo de registro de marca em relação ao símbolo pode ser feito normalmente por
                        qualquer empresa especializada.
                    </p>
                </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-2">
                <Accordion.Trigger className="AccordionTrigger flex flex-row justify-between w-full items-center p-4 border-y rounded-md border-solid border-[#09524C]">
                    <span className="font-black text-lg sm:text-xl w-full text-start">
                        Qual o prazo para entrega do projeto?
                    </span>
                    <ChevronDownIcon
                        className="AccordionChevron size-8"
                        aria-hidden
                    />
                </Accordion.Trigger>
                <Accordion.Content className="AccordionContent py-4 px-3 saira text-xl text-neutral-100 bg-[#09524C]">
                    <p>
                        A primeira prévia do projeto é enviada em até 15 dias úteis após a nossa reunião de alinhamentos
                        sendo aprovado enviamos seu projeto completo em até 7 dias úteis (caso tenha necessidade de
                        realizar alterações, são realizadas em até 10 dias úteis).
                    </p>
                </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-3">
                <Accordion.Trigger className="AccordionTrigger  flex flex-row justify-between w-full items-center p-4 border-y rounded-md border-solid border-[#09524C]">
                    <span className="font-black text-lg sm:text-xl w-full text-start">
                        Quais são as formas de pagamento? Emitem nota fiscal?
                    </span>
                    <ChevronDownIcon
                        className="AccordionChevron size-8"
                        aria-hidden
                    />
                </Accordion.Trigger>
                <Accordion.Content className="AccordionContent py-4 px-3 saira text-xl text-neutral-100 bg-[#09524C] rounded-md">
                    <p>
                        O pagamento é integral para início de projeto e pode ser realizado através de pix, boleto ou
                        parcelado no cartão de crédito. Mediante pagamento enviamos a nota fiscal e o contrato
                        referente ao serviço contratado.
                    </p>
                </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-4">
                <Accordion.Trigger className="AccordionTrigger  flex flex-row justify-between w-full items-center p-4 border-y rounded-md border-solid border-[#09524C]">
                    <span className="font-black text-lg sm:text-xl w-full text-start">
                        Os arquivos que recebo são editáveis?
                    </span>
                    <ChevronDownIcon
                        className="AccordionChevron size-8"
                        aria-hidden
                    />
                </Accordion.Trigger>
                <Accordion.Content className="AccordionContent py-4 px-3 saira text-xl text-neutral-100 bg-[#09524C] rounded-md">
                    <p>
                        Você recebe a logo em vetor, PNG, JPG e PDF. Os arquivos para impressão são enviados em
                        PDF próprio para impressão PDF/X-1A podendo ser impresso em qualquer gráfica da sua
                        preferência.
                        Nos formatos entregues você pode utilizar a sua logo para fazer desde pequeno impressos e
                        brindes até fachadas, placas e outdoors.
                    </p>
                </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-5">
                <Accordion.Trigger className="AccordionTrigger  flex flex-row justify-between w-full items-center p-4 border-y rounded-md border-solid border-[#09524C]">
                    <span className="font-black text-lg sm:text-xl w-full text-start">
                        Quem irá realizar o seu projeto?
                    </span>
                    <ChevronDownIcon
                        className="AccordionChevron size-8"
                        aria-hidden
                    />
                </Accordion.Trigger>
                <Accordion.Content className="AccordionContent py-4 px-3 saira text-xl text-neutral-100 bg-[#09524C]">
                    <p>
                        Somos uma equipe criativa com mais de 10 integrantes, coordenada pela Camilla, sendo cada
                        etapa do processo realizada por um especialista. Então juntos, cada um em sua área de expertise
                        irá compor o seu projeto.
                    </p>
                </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-6">
                <Accordion.Trigger className="AccordionTrigger  flex flex-row justify-between w-full items-center p-4 border-y rounded-md border-solid border-[#09524C]">
                    <span className="font-black text-lg sm:text-xl w-full text-start">
                        Como é a primeira reunião?
                    </span>
                    <ChevronDownIcon
                        className="AccordionChevron size-8"
                        aria-hidden
                    />
                </Accordion.Trigger>
                <Accordion.Content className="AccordionContent py-4 px-3 saira text-xl text-neutral-100 bg-[#09524C] rounded-md">
                    <p>
                        Após responder o formulário de início de projeto, temos nossa reunião de alinhamento. Vamos
                        apresentar visualmente todas as referências e sugestões dadas a você no formulário e vamos
                        alinhar se elas fazem sentindo com a mensagem que você deseja, assim alinhando as
                        expectativas quanto ao resultado final.
                    </p>
                </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-7">
                <Accordion.Trigger className="AccordionTrigger  flex flex-row justify-between w-full items-center p-4 border-y rounded-md border-solid border-[#09524C]">
                    <span className="font-black text-lg sm:text-xl w-full text-start">
                        Sobre a Cami
                    </span>
                    <ChevronDownIcon
                        className="AccordionChevron size-8"
                        aria-hidden
                    />
                </Accordion.Trigger>
                <Accordion.Content className="AccordionContent py-4 px-3 saira text-xl text-neutral-100 bg-[#09524C] rounded-md">
                    <p>
                        Publicitária e Empreendedora desde sempre, Camilla Bittencourt é fundadora da agência criativa,
                        responsável por gerenciar toda a equipe e manter o padrão de qualidade de todos os projetos
                        realizados. Movida pelo propósito de trazer um marketing fácil e acessível, vem fazendo história
                        com a primeira agência do Brasil especializada em criação de marca para profissionais da saúde.
                    </p>
                </Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>

    );
}
