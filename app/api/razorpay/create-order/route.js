import { razorpay } from "@/lib/razorpay";

export async function POST(req) {
  const data = await req.json();
  console.log("creating order", data);
  const { amount, currency } = data;
  if (!amount || !currency)
    return Response.json(
      { message: "amount and currency are required" },
      { status: 400 }
    );
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
  return Response.json(response);
}

export async function GET(request) {
  return Response.json({ message: "Hello World" });
}
