"use server";
import { razorpay } from "@/lib/razorpay";
import { validateWebhookSignature } from "razorpay/dist/utils/razorpay-utils";

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

export const verifyPayment = async (paymentData) => {
  console.log("verifying payment in action");
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    paymentData;
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const isValid = validateWebhookSignature(
    body,
    razorpay_signature,
    process.env.RAZORPAY_KEY_SECRET
  );
  if (!isValid) {
    throw new Error("Payment verification failed. Invalid signature");
  }
  // process the payment
  return { ok: true };
};
