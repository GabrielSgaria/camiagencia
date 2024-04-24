/* eslint-disable react/no-unescaped-entities */
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export function AccordionQuestions() {
    return (

        <div>
            <Accordion.Root
                className="rounded-md w-full mx-4 sm:mx-1 bg-azulCami text-neutral-100 shadow-2xl text-center"
                type="single"
                collapsible
            >
                <Accordion.Item value="item-1">
                    <Accordion.Trigger className="AccordionTrigger flex flex-row justify-between w-full items-center p-4 border-y rounded-md border-solid border-azulCami">
                        <span className="font-black text-lg sm:text-xl w-full text-start">
                            Como vou ter acesso ao curso?
                        </span>
                        <ChevronDownIcon
                            className="AccordionChevron size-8"
                            aria-hidden
                        />
                    </Accordion.Trigger>
                    <Accordion.Content className="AccordionContent py-4 px-3 saira text-xl text-neutral-100 bg-gray-950/30">
                        <p>
                            texto
                        </p>
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="item-2">
                    <Accordion.Trigger className="AccordionTrigger flex flex-row justify-between w-full items-center p-4 border-y rounded-md border-solid border-azulCami">
                        <span className="font-black text-lg sm:text-xl w-full text-start">
                            Funciona para agências de tráfego?
                        </span>
                        <ChevronDownIcon
                            className="AccordionChevron size-8"
                            aria-hidden
                        />
                    </Accordion.Trigger>
                    <Accordion.Content className="AccordionContent py-4 px-3 saira text-xl text-neutral-100 bg-gray-950/30">
                        <p>
                            texto
                        </p>
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="item-3">
                    <Accordion.Trigger className="AccordionTrigger  flex flex-row justify-between w-full items-center p-4 border-y rounded-md border-solid border-azulCami">
                        <span className="font-black text-lg sm:text-xl w-full text-start">
                            Quanto tempo demora para colocar todo o método em prática?
                        </span>
                        <ChevronDownIcon
                            className="AccordionChevron size-8"
                            aria-hidden
                        />
                    </Accordion.Trigger>
                    <Accordion.Content className="AccordionContent py-4 px-3 saira text-xl text-neutral-100 bg-gray-950/30 rounded-md">
                        <p>
                            texto
                        </p>
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="item-4">
                    <Accordion.Trigger className="AccordionTrigger  flex flex-row justify-between w-full items-center p-4 border-y rounded-md border-solid border-azulCami">
                        <span className="font-black text-lg sm:text-xl w-full text-start">
                            Ainda não tenho equipe. O Agência Organizada é pra mim?
                        </span>
                        <ChevronDownIcon
                            className="AccordionChevron size-8"
                            aria-hidden
                        />
                    </Accordion.Trigger>
                    <Accordion.Content className="AccordionContent py-4 px-3 saira text-xl text-neutral-100 bg-gray-950/30 rounded-md">
                        <p>
                            texto
                        </p>
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="item-5">
                    <Accordion.Trigger className="AccordionTrigger  flex flex-row justify-between w-full items-center p-4 border-y rounded-md border-solid border-azulCami">
                        <span className="font-black text-lg sm:text-xl w-full text-start">
                            E se eu não gostar do método?
                        </span>
                        <ChevronDownIcon
                            className="AccordionChevron size-8"
                            aria-hidden
                        />
                    </Accordion.Trigger>
                    <Accordion.Content className="AccordionContent py-4 px-3 saira text-xl text-neutral-100 bg-gray-950/30">
                        <p>
                            texto
                        </p>
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="item-6">
                    <Accordion.Trigger className="AccordionTrigger  flex flex-row justify-between w-full items-center p-4 border-y rounded-md border-solid border-azulCami">
                        <span className="font-black text-lg sm:text-xl w-full text-start">
                            É seguro comprar?
                        </span>
                        <ChevronDownIcon
                            className="AccordionChevron size-8"
                            aria-hidden
                        />
                    </Accordion.Trigger>
                    <Accordion.Content className="AccordionContent py-4 px-3 saira text-xl text-neutral-100 bg-gray-950/30 rounded-md">
                        <p>
                           texto
                        </p>
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value="item-7">
                    <Accordion.Trigger className="AccordionTrigger  flex flex-row justify-between w-full items-center p-4 border-y rounded-md border-solid border-azulCami">
                        <span className="font-black text-lg sm:text-xl w-full text-start">
                            Preciso pagar o ClickUp para usar?
                        </span>
                        <ChevronDownIcon
                            className="AccordionChevron size-8"
                            aria-hidden
                        />
                    </Accordion.Trigger>
                    <Accordion.Content className="AccordionContent py-4 px-3 saira text-xl text-neutral-100 bg-gray-950/30 rounded-md">
                        <p>
                           texto
                        </p>
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion.Root>
        </div>
    );
}
