export async function fetchShopNames() {
  // Example: Fetching from a database (replace with your logic)

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

  //   console.log(shops.productData);

  // Return the paths (name in this case) for generating static pages
  return shops.productData.map(shop => ({
    name: `${shop.link}`, // Assuming 'name' is the dynamic part for the URL
  }));

  // for static path
  //   return [
  //     { name: 'lotus-ingot-(certipamp)-24k-1-gram-gold-coin' },
  //     { name: 'banyan-tree-ingot-10-gram-silver-coin' },
  //     { name: 'banyan-tree-ingot-qr-50-gram-silver-coin' },
  //   ];
}
