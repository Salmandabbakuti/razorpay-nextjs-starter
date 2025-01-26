import { validateWebhookSignature } from "razorpay/dist/utils/razorpay-utils";

export async function GET(request) {
  return Response.json({ received: true });
}

export async function POST(req) {
  const data = await req.json();
  console.log("verifying payment in callback route", data);
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = data;
  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const isValid = validateWebhookSignature(
    body,
    razorpay_signature,
    process.env.RAZORPAY_KEY_SECRET
  );
  if (!isValid) {
    console.log("Payment verification failed");
    return Response.json({ message: "Invalid signature" }, { status: 400 });
  }
  // process the payment
  console.log("Payment verified successfully");
  return Response.json({ ok: true });
}
