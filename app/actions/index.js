"use server";
import { razorpay } from "@/lib/razorpay";

export const createOrder = async (orderData) => {
  console.log("creating order in action");
  const { amount, currency } = orderData;
  if (!amount || !currency) {
    throw new Error("Amount and currency are required");
  }
  const options = {
    amount: amount * 100,
    currency,
    receipt: "order_rcptid_11",
    notes: {
      userId: "123",
      plan: "basic",
      email: "johndoe@gmail.com"
    }
  };
  const response = await razorpay.orders.create(options);
  return response;
};
