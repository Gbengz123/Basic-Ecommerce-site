import * as React from 'react';
import AutoScroll from 'embla-carousel-auto-scroll';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export default function ProductsCarousel() {
  return (
    <Carousel
      opts={{ loop: true, align: 'start' }}
      plugins={[
        AutoScroll({
          playOnInit: true,
          speed: 0.5,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent className="-ml-1 gap-3">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="h-81 w-65 pl-1 md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Card className="h-80 w-full">
                <CardContent className="flex aspect-square h-full w-full items-center justify-center">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
