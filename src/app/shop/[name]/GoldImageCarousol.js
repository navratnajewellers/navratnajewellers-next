/* eslint-disable @next/next/no-img-element */

'use client';

import { useEffect } from 'react';

// import 'bootstrap/dist/js/bootstrap.bundle.min';

const GoldImageCarousol = ({ productData }) => {
  // console.log(productData);

  // import bootstrap js component
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min');
  }, []);

  return (
    <>
      <div
        id="demo"
        className="carousel slide product-carousel"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators dis-none">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={
                productData
                  ? productData.product_img1
                  : '/24K_1_gram_gold_coin.jpeg'
              }
              alt={productData ? productData.name : 'Product Image'}
              loading="lazy"
              className="d-block"
              style={{ width: '100%' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={
                productData
                  ? productData.product_img2
                  : '/24K_1_gram_gold_coin.jpeg'
              }
              alt={productData ? productData.name : 'Product Image'}
              loading="lazy"
              className="d-block"
              style={{ width: '100%' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={
                productData
                  ? productData.product_img3
                  : '/24K_1_gram_gold_coin.jpeg'
              }
              alt={productData ? productData.name : 'Product Image'}
              loading="lazy"
              className="d-block"
              style={{ width: '100%' }}
            />
          </div>
        </div>

        <button
          className="carousel-control-prev product-carousel-button flex-jc-start "
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next product-carousel-button flex-jc-end "
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </>
  );
};

export default GoldImageCarousol;
