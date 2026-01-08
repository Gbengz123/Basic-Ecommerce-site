import * as React from 'react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import ProductCard from './ProductCard';

export default function ProductsCarousel({ products }) {
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
      <CarouselContent className="-ml-1 gap-1.25">
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className="h-fit pl-1 md:basis-1/2 lg:basis-1/3"
          >
            <div className="xs:w-50 w-40 py-1 sm:w-60">
              <ProductCard
                name={product.title}
                category={product.category}
                rating={product.rating.rate}
                price={product.price}
                ratingCount={product.rating.count}
                imgSrc={product.image}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
