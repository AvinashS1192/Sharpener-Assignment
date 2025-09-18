function handler(e) {
  e.preventDefault();
  console.log("reached console");
  const product = e.target.ProductName.value;
  const obj = {
    productName: product,
  };

  axios.post("http://localhost:3000/products", obj).then((result) => {
    console.log(`Added Product : ${result.data.value}`);
  });
}
