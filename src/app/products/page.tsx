import React from "react";
import Link from "next/link";
export default function ProductList() {
  const productId = 100;
  return (
    <>
      <Link href={`/`}>Home</Link>
      <h1>ProductList</h1>
      <h2>
        <Link href={`/products/1`}>Product 1</Link>
      </h2>
      <h2>
        <Link href={`/products/2`}>Product 2</Link>
      </h2>
      <h2>
        <Link href={`/products/3`} replace>
          {/* replace replaces the current history state */}
          Product 3
        </Link>
      </h2>

      <h2>
        <Link href={`/products/${productId}`}>{`Product ${productId}`}</Link>
      </h2>
    </>
  );
}
