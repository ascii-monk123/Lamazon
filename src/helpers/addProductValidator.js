const checkURL = (url) => url.match(/\.(jpeg|jpg|gif|png)$/) != null;

const validator = (data) => {
  const keys = Object.keys(data);
  for (let key of keys) {
    if (!data[key]) {
      console.log(key);
      console.log(data[key]);
      return false;
    } else continue;
  }
  if (data.weight < 1 || data.quantity < 1 || data.price < 1) {
    return false;
  }
  for (let image of data.images) {
    if (!checkURL(image)) {
      console.log(image);
      return false;
    }
  }

  return true;
};

export default validator;
