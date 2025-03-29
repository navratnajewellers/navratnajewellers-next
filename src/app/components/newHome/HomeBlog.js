/* eslint-disable @next/next/no-img-element */
'use client';

import { Divider, Panel, Row } from 'rsuite';
import { GiJewelCrown } from 'react-icons/gi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const blog = [
  {
    id: 1,
    heading:
      'The Timeless Beauty of Gold Jewellery: A Must-Have for Every Occasion',
    content:
      "Gold jewellery has been cherished for centuries, symbolizing wealth, elegance, and cultural heritage. Whether it's a simple gold chain or an intricate bridal set, gold remains a favorite among jewellery lovers.",
    day: 1,
    month: 'Jan',
    image:
      '/images/home-page-assests/blog/A luxurious jewelry scene featuring three distinct sections_ 1) A close-up of elegant gold jewelry, including necklaces, bangles, and rings, displayed.webp',
  },
  {
    id: 2,
    heading: 'Astrological Gems: Unlocking the Power of Precious Stones',
    content:
      'Gemstones have long been admired for their beauty, but did you know that they also hold powerful astrological significance? For centuries, people have believed that wearing the right gemstone can bring prosperity, health, and happiness.',
    day: 2,
    month: 'Jan',
    image:
      '/images/home-page-assests/blog/A luxurious display of diamond jewelry, featuring a sparkling diamond ring, a delicate pendant, and elegant earrings arranged on a black velvet surfac.webp',
  },
  {
    id: 3,
    heading: 'Silver Jewellery: The Perfect Blend of Style and Affordability',
    content:
      'Silver jewellery is gaining popularity due to its affordability, versatility, and trendy designs.',
    day: 6,
    month: 'Jan',
    image:
      '/images/home-page-assests/blog/A stylish display of silver jewelry, featuring an elegant arrangement of silver bracelets, earrings, and chains on a dark velvet background. The jewel.webp',
  },
  {
    id: 4,
    heading: 'Diamond Jewellery: A Symbol of Love and Elegance',
    content:
      'Diamonds are a girl’s best friend! Whether it’s an engagement ring, a delicate pendant, or statement earrings, diamonds enhance every look.',
    day: 8,
    month: 'Jan',
    demoImage: '',
    image:
      '/images/home-page-assests/blog/A luxurious display of diamond jewelry, featuring a sparkling diamond ring, a delicate pendant, and elegant earrings arranged on a black velvet surfac.webp',
  },
];

const HomeBlog = () => {
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
    <section id="blog" className="home-blog-container">
      <h2 className="textCenter">Blog</h2>
      <Divider>
        <GiJewelCrown />
      </Divider>

      <Row>
        <Slider {...settings} className="blog-carousel">
          {blog.map(data => (
            <Panel key={data.id} className="blog-container">
              <section className="blog-content custom-trans-all ">
                <div className="blog-content-date">
                  <p className="text-center">{data.day}</p>
                  <p className="text-center">{data.month}</p>
                </div>
                <a href="#" className="imageWrapper default-remove-a ">
                  <img
                    src={data.image}
                    alt={data.heading}
                    className="custom-trans-all"
                  />
                </a>
                <h3 className="custom-trans-all">{data.heading}</h3>
                <p className="custom-trans-all">{data.content}</p>
                <a href="#" className="blog-read-more default-remove-a ">
                  Read More
                </a>
              </section>
            </Panel>
          ))}
        </Slider>
      </Row>
    </section>
  );
};

export default HomeBlog;
