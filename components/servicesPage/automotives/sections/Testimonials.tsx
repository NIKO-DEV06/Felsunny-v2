'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react/dist/ssr';
import { useState } from 'react';
import { Swiper as SwiperType } from 'swiper/types';

const testimonials = [
  {
    name: 'Michael Johnson',
    role: 'EV Owner',
    feedback:
      'Buying my first electric vehicle from VoltDrive was the best decision ever! The team was super helpful, and now I enjoy a smooth, eco-friendly ride every day.',
  },
  {
    name: 'Sophia Martinez',
    role: 'Business Owner',
    feedback:
      'VoltDrive made the transition to an electric fleet seamless for my company. Lower maintenance costs and sustainability benefits have been game-changers for us!',
  },
  {
    name: 'James Carter',
    role: 'Tech Enthusiast',
    feedback:
      "I've always wanted to own an EV, and VoltDrive provided an amazing experience. The financing options were great, and I love my new electric car!",
  },
];

const Testimonials = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
  return (
    <div className="w-full pt-28 pxpx mx2xl">
      <div>
        {' '}
        <h2 className="text-5xl tracking-tighter mb-4">
          What Our Customers Say
        </h2>
        <p className="mb-6 font-light text-lg">
          Hear from some of our satisfied customers who have made the switch to
          solar with Lustrous.
        </p>
      </div>
      <Swiper
        onSwiper={(swiper) => setSwiperRef(swiper)}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        speed={1000}
        className="relative"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="px-10 py-20 border border-white/30 text-center mt-10"
          >
            <h3 className="text-3xl tracking-tighter uppercase">
              ~ {testimonial.name} ~
            </h3>
            <p className="font-light mt-4">{testimonial.role}</p>
            <p className="text-3xl w-[80%] mx-auto mt-4">
              "{testimonial.feedback}"
            </p>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-8 text-black">
        <button
          onClick={() => {
            if (swiperRef) swiperRef.slidePrev();
          }}
          className="bg-white p-2 hover:opacity-60 ease-in-out duration-500"
        >
          <ArrowLeft size={25} />
        </button>
        <button
          onClick={() => {
            if (swiperRef) swiperRef.slideNext();
          }}
          className="bg-white p-2 hover:opacity-60 ease-in-out duration-500"
        >
          <ArrowRight size={25} />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
