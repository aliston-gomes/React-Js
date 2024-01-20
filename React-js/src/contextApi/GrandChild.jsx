import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetApiProducts, decrement, increment } from "../store/CounterSlice";
import { Outlet, useNavigate } from "react-router-dom";

const GrandChild = () => {
  const navigate = useNavigate();
  const data = useSelector(state => {
    return state.counter;
  });
  useEffect(() => {
    dispactch(GetApiProducts());
  }, []);
  const dispactch = useDispatch();
  console.log(data, "counter");
  return (
    <div>
      <section>
        <input type="text" />
        <button>Add</button>
        <button>Delete</button>
      </section>
      <h1>{data.count}</h1>
      <div>
        {data.apiData.length > 0 &&
          data.apiData.map((item, index) => {
            return <div key={index}>{index}</div>;
          })}
      </div>
      <button
        type="button"
        onClick={() => {
          dispactch(increment());
        }}
      >
        increment
      </button>
      <button
        type="button"
        onClick={() => {
          dispactch(decrement());
        }}
      >
        decrement
      </button>
      <button type="button">reset</button>
      <button
        type="button"
        onClick={() => {
          navigate("/about");
        }}
      >
        About
      </button>
      <button
        type="button"
        onClick={() => {
          navigate("/sides");
        }}
      >
        Sides
      </button>
      {/* <div>
        <Outlet />
      </div> */}
    </div>
  );
};

export default GrandChild;
