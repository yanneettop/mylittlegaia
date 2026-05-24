"use client";

import { useEffect } from "react";
import { useCart } from "./CartProvider";

export default function ClearCartOnLoad() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return null;
}
