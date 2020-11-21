const diffProductFinder = (products, localProducts) => {
  const diffProd = products.filter((product) => {
    const index = localProducts.findIndex(
      (localProd) => localProd.id === product.id
    );
    if (index === -1) {
      return true;
    }
    return false;
  });
  if (diffProd.length > 0) {
    const updatedProds = diffProd.map((prod) => {
      return {
        ...prod,
        isInCart: false,
      };
    });
    return updatedProds;
  } else {
    return null;
  }
};

export default diffProductFinder;
