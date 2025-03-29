import React from 'react';

const WhyElectric = () => {
  const whyChooseElectric = [
    {
      title: 'Eco-Friendly',
      description:
        'Electric vehicles produce zero emissions, reducing air pollution and helping fight climate change for a cleaner, greener planet.',
      icon: '🌍',
    },
    {
      title: 'Instant Performance',
      description:
        'With instant torque and smooth acceleration, EVs provide a powerful and seamless driving experience without the lag of traditional engines.',
      icon: '⚡',
    },
    {
      title: 'Cost Savings',
      description:
        'Lower fuel costs, reduced maintenance, and government incentives make owning an electric car more affordable in the long run.',
      icon: '💰',
    },
    {
      title: 'Advanced Technology',
      description:
        'EVs come with cutting-edge tech, including regenerative braking, smart connectivity, and autonomous driving features for a smarter ride.',
      icon: '🔋',
    },
  ];
  return (
    <section className="pxpx mx2xl mt-20 lg:mt-28 2xl:mt-[100px]">
      <div>
        <h2 className="tracking-tighter text-3xl lg:text-6xl">
          Why Choose Electric?
        </h2>
        <p className="text-lg font-light lg:w-[50%] mt-4">
          Electric vehicles are changing driving with less emissions and
          cutting-edge technology. See the benefits of going electric today!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          {whyChooseElectric.map((info, i) => (
            <div
              key={i}
              className="w-full border border-white/30 h-[275px] lg:h-[300px] p-5 flex flex-col justify-between"
            >
              <div className="text-5xl">{info.icon}</div>
              <div className="flex flex-col gap-4">
                <p className="text-3xl lg:text-5xl tracking-tighter">
                  {info.title}
                </p>
                <p className="font-light w-[80%]">{info.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyElectric;
