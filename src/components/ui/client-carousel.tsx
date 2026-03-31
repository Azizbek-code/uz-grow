"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function ClientCarousel() {
  return (
    <Carousel className="w-full max-w-lg mx-auto">
      <CarouselContent>
        <CarouselItem>
          <div className="relative aspect-video">
            <Image
              src="/images/1.jpg"
              alt="Greenhouse 1"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-lg object-cover"
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative aspect-video">
            <Image
              src="/images/2.jpg"
              alt="Greenhouse 2"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-lg object-cover"
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative aspect-video">
            <Image
              src="/images/3.jpg"
              alt="Greenhouse 3"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-lg object-cover"
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative aspect-video">
            <Image
              src="/images/4.jpg"
              alt="Greenhouse 4"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-lg object-cover"
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative aspect-video">
            <Image
              src="/images/7.jpg"
              alt="Greenhouse 5"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-lg object-cover"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
}
