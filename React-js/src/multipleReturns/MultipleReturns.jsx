import { useEffect, useState } from "react";

const MultipleReturns = () => {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    window
      .fetch(url)
      .then(data => {
        return data.json();
      })
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, []);
  console.log(products);
  if (products.length < 1) {
    return <div>{<h1>Loading...</h1>}</div>;
  }
  //ACTS AS THE ELSE
  return (
    <div>
      {products.length > 0
        ? products.map(item => {
            return <h2 key={item.id}>{item.id}</h2>;
          })
        : undefined}
    </div>
  );
};

export default MultipleReturns;
