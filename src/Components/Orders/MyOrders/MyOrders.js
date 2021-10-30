import React, { useState } from "react";
import { useEffect } from "react";
import useFirebase from "../../../hooks/useFirebase";

const MyOrders = () => {
  const { user } = useFirebase();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`/resort.json/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

  console.log(orders);

  return (
    <div>
      <h1>Here is your all order</h1>
      <h1>My orders : {orders.length}</h1>
    </div>
  );
};

export default MyOrders;