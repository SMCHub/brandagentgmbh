"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
}

const Logos3 = ({
  heading = "Unsere Projekte",
  logos = [
    {
      id: "logo-1",
      description: "NutshellAI",
      image: "/images/logos/nutshellai.png",
    },
    {
      id: "logo-2",
      description: "Co-Host",
      image: "/images/logos/cohost.png",
    },
    {
      id: "logo-3",
      description: "HostAgent",
      image: "/images/logos/hostagent.png",
    },
    {
      id: "logo-4",
      description: "NutshellAI",
      image: "/images/logos/nutshellai.png",
    },
    {
      id: "logo-5",
      description: "Co-Host",
      image: "/images/logos/cohost.png",
    },
    {
      id: "logo-6",
      description: "HostAgent",
      image: "/images/logos/hostagent.png",
    },
  ],
}: Logos3Props) => {
  return (
    <section className="py-10 sm:py-16 bg-[#fafafa]">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <span className="text-sm text-gray-400 tracking-widest uppercase mb-2 block">
          Portfolio
        </span>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 tracking-tight">
          {heading}
        </h2>
      </div>
      <div className="pt-8 sm:pt-12">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 0.8 })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4"
                >
                  <div className="mx-6 sm:mx-10 flex shrink-0 items-center justify-center w-[120px] sm:w-[150px] h-10">
                    <Image
                      src={logo.image}
                      alt={logo.description}
                      width={300}
                      height={60}
                      className="w-full h-auto max-h-10 object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#fafafa] to-transparent" />
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#fafafa] to-transparent" />
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
