import React from "react";

import SmallCard from "./Cards/smallCards";
import { ShoppingCart, CheckCheck, RefreshCcw, Truck } from "lucide-react";

export default function SmallCards() {
  const orderStatus = [
    {
      title: "Total Order",
      sales: 300,
      iconColor: "bg-green-600",
      Icon: ShoppingCart,
    },
    {
      title: "Orders Pending",
      sales: 100,
      iconColor: "bg-blue-600",
      Icon: RefreshCcw,
    },
    {
      title: "Orders Processing",
      sales: 100,
      iconColor: "bg-orange-600",
      Icon: Truck,
    },

    {
      title: "Orders Delivered",
      sales: 100,
      iconColor: "bg-green-300",
      Icon: CheckCheck,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {orderStatus.map((status, i) => {
        return <SmallCard data={status} key={i} />;
      })}
    </div>
  );
}
