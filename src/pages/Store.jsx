import React, { useEffect } from "react";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";

const Store = () => {
  // useEffect(() => {
  //   async function getData() {
  //     const res = await axios.get("https://fakestoreapi.com/products");
  //     console.log(res.data);
  //   }
  //   getData();
  // });
  return (
    <>
      <Heading>
        <h1>Browse the Products here</h1>
        <p>Check out our selection of products.</p>
      </Heading>
      <ProductsContainer>
        {/* {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))} */}
      </ProductsContainer>
    </>
  );
};

//Styled Components

const Heading = styled.div`
  margin-top: 8rem;
  text-align: center;
`;

const ProductsContainer = styled.div`
  max-width: 1024px;
  width: 80%;
  margin: 70px auto 0;
  gap: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
`;

export default Store;
