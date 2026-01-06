import * as React from 'react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import ProductCard from './ProductCard';

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
            className="h-fit w-60 pl-1 md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <ProductCard
                name={'Gaming mouse'}
                category={'electronics'}
                rating={4.6}
                price={100}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
