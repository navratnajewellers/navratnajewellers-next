/* eslint-disable @next/next/no-img-element */
'use client';

import { Carousel } from 'rsuite';

// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

export function MainDisplayCarousel() {
  const displayBanner = [
    {
      id: 1,
      image:
        '/images/home-page-assests/438264547_846103974202968_892064003090336676_n.jpg',
    },
    {
      id: 2,
      image:
        '/images/home-page-assests/450585018_893059906174041_8330071302460358246_n.jpg',
    },
    {
      id: 3,
      image:
        '/images/home-page-assests/470240447_1006331214846909_9027560875682736872_n.jpg',
    },
    {
      id: 4,
      image:
        '/images/home-page-assests/464080990_965911652222199_4277463662035696964_n.jpg',
    },
    {
      id: 5,
      image:
        '/images/home-page-assests/484290630_9495467980521313_2710749015271242633_n.jpg',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Carousel
      autoplay
      style={{
        height: '100vh',
      }}
    >
      {displayBanner.map(data => (
        <a
          key={data.id}
          style={{
            // border: 'solid 2px red',
            background: 'transparent',
          }}
          className=" h-sec1-carousel dis-flex"
          href="#"
        >
          <div className="h-sec1-carousel-bg-img imageWrapper ">
            <img src={data.image} alt={`banner-${data.id}`} />
            {/* <h1>Hello</h1> */}
          </div>
          <div className="h-sec1-carousel-content">
            {/* <h4>Heading</h4>
            <p>Paragraph</p> */}
          </div>
        </a>
      ))}
    </Carousel>
  );
}
