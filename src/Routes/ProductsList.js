import React from "react";
import { Layout, Row, Col } from "antd";
import Loading from "../components/Loading";
import ProductListItem from "../components/ProductListItem";
import useGetProducts from "../customHooks/useGetProducts";

const ProductsList = () => {
  const [loadingProducts, products] = useGetProducts({});

  console.log("--- loadingProducts", loadingProducts, products);

  let content;
  if (loadingProducts) {
    content = (
      <div className="d-flex justify-content-center align-items-center w-100 h-100 py-5">
        <Loading />
      </div>
    );
  } else if (products.length === 0) {
    content = <div>No Products Found</div>;
  } else {
    content = (
      <Row gutter={[24, 24]}>
        {products.map((item) => {
          return (
            <Col key={item._id} xs={24} md={12} lg={8}>
              <ProductListItem product={item} />
            </Col>
          );
        })}
      </Row>
    );
  }

  return (
    <>
      <Layout className="products-list">
        <Layout.Sider></Layout.Sider>
        <Layout.Content>{content}</Layout.Content>
      </Layout>
    </>
  );
};

export default ProductsList;
