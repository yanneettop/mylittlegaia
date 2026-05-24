import { NextResponse } from "next/server";
import { products } from "@/data/products";
import { priceToPence } from "@/lib/money";

type CheckoutItem = {
  productId: string;
  quantity: number;
};

function getBaseUrl(request: Request) {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (configuredUrl) {
    return configuredUrl.replace(/\/$/, "");
  }
  return new URL(request.url).origin;
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { items?: CheckoutItem[] } | null;

  if (!body?.items?.length) {
    return NextResponse.json({ error: "Your basket is empty." }, { status: 400 });
  }

  const lineItems = body.items.map((item) => {
    const product = products.find((candidate) => candidate.id === item.productId);
    const quantity = Math.max(1, Math.min(Number(item.quantity) || 1, 12));

    if (!product) {
      return null;
    }

    if (product.stockStatus === "Out of stock" || product.stockStatus === "Coming soon" || product.isAffiliateProduct) {
      return null;
    }

    return { product, quantity };
  });

  if (lineItems.some((item) => item === null)) {
    return NextResponse.json({ error: "One or more basket items cannot be checked out." }, { status: 400 });
  }

  const safeLineItems = lineItems as NonNullable<(typeof lineItems)[number]>[];
  const baseUrl = getBaseUrl(request);
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeSecretKey) {
    return NextResponse.json({
      demo: true,
      url: `${baseUrl}/checkout/success?demo=1`,
    });
  }

  const params = new URLSearchParams();
  params.set("mode", "payment");
  params.set("success_url", `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`);
  params.set("cancel_url", `${baseUrl}/checkout/cancel`);
  params.set("billing_address_collection", "auto");
  params.set("shipping_address_collection[allowed_countries][0]", "GB");

  safeLineItems.forEach((item, index) => {
    params.set(`line_items[${index}][quantity]`, String(item.quantity));
    params.set(`line_items[${index}][price_data][currency]`, "gbp");
    params.set(`line_items[${index}][price_data][unit_amount]`, String(priceToPence(item.product.price)));
    params.set(`line_items[${index}][price_data][product_data][name]`, item.product.name);
    params.set(`line_items[${index}][price_data][product_data][description]`, item.product.shortDescription.slice(0, 250));
    const image = item.product.images[0]?.src;
    if (image) {
      params.set(`line_items[${index}][price_data][product_data][images][0]`, `${baseUrl}${image}`);
    }
  });

  const stripeResponse = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${stripeSecretKey}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });

  const stripePayload = await stripeResponse.json();

  if (!stripeResponse.ok) {
    return NextResponse.json(
      { error: stripePayload.error?.message ?? "Stripe checkout could not be started." },
      { status: 502 },
    );
  }

  return NextResponse.json({ url: stripePayload.url });
}
