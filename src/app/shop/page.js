/* eslint-disable @next/next/no-html-link-for-pages */
'use client';

import { useCallback, useEffect, useState } from 'react';
import { useServerLink } from '../context/server.context';
import { useProduct } from '../context/product.context';
import {
  Affix,
  Breadcrumb,
  Divider,
  FlexboxGrid,
  Loader,
  Pagination,
} from 'rsuite';
import Header from '../components/Header';
import ShopItem from './ShopItem';
import Footer from '../components/Footer';
import { useWebStatus } from '../context/status.context';
import axios from 'axios';

export default function Shop() {
  const { serverLink } = useServerLink();

  const [mounted, setMounted] = useState(false);

  const handlePrice = useCallback(async () => {
    try {
      const response = await axios.post(
        `${serverLink}/testing/test/gold_rate.php`,
        {
          protectionId: 'Nav##$56',
        }
      );

      // console.log(response.data);
      setPriceData(response.data.record);
    } catch (error) {
      console.log(error);
    }
  }, [serverLink]);

  useEffect(() => {
    setMounted(true);

    handlePrice();
  }, [handlePrice]);

  // check the website update status
  const { isWebsiteOnUpdate } = useWebStatus();

  if (isWebsiteOnUpdate) {
    window.location.replace('/');
  }

  const { productData } = useProduct();
  const [priceData, setPriceData] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  // page size used for the number of product display
  const [pageSize] = useState(9);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const currentData = productData?.slice(startIndex, endIndex);

  // console.log(currentData);

  // console.log(productData);
  // console.log({
  //   currentPage: currentPage,
  //   startIndex: startIndex,
  //   endIndex: endIndex,
  //   pageSize: pageSize,
  //   currentDataLength: currentData?.length,
  // });

  if (!mounted) return null; // Prevent rendering on the server

  return (
    <div>
      <Affix className="fixed-header">
        <div className="header-container margin-t10">
          <Header />
        </div>
      </Affix>
      <div className="breadcrumb-container">
        <Breadcrumb>
          <Breadcrumb.Item>
            <a href="/">Home</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Shop</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      {!productData && !priceData ? (
        <div className="loader-default-container dis-flex">
          <Loader content="Loading..." vertical />
        </div>
      ) : (
        <div>
          <div className='className="show-grid"'>
            <FlexboxGrid justify="center">
              {currentData?.map(data => (
                <ShopItem
                  key={data.product_id}
                  productDetail={data}
                  priceData={priceData}
                />
              ))}
            </FlexboxGrid>
          </div>
          <div>
            <Divider />
            <div className="dis-flex">
              <Pagination
                prev
                last
                next
                first
                size="md"
                total={productData?.length}
                limit={pageSize}
                activePage={currentPage}
                onChangePage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      )}

      <div className="margin-t50">
        <Footer />
      </div>
    </div>
  );
}
