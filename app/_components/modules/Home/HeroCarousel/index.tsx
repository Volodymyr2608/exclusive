'use client'

import useEmblaCarousel from 'embla-carousel-react'
import React from 'react'
import homeHeroSlides from '@/app/_lib/dummy/sliders/homeHero.json'
import HeroSlide from '@/app/_components/units/Home/HeroSlide'
import { useDotButton } from '@/app/_lib/hooks/useDotButton'
import { DotButton } from '@/app/_components/elements/DotButton'
import { cn } from '@/app/_lib/utils/cn'

const HeroCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick
  } = useDotButton(emblaApi)

  return (
    <div className="embla overflow-hidden h-[344px] relative" ref={emblaRef}>
      <div className="embla__container flex w-full h-full">
        {homeHeroSlides.map((slide) => (<HeroSlide slide={slide} key={slide.title} />))}
      </div>
      <div className="embla__dots absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-wrap justify-end items-center gap-x-3 mr-[calc((2.6rem-1.4rem)/2*(-1))]">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={cn(
              'embla__dot',
              'flex items-center justify-center rounded-full w-3 h-3 m-0 p-0 border-0 cursor-pointer touch-manipulation appearance-none',
              'after:w-3 after:h-3 after:bg-secondary-grey after:rounded-full',
              {
                ['embla__dot--selected after:border-white after:border-2 w-4 h-4 after:bg-secondary-red after:w-4 after:h-4']: index === selectedIndex
              }
            )}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroCarousel