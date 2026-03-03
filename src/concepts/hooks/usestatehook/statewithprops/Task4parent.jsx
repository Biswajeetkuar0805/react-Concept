import React, { useState } from "react";
import Task4Child from "./Task4Child";
import "./Task4.css";
import { OrbitProgress, ThreeDot } from "react-loading-indicators";

const Task4parent = () => {
  const [productdata, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fdata = async () => {
    try {
      setLoading(true);
      const data = await fetch("https://fakestoreapi.com/products");
      const res = await data.json();
      setTimeout(() => {
        setProductData(res);
        setLoading(false);
      }, 1000);

      //    console.log(res)
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = (id) => {
    const filterId = productdata.filter((ele) => ele.id !== id);
    setProductData(filterId);
  };

  return (
    <div className="mainbox">
      <button onClick={fdata}>fetched data</button>
      {loading ? (
        <div className="loading">
          <OrbitProgress
            variant="dotted"
            color="#eb2a1c"
            size="large"
            speedPlus="2"
            easing="ease-in"
            text=""
            textColor="#eb2a1c"
          />
        </div>
      ) : (
        <Task4Child productdata={productdata} deleteUser={deleteUser} />
      )}
    </div>
  );
};

export default Task4parent;
{
  /*  <ThreeDot color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]} speedPlus="3"/>  */
}
