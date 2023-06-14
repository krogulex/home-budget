import React from "react";
import { FunctionComponent } from "react";
import { useParams } from "react-router";

interface ProductPageProps {}

const ProductPage: FunctionComponent<ProductPageProps> = () => {
  const { id } = useParams();

  return (
    <div>
      Product page <span>{id}</span>
    </div>
  );
};

export default ProductPage;
