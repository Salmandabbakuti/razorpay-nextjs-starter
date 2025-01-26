import { validateWebhookSignature } from "razorpay/dist/utils/razorpay-utils";

export async function GET(request) {
  return Response.json({ received: true });
}

export async function POST(req) {
  const data = await req.text();
  console.log("Received webhook payload:", data);
  const signature = req.headers["x-razorpay-signature"];
  console.log("Received webhook signature:", signature);
  const isValid = validateWebhookSignature(
    JSON.stringify(data),
    signature,
    process.env.RAZORPAY_KEY_SECRET
  );
  if (!isValid) {
    console.error("Invalid webhook signature");
    return Response.json(
      { message: "invalid webhook signature" },
      { status: 400 }
    );
  }
  // Process the webhook payload
  return Response.json({ received: true });
}
