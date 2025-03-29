/* eslint-disable @next/next/no-img-element */
'use client';

import Slider from 'react-slick';
import { Divider, Panel } from 'rsuite';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import '../../styles/newHome.css';
import { GiJewelCrown } from 'react-icons/gi';

const products = [
  {
    id: 1,
    name: 'Lotus Ingot 24K',
    image: '/images/1gm-lotus-ingot-b.png',
  },
  {
    id: 2,
    name: 'Laxmi Ganesh',
    image: '/images/silver_coin.jpeg',
  },
  {
    id: 3,
    name: 'Shankh Laxmi Coin',
    image: '/images/shankh-laxmi-coin-20-gm-gold-1.png',
  },
  {
    id: 4,
    name: 'Platinum Bracelet',
    image:
      '/images/home-page-assests/product/474745095_1032007655612598_5616628349238058987_n.jpg',
  },
  {
    id: 5,
    name: 'Emerald Pendant',
    image:
      '/images/home-page-assests/product/474927949_1033626752117355_2565533583089320055_n.jpg',
  },
];

const ProductCarousel = ({ title }) => {
  const settings = {
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
    <section className="product-section">
      <h2>{title}</h2>
      <Divider>
        <GiJewelCrown />
      </Divider>
      <Slider {...settings} className="product-carousel">
        {products.map(product => (
          <div key={product.id} className="product-slide">
            <Panel shaded bordered bodyFill className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-card-details">
                <h3>{product.name}</h3>
                <a href="#" className="default-remove-a">
                  Shop Now
                </a>
              </div>
            </Panel>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProductCarousel;
