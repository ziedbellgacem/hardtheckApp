import React, { useEffect } from "react";
import "./liststyle.css";
import Cardproducts from "./Cardproducts";
import { useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/productAction";
import { useDispatch } from "react-redux";

function ListCardProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const filter = useSelector((state) => state.productReducer.filter);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <div className="list1">
      {filter === "INFORMATIQUE"
        ? products
            .filter((product) => product.category === "INFORMATIQUE")
            .map((product) => (
              <Cardproducts product={product} key={product._id} />
            ))
        : filter === "SMARTPHONE"
        ? products
            .filter((product) => product.category === "SMARTPHONE")
            .map((product) => (
              <Cardproducts product={product} key={product._id} />
            ))
        : filter === "GAMING"
        ? products
            .filter((product) => product.category === "GAMING")
            .map((product) => (
              <Cardproducts product={product} key={product._id} />
            ))
        : filter === "All"
        ? products.map((product) => (
            <Cardproducts product={product} key={product._id} />
          ))
        : filter === "ASC"
        ? products
            .sort(function (a, b) {
              return a.prix - b.prix;
            })
            .map((product) => (
              <Cardproducts product={product} key={product._id} />
            ))
        : filter === "DESC"
        ? products
            .sort(function (a, b) {
              return b.prix - a.prix;
            })
            .map((product) => (
              <Cardproducts product={product} key={product._id} />
            ))
        : products
            .filter((product) =>
              product.name.toLowerCase().includes(filter.toLowerCase().trim())
            )
            .map((product) => (
              <Cardproducts product={product} key={product._id} />
            ))}
    </div>
  );
}

export default ListCardProducts;
