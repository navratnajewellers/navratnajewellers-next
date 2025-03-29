/* eslint-disable @next/next/no-img-element */
'use client';

import Slider from 'react-slick';
import { Button, Divider, Panel } from 'rsuite';
import { GiJewelCrown } from 'react-icons/gi';

const gemsData = [
  {
    id: 1,
    name: 'Ruby',
    image: '/images/home-page-assests/gems/red-ruby-stone.webp',
  },
  {
    id: 2,
    name: 'Emerald',
    image: '/images/home-page-assests/gems/emerald-loose.jpg',
  },
  {
    id: 3,
    name: 'Sapphire',
    image: '/images/home-page-assests/gems/polished-sapphire.png',
  },
  {
    id: 4,
    name: 'Pearl',
    image: '/images/home-page-assests/gems/Pearl-gems.jpg',
  },
  {
    id: 5,
    name: 'Topaz',
    image: '/images/home-page-assests/gems/Topaz-gems.jpg',
  },
  {
    id: 6,
    name: 'Opal',
    image: '/images/home-page-assests/gems/opal-stone.webp',
  },
];

const AstroGem = () => {
  const gemSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      {/* Astrological Gems Section */}
      <section className="astrological-gems">
        <h2>Astrological Gems</h2>
        <p>
          Discover the power of gemstones aligned with your zodiac sign and
          bring prosperity and positivity into your life.
        </p>
        <Divider>
          <GiJewelCrown />
        </Divider>
        <Slider {...gemSettings} className="gems-slider">
          {gemsData.map(data => (
            <div key={data.id} className="gem-slide">
              <Panel shaded bordered bodyFill className="gem-card">
                <div className="imageWrapper">
                  <img src={data.image} alt={data.name} className="gem-image" />
                </div>
                <h3>{data.name}</h3>
                <Button appearance="ghost" color="yellow">
                  Explore
                </Button>
              </Panel>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default AstroGem;
