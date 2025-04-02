// import { usePathname } from 'next/navigation';

// export async function generateStaticParams() {
//     const res = await fetch("https://your-api.com/shops");
//     const shops = await res.json();

//     return shops.map((shop) => ({
//       name: shop.name,
//     }));
//   }

export async function generateStaticParams() {
  // Send a POST request to the API to fetch the shop data
  const res = await fetch('http://127.0.0.1/testing/test/all-product.php', {
    method: 'POST', // Using POST method
    headers: {
      'Content-Type': 'application/json', // Ensure the body is in JSON format
    },
    body: JSON.stringify({
      // You can include any request body here if required by your API
      protectionId: 'Nav##$56',
    }),
  });

  // Parse the response from the API
  const shops = await res.json(); // Assuming the response is JSON

  console.log(shops.productData);

  // Return the paths (name in this case) for generating static pages
  return shops.productData.map(shop => ({
    // const productName = pathname.split('/')[2].replaceAll('%20', ' ');
    name: `shop/${shop.name.replaceAll(' ', '%20')}`, // Assuming 'name' is the dynamic part for the URL
  }));
}

export default function ProductPage() {
  //   const pathname = usePathname();
  //   const productName = pathname.split('/')[2].replaceAll('%20', ' ');

  //   console.log({ pathname, productName });

  //   async function getProduct() {
  //     const res = await fetch('http://127.0.0.1/testing/test/all-product.php', {
  //       method: 'POST', // Using POST method
  //       headers: {
  //         'Content-Type': 'application/json', // Ensure the body is in JSON format
  //       },
  //       body: JSON.stringify({
  //         // You can include any request body here if required by your API
  //         protectionId: 'Nav##$56',
  //       }),
  //     });

  //     // Parse the response from the API
  //     const shops = await res.json(); // Assuming the response is JSON
  //     const newShops = shops.productData;

  //     console.log({ shops });
  //     console.log({ newShops });
  //   }

  //   getProduct();

  return (
    <div>
      <h2>Product</h2>
      {/* <p>{pathname}</p>
      <p>{productName}</p> */}
    </div>
  );
}
