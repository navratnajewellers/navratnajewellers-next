/* eslint-disable @next/next/no-img-element */
import { FlexboxGrid, Placeholder } from 'rsuite';
import { motion } from 'motion/react';

const ShopItem = ({ productDetail, priceData }) => {
  // console.log(productDetail, priceData);

  function handleProductPrice() {
    let grand_total;

    if (productDetail.product_category == 'gold-coin') {
      const productPrice = priceData.price_1_gram_24K * productDetail.weight;
      const makingCharge = productPrice * 0.08;
      const subTotal = productPrice + makingCharge;
      const gst = subTotal * 0.03;
      grand_total = Math.round(subTotal + gst);
    } else if (productDetail.product_category == 'silver-coin') {
      const productPrice = priceData.price_1_gram_24K_s * productDetail.weight;
      const makingCharge = priceData.making_charge_silver;
      const subTotal = productPrice + makingCharge;
      const gst = subTotal * 0.03;
      grand_total = Math.round(subTotal + gst);
    }

    return grand_total;
  }

  return (
    <>
      <FlexboxGrid.Item colspan={6} className="product-item-container">
        {priceData && productDetail ? (
          <a className="dis-link-style" href={`/shop/${productDetail.name}`}>
            <motion.div
              initial={{ opacity: 0, translateY: 60 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="imageWrapper">
                <img
                  src={
                    productDetail.product_img1
                      ? productDetail.product_img1
                      : '/24K_1_gram_gold_coin.jpeg'
                  }
                  alt={productDetail.name}
                  loading="lazy"
                ></img>
              </div>
              <div>
                <h5> {productDetail.name} </h5>
                {/* <h4>
              ₹{' '}
              {productDetail.metal_type === 'Gold'
                ? priceData?.g * productDetail.weight
                : priceData?.s * productDetail.weight}{' '}
            </h4> */}
                <h4>₹ {handleProductPrice()} </h4>
              </div>
            </motion.div>
          </a>
        ) : (
          <div>
            <Placeholder.Paragraph graph="image" active />
          </div>
        )}
      </FlexboxGrid.Item>
    </>
  );
};

export default ShopItem;
