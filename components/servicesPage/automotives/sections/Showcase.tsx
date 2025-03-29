'use client';

import img2 from '@/assets/auto-images/img2.jpg';
import img3 from '@/assets/auto-images/img3.jpg';
import img4 from '@/assets/auto-images/img4.jpg';
import img5 from '@/assets/auto-images/img5.jpg';
import img10 from '@/assets/auto-images/img10.jpg';
import img11 from '@/assets/auto-images/img11.jpg';
import img12 from '@/assets/auto-images/img12.jpg';
import img13 from '@/assets/auto-images/img13.jpg';
import img14 from '@/assets/auto-images/img14.jpg';
import img15 from '@/assets/auto-images/img15.jpg';
import img16 from '@/assets/auto-images/img16.jpg';
import img17 from '@/assets/auto-images/img17.jpg';
import img18 from '@/assets/auto-images/img18.jpg';
import img19 from '@/assets/auto-images/img19.jpg';
import img22 from '@/assets/auto-images/img22.jpg';
import img23 from '@/assets/auto-images/img23.jpg';
import img24 from '@/assets/auto-images/img24.jpg';
import img25 from '@/assets/auto-images/img25.jpg';
import img26 from '@/assets/auto-images/img26.jpg';
import img28 from '@/assets/auto-images/img28.jpg';

import { shimmer, toBase64 } from '@/components/utils/util';

import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const Showcase = () => {
  const showcase1 = [img2, img3, img4, img5, img10];
  const showcase2 = [
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
  ];
  const showcase3 = [img22, img23, img24, img25, img26, img28];

  return (
    <section className="mt-20 lg:mt-32">
      <h1 className="tracking-tighter text-7xl text-center underline">
        Showcase
      </h1>

      <div className="mt-10">
        <Marquee autoFill>
          {showcase1.map((showcase, i) => (
            <div
              key={i}
              className="overflow-hidden w-[200px] lg:w-[500px] h-[100px] lg:h-[300px] mr-5"
            >
              <Image
                src={showcase}
                width={700}
                height={700}
                className="object-cove"
                placeholder={`data:image/svg+xml;base64,${toBase64(
                  shimmer(1200, 1800),
                )}`}
                alt=""
              />
            </div>
          ))}
        </Marquee>
      </div>
      <div className="mt-5">
        <Marquee direction="right" autoFill>
          {showcase2.map((showcase, i) => (
            <div
              key={i}
              className="overflow-hidden w-[200px] lg:w-[500px] h-[100px] lg:h-[300px] mr-5"
            >
              <Image
                src={showcase}
                width={700}
                height={700}
                className="object-cover"
                placeholder={`data:image/svg+xml;base64,${toBase64(
                  shimmer(1200, 1800),
                )}`}
                alt=""
              />
            </div>
          ))}
        </Marquee>
      </div>
      <div className="mt-5">
        <Marquee autoFill>
          {showcase3.map((showcase, i) => (
            <div
              key={i}
              className="overflow-hidden w-[200px] lg:w-[500px] h-[100px] lg:h-[300px] mr-5"
            >
              <Image
                src={showcase}
                width={700}
                height={700}
                className="object-cover"
                placeholder={`data:image/svg+xml;base64,${toBase64(
                  shimmer(1200, 1800),
                )}`}
                alt=""
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Showcase;
