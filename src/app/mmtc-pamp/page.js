/* eslint-disable @next/next/no-img-element */
'use client';

import { Affix, Carousel, Divider } from 'rsuite';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { GiJewelCrown } from 'react-icons/gi';
import HomeProducts from '../components/home/HomeProducts';
import HomeConnectUs from '../components/home/HomeConnectUs';
import { useEffect, useState } from 'react';

export default function MmtcPamp() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent rendering on the server

  return (
    <div>
      <div className="header-container">
        <Affix className="fixed-header padding-t10 ">
          <Header />
        </Affix>
      </div>
      <div className="main-carousel">
        <Carousel autoplay shape="bar" className="custom-slider">
          <a href="" className="dis-block">
            <img
              loading="lazy"
              className="height-width-100"
              src="/images/banner-image1.jpg"
              alt="Carosuel Image"
              height="250"
            />
          </a>
          <a href="" className="dis-block">
            <img
              loading="lazy"
              className="height-width-100"
              src="/images/banner-image2.jpg"
              alt="Carosuel Image"
              height="250"
            />
          </a>
          <a href="" className="dis-block">
            <img
              loading="lazy"
              className="height-width-100"
              src="/images/banner-image1.jpg"
              alt="Carosuel Image"
              height="250"
            />
          </a>
          <a href="" className="dis-block">
            <img
              loading="lazy"
              className="height-width-100"
              src="/images/banner-image2.jpg"
              alt="Carosuel Image"
              height="250"
            />
          </a>
          <a href="" className="dis-block">
            <img
              loading="lazy"
              className="height-width-100"
              src="/images/banner-image1.jpg"
              alt="Carosuel Image"
              height="250"
            />
          </a>
        </Carousel>
      </div>
      <div className="shop-by-category">
        <div className="shop-category-header">
          <h2 className="textCenter fraunces-font main-color">
            Shop By Category
          </h2>
          <p className="textCenter padding-lr5">
            Browse through your favorite categories. We&apos;ve got them all!
          </p>
        </div>
        <Divider>
          <GiJewelCrown />
        </Divider>
        <div className="margin-t50">
          <HomeProducts />
        </div>
      </div>
      <div className="home-connect-us margin-t50 margin-b60">
        <div className="shop-category-header">
          <h2 className="textCenter fraunces-font main-color">
            Connect with Us
          </h2>
          <p className="textCenter padding-lr5 ">
            We are always available to guide you at your convenience.
          </p>
        </div>
        <Divider>
          <GiJewelCrown />
        </Divider>
        <div className="margin-t50">
          <HomeConnectUs />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
