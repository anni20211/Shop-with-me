import React, { useEffect, useState } from "react";
import { db } from "./Firebase";
import Order from "./Order";
import "./Orders.css";
import { useStateValue } from "./StateProvider";

function Orders() {
  const [{ bascket, user }] = useStateValue();
  const [orders, setOrders] = useState();
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <h1>hi order karo bhai</h1>
      <h2>jai ho</h2>
      <div className="Orders_elements">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
