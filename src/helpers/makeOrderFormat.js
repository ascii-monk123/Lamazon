const makeOrderFormat = (order, id, products, total) => {
  return {
    details: {
      address: order.address,
      country: order.country,
      delivered: false,
      email: order.email,
      firstName: order.firstName,
      lastName: order.lastName,
      payment: order.paymentMethod,
      phone: order.phoneNumber,
      state: order.state,
      zipCode: order.zipCode,
    },
    products: products,
    userid: id,
    orderTotal: parseFloat(total, 10),
    date: new Date(),
  };
};

export default makeOrderFormat;
