import { Carousel } from '@heathmont/moon-core-tw';
import {
  ControlsChevronLeftSmall,
  ControlsChevronRightSmall,
} from '@heathmont/moon-icons-tw';
import React from 'react';
const ImageCarousel = () => {
  const items = Array.from({ length: 5 }); // Number of carousel items

  return (
    <Carousel
      className='relative w-full'
      dataCarousel='static'
      prevButton={
        <button
          type='button'
          className='absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
          dataCarouselPrev>
          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
            <ControlsChevronLeftSmall className='w-6 h-6 text-white dark:text-gray-800' />
            <span className='sr-only'>Previous</span>
          </span>
        </button>
      }
      nextButton={
        <button
          type='button'
          className='absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
          dataCarouselNext>
          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
            <ControlsChevronRightSmall className='w-6 h-6 text-white dark:text-gray-800' />
            <span className='sr-only'>Next</span>
          </span>
        </button>
      }>
      {items.map((_, index) => (
        <div
          key={index}
          className={`hidden duration-700 ease-in-out ${
            index === 1 ? 'active' : ''
          }`}
          dataCarouselItem={index === 1 ? 'active' : undefined}>
          <img
            src={`/docs/images/carousel/carousel-${index + 1}.svg`}
            className='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            alt={`Carousel ${index + 1}`}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
