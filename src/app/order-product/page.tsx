"use client";
import { useRouter } from "next/navigation";

function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Order placed");
    router.push("/");
  };

  return (
    <>
      <h1>OrderProduct</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}

export default OrderProduct;
