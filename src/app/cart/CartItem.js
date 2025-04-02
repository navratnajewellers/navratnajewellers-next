/* eslint-disable @next/next/no-img-element */

'use client';

import { Button, Col, Container, Divider, Row } from 'rsuite';
import TrashIcon from '@rsuite/icons/Trash';

const CartItem = ({
  cartData,
  priceData,
  handleRemoveCartProduct,
  handleDecreaseCart,
  handleIncreaseCart,
}) => {
  // setting the price of the product

  let grand_total;

  if (cartData.product_category == 'gold-coin') {
    const productPrice = priceData.price_1_gram_24K * cartData.weight;
    const makingCharge = productPrice * 0.08;
    const subTotal = productPrice + makingCharge;
    const gst = subTotal * 0.03;
    grand_total = Math.round(subTotal + gst);
  } else if (cartData.product_category == 'silver-coin') {
    const productPrice = priceData.price_1_gram_24K_s * cartData.weight;
    const makingCharge = priceData.making_charge_silver;
    const subTotal = productPrice + makingCharge;
    const gst = subTotal * 0.03;
    grand_total = Math.round(subTotal + gst);
  }

  // console.log({ cartData: cartData });

  return (
    <div className="cart-product-container">
      <Divider />
      <div>
        <Container>
          <Row>
            <Col
              xs={10}
              sm={10}
              md={7}
              lg={7}
              className="cart-product-img-container"
            >
              <div className="imageWrapper">
                <img
                  src={
                    cartData.product_img1
                      ? cartData.product_img1
                      : '/24K_1_gram_gold_coin.jpeg'
                  }
                  alt="24 Karat Gold Coin"
                ></img>
              </div>
            </Col>
            <Col xs={14} sm={14} md={17} lg={17}>
              <Row>
                <Col
                  xs={24}
                  sm={24}
                  md={18}
                  lg={18}
                  className="order-product-info-container"
                >
                  <div>
                    <h5 className="margin-t10">{cartData.name}</h5>
                    <h4 className="margin-t5 margin-b20">₹ {grand_total}</h4>
                  </div>
                  <div className="margin-b10 remove-cart-product">
                    <Button
                      startIcon={<TrashIcon />}
                      onClick={() =>
                        handleRemoveCartProduct(
                          cartData.id,
                          cartData.quantity,
                          grand_total
                        )
                      }
                    >
                      Remove
                    </Button>
                  </div>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={6}
                  lg={6}
                  className="order-product-btn-container"
                >
                  <div>
                    <Button
                      className="product-add-cart_btn"
                      disabled={cartData.quantity === 1 ? true : false}
                      onClick={() =>
                        handleDecreaseCart(
                          cartData.id,
                          cartData.quantity,
                          grand_total
                        )
                      }
                    >
                      -
                    </Button>
                    <span className="product-cart-quantity">
                      {cartData.quantity}
                    </span>
                    <Button
                      className="product-add-cart_btn"
                      onClick={() =>
                        handleIncreaseCart(
                          cartData.id,
                          cartData.quantity,
                          grand_total
                        )
                      }
                    >
                      +
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default CartItem;
