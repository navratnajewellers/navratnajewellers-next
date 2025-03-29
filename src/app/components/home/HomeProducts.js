/* eslint-disable @next/next/no-img-element */
'use client';

// import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const HomeProducts = () => {
  return (
    <div className="home-products-container">
      <motion.div
        className="home-products pos-rel"
        initial={{ opacity: 0, translateY: 120 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
      >
        <a href="/product/gold-coin">
          <div className="imageWrapper">
            <img
              src="/images/gold-coin.png"
              alt="Gold Coin"
              loading="lazy"
            ></img>
          </div>
          <div className="dis-flex home-product-name pos-abs">
            <span>Gold Coins</span>
          </div>
        </a>
      </motion.div>
      <motion.div
        className="home-products pos-rel"
        initial={{ opacity: 0, translateY: 120 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
      >
        <a href="/product/silver-coin">
          <div className="imageWrapper">
            <img
              src="/images/silver-coins.png"
              alt="Silver Coin"
              loading="lazy"
            ></img>
          </div>
          <div className="dis-flex home-product-name pos-abs">
            <span>Silver Coins</span>
          </div>
        </a>
      </motion.div>
    </div>
  );
};

export default HomeProducts;
