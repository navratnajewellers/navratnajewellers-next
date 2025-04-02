/* eslint-disable @next/next/no-img-element */

'use client';

import { useState } from 'react';
import axios from 'axios';
import { useCart } from '../context/cart.context';
import { useServerLink } from '../context/server.context';
import CartItem from './CartItem';

const CartItemGrid = ({ priceData, cartProduct, setGrand_total, userData }) => {
  const [newCartproduct, setNewCartProduct] = useState(cartProduct);

  const { setCartData } = useCart();

  const { serverLink } = useServerLink();

  // updating the price for the grand total price of all the products
  const priceDetails = {
    productPrice: 0,
    makingCharge: 0,
    subTotal: 0,
    gst: 0,
    grand_total: 0,
  };

  if (newCartproduct) {
    newCartproduct.map(data => {
      if (data.product_category == 'gold-coin') {
        priceDetails.productPrice =
          priceData.price_1_gram_24K * data.weight * data.quantity;
        priceDetails.makingCharge = priceDetails.productPrice * 0.08;
        priceDetails.subTotal =
          priceDetails.productPrice + priceDetails.makingCharge;
        priceDetails.gst = priceDetails.subTotal * 0.03;
        priceDetails.grand_total = Math.round(
          priceDetails.grand_total + priceDetails.subTotal + priceDetails.gst
        );
      } else if (data.product_category == 'silver-coin') {
        priceDetails.productPrice =
          priceData.price_1_gram_24K_s * data.weight * data.quantity;
        priceDetails.makingCharge = priceData.making_charge_silver;
        priceDetails.subTotal =
          priceDetails.productPrice + priceDetails.makingCharge;
        priceDetails.gst = priceDetails.subTotal * 0.03;
        priceDetails.grand_total = Math.round(
          priceDetails.grand_total + priceDetails.subTotal + priceDetails.gst
        );
      }
    });
  }

  // console.log(newCartproduct);

  // setTimeout is used to delay the time for updating total price of all product
  setTimeout(() => {
    setGrand_total(priceDetails.grand_total);
  }, 300);

  // copy data from cartitem here

  const updateCart = async (
    cartId,
    actionType,
    productPrice = 0,
    quantity = 0,
    cartStatus
  ) => {
    // console.log({
    //   cartId: cartId,
    //   actionType: actionType,
    //   productPrice: productPrice,
    //   quantity: quantity,
    // });

    // console.log({ cartProduct, newCartproduct });

    try {
      let response;

      // check if user is login or not and get data accordingly from different php files
      if (userData.id) {
        // console.log('user is log in with user id' + userData.id);

        response = await axios.post(
          `${serverLink}/testing/cart/delete_original_cart.php`,
          {
            cart_id: cartId,
            action_type: actionType,
            product_price: productPrice,
            quantity: quantity,
            protectionId: 'Nav##$56',
          }
        );
      } else {
        // console.log('user is not log in with user id' + userData.id);

        response = await axios.post(
          `${serverLink}/testing/cart/delete_local_cart.php`,
          {
            local_id: cartId,
            action_type: actionType,
            product_price: productPrice,
            quantity: quantity,
            protectionId: 'Nav##$56',
          }
        );
      }

      // console.log(response.data.message);
      // console.log(response.data);

      if (response.status === 200) {
        // cheacking filter
        if (actionType === 'remove') {
          // console.log('inside the remove action type');

          // console.log(typeof cartId);
          // removing the product from the copy of cartProduct i.e newCartProduct
          setNewCartProduct(val => val.filter(data => data.id !== cartId));

          // updating the cart quantity only show in header
          setCartData(val => ({
            ...val,
            quantity: val.quantity - quantity,
            price: val.price + productPrice * quantity,
          }));
        } else if (actionType === 'increaseDecreaseQuantity') {
          // console.log('inside the cart quantity action type');

          // updating the quantity of the copy of cartProduct i.e newCartProduct
          setNewCartProduct(val =>
            val.map(data => {
              return data.id == cartId
                ? {
                    ...data,
                    quantity: quantity,
                    price: productPrice * quantity,
                  }
                : data;
            })
          );

          // updating the cart quantity only show in header
          if (cartStatus === 'increaseCart') {
            setCartData(val => ({
              ...val,
              quantity: val.quantity + 1,
              price: val.price + productPrice * 1,
            }));
          } else if (cartStatus === 'decreaseCart') {
            setCartData(val => ({
              ...val,
              quantity: val.quantity - 1,
              price: val.price - productPrice * 1,
            }));
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  // to delete the product from cart
  const handleRemoveCartProduct = (
    cartId,
    cartQuantity,
    singleProductPrice
  ) => {
    // console.log('remove the cart product with id ' + cartId);

    updateCart(cartId, 'remove', singleProductPrice, cartQuantity);
  };

  //to increase cart quantity
  const handleIncreaseCart = (cartId, cartQuantity, singleProductPrice) => {
    // console.log('in increase cart quantity with cart id ' + cartId);

    const updatedQuantity = cartQuantity + 1;
    updateCart(
      cartId,
      'increaseDecreaseQuantity',
      singleProductPrice,
      updatedQuantity,
      'increaseCart'
    );
  };

  //to decrease cart quantity
  const handleDecreaseCart = (cartId, cartQuantity, singleProductPrice) => {
    // console.log('in decrease cart quantity with cart id ' + cartId);

    const updatedQuantity = cartQuantity - 1;
    updateCart(
      cartId,
      'increaseDecreaseQuantity',
      singleProductPrice,
      updatedQuantity,
      'decreaseCart'
    );
  };

  // copy end

  return (
    <div>
      {newCartproduct && newCartproduct.length !== 0 ? (
        newCartproduct.map(data => (
          <CartItem
            key={data.id}
            cartData={data}
            priceData={priceData}
            cartProduct={cartProduct}
            handleRemoveCartProduct={handleRemoveCartProduct}
            handleIncreaseCart={handleIncreaseCart}
            handleDecreaseCart={handleDecreaseCart}
          />
        ))
      ) : (
        <div className="dis-flex cart-empty-container ">
          <div className="imageWrapper">
            <img
              src="/empty-cart-no-empty.png"
              alt="Empty cart"
              loading="lazy"
            ></img>
          </div>
          <h2 className="margin-t50">Your Cart is Empty</h2>
        </div>
      )}
    </div>
  );
};

export default CartItemGrid;
